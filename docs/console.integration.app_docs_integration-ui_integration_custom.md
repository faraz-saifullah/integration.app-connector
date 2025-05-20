---
url: "https://console.integration.app/docs/integration-ui/integration/custom"
title: "Docs · Integration Console"
---

[Integration.app](https://integration.app/)

`` `Ctrl` + `K`

[NPM packages](https://www.npmjs.com/~integration.app) [GitHub organization](https://github.com/integration-app)

- [Integrations Catalog](https://console.integration.app/docs/integration-ui/integration-list)
- [Connection UI](https://console.integration.app/docs/integration-ui/connection)
- [Integration](https://console.integration.app/docs/integration-ui/integration)
  - [Custom Integration UI](https://console.integration.app/docs/integration-ui/integration/custom)
- [Flows](https://console.integration.app/docs/integration-ui/flows)
- [Data Sources](https://console.integration.app/docs/integration-ui/data-sources)
- [Field Mappings](https://console.integration.app/docs/integration-ui/field-mappings)

# Custom Integration UI

This article describes how to build UI for configuring a single integration after your customer created a Connection.

If you are looking for how to create a Connection in first place, check out [Custom Connection UI](https://console.integration.app/docs/integration-ui/connection/custom).

## Get Integration

To get information about the integration and its connection, do the following:

Javascript

[How to run it in your app](https://console.integration.app/docs/getting-started/front-end/javascript)

Copy

```javascript
const integration = await integrationApp.integration('{INTEGRATION_KEY}').get()
```

Run Now

[log in](https://console.integration.app/login?returnTo=https%3A%2F%2Fconsole.integration.app%2Fdocs%2Fintegration-ui%2Fintegration%2Fcustom) to run this example

To understand the state of the connection for a given integration, look at the

You may be interested in the following fields to display in the UI:

|     |     |
| --- | --- |
| `connection` | If this integration has a connection established for the current user, this field will be non-empty |
| `connection.disconnected` | If a connection is disconnected and requires user to re-connect, this flag will be set to true. |

## Re-connect and Disconnect

You can use the following code to re-connect an integration if it was disconnected or if user wants to re-connect for any other reason:

Javascript

[How to run it in your app](https://console.integration.app/docs/getting-started/front-end/javascript)

Copy

```javascript
await integrationApp.integration('{INTEGRATION_KEY}').openNewConnection()
```

Run Now

[log in](https://console.integration.app/login?returnTo=https%3A%2F%2Fconsole.integration.app%2Fdocs%2Fintegration-ui%2Fintegration%2Fcustom) to run this example

Or a custom version of this UI: [Custom Connection UI](https://console.integration.app/docs/integration-ui/connection/custom).

You can disconnect the integration using the following code:

Javascript

[How to run it in your app](https://console.integration.app/docs/getting-started/front-end/javascript)

Copy

```javascript
await integrationApp.connection('{INTEGRATION_KEY}').archive()
```

Run Now

[log in](https://console.integration.app/login?returnTo=https%3A%2F%2Fconsole.integration.app%2Fdocs%2Fintegration-ui%2Fintegration%2Fcustom) to run this example

## Manage Customer-level Elements

To know which [Flows](https://console.integration.app/docs/membrane/interfaces/flows), [Actions](https://console.integration.app/docs/membrane/interfaces/actions),
[Data Sources](https://console.integration.app/docs/membrane/interfaces/data-sources), or [Field Mappings](https://console.integration.app/docs/membrane/interfaces/field-mappings)
are configured for the current integration, you can get their list this way:

Javascript

[How to run it in your app](https://console.integration.app/docs/getting-started/front-end/javascript)

Copy

```javascript
const { items: flowInstances } = await integrationApp.connection('{INTEGRATION_KEY}').flows.list()

const { items: actionInstances } = await integrationApp.connection('{INTEGRATION_KEY}').actions.list()

const { items: dataSourceInstances } = await integrationApp.connection('{INTEGRATION_KEY}').dataSources.list()

const { items: fieldMappingInstances } = await integrationApp.connection('{INTEGRATION_KEY}').fieldMappings.list()
```

Run Now

[log in](https://console.integration.app/login?returnTo=https%3A%2F%2Fconsole.integration.app%2Fdocs%2Fintegration-ui%2Fintegration%2Fcustom) to run this example

Then you can use the corresponding elements API and UI to manage them:

| Element | API | UI |
| --- | --- | --- |
| Flow | [Flows API](https://console.integration.app/docs/membrane/customers/flow-instances) | [Flows UI](https://console.integration.app/docs/integration-ui/flows) |
| Data Source | [Data Sources API](https://console.integration.app/docs/membrane/customers/data-source-instances) | [Data Sources UI](https://console.integration.app/docs/integration-ui/data-sources) |
| Field Mapping | [Field Mappings API](https://console.integration.app/docs/membrane/customers/field-mapping-instances) | [Field Mappings UI](https://console.integration.app/docs/integration-ui/field-mappings) |

Integration.app is free to try. It takes just one click to get started.

Login and Try it Yourself

- ### On this page

- [Get Integration](https://console.integration.app/docs/integration-ui/integration/custom#get-integration)
- [Re-connect and Disconnect](https://console.integration.app/docs/integration-ui/integration/custom#re-connect-and-disconnect)
- [Manage Customer-level Elements](https://console.integration.app/docs/integration-ui/integration/custom#manage-customer-level-elements)

Docs · Integration Console