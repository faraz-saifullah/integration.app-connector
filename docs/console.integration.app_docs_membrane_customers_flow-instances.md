---
url: "https://console.integration.app/docs/membrane/customers/flow-instances"
title: "Docs · Integration Console"
---

[Integration.app](https://integration.app/)

`` `Ctrl` + `K`

[NPM packages](https://www.npmjs.com/~integration.app) [GitHub organization](https://github.com/integration-app)

- [External Apps](https://console.integration.app/docs/membrane/apps)
- [Interfaces](https://console.integration.app/docs/membrane/interfaces)
- [Customers](https://console.integration.app/docs/membrane/customers)
  - [Customers](https://console.integration.app/docs/membrane/customers/customers)
  - [Action Instances](https://console.integration.app/docs/membrane/customers/action-instances)
  - [Flow Instances](https://console.integration.app/docs/membrane/customers/flow-instances)
  - [Data Source Instances](https://console.integration.app/docs/membrane/customers/data-source-instances)
  - [Field Mapping Instances](https://console.integration.app/docs/membrane/customers/field-mapping-instances)
  - [Data Link Table Instances](https://console.integration.app/docs/membrane/customers/data-link-table-instances)
  - [App Event Subscriptions](https://console.integration.app/docs/membrane/customers/app-event-subscriptions)
  - [External Event Subscriptions](https://console.integration.app/docs/membrane/customers/external-event-subscriptions)
- [Monitoring & Troubleshooting](https://console.integration.app/docs/membrane/monitoring)
- [Security And Privacy](https://console.integration.app/docs/membrane/security-and-privacy)
- References

# Flow Instances

To configure or run flows for a given customer and connection, you need to get a Flow Instance.

Flow Instance has the following properties:

- `id` \- Unique identifier of the instance.
- `parameters` \- Parameters (matching `parametersSchema`) for this particular flow instance.
- `nodes` \- nodes and their configurations for this particular flow instance.
- `isCustomized` \- whether this data source was customized by your customer (path was changed, etc.)

Each node has the following properties:

- config: node configuration (you can update it when updating the flow instance)
- inputSchema: auto-generated schema for the node input (output of all the previous nodes)
- outputSchema: auto-generated schema for the node output (output of this node)

See details of how configuration looks for each node here: [Flow Nodes](https://console.integration.app/docs/membrane/interfaces/flows/nodes).

See available operations on flow instances here: [Flow API](https://console.integration.app/docs/membrane/customers/flow-instances).

## API

To run flows, you need to create a Flow Instance
for a specific [Customer Connection](https://console.integration.app/docs/membrane/apps/connections).

Each flow instance contains a copy of the flow with possible customization by your customers.

Whether a Flow Instance was customized could be determined by its `isCustomized` property.

### Get

You can select or create a Flow Instance using the following parameters:

- `flowKey` or `flowId` \- a [Flow](https://console.integration.app/docs/membrane/interfaces/flows) you want to create the instance for.
- `integrationKey`, `integrationId`, or `connectionId` \- a [Connection](https://console.integration.app/docs/membrane/apps/connections) you want to create the instance for.
- `autoCreate` (optional) - whether to create a flow instance if it does not exist yet.

Javascript

[How to run it in your app](https://console.integration.app/docs/getting-started/front-end/javascript)

Copy

```javascript
await integrationApp
  .connection('{INTEGRATION_KEY}')
  .flow('{FLOW_KEY}')
  .get()
```

Run Now

[log in](https://console.integration.app/login?returnTo=https%3A%2F%2Fconsole.integration.app%2Fdocs%2Fmembrane%2Fcustomers%2Fflow-instances) to run this example

### Run

To run a flow, do the following:

Javascript

[How to run it in your app](https://console.integration.app/docs/getting-started/front-end/javascript)

Copy

```javascript
await integrationApp
  .flowInstance('{FLOW_INSTANCE_ID}')
  .run({

    input: null
  })
```

Run Now

[log in](https://console.integration.app/login?returnTo=https%3A%2F%2Fconsole.integration.app%2Fdocs%2Fmembrane%2Fcustomers%2Fflow-instances) to run this example

The result will be a [Flow Run](https://console.integration.app/docs/membrane/monitoring/logs/flow-runs).
If you use REST API, you will get the flow run immediately, and it will be in "Queued" or "Running" state.
If you use a front-end SDK, it will return a promise that will resolve to a flow run when it is finished.

To get the output of the flow run, do the following:

Javascript

[How to run it in your app](https://console.integration.app/docs/getting-started/front-end/javascript)

Copy

```javascript
await integrationApp
  .flowRun('{FLOW_RUN_ID}')
  .getOutput()
```

Run Now

[log in](https://console.integration.app/login?returnTo=https%3A%2F%2Fconsole.integration.app%2Fdocs%2Fmembrane%2Fcustomers%2Fflow-instances) to run this example

Read more about running flows here: [Flow Runs](https://console.integration.app/docs/membrane/monitoring/logs/flow-runs)

### List

To list all the Flow Instances created for the current user, use the `find` method:

Javascript

[How to run it in your app](https://console.integration.app/docs/getting-started/front-end/javascript)

Copy

```javascript
await integrationApp
  .connection('{INTEGRATION_KEY}')
  .flows.list()
```

Run Now

[log in](https://console.integration.app/login?returnTo=https%3A%2F%2Fconsole.integration.app%2Fdocs%2Fmembrane%2Fcustomers%2Fflow-instances) to run this example

### Update

To update some fields of a Flow Instance, use the `patch` method:

Javascript

[How to run it in your app](https://console.integration.app/docs/getting-started/front-end/javascript)

Copy

```javascript
await integrationApp
  .connection('{INTEGRATION_KEY}')
  .flow('{FLOW_KEY}')
  .patch('{INPUT}')
```

Run Now

[log in](https://console.integration.app/login?returnTo=https%3A%2F%2Fconsole.integration.app%2Fdocs%2Fmembrane%2Fcustomers%2Fflow-instances) to run this example

### Enable or Disable

When a Flow Instance is created, it is enabled by default. You can disable or enable it back by patching the `enabled` property:

When Flow Instance is disabled, it will not be launched automatically with triggers such as [App Event Trigger](https://console.integration.app/docs/membrane/interfaces/flows/nodes/app-event-trigger).
It can still be launched via API or through management UI.

### Set up / Refresh

Setting up a flow instance will re-fetch all the dependencies (data sources, schemas, etc.) and recalculate dynamic fields.

Javascript

[How to run it in your app](https://console.integration.app/docs/getting-started/front-end/javascript)

Copy

```javascript
await integrationApp
  .connection('{INTEGRATION_KEY}')
  .flow('{FLOW_KEY}')
  .setup()
```

Run Now

[log in](https://console.integration.app/login?returnTo=https%3A%2F%2Fconsole.integration.app%2Fdocs%2Fmembrane%2Fcustomers%2Fflow-instances) to run this example

### Reset

Resetting a flow instance brings it to a default state, erasing all the customer configuration.

Javascript

[How to run it in your app](https://console.integration.app/docs/getting-started/front-end/javascript)

Copy

```javascript
await integrationApp
  .connection('{INTEGRATION_KEY}')
  .flow('{FLOW_KEY}')
  .reset()
```

Run Now

[log in](https://console.integration.app/login?returnTo=https%3A%2F%2Fconsole.integration.app%2Fdocs%2Fmembrane%2Fcustomers%2Fflow-instances) to run this example

### Archive

Javascript

[How to run it in your app](https://console.integration.app/docs/getting-started/front-end/javascript)

Copy

```javascript
await integrationApp
  .connection('{INTEGRATION_KEY}')
  .flow('{FLOW_KEY}')
  .archive()
```

Run Now

[log in](https://console.integration.app/login?returnTo=https%3A%2F%2Fconsole.integration.app%2Fdocs%2Fmembrane%2Fcustomers%2Fflow-instances) to run this example

## Multiple Flow Instances per Connection

By default, each pair of Connection and Flow will have only one Flow Instance.

In some cases you may want to create multiple copies of the flow for a given connection.
This can be archived by providing `instanceKey`. Each `instanceKey` will create a new Flow Instance.

Javascript

[How to run it in your app](https://console.integration.app/docs/getting-started/front-end/javascript)

Copy

```javascript
await integrationApp
  .connection('{INTEGRATION_KEY}')
  .flow('{FLOW_KEY}', { instanceKey: '{INSTANCE_KEY}' })
  .get({ autoCreate: true })
```

Run Now

[log in](https://console.integration.app/login?returnTo=https%3A%2F%2Fconsole.integration.app%2Fdocs%2Fmembrane%2Fcustomers%2Fflow-instances) to run this example

You can pass `instanceKey` to any method API / SDK method that works with flow instances.

Integration.app is free to try. It takes just one click to get started.

Login and Try it Yourself

- ### On this page

- [API](https://console.integration.app/docs/membrane/customers/flow-instances#api)
  - [Get](https://console.integration.app/docs/membrane/customers/flow-instances#get)
  - [Run](https://console.integration.app/docs/membrane/customers/flow-instances#run)
  - [List](https://console.integration.app/docs/membrane/customers/flow-instances#list)
  - [Update](https://console.integration.app/docs/membrane/customers/flow-instances#update)
  - [Enable or Disable](https://console.integration.app/docs/membrane/customers/flow-instances#enable-or-disable)
  - [Set up / Refresh](https://console.integration.app/docs/membrane/customers/flow-instances#set-up--refresh)
  - [Reset](https://console.integration.app/docs/membrane/customers/flow-instances#reset)
  - [Archive](https://console.integration.app/docs/membrane/customers/flow-instances#archive)
- [Multiple Flow Instances per Connection](https://console.integration.app/docs/membrane/customers/flow-instances#multiple-flow-instances-per-connection)

Docs · Integration Console