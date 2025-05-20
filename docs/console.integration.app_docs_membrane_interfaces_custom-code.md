---
url: "https://console.integration.app/docs/membrane/interfaces/custom-code"
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

# Running Custom Code

Integration Engine allows you to run custom code written in Javascript or Typescript.

You can use it to implement complex logic that is hard to do with mapping and existing abstractions.

Custom code must export a default function (that can be async).
This function will be called with the [Execution Context](https://console.integration.app/docs/membrane/references/execution-context)
depending on where this function is used.

## Custom Code Example

```javascript
export default async function myCustomFunction(context) {
    // Get data from an external app associated with the current integration
    const externalData = await context.externalApiClient.get('/some-data')

    // Pass this data to your app's API
    await context.internalApiClient.post('/some-data', externalData)
}
```

## Logging

Anything you write to stdout will be stored as execution logs of the custom code. The simplest way to do it is to use `console.log`:

```javascript
export default function myCustomFunction() {
    console.log('Hello, world!')
}
```

If you want to output complex data, you should JSON-serialize it:

```javascript
export default function myCustomFunction() {
    console.log(JSON.stringify({hello: 'world'}))
}
```

Integration.app is free to try. It takes just one click to get started.

Login and Try it Yourself

- ### On this page

- [Custom Code Example](https://console.integration.app/docs/membrane/interfaces/custom-code#custom-code-example)
- [Logging](https://console.integration.app/docs/membrane/interfaces/custom-code#logging)

Docs · Integration Console