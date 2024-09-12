variable "bucket_name" {
  description = "The name of the S3 bucket for the React app"
  type        = string
  default     = "flexnet-website-bucket-6634"
}

variable "domain" {
  description = "Route 53 domain"
  type = string
  default = "test.flexnet.com"
}
variable "hosted_zone_id" {
  type = string
  default = "eu-central-1"
}