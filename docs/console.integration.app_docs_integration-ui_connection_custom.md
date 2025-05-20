---
url: "https://console.integration.app/docs/integration-ui/connection/custom"
title: "Docs · Integration Console"
---

[Integration.app](https://integration.app/)

`` `Ctrl` + `K`

[NPM packages](https://www.npmjs.com/~integration.app) [GitHub organization](https://github.com/integration-app)

- [Integrations Catalog](https://console.integration.app/docs/integration-ui/integration-list)
- [Connection UI](https://console.integration.app/docs/integration-ui/connection)
  - [Custom Connection UI](https://console.integration.app/docs/integration-ui/connection/custom)
  - [Connection UI Without the Front-End SDK](https://console.integration.app/docs/integration-ui/connection/connection-ui-without-sdk)
- [Integration](https://console.integration.app/docs/integration-ui/integration)
- [Flows](https://console.integration.app/docs/integration-ui/flows)
- [Data Sources](https://console.integration.app/docs/integration-ui/data-sources)
- [Field Mappings](https://console.integration.app/docs/integration-ui/field-mappings)

# Custom Connection UI

Pre-built connection UI looks like this:

Javascript

[How to run it in your app](https://console.integration.app/docs/getting-started/front-end/javascript)

Copy

```javascript
await integrationApp.integration('{INTEGRATION_KEY}').openNewConnection()
```

Run Now

[log in](https://console.integration.app/login?returnTo=https%3A%2F%2Fconsole.integration.app%2Fdocs%2Fintegration-ui%2Fconnection%2Fcustom) to run this example

You can implement a custom version of this UI using this guide.

## 1\. Get Integration

To get information about what to ask user in order to create a connection, you need to get integration data:

Javascript

[How to run it in your app](https://console.integration.app/docs/getting-started/front-end/javascript)

Copy

```javascript
const integration = await integrationApp.integration('{INTEGRATION_KEY}').get()
```

Run Now

[log in](https://console.integration.app/login?returnTo=https%3A%2F%2Fconsole.integration.app%2Fdocs%2Fintegration-ui%2Fconnection%2Fcustom) to run this example

Integration will have one or more `authOptions` that can be used to create a connection.

For simplicity, we'll assume that integration has only one `authOption`. If it has more - you can use the same logic for each of them.
If integration has zero authOptions - it means authentication is not configured and you need to edit or change the connector used for the integration.

Let's look at the `ui` property of the auth option. It contains the following fields:

- `schema` \- [Data Schema](https://console.integration.app/docs/membrane/references/data-schemas) of the parameters required to create a connection. It will be empty if parameters are not required.
- `description` \- a human-readable description explaining the parameters.
- `helpUri` \- link to documentation explaining how to get the parameters.

## 2\. Connection Parameters UI

You can use your preferred way of converting [JSON Schema](https://json-schema.org/) into a form.
For example, you can extract a list of fields from the schema and simply display an input for each:

React

Copy

```jsx
function ConnectionForm() {
  const [parameters, setParameters] = useState({})

  const schema = {
    type: 'object',
    properties: {
      email: { type: 'string' },
      apiKey: { type: 'string' },
    },
  }

  const fields = Object.keys(schema.properties)

  return (
    <>
      {fields.map((field) => (
        <div key={field}>
          <label>{field}</label>
          <input
            type='text'
            className='p-1 border rounded'
            value={parameters[field] || ''}
            onChange={(e) =>
              setParameters({ ...parameters, [field]: e.target.value })
            }
          />
        </div>
      ))}
    </>
  )
}
```

Run Now

Please [log in](https://console.integration.app/login?returnTo=https%3A%2F%2Fconsole.integration.app%2Fdocs%2Fintegration-ui%2Fconnection%2Fcustom) to run this example

If a connection doesn't have parameters, you can skip this step.

## 3\. Creating a Connection

When you collected connection parameters, you can create a connection:

Javascript

[How to run it in your app](https://console.integration.app/docs/getting-started/front-end/javascript)

Copy

```javascript
const integration = await integrationApp
  .integration('{INTEGRATION_KEY}')
  .connect({ parameters })
```

Run Now

[log in](https://console.integration.app/login?returnTo=https%3A%2F%2Fconsole.integration.app%2Fdocs%2Fintegration-ui%2Fconnection%2Fcustom) to run this example

This code may open a new window if it is required by the authentication process.
Make sure this code runs inside a user action handler (e.g. `onClick`),
otherwise the browser may block the new window.

**Redirect instead of a new window**

When you need to avoid opening a new window, you can use redirect instead.
Pass `sameWindow: true` and `redirectUri` options. The URI will be used for redirection after the connection is created or fails.

Added query parameters:

- For successful creation, the `connectionId` will be added
- For failures, `error` will contain the error message and `errorData` will contain the JSON stringified error payload

Javascript

[How to run it in your app](https://console.integration.app/docs/getting-started/front-end/javascript)

Copy

```javascript
const integration = await integrationApp
  .integration('{INTEGRATION_KEY}')
  .connect({
    parameters,
    sameWindow: true,
    redirectUri: window.location.href
  })
```

Run Now

[log in](https://console.integration.app/login?returnTo=https%3A%2F%2Fconsole.integration.app%2Fdocs%2Fintegration-ui%2Fconnection%2Fcustom) to run this example

## 4\. Putting it all together

Here is a simple UI component that displays the connection parameters and create a new connection:

React

Copy

```jsx
import { useState } from 'react'
import { userIntegration, useIntegrationApp } from '@integration-app/react'

function Component({ parameters }) {
  // For this to work, don't forget to wrap this component into <IntegrationAppProvider/>
  const integrationApp = useIntegrationApp()

  const { integration, error } = useIntegration(parameters.INTEGRATION_KEY)

  const [connectionParameters, setConnectionParameters] = useState({})
  const [connecting, setConnecting] = useState(false)
  const [connection, setConnection] = useState(null)

  // If something bad happened - show the error
  if (error) {
    return <p>Error: {error.message}</p>
  }

  // Wait until the spec loads
  if (!integration) {
    return <p>Loading...</p>
  }

  // Display only the first auth option
  const authOption = integration!.authOptions?.[0]

  if (!authOption) {
    return <p>No auth options found for this integration</p>
  }

  // Get connection parameters schema
  const schema = authOption.ui?.schema

  // Simplified way to get the list of connection parameters.
  const fields = schema ? Object.keys(schema.properties ?? {}) : []

  async function connect() {
    setConnecting(true)
    try {
      const connection = await integrationApp
        .integration(parameters.INTEGRATION_KEY)
        .connect({
          parameters: connectionParameters,
          authOptionKey: authOption.key,
        })
      setConnection(connection)
    } finally {
      setConnecting(false)
    }
  }

  return (
    <div>
      {fields.length > 0 && (
        <div>
          <strong>Connection Parameters:</strong>
          {fields.map((field) => (
            <div key={field}>
              <label>{field}</label>
              <input
                type='text'
                value={connectionParameters[field] || ''}
                onChange={(e) =>
                  setConnectionParameters({
                    ...connectionParameters,
                    [field]: e.target.value,
                  })
                }
              />
            </div>
          ))}
        </div>
      )}

      {connecting ? (
        <span>Connecting...</span>
      ) : (
        <button onClick={connect}>Connect</button>
      )}

      {connection && (
        <div>
          <strong>Connected!</strong>
          <br />
          Connection Id: {connection.id}
        </div>
      )}
    </div>
}
```

Run Now

Please [log in](https://console.integration.app/login?returnTo=https%3A%2F%2Fconsole.integration.app%2Fdocs%2Fintegration-ui%2Fconnection%2Fcustom) to run this example

## 5\. Re-connecting

When a connection becomes disconnected, you can re-connect it using the same code as when creating a new connection:

Javascript

[How to run it in your app](https://console.integration.app/docs/getting-started/front-end/javascript)

Copy

```javascript
const integration = await integrationApp
  .integration('{INTEGRATION_KEY}')
  .connect({ parameters })
```

Run Now

[log in](https://console.integration.app/login?returnTo=https%3A%2F%2Fconsole.integration.app%2Fdocs%2Fintegration-ui%2Fconnection%2Fcustom) to run this example

## Multiple Connections for the same Integration

If you want to let your customers create multiple connections for the same integration,
set `allowMultipleConnections` option of the `connect` method call to `true`.

Integration.app is free to try. It takes just one click to get started.

Login and Try it Yourself

- ### On this page

- [1\. Get Integration](https://console.integration.app/docs/integration-ui/connection/custom#1-get-integration)
- [2\. Connection Parameters UI](https://console.integration.app/docs/integration-ui/connection/custom#2-connection-parameters-ui)
- [3\. Creating a Connection](https://console.integration.app/docs/integration-ui/connection/custom#3-creating-a-connection)
- [4\. Putting it all together](https://console.integration.app/docs/integration-ui/connection/custom#4-putting-it-all-together)
- [5\. Re-connecting](https://console.integration.app/docs/integration-ui/connection/custom#5-re-connecting)
- [Multiple Connections for the same Integration](https://console.integration.app/docs/integration-ui/connection/custom#multiple-connections-for-the-same-integration)

Docs · Integration Console

[iframe](https://td.doubleclick.net/td/rul/11398203743?random=1747732516740&cv=11&fst=1747732516740&fmt=3&bg=ffffff&guid=ON&async=1&gtm=45je55g2v9171934834z8892090687za200zb892090687&gcd=13l3l3l3l1l1&dma=0&tag_exp=101509157~103116025~103130495~103130497~103136993~103136995~103200001~103207802~103233427~103252644~103252646~103263073~103301114~103301116&ptag_exp=101509157~103116026~103130498~103130500~103136993~103136995~103200004~103207802~103233427~103252644~103252646~103263073~103301114~103301116&u_w=1280&u_h=1024&url=https%3A%2F%2Fconsole.integration.app%2Fdocs%2Fintegration-ui%2Fconnection%2Fcustom&hn=www.googleadservices.com&frm=0&tiba=Docs%20%C2%B7%20Integration%20Console&npa=0&pscdl=noapi&auid=152005141.1747732517&uaa=x86&uab=64&uafvl=Chromium%3B136.0.7103.113%7CGoogle%2520Chrome%3B136.0.7103.113%7CNot.A%252FBrand%3B99.0.0.0&uamb=0&uam=&uap=Linux%20x86_64&uapv=6.6.72&uaw=0&fledge=1&data=event%3Dgtag.config)[iframe](https://td.doubleclick.net/td/rul/11474966929?random=1747732516789&cv=11&fst=1747732516789&fmt=3&bg=ffffff&guid=ON&async=1&gtm=45je55g2v9171934834z8892090687za200zb892090687&gcd=13l3l3l3l1l1&dma=0&tag_exp=101509157~103116025~103130495~103130497~103136993~103136995~103200001~103207802~103233427~103252644~103252646~103263073~103301114~103301116&ptag_exp=101509157~103116026~103130498~103130500~103136993~103136995~103200004~103207802~103233427~103252644~103252646~103263073~103301114~103301116&u_w=1280&u_h=1024&url=https%3A%2F%2Fconsole.integration.app%2Fdocs%2Fintegration-ui%2Fconnection%2Fcustom&hn=www.googleadservices.com&frm=0&tiba=Docs%20%C2%B7%20Integration%20Console&npa=0&pscdl=noapi&auid=152005141.1747732517&uaa=x86&uab=64&uafvl=Chromium%3B136.0.7103.113%7CGoogle%2520Chrome%3B136.0.7103.113%7CNot.A%252FBrand%3B99.0.0.0&uamb=0&uam=&uap=Linux%20x86_64&uapv=6.6.72&uaw=0&fledge=1&data=event%3Dgtag.config)[iframe](https://td.doubleclick.net/td/rul/11474966929?random=1747732516805&cv=11&fst=1747732516805&fmt=3&bg=ffffff&guid=ON&async=1&gcl_ctr=1&gtm=45je55g2v9171934834z8892090687za200zb892090687&gcd=13l3l3l3l1l1&dma=0&tag_exp=101509157~103116025~103130495~103130497~103136993~103136995~103200001~103207802~103233427~103252644~103252646~103263073~103301114~103301116&ptag_exp=101509157~103116026~103130498~103130500~103136993~103136995~103200004~103207802~103233427~103252644~103252646~103263073~103301114~103301116&u_w=1280&u_h=1024&url=https%3A%2F%2Fconsole.integration.app%2Fdocs%2Fintegration-ui%2Fconnection%2Fcustom&label=9M_TCKCTp5oaEJGz2N8q&hn=www.googleadservices.com&frm=0&tiba=Docs%20%C2%B7%20Integration%20Console&value=0&bttype=purchase&npa=0&pscdl=noapi&auid=152005141.1747732517&uaa=x86&uab=64&uafvl=Chromium%3B136.0.7103.113%7CGoogle%2520Chrome%3B136.0.7103.113%7CNot.A%252FBrand%3B99.0.0.0&uamb=0&uam=&uap=Linux%20x86_64&uapv=6.6.72&uaw=0&ec_mode=a&fledge=1&capi=1&_tu=Cg&em=tv.1&ct_cookie_present=0)