---
url: "https://console.integration.app/docs/membrane/security-and-privacy"
title: "Docs · Integration Console"
---

[Integration.app](https://integration.app/)

`` `Ctrl` + `K`

[NPM packages](https://www.npmjs.com/~integration.app) [GitHub organization](https://github.com/integration-app)

- [External Apps](https://console.integration.app/docs/membrane/apps)
- [Interfaces](https://console.integration.app/docs/membrane/interfaces)
- [Customers](https://console.integration.app/docs/membrane/customers)
- [Monitoring & Troubleshooting](https://console.integration.app/docs/membrane/monitoring)
- [Security And Privacy](https://console.integration.app/docs/membrane/security-and-privacy)
- References

# Security and Privacy

Integration.app engine is designed to minimize security and privacy risks. We apply a number of measures to achieve that.

## Certifications and Compliance

Integration.app is SOC 2 Type 2 certified.

Our servers and data are fully located in European Union and we are GDPR-compliant.

## Encrypted credentials

All customer credentials are stored in encrypted form in the database.
They are only decrypted before making API requests.

Decrypted version is not stored anywhere outside the system memory.

We take measures to exclude credentials from any logs or error reports.

## No permanent user data storage

Any user data flowing through the system is stored for 14 days on AWS S3 for logging and debugging purposes.

It is then automatically and permanently erased by AWS S3 lifecycle rules.

This means no user data is stored beyond the last 14 days, which excludes you from the need to handle GDPR and similar requests for data erasure.

## No third parties

We do not pass user data to any third parties except the AWS S3 service and Cloudflare.

## Running on your own infrastructure

If the measures above are not sufficient for your security and privacy requirements, you can run Integration.app on your own infrastructure and take full control of the data.

Please contact [support@integration.app](mailto:support@integration.app) to explore this option.

Integration.app is free to try. It takes just one click to get started.

Login and Try it Yourself

- ### On this page

- [Certifications and Compliance](https://console.integration.app/docs/membrane/security-and-privacy#certifications-and-compliance)
- [Encrypted credentials](https://console.integration.app/docs/membrane/security-and-privacy#encrypted-credentials)
- [No permanent user data storage](https://console.integration.app/docs/membrane/security-and-privacy#no-permanent-user-data-storage)
- [No third parties](https://console.integration.app/docs/membrane/security-and-privacy#no-third-parties)
- [Running on your own infrastructure](https://console.integration.app/docs/membrane/security-and-privacy#running-on-your-own-infrastructure)

Docs · Integration Console