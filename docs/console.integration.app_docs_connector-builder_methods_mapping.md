---
url: "https://console.integration.app/docs/connector-builder/methods/mapping"
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

# Mapping Implementation

Mapping implementation type allows you to transform input data into output data using [formulas](https://console.integration.app/docs/membrane/references/formulas).

Use the following file naming structure for the mapping implementation:

```
<method-name>.map.yml

```

## Example

Here's an example of a mapping implementation that transforms user data:

```yaml
# record-from-fields.map.yml
id:
    $var: input.record.id
```

Integration.app is free to try. It takes just one click to get started.

Login and Try it Yourself

- ### On this page

- [Example](https://console.integration.app/docs/connector-builder/methods/mapping#example)

Docs · Integration Console