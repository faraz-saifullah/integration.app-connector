---
url: "https://console.integration.app/docs/membrane/interfaces/scenarios"
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

# Scenarios

Universal integrations let you define a common logic that works across many external applications and customers.

We recommend organizing universal integrations in Scenarios that contain all the building blocks in one place.
Scenarios help you conveniently manage multiple pieces of integration logic across multiple applications.

Scenario Grid![Scenario Grid](https://console.integration.app/images/docs/scenario-grid.png)

To start building a universal integration, go to the [Scenarios](https://console.integration.app/w/0/scenarios) page and create a new one.

## Scenario Templates

For common use cases, we provide pre-built and well-tested scenario templates. You can use them as a starting point for your integration and then customize.

Create a Scenario![Create a Scenario](https://console.integration.app/images/docs/add-scenario.png)

After selecting scenario and integrations to apply it to, you can proceed to adding it to your app or customize it using the section below.

## Custom Scenarios

The main building blocks of a scenario are [Actions](https://console.integration.app/docs/membrane/interfaces/actions) and [Flows](https://console.integration.app/docs/membrane/interfaces/flows).

To choose whether to use Action or Flow, use this comparison table:

|  | Action | Flow |
| --- | --- | --- |
| Execution mode | Synchronous | Asynchronous |
| Max duration | 60 seconds | 50 minutes |
| Triggered by | API call | API Call, Event, Schedule |
| Logic complexity | Simple (usually one API call with transformations) | Complex (many calls, branches, cycles) |

If an Action works for you, you should use it. If you need to make it more complex later - you can re-use it in a flow.

After you've picked the main building block, see corresponding documentation for more details:

#### [Actions](https://console.integration.app/docs/membrane/interfaces/actions)

Executing individual actions in external applications.

#### [Flows](https://console.integration.app/docs/membrane/interfaces/flows)

Building multi-step integration logic.

## Dynamic Scenarios (Advanced)

When you do not know the exact logic of your integration ahead of time, you will need to use integration metadata to create it dynamically.

Typical use cases when this approach is needed:

- AI agent that picks actions dynamically based on the context.
- Complex integration logic that you want to keep on your application's side.

Integration Engine provides rich metadata about integrations, resources available through it, and any middleware you've created.
You can explore the available entities using [Data Collections](https://console.integration.app/docs/membrane/interfaces/data-collections).

Integration.app is free to try. It takes just one click to get started.

Login and Try it Yourself

- ### On this page

- [Scenario Templates](https://console.integration.app/docs/membrane/interfaces/scenarios#scenario-templates)
- [Custom Scenarios](https://console.integration.app/docs/membrane/interfaces/scenarios#custom-scenarios)
- [Dynamic Scenarios (Advanced)](https://console.integration.app/docs/membrane/interfaces/scenarios#dynamic-scenarios-advanced)

Docs · Integration Console