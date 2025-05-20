---
url: "https://console.integration.app/docs/integration-ui/flows/flow-parameters"
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

# Configure Flow Instance Parameters

To set flow parameters, patch the `parameters` property of the Flow Instance:

Javascript

[How to run it in your app](https://console.integration.app/docs/getting-started/front-end/javascript)

Copy

```javascript
const flowInstance = await integrationApp
  .connection('{INTEGRATION_KEY}')
  .flow('{FLOW_KEY}')
  .patch({
    parameters: "<flow instance parameters>"
  })
```

Run Now

[log in](https://console.integration.app/login?returnTo=https%3A%2F%2Fconsole.integration.app%2Fdocs%2Fintegration-ui%2Fflows%2Fflow-parameters) to run this example

The parameters must match the Parameters Schema you configured for the flow.

Integration.app is free to try. It takes just one click to get started.

Login and Try it Yourself

Docs · Integration Console