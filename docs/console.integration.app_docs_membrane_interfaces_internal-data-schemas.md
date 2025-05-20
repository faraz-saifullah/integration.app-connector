---
url: "https://console.integration.app/docs/membrane/interfaces/internal-data-schemas"
title: "Docs · Integration Console"
---

[Integration.app](https://integration.app/)

`` `Ctrl` + `K`

[NPM packages](https://www.npmjs.com/~integration.app) [GitHub organization](https://github.com/integration-app)

- [External Apps](https://console.integration.app/docs/membrane/apps)
- [Interfaces](https://console.integration.app/docs/membrane/interfaces)
  - [Scenarios](https://console.integration.app/docs/membrane/interfaces/scenarios)
  - [Actions](https://console.integration.app/docs/membrane/interfaces/actions)
  - [Flows](https://console.integration.app/docs/membrane/interfaces/flows)
  - [Data Sources](https://console.integration.app/docs/membrane/interfaces/data-sources)
  - [Field Mappings](https://console.integration.app/docs/membrane/interfaces/field-mappings)
  - [Data Links](https://console.integration.app/docs/membrane/interfaces/data-links)
  - [Connecting Your App API](https://console.integration.app/docs/membrane/interfaces/internal-api)
  - [Internal Events](https://console.integration.app/docs/membrane/interfaces/internal-events)
  - [Internal Data Schemas](https://console.integration.app/docs/membrane/interfaces/internal-data-schemas)
  - [Api Operations](https://console.integration.app/docs/membrane/interfaces/api-operations)
  - [Data Collections](https://console.integration.app/docs/membrane/interfaces/data-collections)
  - [API Proxy](https://console.integration.app/docs/membrane/interfaces/api-proxy)
  - [Files](https://console.integration.app/docs/membrane/interfaces/files)
  - [Running Custom Code](https://console.integration.app/docs/membrane/interfaces/custom-code)
- [Customers](https://console.integration.app/docs/membrane/customers)
- [Monitoring & Troubleshooting](https://console.integration.app/docs/membrane/monitoring)
- [Security And Privacy](https://console.integration.app/docs/membrane/security-and-privacy)
- References

# App Data Schemas

App Data Schemas is a [Data Schema](https://console.integration.app/docs/membrane/references/data-schemas) that can be shared across multiple places in your integrations.
It can be used for [Field Mappings](https://console.integration.app/docs/membrane/interfaces/field-mappings) or as a component for any other schema used in an integration.

## Referencing Schema

You can reference App Data Schema in other schemas using `$ref` formula:

```markup
{
  "type": "object",
  "properties": {
    "name": {"type": "string"},
    "user": {
      "$ref": "schemas/user" // Reference to the "user" App Data Schema
    }
  }
}
```

## User-specific Schema

Whenever schema is used in a context of a specific user, and you provided an HTTP request, it will be executed on behalf of the current user:

![](https://console.integration.app/images/docs/app-data-schema-request.png)

The response to this request should be a JSON-encoded [Data Schema](https://console.integration.app/docs/membrane/references/data-schemas).

You can find the latest request and response for a given user on the [App Data Schema Instances](https://console.integration.app/w/0/deployments/app-data-schema-instances) page.

Integration.app is free to try. It takes just one click to get started.

Login and Try it Yourself

- ### On this page

- [Referencing Schema](https://console.integration.app/docs/membrane/interfaces/internal-data-schemas#referencing-schema)
- [User-specific Schema](https://console.integration.app/docs/membrane/interfaces/internal-data-schemas#user-specific-schema)

Docs · Integration Console