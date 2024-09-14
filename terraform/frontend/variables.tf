variable "bucket_name" {
  description = "The name of the S3 bucket for the React app"
  type        = string
  default     = "flexnet-website-bucket-6634"
}
variable "hosted_zone_id" {
  type = string
  default = "eu-central-1"
}