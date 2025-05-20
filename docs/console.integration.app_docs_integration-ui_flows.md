---
url: "https://console.integration.app/docs/integration-ui/flows"
title: "Docs · Integration Console"
---

[Integration.app](https://integration.app/)

`` `Ctrl` + `K`

[NPM packages](https://www.npmjs.com/~integration.app) [GitHub organization](https://github.com/integration-app)

- [Integrations Catalog](https://console.integration.app/docs/integration-ui/integration-list)
- [Connection UI](https://console.integration.app/docs/integration-ui/connection)
- [Integration](https://console.integration.app/docs/integration-ui/integration)
- [Flows](https://console.integration.app/docs/integration-ui/flows)
  - [Custom Flow UI](https://console.integration.app/docs/integration-ui/flows/custom)
  - [Enable or Disable Flow Instance](https://console.integration.app/docs/integration-ui/flows/enable-disable)
  - [Configure Flow Instance Parameters](https://console.integration.app/docs/integration-ui/flows/flow-parameters)
- [Data Sources](https://console.integration.app/docs/integration-ui/data-sources)
- [Field Mappings](https://console.integration.app/docs/integration-ui/field-mappings)

# Flow UI

To let user configure a Flow Instance, call `openConfiguration` method:

Javascript

[How to run it in your app](https://console.integration.app/docs/getting-started/front-end/javascript)

Copy

```javascript
await integrationApp
  .connection('{INTEGRATION_KEY}')
  .flow('{FLOW_KEY}')
  .openConfiguration()
```

Run Now

[log in](https://console.integration.app/login?returnTo=https%3A%2F%2Fconsole.integration.app%2Fdocs%2Fintegration-ui%2Fflows) to run this example

### Flow Instance editor

To edit a Flow Instance, call `openEditor` method:

Javascript

[How to run it in your app](https://console.integration.app/docs/getting-started/front-end/javascript)

Copy

```javascript
await integrationApp
  .flowInstance('{FLOW_INSTANCE_ID}')
  .openEditor()
```

Run Now

[log in](https://console.integration.app/login?returnTo=https%3A%2F%2Fconsole.integration.app%2Fdocs%2Fintegration-ui%2Fflows) to run this example

Alternatively, you can embed Flow Instance editor directly into specific element:

React

Copy

```jsx
function FlowBuilderEmbedding() {
  const targetId = 'flow-builder-emdedding'
  const integrationApp = useIntegrationApp()
  const targetRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    void integrationApp
      .flowInstance({
        flowKey: parameters.FLOW_KEY,
        integrationKey: parameters.INTEGRATION_KEY,
        autoCreate: true,
      })
      .embedEditor({
        mountTargetSelector: `[data-container-id="${targetId}"]`,
      })
  }, [\
    parameters.FLOW_KEY,\
    parameters.INTEGRATION_KEY,\
    integrationApp\
  ])

  return (
    <div
      style={{ height: '490px' }}
      data-container-id={targetId}
      ref={targetRef}
    ></div>
  )
}
```

Run Now

Please [log in](https://console.integration.app/login?returnTo=https%3A%2F%2Fconsole.integration.app%2Fdocs%2Fintegration-ui%2Fflows) to run this example

## See Also

#### [Custom Flow UI](https://console.integration.app/docs/integration-ui/flows/custom)

Managing customer flows instances from inside your applications.

Integration.app is free to try. It takes just one click to get started.

Login and Try it Yourself

- ### On this page

- [Flow Instance editor](https://console.integration.app/docs/integration-ui/flows#flow-instance-editor)
- [See Also](https://console.integration.app/docs/integration-ui/flows#see-also)

Docs · Integration Console

[iframe](https://td.doubleclick.net/td/rul/11398203743?random=1747732520268&cv=11&fst=1747732520268&fmt=3&bg=ffffff&guid=ON&async=1&gtm=45je55g2v9171934834z8892090687za200zb892090687&gcd=13l3l3l3l1l1&dma=0&tag_exp=101509157~103116026~103130495~103130497~103136993~103136995~103200004~103207802~103233427~103252644~103252646~103263073~103301114~103301116&ptag_exp=101509157~102015665~103116026~103130498~103130500~103136993~103136995~103200004~103207802~103233427~103252644~103252646~103263073~103301114~103301116&u_w=1280&u_h=1024&url=https%3A%2F%2Fconsole.integration.app%2Fdocs%2Fintegration-ui%2Fflows&hn=www.googleadservices.com&frm=0&tiba=Docs%20%C2%B7%20Integration%20Console&npa=0&pscdl=noapi&auid=1351234966.1747732520&uaa=x86&uab=64&uafvl=Chromium%3B136.0.7103.113%7CGoogle%2520Chrome%3B136.0.7103.113%7CNot.A%252FBrand%3B99.0.0.0&uamb=0&uam=&uap=Linux%20x86_64&uapv=6.6.72&uaw=0&fledge=1&data=event%3Dgtag.config)[iframe](https://td.doubleclick.net/td/rul/11474966929?random=1747732520321&cv=11&fst=1747732520321&fmt=3&bg=ffffff&guid=ON&async=1&gtm=45je55g2v9171934834z8892090687za200zb892090687&gcd=13l3l3l3l1l1&dma=0&tag_exp=101509157~103116026~103130495~103130497~103136993~103136995~103200004~103207802~103233427~103252644~103252646~103263073~103301114~103301116&ptag_exp=101509157~102015665~103116026~103130498~103130500~103136993~103136995~103200004~103207802~103233427~103252644~103252646~103263073~103301114~103301116&u_w=1280&u_h=1024&url=https%3A%2F%2Fconsole.integration.app%2Fdocs%2Fintegration-ui%2Fflows&hn=www.googleadservices.com&frm=0&tiba=Docs%20%C2%B7%20Integration%20Console&npa=0&pscdl=noapi&auid=1351234966.1747732520&uaa=x86&uab=64&uafvl=Chromium%3B136.0.7103.113%7CGoogle%2520Chrome%3B136.0.7103.113%7CNot.A%252FBrand%3B99.0.0.0&uamb=0&uam=&uap=Linux%20x86_64&uapv=6.6.72&uaw=0&fledge=1&data=event%3Dgtag.config)[iframe](https://td.doubleclick.net/td/rul/11474966929?random=1747732520334&cv=11&fst=1747732520334&fmt=3&bg=ffffff&guid=ON&async=1&gcl_ctr=1&gtm=45je55g2v9171934834z8892090687za200zb892090687&gcd=13l3l3l3l1l1&dma=0&tag_exp=101509157~103116026~103130495~103130497~103136993~103136995~103200004~103207802~103233427~103252644~103252646~103263073~103301114~103301116&ptag_exp=101509157~102015665~103116026~103130498~103130500~103136993~103136995~103200004~103207802~103233427~103252644~103252646~103263073~103301114~103301116&u_w=1280&u_h=1024&url=https%3A%2F%2Fconsole.integration.app%2Fdocs%2Fintegration-ui%2Fflows&label=9M_TCKCTp5oaEJGz2N8q&hn=www.googleadservices.com&frm=0&tiba=Docs%20%C2%B7%20Integration%20Console&value=0&bttype=purchase&npa=0&pscdl=noapi&auid=1351234966.1747732520&uaa=x86&uab=64&uafvl=Chromium%3B136.0.7103.113%7CGoogle%2520Chrome%3B136.0.7103.113%7CNot.A%252FBrand%3B99.0.0.0&uamb=0&uam=&uap=Linux%20x86_64&uapv=6.6.72&uaw=0&ec_mode=a&fledge=1&capi=1&_tu=Cg&em=tv.1&ct_cookie_present=0)