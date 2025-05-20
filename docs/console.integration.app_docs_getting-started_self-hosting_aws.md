---
url: "https://console.integration.app/docs/getting-started/self-hosting/aws"
title: "Docs · Integration Console"
---

[Integration.app](https://integration.app/)

`` `Ctrl` + `K`

[NPM packages](https://www.npmjs.com/~integration.app) [GitHub organization](https://github.com/integration-app)

- [Authentication](https://console.integration.app/docs/getting-started/authentication)
- [Front End](https://console.integration.app/docs/getting-started/front-end)
- [Backend](https://console.integration.app/docs/getting-started/backend)
- [Self-hosting](https://console.integration.app/docs/getting-started/self-hosting)
  - [Google Cloud Platform](https://console.integration.app/docs/getting-started/self-hosting/gcp)
  - [AWS](https://console.integration.app/docs/getting-started/self-hosting/aws)

# Self-hosting on AWS

This guide provides AWS-specific information for deploying Membrane in your AWS environment.

## IAM Role Configuration

Integration.app containers support AWS IAM role-based access to S3 and other AWS services. This is the preferred method over providing explicit access and secret keys.

### Container IAM Configuration

To use IAM roles instead of access keys:

1. Create an IAM role with appropriate S3 permissions
2. Assign this role to your ECS tasks, EKS pods, or EC2 instances
3. Omit the `AWS_ACCESS_KEY_ID` and `AWS_SECRET_ACCESS_KEY` environment variables

When running in a properly configured AWS environment, the containers will automatically use the IAM role credentials.

## MongoDB on AWS

While AWS DocumentDB is technically compatible with our application, we recommend using native MongoDB (either self-hosted on EC2 or a managed MongoDB Atlas cluster) for better compatibility.

Some customers have encountered edge cases with DocumentDB due to differences in MongoDB API implementation. If you choose to use DocumentDB, be prepared for potential compatibility issues.

## Redis on AWS

For Redis, you can use Amazon ElastiCache. Keep in mind that Redis is only used as a cache in our application and can be safely restarted or cleared. There's no persistent data stored in Redis that isn't recoverable from other sources.

Integration.app is free to try. It takes just one click to get started.

Login and Try it Yourself

- ### On this page

- [IAM Role Configuration](https://console.integration.app/docs/getting-started/self-hosting/aws#iam-role-configuration)
  - [Container IAM Configuration](https://console.integration.app/docs/getting-started/self-hosting/aws#container-iam-configuration)
- [MongoDB on AWS](https://console.integration.app/docs/getting-started/self-hosting/aws#mongodb-on-aws)
- [Redis on AWS](https://console.integration.app/docs/getting-started/self-hosting/aws#redis-on-aws)

Docs · Integration Console