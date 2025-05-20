---
url: "https://console.integration.app/docs/integration-ui/connection"
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

# Connection UI

Javascript

[How to run it in your app](https://console.integration.app/docs/getting-started/front-end/javascript)

Copy

```javascript
await integrationApp.integration('{INTEGRATION_KEY}').openNewConnection()
```

Run Now

[log in](https://console.integration.app/login?returnTo=https%3A%2F%2Fconsole.integration.app%2Fdocs%2Fintegration-ui%2Fconnection) to run this example

## Multiple Connections for the same Integration

If you want to let users create multiple connections for the same integration, set `allowMultipleConnections` option
of the `createNewConnection` method to `true`:

Javascript

[How to run it in your app](https://console.integration.app/docs/getting-started/front-end/javascript)

Copy

```javascript
await integrationApp
  .integration('{INTEGRATION_KEY}')
  .openNewConnection({
    allowMultipleConnections: true
  })
```

Run Now

[log in](https://console.integration.app/login?returnTo=https%3A%2F%2Fconsole.integration.app%2Fdocs%2Fintegration-ui%2Fconnection) to run this example

## See Also

#### [Custom Connection UI](https://console.integration.app/docs/integration-ui/connection/custom)

Building "Connect" UI that fully blends into your app.

Integration.app is free to try. It takes just one click to get started.

Login and Try it Yourself

- ### On this page

- [Multiple Connections for the same Integration](https://console.integration.app/docs/integration-ui/connection#multiple-connections-for-the-same-integration)
- [See Also](https://console.integration.app/docs/integration-ui/connection#see-also)

Docs · Integration Console

[iframe](https://td.doubleclick.net/td/rul/11398203743?random=1747732508770&cv=11&fst=1747732508770&fmt=3&bg=ffffff&guid=ON&async=1&gtm=45je55g2v9171934834z8892090687za200zb892090687&gcd=13l3l3l3l1l1&dma=0&tag_exp=101509157~102015666~103116025~103130495~103130497~103136993~103136995~103200001~103207802~103233427~103252644~103252646~103263073~103301114~103301116&ptag_exp=101509157~103116026~103130495~103130497~103136993~103136995~103200004~103207802~103233427~103252644~103252646~103263073~103301114~103301116&u_w=1280&u_h=1024&url=https%3A%2F%2Fconsole.integration.app%2Fdocs%2Fintegration-ui%2Fconnection&hn=www.googleadservices.com&frm=0&tiba=Docs%20%C2%B7%20Integration%20Console&npa=0&pscdl=noapi&auid=436628568.1747732509&uaa=x86&uab=64&uafvl=Chromium%3B136.0.7103.113%7CGoogle%2520Chrome%3B136.0.7103.113%7CNot.A%252FBrand%3B99.0.0.0&uamb=0&uam=&uap=Linux%20x86_64&uapv=6.6.72&uaw=0&fledge=1&data=event%3Dgtag.config)[iframe](https://td.doubleclick.net/td/rul/11474966929?random=1747732508820&cv=11&fst=1747732508820&fmt=3&bg=ffffff&guid=ON&async=1&gtm=45je55g2v9171934834z8892090687za200zb892090687&gcd=13l3l3l3l1l1&dma=0&tag_exp=101509157~102015666~103116025~103130495~103130497~103136993~103136995~103200001~103207802~103233427~103252644~103252646~103263073~103301114~103301116&ptag_exp=101509157~103116026~103130495~103130497~103136993~103136995~103200004~103207802~103233427~103252644~103252646~103263073~103301114~103301116&u_w=1280&u_h=1024&url=https%3A%2F%2Fconsole.integration.app%2Fdocs%2Fintegration-ui%2Fconnection&hn=www.googleadservices.com&frm=0&tiba=Docs%20%C2%B7%20Integration%20Console&npa=0&pscdl=noapi&auid=436628568.1747732509&uaa=x86&uab=64&uafvl=Chromium%3B136.0.7103.113%7CGoogle%2520Chrome%3B136.0.7103.113%7CNot.A%252FBrand%3B99.0.0.0&uamb=0&uam=&uap=Linux%20x86_64&uapv=6.6.72&uaw=0&fledge=1&data=event%3Dgtag.config)[iframe](https://td.doubleclick.net/td/rul/11474966929?random=1747732508831&cv=11&fst=1747732508831&fmt=3&bg=ffffff&guid=ON&async=1&gcl_ctr=1&gtm=45je55g2v9171934834z8892090687za200zb892090687&gcd=13l3l3l3l1l1&dma=0&tag_exp=101509157~102015666~103116025~103130495~103130497~103136993~103136995~103200001~103207802~103233427~103252644~103252646~103263073~103301114~103301116~103308615&ptag_exp=101509157~103116026~103130495~103130497~103136993~103136995~103200004~103207802~103233427~103252644~103252646~103263073~103301114~103301116&u_w=1280&u_h=1024&url=https%3A%2F%2Fconsole.integration.app%2Fdocs%2Fintegration-ui%2Fconnection&label=9M_TCKCTp5oaEJGz2N8q&hn=www.googleadservices.com&frm=0&tiba=Docs%20%C2%B7%20Integration%20Console&value=0&bttype=purchase&npa=0&pscdl=noapi&auid=436628568.1747732509&uaa=x86&uab=64&uafvl=Chromium%3B136.0.7103.113%7CGoogle%2520Chrome%3B136.0.7103.113%7CNot.A%252FBrand%3B99.0.0.0&uamb=0&uam=&uap=Linux%20x86_64&uapv=6.6.72&uaw=0&ec_mode=a&fledge=1&capi=1&_tu=Cg&em=tv.1&ct_cookie_present=0)