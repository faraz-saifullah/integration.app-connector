---
url: "https://console.integration.app/docs/connector-builder/authentication"
title: "Docs · Integration Console"
---

[Integration.app](https://integration.app/)

`` `Ctrl` + `K`

[NPM packages](https://www.npmjs.com/~integration.app) [GitHub organization](https://github.com/integration-app)

- [Authentication](https://console.integration.app/docs/connector-builder/authentication)
  - Methods
  - Types
- [API Specification](https://console.integration.app/docs/connector-builder/api)
- [Events](https://console.integration.app/docs/connector-builder/events)
- [Data Collections](https://console.integration.app/docs/connector-builder/data)
- [Operations](https://console.integration.app/docs/connector-builder/operations)
- [Global Webhooks](https://console.integration.app/docs/connector-builder/global-webhooks)
- [Methods](https://console.integration.app/docs/connector-builder/methods)

# Authentication

Authentication is a part of the connector definition that specifies establishing connection to an external application:

- What information is needed from the user to establish the connection (and where to get it).
- How to use this information to get (and refresh) credentials.
- How to make API requests using the credentials.
- How to test if connection was successful.

You can use [Formulas](https://console.integration.app/docs/membrane/references/formulas) to make authentication definition dynamic.

## Authentication Spec Structure

The authentication spec is defined in the `auth` field of the connector spec and has the following structure:

```yaml
auth:
  # The type of authentication
  type: client-credentials  # or oauth2, oauth1, proxy, integration-app-token

  # User interface configuration
  ui:
    # Schema defining what inputs to request from users
    schema:
      type: object
      properties:
        apiKey:
          type: string
          title: "API Key"

    # Help URL with more information about the authentication
    helpUri: "https://docs.example.com/api-authentication"

  # Method implementations for different auth methods
  # These reference files in your connector directory
  makeApiClient:
    implementationType: mapping
  refreshCredentials:
    implementationType: javascript
  test:
    implementationType: javascript

  # Different authentication options/variants
  options:
    option1:
      type: client-credentials
      title: "Option 1"
    option2:
      type: oauth2
      title: "Option 2"
```

## Authentication Types

To get credentials to use for accessing the API, you need to configure authentication. Choose the authentication type that best matches your API's requirements:

- [Client Credentials](https://console.integration.app/docs/connector-builder/authentication/types/client-credentials) \- The simplest authentication type for API keys, basic auth, or custom tokens
- [OAuth2](https://console.integration.app/docs/connector-builder/authentication/types/oauth2) \- Standard protocol for third-party authorization without sharing credentials
- [OAuth1](https://console.integration.app/docs/connector-builder/authentication/types/oauth1) \- Older authorization protocol with signature-based request authentication (rarely used)
- [Proxy](https://console.integration.app/docs/connector-builder/authentication/types/proxy) \- Delegates authentication to another connector
- [Integration App Token](https://console.integration.app/docs/connector-builder/authentication/types/integration-app-token) \- Uses integration.app's token system

If not sure which one to pick, go with "Client Credentials" for simple API authentication or "OAuth2" for user-specific access.

## User Interface

You can configure how connection UI looks like for your users and ask them for inputs you need to connect to the API.

![](https://console.integration.app/images/docs/connector-builder-authentication.png)

In some cases, like standard oAuth authentication, you don't need to ask users for anything, and you can skip configuring the UI.

You can configure the following:

- Description - short description of what is happening and what is required from the user.
- Connection Parameters - [Data Schema](https://console.integration.app/docs/membrane/references/data-schemas) of input you want the user to enter.
- Help URL - link to a relevant help article where user can learn more about the authentication process.

## Methods

There are a few [Methods](https://console.integration.app/docs/connector-builder/methods) that are common between all authentication types:

| Method | Description |
| --- | --- |
| [makeApiClient](https://console.integration.app/docs/connector-builder/authentication/methods/make-api-client) | Configures how your connector makes API requests to the external service, including authentication headers, base URL, and other settings. |
| [getCredentialsFromConnectionParameters](https://console.integration.app/docs/connector-builder/authentication/methods/get-credentials-from-connection-parameters) | (optional) Transforms user-provided connection parameters into the credential format required for authentication. |
| [refreshCredentials](https://console.integration.app/docs/connector-builder/authentication/methods/refresh-credentials) | (optional) Defines how to refresh expired or invalid authentication credentials without requiring user intervention. |
| [test](https://console.integration.app/docs/connector-builder/authentication/methods/test) | (optional, but recommended) Validates if authentication credentials are working correctly by making a test API request. |

For type-specific methods, see documentation for that authentication type.

## Authentication Options

You can define multiple authentication options for a connector using the `options` field. This allows users to choose between different authentication methods:

```yaml
auth:
  type: client-credentials
  # Common auth settings
  options:
    api-key:
      type: client-credentials
      title: API Key Authentication
      # Option-specific settings
      ui:
        schema:
          type: object
          properties:
            apiKey:
              type: string
              title: API Key
    oauth:
      type: oauth2
      title: OAuth Authentication
      # Option-specific settings
      getOAuthConfig:
        implementationType: mapping
```

## Tips for LLM-Generated Authentication Specs

When generating authentication specs based on API documentation:

01. **Analyze the authentication flow** \- Carefully examine the API docs to determine the right authentication type
02. **Consider error handling** \- Include proper error handling for authentication failures
03. **Use connection parameters properly** \- Make sure to define the right schema for user inputs
04. **Look for special requirements** \- Some APIs have special requirements like PKCE support, custom parameters, etc.
05. **Implement token refresh** \- For OAuth2, make sure to properly implement refresh token logic if supported
06. **Test thoroughly** \- Create a comprehensive test function to verify the authentication works
07. **Document clearly** \- Add helpful descriptions and links to API docs
08. **Use formula references** \- Use dynamic values with formulas when appropriate
09. **Check scopes** \- For OAuth2, make sure to request the appropriate scopes for the intended API operations
10. **Follow security best practices** \- Never hardcode secrets, use connector parameters instead

Integration.app is free to try. It takes just one click to get started.

Login and Try it Yourself

- ### On this page

- [Authentication Spec Structure](https://console.integration.app/docs/connector-builder/authentication#authentication-spec-structure)
- [Authentication Types](https://console.integration.app/docs/connector-builder/authentication#authentication-types)
- [User Interface](https://console.integration.app/docs/connector-builder/authentication#user-interface)
- [Methods](https://console.integration.app/docs/connector-builder/authentication#methods)
- [Authentication Options](https://console.integration.app/docs/connector-builder/authentication#authentication-options)
- [Tips for LLM-Generated Authentication Specs](https://console.integration.app/docs/connector-builder/authentication#tips-for-llm-generated-authentication-specs)

Docs · Integration Console

[iframe](https://td.doubleclick.net/td/rul/11398203743?random=1747732520545&cv=11&fst=1747732520545&fmt=3&bg=ffffff&guid=ON&async=1&gtm=45je55g2v9171934834z8892090687za200zb892090687&gcd=13l3l3l3l1l1&dma=0&tag_exp=101509157~103116026~103130495~103130497~103136993~103136995~103200004~103207802~103233427~103252644~103252646~103263073~103301114~103301116&ptag_exp=101509157~103116026~103130498~103130500~103136993~103136995~103200004~103207802~103233427~103252644~103252646~103263073~103301114~103301116&u_w=1280&u_h=1024&url=https%3A%2F%2Fconsole.integration.app%2Fdocs%2Fconnector-builder%2Fauthentication&hn=www.googleadservices.com&frm=0&tiba=Docs%20%C2%B7%20Integration%20Console&npa=0&pscdl=noapi&auid=486304366.1747732520&uaa=x86&uab=64&uafvl=Chromium%3B136.0.7103.113%7CGoogle%2520Chrome%3B136.0.7103.113%7CNot.A%252FBrand%3B99.0.0.0&uamb=0&uam=&uap=Linux%20x86_64&uapv=6.6.72&uaw=0&fledge=1&data=event%3Dgtag.config)[iframe](https://td.doubleclick.net/td/rul/11474966929?random=1747732520609&cv=11&fst=1747732520609&fmt=3&bg=ffffff&guid=ON&async=1&gtm=45je55g2v9171934834z8892090687za200zb892090687&gcd=13l3l3l3l1l1&dma=0&tag_exp=101509157~103116026~103130495~103130497~103136993~103136995~103200004~103207802~103233427~103252644~103252646~103263073~103301114~103301116&ptag_exp=101509157~103116026~103130498~103130500~103136993~103136995~103200004~103207802~103233427~103252644~103252646~103263073~103301114~103301116&u_w=1280&u_h=1024&url=https%3A%2F%2Fconsole.integration.app%2Fdocs%2Fconnector-builder%2Fauthentication&hn=www.googleadservices.com&frm=0&tiba=Docs%20%C2%B7%20Integration%20Console&npa=0&pscdl=noapi&auid=486304366.1747732520&uaa=x86&uab=64&uafvl=Chromium%3B136.0.7103.113%7CGoogle%2520Chrome%3B136.0.7103.113%7CNot.A%252FBrand%3B99.0.0.0&uamb=0&uam=&uap=Linux%20x86_64&uapv=6.6.72&uaw=0&fledge=1&data=event%3Dgtag.config)[iframe](https://td.doubleclick.net/td/rul/11474966929?random=1747732520629&cv=11&fst=1747732520629&fmt=3&bg=ffffff&guid=ON&async=1&gcl_ctr=1&gtm=45je55g2v9171934834z8892090687za200zb892090687&gcd=13l3l3l3l1l1&dma=0&tag_exp=101509157~103116026~103130495~103130497~103136993~103136995~103200004~103207802~103233427~103252644~103252646~103263073~103301114~103301116&ptag_exp=101509157~103116026~103130498~103130500~103136993~103136995~103200004~103207802~103233427~103252644~103252646~103263073~103301114~103301116&u_w=1280&u_h=1024&url=https%3A%2F%2Fconsole.integration.app%2Fdocs%2Fconnector-builder%2Fauthentication&label=9M_TCKCTp5oaEJGz2N8q&hn=www.googleadservices.com&frm=0&tiba=Docs%20%C2%B7%20Integration%20Console&value=0&bttype=purchase&npa=0&pscdl=noapi&auid=486304366.1747732520&uaa=x86&uab=64&uafvl=Chromium%3B136.0.7103.113%7CGoogle%2520Chrome%3B136.0.7103.113%7CNot.A%252FBrand%3B99.0.0.0&uamb=0&uam=&uap=Linux%20x86_64&uapv=6.6.72&uaw=0&ec_mode=a&fledge=1&capi=1&_tu=Cg&em=tv.1&ct_cookie_present=0)