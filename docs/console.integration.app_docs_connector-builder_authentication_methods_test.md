---
url: "https://console.integration.app/docs/connector-builder/authentication/methods/test"
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

# Test

The `test` method verifies if the authentication credentials are valid by making a simple API request to the external service.

This method is crucial for validating connections and providing immediate feedback to users during the connection setup process.

## Implementation

This method can be implemented in JavaScript or YAML.

### JavaScript Implementation

The test method is typically implemented in JavaScript:

```javascript
// File: auth/test.js
exports.test = async function(context) {
  try {
    // Make a simple API request that requires authentication
    const response = await context.apiClient.get('/user/profile');

    // Verify the response indicates success
    if (response.status === 200) {
      return true;
    }

    // Optional: check specific data in the response
    if (response.data && response.data.accountStatus === 'active') {
      return true;
    }

    return false;
  } catch (error) {
    // Log the error for debugging
    console.error('Authentication test failed:', error);

    // Return false to indicate test failure
    return false;

    // Alternatively, throw an error with more details
    // throw new Error(`Authentication test failed: ${error.message}`);
  }
};
```

In your spec.yml:

```yaml
auth:
  # ...other auth settings
  test:
    implementationType: javascript
```

### API Request Implementation

The test method can also be implemented by defining an API requeset and response mapping:

```yaml
path: /current-user
method: get
responseMapping:
  $eval:
    $var: $.response.id
  isNotEmpty: true
```

In your spec.yml:

```yaml
auth:
  # ...other auth settings
  test:
    implementationType: mapping
```

## Input Context

The test method receives a context object with these properties:

|     |     |
| --- | --- |
| `connectorParameters` | Parameters configured for the connector in your workspace. |
| `connectionParameters` | Parameters provided by the user during connection setup. |

## Return Value

The test method should return:

- `true` or truthy value when the test succeeds
- `false` or falsy value when the test fails
- Or throw an error with a descriptive message for more detailed failure information

## Best Practices

### Endpoint Selection

Choose an endpoint for testing that:

1. **Is Lightweight**: Uses minimal API resources and quota
2. **Requires Authentication**: Actually tests credentials are valid
3. **Has Minimal Permissions**: Works even with restricted access
4. **Is Stable**: Unlikely to change or be deprecated
5. **Returns Quickly**: Provides fast feedback

Common test endpoints include:

- User profile or account information
- API status endpoints
- Organization or workspace information
- Simple list endpoints with limits (e.g., first 1-2 items)

Integration.app is free to try. It takes just one click to get started.

Login and Try it Yourself

- ### On this page

- [Implementation](https://console.integration.app/docs/connector-builder/authentication/methods/test#implementation)
  - [JavaScript Implementation](https://console.integration.app/docs/connector-builder/authentication/methods/test#javascript-implementation)
  - [API Request Implementation](https://console.integration.app/docs/connector-builder/authentication/methods/test#api-request-implementation)
- [Input Context](https://console.integration.app/docs/connector-builder/authentication/methods/test#input-context)
- [Return Value](https://console.integration.app/docs/connector-builder/authentication/methods/test#return-value)
- [Best Practices](https://console.integration.app/docs/connector-builder/authentication/methods/test#best-practices)
  - [Endpoint Selection](https://console.integration.app/docs/connector-builder/authentication/methods/test#endpoint-selection)

Docs · Integration Console