---
url: "https://console.integration.app/docs/membrane/interfaces/api-proxy"
title: "Docs · Integration Console"
---

[Integration.app](https://integration.app/)

`` `Ctrl` + `K`

[NPM packages](https://www.npmjs.com/~integration.app) [GitHub organization](https://github.com/integration-app)

- [External Apps](https://console.integration.app/docs/membrane/apps)
- [Interfaces](https://console.integration.app/docs/membrane/interfaces)
  - [Scenarios](https://console.integration.app/docs/membrane/interfaces/scenarios)
  - [Actions](https://console.integration.app/docs/membrane/interfaces/actions)
  - [Flows](https://console.integration.app/docs/membrane/interfaces/flows)
  - [Data Sources](https://console.integration.app/docs/membrane/interfaces/data-sources)
  - [Field Mappings](https://console.integration.app/docs/membrane/interfaces/field-mappings)
  - [Data Links](https://console.integration.app/docs/membrane/interfaces/data-links)
  - [Connecting Your App API](https://console.integration.app/docs/membrane/interfaces/internal-api)
  - [Internal Events](https://console.integration.app/docs/membrane/interfaces/internal-events)
  - [Internal Data Schemas](https://console.integration.app/docs/membrane/interfaces/internal-data-schemas)
  - [Api Operations](https://console.integration.app/docs/membrane/interfaces/api-operations)
  - [Data Collections](https://console.integration.app/docs/membrane/interfaces/data-collections)
  - [API Proxy](https://console.integration.app/docs/membrane/interfaces/api-proxy)
  - [Files](https://console.integration.app/docs/membrane/interfaces/files)
  - [Running Custom Code](https://console.integration.app/docs/membrane/interfaces/custom-code)
- [Customers](https://console.integration.app/docs/membrane/customers)
- [Monitoring & Troubleshooting](https://console.integration.app/docs/membrane/monitoring)
- [Security And Privacy](https://console.integration.app/docs/membrane/security-and-privacy)
- References

# API Proxy

API proxy lets you make direct API requests through a [Connections](https://console.integration.app/docs/membrane/apps/connections).
API Proxy sends your request to the external application without changes and returns the exact response the external app provided.

Proxy API does two things with your requests:

- Adds Base URL to the path you provided (unless you provide full URL)
- The only thing API proxy does is add authentication headers and handle credential refreshes.

## Using API Proxy

### REST API

To make a Proxy request using REST API, simply prefix the request with

```text
https://api.integration.app/connections/<connectionSelector>/proxy
```

Connection selector can be one of the following:

- Integration key (if there is only one connection for the integration)
- Integration ID (if there is only one connection for the integration)
- Connection ID

Let's say you created a connection to the Hubspot CRM and want to make a request to the following hubspot endpoint:

```text
https://api.hubapi.com/crm/v3/owners/
```

you would instead make a request to

```text
https://api.integration.app/connections/<connectionId>/proxy/crm/v3/owners/
```

Or if you don't want to rely on the base URL, you can provide the full URL:

```text
https://api.integration.app/connections/<connectionId>/proxy/https://api.hubapi.com/crm/v3/owners/
```

The HTTP method and body you use for this request will be proxied to the underlying application's API.

## JavaScript SDK

To make a Proxy request using JavaScript SDK, use `proxy` property of the Connection:

```js
const response = integrationApp.connection('connection-id').proxy.get('/crm/v3/owners/')
```

You can call `.get`, `.post`, `.patch`, `.put` and `.delete` requests of the `proxy` property.
First parameter is an API path and the second is an optional object with the request payload for `post`, `patch`, and `put` methods.

## Edge Cases

### Headers

There are special headers that are used by the proxy infrastructure. They will be ignored by the proxy and not passed to the underlying application.

Here is the full list of these headers:

- host
- x-request-id
- x-real-ip
- x-forwarded-for
- x-forwarded-host
- x-forwarded-port
- x-forwarded-proto
- x-forwarded-scheme
- x-scheme
- x-original-forwarded-for
- x-different-name
- x-request-start
- x-using-nginx-controller
- x-amzn-trace-id
- forwarded-for-header
- proxy-protocol
- real\_ip\_header
- real\_ip\_recursive
- cdn-loop
- cf-ipcountry
- cf-ray
- cf-visitor
- cf-connecting-ip
- connection
- authorization
- content-length

### Error Handling

Proxy will return the same status code, headers, and body that the underlying application's API returns. The only exception is handling credential refreshes.

If proxy receives a response indicating that the credentials have expired, it will attempt to refresh the credentials once.

Here are the possible outcomes when this happens:

- If refresh is successful - it will retry the request and return the second response (successful or not).
- If refresh process fails - it will return the original response.

## Limits

Proxy API has the same limits as the rest of our API endpoints. See [Limits](https://console.integration.app/docs/membrane/references/limits).

Integration.app is free to try. It takes just one click to get started.

Login and Try it Yourself

- ### On this page

- [Using API Proxy](https://console.integration.app/docs/membrane/interfaces/api-proxy#using-api-proxy)
  - [REST API](https://console.integration.app/docs/membrane/interfaces/api-proxy#rest-api)
- [JavaScript SDK](https://console.integration.app/docs/membrane/interfaces/api-proxy#javascript-sdk)
- [Edge Cases](https://console.integration.app/docs/membrane/interfaces/api-proxy#edge-cases)
  - [Headers](https://console.integration.app/docs/membrane/interfaces/api-proxy#headers)
  - [Error Handling](https://console.integration.app/docs/membrane/interfaces/api-proxy#error-handling)
- [Limits](https://console.integration.app/docs/membrane/interfaces/api-proxy#limits)

Docs · Integration Console

[iframe](https://td.doubleclick.net/td/rul/11398203743?random=1747732566417&cv=11&fst=1747732566417&fmt=3&bg=ffffff&guid=ON&async=1&gtm=45je55g2v9171934834z8892090687za200zb892090687&gcd=13l3l3l3l1l1&dma=0&tag_exp=101509157~103116026~103130498~103130500~103136993~103136995~103200004~103207802~103233427~103252644~103252646~103263073~103301114~103301116&ptag_exp=101509157~103116026~103130498~103130500~103136993~103136995~103200004~103207802~103233427~103252644~103252646~103263073~103301114~103301116&u_w=1280&u_h=1024&url=https%3A%2F%2Fconsole.integration.app%2Fdocs%2Fmembrane%2Finterfaces%2Fapi-proxy&hn=www.googleadservices.com&frm=0&tiba=Docs%20%C2%B7%20Integration%20Console&npa=0&pscdl=noapi&auid=775667889.1747732566&uaa=x86&uab=64&uafvl=Chromium%3B136.0.7103.113%7CGoogle%2520Chrome%3B136.0.7103.113%7CNot.A%252FBrand%3B99.0.0.0&uamb=0&uam=&uap=Linux%20x86_64&uapv=6.6.72&uaw=0&fledge=1&data=event%3Dgtag.config)[iframe](https://td.doubleclick.net/td/rul/11474966929?random=1747732566520&cv=11&fst=1747732566520&fmt=3&bg=ffffff&guid=ON&async=1&gtm=45je55g2v9171934834z8892090687za200zb892090687&gcd=13l3l3l3l1l1&dma=0&tag_exp=101509157~103116026~103130498~103130500~103136993~103136995~103200004~103207802~103233427~103252644~103252646~103263073~103301114~103301116&ptag_exp=101509157~103116026~103130498~103130500~103136993~103136995~103200004~103207802~103233427~103252644~103252646~103263073~103301114~103301116&u_w=1280&u_h=1024&url=https%3A%2F%2Fconsole.integration.app%2Fdocs%2Fmembrane%2Finterfaces%2Fapi-proxy&hn=www.googleadservices.com&frm=0&tiba=Docs%20%C2%B7%20Integration%20Console&npa=0&pscdl=noapi&auid=775667889.1747732566&uaa=x86&uab=64&uafvl=Chromium%3B136.0.7103.113%7CGoogle%2520Chrome%3B136.0.7103.113%7CNot.A%252FBrand%3B99.0.0.0&uamb=0&uam=&uap=Linux%20x86_64&uapv=6.6.72&uaw=0&fledge=1&data=event%3Dgtag.config)[iframe](https://td.doubleclick.net/td/rul/11474966929?random=1747732566565&cv=11&fst=1747732566565&fmt=3&bg=ffffff&guid=ON&async=1&gcl_ctr=1&gtm=45je55g2v9171934834z8892090687za200zb892090687&gcd=13l3l3l3l1l1&dma=0&tag_exp=101509157~103116026~103130498~103130500~103136993~103136995~103200004~103207802~103233427~103252644~103252646~103263073~103301114~103301116&ptag_exp=101509157~103116026~103130498~103130500~103136993~103136995~103200004~103207802~103233427~103252644~103252646~103263073~103301114~103301116&u_w=1280&u_h=1024&url=https%3A%2F%2Fconsole.integration.app%2Fdocs%2Fmembrane%2Finterfaces%2Fapi-proxy&label=9M_TCKCTp5oaEJGz2N8q&hn=www.googleadservices.com&frm=0&tiba=Docs%20%C2%B7%20Integration%20Console&value=0&bttype=purchase&npa=0&pscdl=noapi&auid=775667889.1747732566&uaa=x86&uab=64&uafvl=Chromium%3B136.0.7103.113%7CGoogle%2520Chrome%3B136.0.7103.113%7CNot.A%252FBrand%3B99.0.0.0&uamb=0&uam=&uap=Linux%20x86_64&uapv=6.6.72&uaw=0&ec_mode=a&fledge=1&capi=1&_tu=Cg&em=tv.1&ct_cookie_present=0)