terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "5.63.1"
    }
  }
}

provider "aws" {
  region = "eu-central-1"
}

resource "aws_s3_bucket" "react_app" {
  bucket = var.bucket_name
}
resource "aws_s3_bucket_website_configuration" "react_app_website_config" {
  bucket = aws_s3_bucket.react_app.id

  index_document {
    suffix = "index.html"
  }

  error_document {
    key = "index.html"
  }

  routing_rule {
    condition {
      key_prefix_equals = "docs/"
    }
    redirect {
      replace_key_prefix_with = "documents/"
    }
  }
}
resource "aws_cloudfront_origin_access_control" "oac" {
  name                              = "s3-cloudfront-oac"
  origin_access_control_origin_type = "s3"
  signing_behavior                  = "always"
  signing_protocol                  = "sigv4"
}
resource "aws_cloudfront_distribution" "react_app_cdn" {
  origin {
    domain_name              = aws_s3_bucket.react_app.bucket_regional_domain_name
    origin_id                = aws_s3_bucket.react_app.id
    origin_access_control_id = aws_cloudfront_origin_access_control.oac.id
  }
  enabled = true
  default_cache_behavior {
    allowed_methods        = ["DELETE", "GET", "HEAD", "OPTIONS", "PATCH", "POST", "PUT"]
    cached_methods         = ["GET", "HEAD", "OPTIONS"]
    cache_policy_id        = "658327ea-f89d-4fab-a63d-7e88639e58f6"
    target_origin_id       = aws_s3_bucket.react_app.bucket
    viewer_protocol_policy = "redirect-to-https"

  }
  restrictions {
    geo_restriction {
      restriction_type = "none"
    }
  }

  viewer_certificate {
    cloudfront_default_certificate = true
  }
}

data "aws_iam_policy_document" "cloudfront-oac_access" {
  statement {
    principals {
      identifiers = ["cloudfront.amazonaws.com"]
      type        = "Service"
    }
    actions   = ["s3:GetObject"]
    resources = ["${aws_s3_bucket.react_app.arn}/*"]
    condition {
      test     = "StringEquals"
      values   = [aws_cloudfront_distribution.react_app_cdn.arn]
      variable = "AWS:SourceArn"
    }
  }
}

resource "aws_s3_bucket_policy" "bucket_policy" {
  bucket = aws_s3_bucket.react_app.id
  policy = data.aws_iam_policy_document.cloudfront-oac_access.json
}

resource "aws_route53_zone" "zone" {
  name = "flexnet.name"
}

resource "aws_route53_record" "route53_record" {
  name    = var.domain
  type    = "A"
  zone_id = aws_route53_zone.zone.zone_id

  alias {
    evaluate_target_health = false
    name                   = aws_cloudfront_distribution.react_app_cdn.domain_name
    zone_id                = aws_cloudfront_distribution.react_app_cdn.hosted_zone_id
  }
}

resource "aws_iam_user" "jenkins" {
  name = "JenkinsUser"
}

resource "aws_iam_access_key" "jenkins" {
  user = aws_iam_user.jenkins.name
}

data "aws_iam_policy_document" "jenkins_policy" {
  statement {
    effect    = "Allow"
    actions   = ["s3:*"]
    resources = ["*"]
  }
}

resource "aws_iam_user_policy" "jenkins_ro" {
  name   = "jenkins_user_policy"
  user   = aws_iam_user.jenkins.name
  policy = data.aws_iam_policy_document.jenkins_policy.json
}