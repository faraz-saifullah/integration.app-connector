---
url: "https://console.integration.app/docs/connector-builder/authentication/methods/make-api-client"
title: "Docs · Integration Console"
---

[Integration.app](https://integration.app/)

`` `Ctrl` + `K`

[NPM packages](https://www.npmjs.com/~integration.app) [GitHub organization](https://github.com/integration-app)

- [Authentication](https://console.integration.app/docs/connector-builder/authentication)
  - Methods
    - [Get Credentials From Connection Parameters](https://console.integration.app/docs/connector-builder/authentication/methods/get-credentials-from-connection-parameters)
    - [Make Api Client](https://console.integration.app/docs/connector-builder/authentication/methods/make-api-client)
    - [Refresh Credentials](https://console.integration.app/docs/connector-builder/authentication/methods/refresh-credentials)
    - [Test](https://console.integration.app/docs/connector-builder/authentication/methods/test)
  - Types
- [API Specification](https://console.integration.app/docs/connector-builder/api)
- [Events](https://console.integration.app/docs/connector-builder/events)
- [Data Collections](https://console.integration.app/docs/connector-builder/data)
- [Operations](https://console.integration.app/docs/connector-builder/operations)
- [Global Webhooks](https://console.integration.app/docs/connector-builder/global-webhooks)
- [Methods](https://console.integration.app/docs/connector-builder/methods)

# Make API Client

The `makeApiClient` method configures how your connector will make API requests to the external service.

This method is required for all authentication types and creates a REST API client with the appropriate authentication headers, base URL, and other configuration settings.

## Implementation

You can implement this method in two ways:

### YAML Mapping (Recommended)

Most API clients can be configured using a YAML mapping file:

```yaml
# File: auth/make-api-client.map.yml
baseUri: https://api.example.com
headers:
  Authorization:
    $concat:
        - "Bearer "
        - $var: credentials.access_token
```

In your spec.yml:

```yaml
auth:
  # ...other auth settings
  makeApiClient:
    implementationType: mapping
```

Available fields:

- `baseUri` \- base URL for all API requests.
- `headers` \- default headers to include in all requests.
- `query` \- default query parameters to include in all requests.
- `auth` \- parameters for basic authentication:

  - `username`
  - `password`
- `responseHandlers` \- list of response handlers to apply to all responses (see below).

### JavaScript Implementation

For more complex API clients, you can use Javascript / Typescript code.

It should export a default function that returns RestApiClient instnace.

Example:

```javascript
// File: auth/make-api-client.js
exports.makeApiClient = function({ credentials }) {
  return {
    baseUrl: 'https://api.example.com',
    headers: {
      'Authorization': `Bearer ${credentials.access_token}`,
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
  };
};
```

In your spec.yml:

```yaml
auth:
  # ...other auth settings
  makeApiClient:
    implementationType: javascript
```

## Response Handlers

By default, API client will handle responses using the following logic:

- status >= 200 && status < 300 - return response.
- status == 401 - throw ACCESS\_TOKEN\_EXPIRED error that will trigger an attempt to refresh credentials (if possible).
- status == 429 - throw RATE\_LIMIT\_EXCEEDED error that will lead to retrying the request with exponential backoff until timeout is reached.

You can augment or override this logic by providing a list of response handlers. Each handler consists of:

- A filter that checks response status, headers, or data and returns true if the handler should be applied.
- A flag that indicates whether it is a successful request or an error should be thrown.
- Data that will be returned if request is successful (by default, the response body will be returned).
- Error that will be thrown if the request is not successful.

Example:

```yaml
responseHandlers:
  - match:
      $eval:
        $var: response.data.category
      is: EXPIRED_AUTHENTICATION
    isSuccess: false
    error:
      message: Access token has expired
      key: access_token_expired
      data:
        $var: response.data
```

Handler configuration fields:

- `match` \- [Formula](https://console.integration.app/docs/membrane/references/formulas) that returns true or false based on the response.
- `isSuccess` \- flag that indicates whether it is a successful request or an error should be thrown.
- `error` \- error that will be thrown if the request is not successful. Error fields:

  - `message` \- error message.
  - `key` \- error key (one of the available keys of ConnectionError type)
  - `data` \- additional data to include in the error.

## Best Practices

1. **Base URL**: Minimize prefixes you add to the base URL. Avoid adding API version or other things that may change in the future.
2. **Logging**: Consider adding logging for debugging API issues. All the logs will be available as connection logs when connection happens.

Integration.app is free to try. It takes just one click to get started.

Login and Try it Yourself

- ### On this page

- [Implementation](https://console.integration.app/docs/connector-builder/authentication/methods/make-api-client#implementation)
  - [YAML Mapping (Recommended)](https://console.integration.app/docs/connector-builder/authentication/methods/make-api-client#yaml-mapping-recommended)
  - [JavaScript Implementation](https://console.integration.app/docs/connector-builder/authentication/methods/make-api-client#javascript-implementation)
- [Response Handlers](https://console.integration.app/docs/connector-builder/authentication/methods/make-api-client#response-handlers)
- [Best Practices](https://console.integration.app/docs/connector-builder/authentication/methods/make-api-client#best-practices)

Docs · Integration Console