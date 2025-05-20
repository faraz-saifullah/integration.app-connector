---
url: "https://console.integration.app/docs/connector-builder/authentication/methods/get-credentials-from-connection-parameters"
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

# Get Credentials from Connection Parameters

The `getCredentialsFromConnectionParameters` method transforms user-provided connection parameters into the credential format required for authentication.
This method is useful when the format of credentials needed by the authentication mechanism differs from what users provide during connection setup or when you need to make additional requests to get/refresh credentials.

When using this method, you almost always should define the structure of the credentials this method returns in `customCredentialsSchema` field of the auth spec.

## Implementation

This method is implemented in JavaScript:

```javascript
// File: auth/get-credentials-from-connection-parameters.js
import axios from 'axios'

export default async function getCredentialsFromConnectionParameters({
  connectionParameters,
}) {
  const { email, password } = connectionParameters
  const res = await axios.post('https://api.example.com/v1/get-token', {
    email,
    password,
  })
  const accessToken = res.data?.access_token

  if (!accessToken) {
    throw new Error('Failed to get access token')
  }

  return { accessToken }
}
```

In your spec.yml:

```yaml
auth:
  # ...other auth settings
  getCredentialsFromConnectionParameters:
    implementationType: javascript
```

## Input

The method receives a context object with these properties:

|     |     |
| --- | --- |
| `connectionParameters` | Parameters provided by the user during connection setup. |
| `connectorParameters` | Parameters configured for the connector in your workspace. |

## Return Value

The method should return an object containing the credentials that will be added to the `credentials` stored in the [Connection](https://console.integration.app/docs/membrane/apps/connections) object.

Integration.app is free to try. It takes just one click to get started.

Login and Try it Yourself

- ### On this page

- [Implementation](https://console.integration.app/docs/connector-builder/authentication/methods/get-credentials-from-connection-parameters#implementation)
- [Input](https://console.integration.app/docs/connector-builder/authentication/methods/get-credentials-from-connection-parameters#input)
- [Return Value](https://console.integration.app/docs/connector-builder/authentication/methods/get-credentials-from-connection-parameters#return-value)

Docs · Integration Console

[iframe](https://td.doubleclick.net/td/rul/11398203743?random=1747732641859&cv=11&fst=1747732641859&fmt=3&bg=ffffff&guid=ON&async=1&gtm=45je55g2h1v9171934834z8892090687za200zb892090687&gcd=13l3l3l3l1l1&dma=0&tag_exp=101509157~103116025~103130495~103130497~103136993~103136995~103200001~103207802~103233427~103252644~103252646~103263073~103301114~103301116&ptag_exp=101509157~103116025~103130498~103130500~103136993~103136995~103200001~103207802~103233427~103252644~103252646~103263073~103301114~103301116&u_w=1280&u_h=1024&url=https%3A%2F%2Fconsole.integration.app%2Fdocs%2Fconnector-builder%2Fauthentication%2Fmethods%2Fget-credentials-from-connection-parameters&hn=www.googleadservices.com&frm=0&tiba=Docs%20%C2%B7%20Integration%20Console&npa=0&pscdl=noapi&auid=1606794993.1747732641&uaa=x86&uab=64&uafvl=Chromium%3B136.0.7103.113%7CGoogle%2520Chrome%3B136.0.7103.113%7CNot.A%252FBrand%3B99.0.0.0&uamb=0&uam=&uap=Linux%20x86_64&uapv=6.6.72&uaw=0&fledge=1&data=event%3Dgtag.config)[iframe](https://td.doubleclick.net/td/rul/11474966929?random=1747732641939&cv=11&fst=1747732641939&fmt=3&bg=ffffff&guid=ON&async=1&gtm=45je55g2h1v9171934834z8892090687za200zb892090687&gcd=13l3l3l3l1l1&dma=0&tag_exp=101509157~103116025~103130495~103130497~103136993~103136995~103200001~103207802~103233427~103252644~103252646~103263073~103301114~103301116&ptag_exp=101509157~103116025~103130498~103130500~103136993~103136995~103200001~103207802~103233427~103252644~103252646~103263073~103301114~103301116&u_w=1280&u_h=1024&url=https%3A%2F%2Fconsole.integration.app%2Fdocs%2Fconnector-builder%2Fauthentication%2Fmethods%2Fget-credentials-from-connection-parameters&hn=www.googleadservices.com&frm=0&tiba=Docs%20%C2%B7%20Integration%20Console&npa=0&pscdl=noapi&auid=1606794993.1747732641&uaa=x86&uab=64&uafvl=Chromium%3B136.0.7103.113%7CGoogle%2520Chrome%3B136.0.7103.113%7CNot.A%252FBrand%3B99.0.0.0&uamb=0&uam=&uap=Linux%20x86_64&uapv=6.6.72&uaw=0&fledge=1&data=event%3Dgtag.config)[iframe](https://td.doubleclick.net/td/rul/11474966929?random=1747732641952&cv=11&fst=1747732641952&fmt=3&bg=ffffff&guid=ON&async=1&gcl_ctr=1&gtm=45je55g2h1v9171934834z8892090687za200zb892090687&gcd=13l3l3l3l1l1&dma=0&tag_exp=101509157~103116025~103130495~103130497~103136993~103136995~103200001~103207802~103233427~103252644~103252646~103263073~103301114~103301116&ptag_exp=101509157~103116025~103130498~103130500~103136993~103136995~103200001~103207802~103233427~103252644~103252646~103263073~103301114~103301116&u_w=1280&u_h=1024&url=https%3A%2F%2Fconsole.integration.app%2Fdocs%2Fconnector-builder%2Fauthentication%2Fmethods%2Fget-credentials-from-connection-parameters&label=9M_TCKCTp5oaEJGz2N8q&hn=www.googleadservices.com&frm=0&tiba=Docs%20%C2%B7%20Integration%20Console&value=0&bttype=purchase&npa=0&pscdl=noapi&auid=1606794993.1747732641&uaa=x86&uab=64&uafvl=Chromium%3B136.0.7103.113%7CGoogle%2520Chrome%3B136.0.7103.113%7CNot.A%252FBrand%3B99.0.0.0&uamb=0&uam=&uap=Linux%20x86_64&uapv=6.6.72&uaw=0&ec_mode=a&fledge=1&capi=1&_tu=Cg&em=tv.1&ct_cookie_present=0)