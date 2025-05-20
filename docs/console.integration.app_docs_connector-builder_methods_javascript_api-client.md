---
url: "https://console.integration.app/docs/connector-builder/methods/javascript/api-client"
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

# API Client in JavaScript Method Implementations

JavaScript method implementations receive an `apiClient` parameter that can be used to make requests to the external API. The API client is automatically configured with authentication and base URL settings from the connector configuration.

## Making Requests

The API client provides methods for making HTTP requests:

```typescript
interface ApiClient {
  // GET request with optional query parameters
  get(path: string, query?: Record<string, any>, options?: RestApiClientOptions): Promise<any>

  // POST request with data
  post(path: string, data?: any, options?: RestApiClientOptions): Promise<any>

  // PUT request with data
  put(path: string, data?: any, options?: RestApiClientOptions): Promise<any>

  // PATCH request with data
  patch(path: string, data?: any, options?: RestApiClientOptions): Promise<any>

  // DELETE request with optional data
  delete(path: string, data?: any, options?: RestApiClientOptions): Promise<any>
}
```

### Examples

```javascript
// GET request with query parameters
const response = await apiClient.get('/items', {
  page: 1,
  limit: 10
})

// POST request with data
const newItem = await apiClient.post('/items', {
  name: 'New Item',
  description: 'Description'
})

// PUT request to update
await apiClient.put('/items/123', {
  name: 'Updated Item'
})

// DELETE request
await apiClient.delete('/items/123')
```

## Request Options

Each request method accepts an optional `options` parameter that can override the default client configuration:

```typescript
interface RestApiClientOptions {
  // Base URI for relative paths
  baseUri?: string

  // Headers to add to the request
  headers?: Record<string, string>

  // Query parameters to add to all requests
  query?: Record<string, string>

  // Basic auth credentials
  auth?: {
    username: string
    password: string
  }

  // Return full response instead of just data
  returnFullResponse?: boolean

  // Response type - how to parse the response
  responseType?: 'json' | 'arraybuffer' | 'stream'
}
```

### Example with Options

```javascript
// Get JSON response (default)
const jsonResponse = await apiClient.get('/items', {}, {
  headers: {
    'Accept': 'application/json'
  }
})

// Download file as stream
const fileResponse = await apiClient.get('/files/123', {}, {
  responseType: 'stream',
  returnFullResponse: true
})
```

## Error Handling

The API client automatically handles common error cases:

- 401 responses trigger an ACCESS\_TOKEN\_EXPIRED error that will attempt to refresh credentials
- 429 responses trigger a RATE\_LIMIT\_EXCEEDED error that will retry the request with exponential backoff. This only works in asynchronouse mode (i.e. within a flow run)
- Other error responses (status >= 300) throw a ConnectionError

## Response

By default, the API client:

1. Returns the response body for successful requests (status 200-299)
2. Throws an error for failed requests
3. Handles authentication and rate limiting errors automatically

You can get the full response including status and headers by setting `returnFullResponse: true` in the options.

Integration.app is free to try. It takes just one click to get started.

Login and Try it Yourself

- ### On this page

- [Making Requests](https://console.integration.app/docs/connector-builder/methods/javascript/api-client#making-requests)
  - [Examples](https://console.integration.app/docs/connector-builder/methods/javascript/api-client#examples)
- [Request Options](https://console.integration.app/docs/connector-builder/methods/javascript/api-client#request-options)
  - [Example with Options](https://console.integration.app/docs/connector-builder/methods/javascript/api-client#example-with-options)
- [Error Handling](https://console.integration.app/docs/connector-builder/methods/javascript/api-client#error-handling)
- [Response](https://console.integration.app/docs/connector-builder/methods/javascript/api-client#response)

Docs · Integration Console