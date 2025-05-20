---
url: "https://console.integration.app/docs/connector-builder/methods/rest-api-mapping"
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

# REST API Mapping

REST API Mapping implementation type lets you map methods to REST API endpoints without writing code. This is useful when the method can be implemented with a single REST API call.

Use the following file naming structure for the REST API mapping implementation:

```
<method-name>.rest.yml

```

## Example

Here's an example of a REST API mapping for a list method:

```yaml
# list.rest.yml
path: /tasks
method: get
requestMapping:
  query:
    limit: 100
    offset:
      $var: $.cursor
    projectId:
      $var: $.parameters.projectId
responseMapping:
  records:
    $var: response.data.data
  cursor:
    $var: response.data.next_page.offset
```

## Format

The mapping specification includes:

- `path` \- The API endpoint path
- `method` \- HTTP method (GET, POST, PUT, PATCH, DELETE)
- `requestMapping` \- Request mapping

  - `query` \- Query parameters mapping
  - `headers` \- Headers mapping
  - `data` \- Request body mapping for POST/PUT/PATCH
  - `pathParameters` \- values for placeholders in the path (e.g. `{projectId}`)
- `responseMapping` \- Mapping to transform the API response.

## Variables

You can use method-specific variables in any part of the mapping.

For `responseMapping`, you get an additional `response` variable that has the following fields:

- `data` \- API response data
- `headers` \- API response headers
- `statusCode` \- API response status code

Integration.app is free to try. It takes just one click to get started.

Login and Try it Yourself

- ### On this page

- [Example](https://console.integration.app/docs/connector-builder/methods/rest-api-mapping#example)
- [Format](https://console.integration.app/docs/connector-builder/methods/rest-api-mapping#format)
- [Variables](https://console.integration.app/docs/connector-builder/methods/rest-api-mapping#variables)

Docs · Integration Console