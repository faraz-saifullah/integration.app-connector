---
url: "https://console.integration.app/docs/connector-builder/methods"
title: "Docs · Integration Console"
---

[Integration.app](https://integration.app/)

`` `Ctrl` + `K`

[NPM packages](https://www.npmjs.com/~integration.app) [GitHub organization](https://github.com/integration-app)

- [Authentication](https://console.integration.app/docs/connector-builder/authentication)
- [API Specification](https://console.integration.app/docs/connector-builder/api)
- [Events](https://console.integration.app/docs/connector-builder/events)
- [Data Collections](https://console.integration.app/docs/connector-builder/data)
- [Operations](https://console.integration.app/docs/connector-builder/operations)
- [Global Webhooks](https://console.integration.app/docs/connector-builder/global-webhooks)
- [Methods](https://console.integration.app/docs/connector-builder/methods)
  - [Javascript](https://console.integration.app/docs/connector-builder/methods/javascript)
  - [Mapping](https://console.integration.app/docs/connector-builder/methods/mapping)
  - [Rest Api Mapping](https://console.integration.app/docs/connector-builder/methods/rest-api-mapping)

# Methods

Methods implement various logic in a connector, such as extracting auth credentials, running data collection operations, handling events, etc.

You will find methods in the `methods` field of many connector elements. Here is an example of a Data Collection spec:

```yaml
name: "Contacts"
fieldsSchema:
    type: "object"
    properties:
        id:
            type: "string"
        name:
            type: "string"
        email:
            type: "string"
methods:
    list:
        implementationType: "rest-api-mapping"
    create:
        implementationType: "javascript"
```

In this example, data collection has two methods: `list` and `create`. One of them is implemented using REST API mapping, the other one is implemented using custom JavaScript.

## Implementation Types

Methods can be implemented using one of the following implementation types:

- [Mapping](https://console.integration.app/docs/connector-builder/methods/mapping) \- Transform input data using JSONata expressions without making API calls
- [REST API Mapping](https://console.integration.app/docs/connector-builder/methods/rest-api-mapping) \- Map to REST API endpoints
- [JavaScript](https://console.integration.app/docs/connector-builder/methods/javascript) \- Write custom code for maximum flexibility
- `not-supported` \- Mark method as not supported by the connector

Integration.app is free to try. It takes just one click to get started.

Login and Try it Yourself

- ### On this page

- [Implementation Types](https://console.integration.app/docs/connector-builder/methods#implementation-types)

Docs · Integration Console