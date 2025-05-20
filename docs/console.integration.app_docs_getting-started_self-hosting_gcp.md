---
url: "https://console.integration.app/docs/getting-started/self-hosting/gcp"
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

# Self-hosting on Google Cloud Platform

To self-host Membrane on Google Cloud Platform, you need to set up an S3-compatible storage.

Everything else is the same as in the [main guide](https://console.integration.app/docs/getting-started/self-hosting).

## Setting up S3-compatible storage

This guide follows the methodologies and best practices declared here by Google: [https://cloud.google.com/storage/docs/authentication/hmackeys](https://cloud.google.com/storage/docs/authentication/hmackeys)

This guide uses terraform to manage the infrastructure.

Create a service account for usage of Integration APP And Cloud Buckets:

```
module "storage-service-account" {
source = "../../your_sa_module"
region = "us-central1"

service_type = "app"
service_slug = "integration-app"
description = "Integration APP Service Account for Cloud Buckets"

project_roles = [\
"roles/storage.objectUser"\
]
}

```

2. Create HMAC Secret Key and Secret

```
resource "google_storage_hmac_key" "key" {
service_account_email = module.storage-service-account.service_account_email
}

```

3. Create your buckets

```
module "tmp-persistence-bucket" {
source = "../../.........."

bucket_name = "integration-app-tmp"

lifecycle_rules = [\
{\
condition = {\
age = 14 # day\
}\
action = {\
type = "Delete"\
}\
}\
]

member_access = [\
{\
# this account is producer and manager of the data\
role = "roles/storage.objectAdmin"\
member = "serviceAccount:${module.storage-service-account.service_account_email}"\
},\
{\
# this account is producer and manager of the data\
role = "roles/storage.legacyBucketOwner"\
member = "serviceAccount:${module.storage-service-account.service_account_email}"\
}\
]
}

```

4. Pass the secrets to your deployment

```
google_storage_hmac_key.key.secret

```

Integration.app is free to try. It takes just one click to get started.

Login and Try it Yourself

- ### On this page

- [Setting up S3-compatible storage](https://console.integration.app/docs/getting-started/self-hosting/gcp#setting-up-s3-compatible-storage)

Docs · Integration Console