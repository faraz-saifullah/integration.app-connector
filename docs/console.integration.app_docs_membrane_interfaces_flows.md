---
url: "https://console.integration.app/docs/membrane/interfaces/flows"
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
    - [Nodes](https://console.integration.app/docs/membrane/interfaces/flows/nodes)
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

# Flows

Flows let you build multistep integration logic out of other Integration Elements.
Flow starts with a Trigger and proceed through a set of Nodes connected by Links.
By arranging Triggers, Nodes, and Links, you can build any integration logic you need.

You apply logic described in a Flow to a [Connection](https://console.integration.app/docs/membrane/apps/connections) by creating and running a Flow Instance.

## Triggers

Triggers are special Nodes that launch the flow.
They allow you to start flow with an [API request](https://console.integration.app/docs/membrane/interfaces/flows/nodes/api-trigger),
on [Schedule](https://console.integration.app/docs/membrane/interfaces/flows/nodes/schedule-trigger),
when a [Data Record is created in an external app](https://console.integration.app/docs/membrane/interfaces/flows/nodes/data-record-created-trigger) ,
when an [Event happens in your app](https://console.integration.app/docs/membrane/interfaces/flows/nodes/app-event-trigger), etc.

Flows can have multiple triggers if you want to reuse the same integration logic in multiple scenarios and don't want to create multiple flows.

## Nodes and Links

Each trigger is connected to one or more [Nodes](https://console.integration.app/docs/membrane/interfaces/flows/nodes) with Links.
Each node, in turn, can be connected to one or more downstream nodes. This continues until there are no more nodes and the flow ends.

By default, output of each node (starting with a Trigger) is passed on as Input for each of the following nodes.
You can change that by applying filters to Links between nodes using the "Links" tab of the node configuration.
You can create branching in the flow by sending some outputs to one node and other outputs to another node.

Outputs of all the upstream nodes can be used as variables for configuring the downstream nodes.

## Conditional Links

Links between nodes can be conditional: they can filter which outputs of the previous node they accept and which they do not.
If a link filters out an output of the previous node, it does not go further in the flow.

This lets you create different types of branching:

- if/else: if condition is met, go one way, if not, go another way
- switch: depending on the outputs of the nodes so far, go one way or another
- all: run multiple paths of the flow in parallel
- on error: run one path if there is no error, another path if there is an error

## Inputs and Outputs

Flow run is started from a specific trigger that accepts one or more `inputs`.

Each input results in a `run` of a first node in the flow (usually trigger). Output of each node is added to the input of the following nodes under the node's key.

As a result, input for each node looks like this:

```markup
{
  ...original flow input,
  "<previus-node-key>": "<previous node output>",
  "<another-previous-node-key>": "<another previous node output>"
}
```

## Node Variables

When configuring nodes, you can use the following variables:

- `input` \- combination of all the outputs of the previous nodes. In Triggers, input is data passed from outside the platform when the flow is started.
- `flow` \- information about the curren flow.
- `flowInstance` \- information about the current [Flow Instance](https://console.integration.app/docs/membrane/customers/flow-instances).
- `user` \- information about the current [User](https://console.integration.app/docs/membrane/customers/customers).

## Concurrency

When a node is run with multiple inputs, it will be processing them one by one.

To change this behavior, you can set the node's `concurrency` property of a node to a number greater than 1, like this:

```yaml
nodes:
  node-with-concurrency:
    type: create-data-record
    concurrency: 10
```

## Error Handling

By default, if a node run fails, the output does not go further in the flow.
If node had multiple inputs and therefore multiple runs and some of them failed, it does not affect other runs - they will still continue down the flow.

The default behavior can be changed by setting the node's `onError` property to `continue`.
In this case, `error` field containing the error data will be added to variables available for configuring node links.

You can use it like this:

```yaml
# flow
nodes:
    key: node-that-can-error
    type: http-api-request
    config:
        request:
            uri: https://non-existing-domain.com
    onError: continue
    links:
        - key: on-success-node
          filter:
            $eval:
                $var: $.error
            isEmpty: true
        - key: on-error-node
          filter:
            $eval:
                $var: $.error
            isNotEmpty: true
```

This node will not stop execution on error, but instead will continue to the next node.

In this situation, the node run status will be set to `completed` and it will not be displayed as error in the flow run UI.

## Testing Flows

When you build a flow, it is useful to test with real data.
You can create or select a Connection and User to test the flow with in the testing panel at the bottom of the screen.
Then you can provide the input (if needed) and run the flow.

A [Flow Instance](https://console.integration.app/docs/membrane/customers/flow-instances) will be automatically created or updated to the last flow configuration
and a [Flow Run](https://console.integration.app/docs/membrane/monitoring/logs/flow-runs) will be launched with the selected parameters.

### Running Flows

To launch the flow, you need to deploy a [Flow Instance](https://console.integration.app/docs/membrane/customers/flow-instances) to a customer connection.

The log of running flows can be found on the [Flow Runs](https://console.integration.app/w/0/activity/flow-runs) page.

Integration.app is free to try. It takes just one click to get started.

Login and Try it Yourself

- ### On this page

- [Triggers](https://console.integration.app/docs/membrane/interfaces/flows#triggers)
- [Nodes and Links](https://console.integration.app/docs/membrane/interfaces/flows#nodes-and-links)
- [Conditional Links](https://console.integration.app/docs/membrane/interfaces/flows#conditional-links)
- [Inputs and Outputs](https://console.integration.app/docs/membrane/interfaces/flows#inputs-and-outputs)
- [Node Variables](https://console.integration.app/docs/membrane/interfaces/flows#node-variables)
- [Concurrency](https://console.integration.app/docs/membrane/interfaces/flows#concurrency)
- [Error Handling](https://console.integration.app/docs/membrane/interfaces/flows#error-handling)
- [Testing Flows](https://console.integration.app/docs/membrane/interfaces/flows#testing-flows)
  - [Running Flows](https://console.integration.app/docs/membrane/interfaces/flows#running-flows)

Docs · Integration Console