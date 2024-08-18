output "s3_bucket_url" {
  value = aws_s3_bucket.react_app.bucket_domain_name
}

output "cloudfront_url" {
  value = aws_cloudfront_distribution.react_app_cdn.domain_name
}