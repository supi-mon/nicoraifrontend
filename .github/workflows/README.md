# CI/CD Pipeline for NicorAI Frontend

This directory contains GitHub Actions workflows for the NicorAI Frontend CI/CD pipeline.

## AWS Deployment Workflow

The `aws-deploy.yml` workflow handles:

1. Building and testing the application
2. Deploying to AWS S3
3. Invalidating the CloudFront cache

## Setup Instructions

### 1. Set Up AWS Infrastructure

Deploy the AWS infrastructure using Terraform:

```bash
cd terraform
terraform init
terraform apply
```

After deployment, note the following outputs:
- S3 bucket name
- CloudFront distribution ID
- IAM user access key ID and secret

### 2. Configure GitHub Secrets

Add the following secrets to your GitHub repository:

| Secret Name | Description |
|-------------|-------------|
| `AWS_ACCESS_KEY_ID` | IAM user access key ID |
| `AWS_SECRET_ACCESS_KEY` | IAM user secret access key |
| `AWS_REGION` | AWS region (e.g., `us-east-1`) |
| `AWS_S3_BUCKET` | S3 bucket name for deployment |
| `AWS_CLOUDFRONT_DISTRIBUTION_ID` | CloudFront distribution ID |

### 3. Test the CI/CD Pipeline

1. Make a change to the codebase
2. Commit and push to the main branch
3. The workflow will automatically deploy your changes

## Manual Deployment

You can also trigger a deployment manually:

1. Go to the "Actions" tab in your GitHub repository
2. Select the "AWS CI/CD Pipeline" workflow
3. Click "Run workflow"
4. Select the branch to deploy from and click "Run workflow"

## Rollback Process

If you need to roll back to a previous version:

1. Identify the commit you want to roll back to
2. Manually trigger the workflow for that specific commit
3. Alternatively, revert the problematic commit and push to main 
