---
url: "https://console.integration.app/docs/membrane/interfaces/actions"
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

# Actions

Action represents a single request or query your application wants to make in an external application. For example, "Create a task", "Get list of users", or "Send a message".

Typically you use actions in the following way:

1. Create a Universal Action that works across multiple external apps.
2. Apply it to relevant integrations.
3. (optional) Adjust integration-specific actions if default implementation doesn't work for you.
4. (optional) Build UI to let your customers configure their Actions.
5. Run actions via front-end SDK or Rest API.

## Create a Universal Action

Universal Actions let you use the same code and UI to run similar actions across multiple external applications.
They provide a standard interface as well as default implementation for each integration you apply them to.

Universal Actions![Universal Actions](https://console.integration.app/images/docs/universal-actions.png)

To create a Universal Action, go to the [Actions](https://console.integration.app/w/0/actions) page.

An action is defined by:

- Input schema - [Data Schema](https://console.integration.app/docs/membrane/references/data-schemas) of any data you want to provide to the action as an input.
- Action Type - type of action you want to create. It will be used to automatically generate integration-specific actions whenever possible. You can skip this step and configure the action for each integration separately.
- Configuration depending on the action type.
- Output mapping if you want to get the response in a different format than provided by default.
- Output schema - a data schema of the response you expect from the action. It is automatically determined from the implementation, but you can change it if you want.

Input and output schema of the universal action will act as a guide for integration-specific actions.

## Apply Universal Action to Relevant Integrations

After you created a Universal Action, you can apply it to every application you want to use it with.

Apply Universal Action![Apply Universal Action](https://console.integration.app/images/docs/apply-universal-action.png)

In many cases, this will produce a working implementation for each application by default. In some cases you will need to manually adjust or create an integration-specific action.
You will know when you need to do it when you see a "missing configuration" indicator near integration-specific action.

You should always keep input and output of integration-specific actions match input and output of the universal action.
This will let you use the same code and UI for working with the action regardless of which application they are executed against.

## Customize integration-specific Actions

If you want to change the default behavior of the action for a given external app, you can do it by editing the integration-specific action.

You can edit any aspect of integration-specific action except its input schema - it needs to be consistent across all implementations of the universal action.
We also highly recommend to have output schema consistent between all implementations of the universal action, but it is not enforced.

## Test Actions

You can test an action you created against any integration by creating a test connection and running the action against it.

You can do it on the "Test" tab of the Action page.

## Let your customers configure Actions

To let your customers configure actions for the use case, you can use user-customizable integration elements:

- [Data Sources](https://console.integration.app/docs/membrane/interfaces/data-sources)
- [Field Mappings](https://console.integration.app/docs/membrane/interfaces/field-mappings)
- [Internal Data Schemas](https://console.integration.app/docs/membrane/interfaces/internal-data-schemas)

Depending on the type of the action, you can enable them by turning on "Use Field Mapping" or "Use Data Source" toggle in the action configuration:

Use Shared Data Source![Use Shared Data Source](https://console.integration.app/images/docs/use-shared-data-source.png)

After adding these elements to the Action configuration, see [UI](https://console.integration.app/docs/integration-ui) section of the docs to learn how to use or build customization UI inside your app.

## Execute Actions

To run actions, you can use our front-end SDK or Rest API.

See more here: [Action Instances](https://console.integration.app/docs/membrane/customers/action-instances)

## Use Actions in Flows

After you created an action, you can re-use it in [Flows](https://console.integration.app/docs/membrane/interfaces/flows) with the help of the "Run Action" node.

Integration.app is free to try. It takes just one click to get started.

Login and Try it Yourself

- ### On this page

- [Create a Universal Action](https://console.integration.app/docs/membrane/interfaces/actions#create-a-universal-action)
- [Apply Universal Action to Relevant Integrations](https://console.integration.app/docs/membrane/interfaces/actions#apply-universal-action-to-relevant-integrations)
- [Customize integration-specific Actions](https://console.integration.app/docs/membrane/interfaces/actions#customize-integration-specific-actions)
- [Test Actions](https://console.integration.app/docs/membrane/interfaces/actions#test-actions)
- [Let your customers configure Actions](https://console.integration.app/docs/membrane/interfaces/actions#let-your-customers-configure-actions)
- [Execute Actions](https://console.integration.app/docs/membrane/interfaces/actions#execute-actions)
- [Use Actions in Flows](https://console.integration.app/docs/membrane/interfaces/actions#use-actions-in-flows)

Docs · Integration Console