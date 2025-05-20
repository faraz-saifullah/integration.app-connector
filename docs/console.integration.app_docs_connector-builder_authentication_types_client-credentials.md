---
url: "https://console.integration.app/docs/connector-builder/authentication/types/client-credentials"
title: "Docs · Integration Console"
---

[Integration.app](https://integration.app/)

`` `Ctrl` + `K`

[NPM packages](https://www.npmjs.com/~integration.app) [GitHub organization](https://github.com/integration-app)

- [Authentication](https://console.integration.app/docs/connector-builder/authentication)
  - Methods
  - Types
    - [Client Credentials](https://console.integration.app/docs/connector-builder/authentication/types/client-credentials)
    - [Integration App Token](https://console.integration.app/docs/connector-builder/authentication/types/integration-app-token)
    - [Oauth1](https://console.integration.app/docs/connector-builder/authentication/types/oauth1)
    - [Oauth2](https://console.integration.app/docs/connector-builder/authentication/types/oauth2)
    - [Auth Proxy](https://console.integration.app/docs/connector-builder/authentication/types/proxy)
- [API Specification](https://console.integration.app/docs/connector-builder/api)
- [Events](https://console.integration.app/docs/connector-builder/events)
- [Data Collections](https://console.integration.app/docs/connector-builder/data)
- [Operations](https://console.integration.app/docs/connector-builder/operations)
- [Global Webhooks](https://console.integration.app/docs/connector-builder/global-webhooks)
- [Methods](https://console.integration.app/docs/connector-builder/methods)

# Client Credentials Authentication

Client credentials authentication is the simplest authentication type. It lets you ask for user input, optionally transform it into connection credentials, and use those to access the API.

## Overview

This authentication type is ideal for APIs that use:

- API keys
- Username and password
- Basic authentication
- Custom token-based authentication that doesn't follow OAuth standards

## Configuration

In your spec.yml:

```yaml
auth:
  type: client-credentials
  title: "API Key Authentication"
  description: "Enter your API key to authenticate"

  # Define the UI for collecting user input
  ui:
    schema:
      type: object
      properties:
        apiKey:
          type: string
          title: "API Key"
    helpUri: "https://docs.example.com/api-authentication"

  # Reference to method implementations
  getCredentialsFromConnectionParameters:
    implementationType: javascript
  makeApiClient:
    implementationType: mapping
  test:
    implementationType: javascript
```

## How It Works

By default, user input (connectionParameters) is used directly as connection credentials. If you need to transform this input or add additional information, you can implement the `getCredentialsFromConnectionParameters` method.

## Custom Credential Processing

You can implement a custom `getCredentialsFromConnectionParameters` method to transform user input into API credentials:

```javascript
// File: auth/get-credentials-from-connection-parameters.js
exports.getCredentialsFromConnectionParameters = async function({
  connectorParameters,
  connectionParameters
}) {
  // Transform connection parameters into credentials
  return {
    apiKey: connectionParameters.apiKey,
    // Add additional fields or transformations
    authHeader: `Bearer ${connectionParameters.apiKey}`
  };
}
```

This function receives the following input parameters:

- `connectorParameters` \- parameters configured for the connector in your workspace.
- `connectionParameters` \- input provided by the user in the connection UI.

## API Client Configuration

For client credentials authentication, you'll typically need to configure the API client to include the credentials in requests. This is done in the `makeApiClient` implementation:

```yaml
# File: auth/make-api-client.map.yml
baseUrl: https://api.example.com/v1
headers:
  Authorization:
    $template: "Bearer ${credentials.apiKey}"
  Content-Type: application/json
```

## Common Authentication Patterns

### API Key in Header

```yaml
# File: auth/make-api-client.map.yml
baseUrl: https://api.example.com/v1
headers:
  X-API-Key:
    $var: credentials.apiKey
  Content-Type: application/json
```

### API Key in Query Parameter

```yaml
# File: auth/make-api-client.map.yml
baseUrl: https://api.example.com/v1
defaultQueryParameters:
  api_key:
    $var: credentials.apiKey
headers:
  Content-Type: application/json
```

### Basic Authentication

```yaml
# UI Schema
ui:
  schema:
    type: object
    properties:
      username:
        type: string
        title: "Username"
      password:
        type: string
        title: "Password"
        format: password

# make-api-client.map.yml
baseUrl: https://api.example.com/v1
headers:
  Authorization:
    $template: "Basic ${base64(credentials.username + ':' + credentials.password)}"
  Content-Type: application/json
```

## Testing

It's important to implement a test function to verify the credentials work properly:

```javascript
// File: auth/test.js
exports.test = async function(context) {
  try {
    // Make a simple API request that requires authentication
    const response = await context.apiClient.get('/user/profile');
    return response.status === 200;
  } catch (error) {
    return false;
  }
}
```

## Best Practices

1. **Security**: Never hardcode sensitive information. Use connector parameters or user inputs.
2. **Error Handling**: Implement proper error handling in your API client for authentication failures.
3. **Validation**: Validate user input before attempting to use it for authentication.
4. **Documentation**: Provide clear instructions in the UI about what credentials are needed and where to find them.
5. **Testing**: Thoroughly test your authentication implementation with various inputs and edge cases.

Integration.app is free to try. It takes just one click to get started.

Login and Try it Yourself

- ### On this page

- [Overview](https://console.integration.app/docs/connector-builder/authentication/types/client-credentials#overview)
- [Configuration](https://console.integration.app/docs/connector-builder/authentication/types/client-credentials#configuration)
- [How It Works](https://console.integration.app/docs/connector-builder/authentication/types/client-credentials#how-it-works)
- [Custom Credential Processing](https://console.integration.app/docs/connector-builder/authentication/types/client-credentials#custom-credential-processing)
- [API Client Configuration](https://console.integration.app/docs/connector-builder/authentication/types/client-credentials#api-client-configuration)
- [Common Authentication Patterns](https://console.integration.app/docs/connector-builder/authentication/types/client-credentials#common-authentication-patterns)
  - [API Key in Header](https://console.integration.app/docs/connector-builder/authentication/types/client-credentials#api-key-in-header)
  - [API Key in Query Parameter](https://console.integration.app/docs/connector-builder/authentication/types/client-credentials#api-key-in-query-parameter)
  - [Basic Authentication](https://console.integration.app/docs/connector-builder/authentication/types/client-credentials#basic-authentication)
- [Testing](https://console.integration.app/docs/connector-builder/authentication/types/client-credentials#testing)
- [Best Practices](https://console.integration.app/docs/connector-builder/authentication/types/client-credentials#best-practices)

Docs · Integration Console