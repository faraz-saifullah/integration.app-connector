---
url: "https://console.integration.app/docs/integration-ui/integration-list/custom"
title: "Docs · Integration Console"
---

[Integration.app](https://integration.app/)

`` `Ctrl` + `K`

[NPM packages](https://www.npmjs.com/~integration.app) [GitHub organization](https://github.com/integration-app)

- [Integrations Catalog](https://console.integration.app/docs/integration-ui/integration-list)
  - [Custom List of Integrations](https://console.integration.app/docs/integration-ui/integration-list/custom)
- [Connection UI](https://console.integration.app/docs/integration-ui/connection)
- [Integration](https://console.integration.app/docs/integration-ui/integration)
- [Flows](https://console.integration.app/docs/integration-ui/flows)
- [Data Sources](https://console.integration.app/docs/integration-ui/data-sources)
- [Field Mappings](https://console.integration.app/docs/integration-ui/field-mappings)

# UI for Managing Connections

Display the list of integrations, connect and disconnect external apps, configure connections.

## List Integrations

Your integration experience likely starts with a list of integrations your user can enable.

To get this list, use the following code:

Javascript

[How to run it in your app](https://console.integration.app/docs/getting-started/front-end/javascript)

Copy

```javascript
const { items: integrations } = await integrationApp.integrations.find()
```

Run Now

[log in](https://console.integration.app/login?returnTo=https%3A%2F%2Fconsole.integration.app%2Fdocs%2Fintegration-ui%2Fintegration-list%2Fcustom) to run this example

Integrations that already have a Connection created will have a `connection` property.
You can use it to indicate that the integration is already connected.

You can manage the list of available integrations on the [Integrations](https://console.integration.app/w/0/external-apps/integrations) page.

## List Connections

If you want to list all the connections user has created without listing all the available integrations, do this:

Javascript

[How to run it in your app](https://console.integration.app/docs/getting-started/front-end/javascript)

Copy

```javascript
const { items: connections } = await integrationApp.connections.find()
```

Run Now

[log in](https://console.integration.app/login?returnTo=https%3A%2F%2Fconsole.integration.app%2Fdocs%2Fintegration-ui%2Fintegration-list%2Fcustom) to run this example

## Connect

To connect a user's account in a specific third-party app, call this method:

Javascript

[How to run it in your app](https://console.integration.app/docs/getting-started/front-end/javascript)

Copy

```javascript
await integrationApp.integration('{INTEGRATION_KEY}').openNewConnection()
```

Run Now

[log in](https://console.integration.app/login?returnTo=https%3A%2F%2Fconsole.integration.app%2Fdocs%2Fintegration-ui%2Fintegration-list%2Fcustom) to run this example

Or if you want to create your own authentication UI, check out this guide: [Custom Connection UI](https://console.integration.app/docs/integration-ui/connection/custom)

## Disconnect

To disconnect a specific connection, call this method:

Javascript

[How to run it in your app](https://console.integration.app/docs/getting-started/front-end/javascript)

Copy

```javascript
await integrationApp.connection('{INTEGRATION_KEY}').archive()
```

Run Now

[log in](https://console.integration.app/login?returnTo=https%3A%2F%2Fconsole.integration.app%2Fdocs%2Fintegration-ui%2Fintegration-list%2Fcustom) to run this example

## Next Steps

#### [Custom Connection UI](https://console.integration.app/docs/integration-ui/connection/custom)

Building "Connect" UI that fully blends into your app.

#### [Custom Flow UI](https://console.integration.app/docs/integration-ui/flows/custom)

Managing customer flows instances from inside your applications.

#### [Custom Data Source UI](https://console.integration.app/docs/integration-ui/data-sources/custom)

Customizing data sources from inside your app.

#### [Custom Field Mapping UI](https://console.integration.app/docs/integration-ui/field-mappings/custom)

Letting your users map fields between your app and external apps.

Integration.app is free to try. It takes just one click to get started.

Login and Try it Yourself

- ### On this page

- [List Integrations](https://console.integration.app/docs/integration-ui/integration-list/custom#list-integrations)
- [List Connections](https://console.integration.app/docs/integration-ui/integration-list/custom#list-connections)
- [Connect](https://console.integration.app/docs/integration-ui/integration-list/custom#connect)
- [Disconnect](https://console.integration.app/docs/integration-ui/integration-list/custom#disconnect)
- [Next Steps](https://console.integration.app/docs/integration-ui/integration-list/custom#next-steps)

Docs · Integration Console