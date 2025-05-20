---
url: "https://console.integration.app/docs/connector-builder/methods/javascript"
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
    - [Api Client](https://console.integration.app/docs/connector-builder/methods/javascript/api-client)
  - [Mapping](https://console.integration.app/docs/connector-builder/methods/mapping)
  - [Rest Api Mapping](https://console.integration.app/docs/connector-builder/methods/rest-api-mapping)

# JavaScript Implementation

JavaScript implementation type allows you to write custom Javacript or Typescript code to implement method logic.

Use the following file naming structure for the JavaScript implementation:

```
<method-name>.js

```

Here's an example of a JavaScript implementation for a "list" method for a data collection:

```javascript
// list.js
export default async function list({ apiClient, parameters }) {
  // Make API request
  const response = await apiClient.get('/items', {
    page: parameters.page,
    limit: parameters.limit
  })

  // Transform response
  return {
    items: response.items.map(item => ({
      id: item.id,
      name: item.name,
      // Transform other fields...
    })),
    cursor: response.nextPage
  }
}
```

## Input Parameters

JavaScript implementations always receive the following input parameters, additionally to method-specific ones:

- `apiClient` \- API client configured with authentication that can be used to make requests to the external API.
- `credentials` \- authentication credentials for the current connection.

Methods used bofore a connection is established (such as methods used to authenticate) will not have `credentials` and `apiClient` parameters available.

## Logging

You can log messages to the console using the `console.log` function:

```javascript
console.log('Fetching items...')
```

To log a JSON object, you need to stringify it:

```javascript
console.log(JSON.stringify(data))
```

Integration.app is free to try. It takes just one click to get started.

Login and Try it Yourself

- ### On this page

- [Input Parameters](https://console.integration.app/docs/connector-builder/methods/javascript#input-parameters)
- [Logging](https://console.integration.app/docs/connector-builder/methods/javascript#logging)

Docs · Integration Console