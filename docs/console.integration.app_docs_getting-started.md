---
url: "https://console.integration.app/docs/getting-started"
title: "Docs · Integration Console"
---

[Integration.app](https://integration.app/)

`` `Ctrl` + `K`

[NPM packages](https://www.npmjs.com/~integration.app) [GitHub organization](https://github.com/integration-app)

- [Authentication](https://console.integration.app/docs/getting-started/authentication)
- [Front End](https://console.integration.app/docs/getting-started/front-end)
- [Backend](https://console.integration.app/docs/getting-started/backend)
- [Self-hosting](https://console.integration.app/docs/getting-started/self-hosting)

# Getting Started

To build your first integration use case with any number of external apps, you need to:

1. Select apps you want to integrate with.
2. Connect your app to our platform.
3. Add integration logic and UI to your product code using our [universal building blocks](https://console.integration.app/docs/membrane/interfaces).
4. Generate app-specific implementations for the building blocks you used.

Let's do it step by step.

## 1\. Connect External Apps

### 1.1. Add external apps

To start, select one or more external apps you want to integrate with. You can do it from the [Apps](https://console.integration.app/w/0/external-apps/integrations) page.

Adding External Apps![Adding External Apps](https://console.integration.app/images/docs/add-apps.png)

To keep things simple, start with an app that:

- Has a pre-built connector (most popular apps do).
- You have an account with.

If you are not sure which app to start with, try [Hubspot](https://www.hubspot.com/).
It has a free tier and lets you test most of the features you may need (like custom fields or webhooks).

### 1.2. Configure connector parameters (optional)

Some apps require you to provide parameters for a connector such as your OAuth client ID and secret.
We constantly work to make integrations zero-config by providing default parameters, so chances are you can just skip this step.

You can tell whether you need to provide additional configuration by checking the status of the app. If it's red - you are missing something and can find details in the error message:

Adding integrations![Adding integrations](https://console.integration.app/images/docs/integration-missing-parameters.png)

## 2\. Connect your app

You can use integrations both on your [front-end](https://console.integration.app/docs/getting-started/front-end) and [back-end](https://console.integration.app/docs/getting-started/backend).

At the very least, you need to do the following:

### 2.1. Set up a front-end SDK

To connect your customer accounts and use integrations from your front-end, you need to install an SDK. You can choose from one of these options:

#### [React](https://console.integration.app/docs/getting-started/front-end/react)

Add our React package to start building your integration UI.

#### [Vue.js](https://console.integration.app/docs/getting-started/front-end/vue)

Use Vue.js with our Javascript SDK to start building your integration UI.

#### [Javascript SDK](https://console.integration.app/docs/getting-started/front-end/javascript)

Use integration.app in your app's front-end.

### 2.2. Create a Connection

Before running integrations, you need to connect your customer's account in an external application. It creates a **Connection** object that stores and refreshes the customer's credentials.

You can use one of our pre-built UI components (recommended for quick start) or build a fully custom UI.

#### [Integrations Catalog](https://console.integration.app/docs/integration-ui/integration-list)

Display a list of available integrations and let user configure them.

#### [Custom List of Integrations](https://console.integration.app/docs/integration-ui/integration-list/custom)

Show available integrations, connect and disconnect external apps.

#### [Connection UI](https://console.integration.app/docs/integration-ui/connection)

Create a new connection to a specific integration.

#### [Custom Connection UI](https://console.integration.app/docs/integration-ui/connection/custom)

Building "Connect" UI that fully blends into your app.

You can see the list of all the customer connections on the [Connections](https://console.integration.app/w/0/deployments/connections) page.

## 3\. Add integration logic and UI

To make integrations available to your customers, you need to add them to your app.

We offer a large variety of [building blocks](https://console.integration.app/docs/membrane/interfaces) and [UI components](https://console.integration.app/docs/integration-ui) you can use,
and you can always use custom code if none of them fit your needs.

To get started fast, we recommend adding one of the common pre-built scenarios you can find on the [Scenarios](https://console.integration.app/w/0/scenarios) page.

Adding integration scenario![Adding integration scenario](https://console.integration.app/images/docs/add-scenario.png)

After adding a scenario, you will see a ToDo list with the steps to add it to your app:

Scenario ToDo items![Scenario ToDo items](https://console.integration.app/images/docs/scenario-todo.png)

If none of the pre-built scenarios work for you, you can always start from scratch.
We have prepared a guide on how to choose the right way for building your use case: [Interfaces](https://console.integration.app/docs/membrane/interfaces).

## 4\. Generate app-specific implementations

Whenever your app interacts with external apps, you do it through one of the [universal building blocks](https://console.integration.app/docs/membrane/interfaces).
You can generate any number of app-specific implementations for building blocks:

App-specific Implementations![App-specific Implementations](https://console.integration.app/images/docs/app-specific-implementations.png)

If our platfrom has enough information about a given app through its connector, we will automatically generate an app-specific implementation for the building block.
If not - you can fill the gaps via console or in the IDE of your choice.

## Next Steps

#### [Interfaces](https://console.integration.app/docs/membrane/interfaces)

Configure ways to interact with external apps.

#### [Integration UI](https://console.integration.app/docs/integration-ui)

Building UX you need fast with pre-built or fully custom UI components.

#### [Use Case Guides](https://console.integration.app/docs/use-cases)

How to build common integration use cases.

#### [Self-hosting](https://console.integration.app/docs/getting-started/self-hosting)

Guide for self-hosting Membrane in your own infrastructure.

Integration.app is free to try. It takes just one click to get started.

Login and Try it Yourself

- ### On this page

- [1\. Connect External Apps](https://console.integration.app/docs/getting-started#1-connect-external-apps)
  - [1.1. Add external apps](https://console.integration.app/docs/getting-started#11-add-external-apps)
  - [1.2. Configure connector parameters (optional)](https://console.integration.app/docs/getting-started#12-configure-connector-parameters-optional)
- [2\. Connect your app](https://console.integration.app/docs/getting-started#2-connect-your-app)
  - [2.1. Set up a front-end SDK](https://console.integration.app/docs/getting-started#21-set-up-a-front-end-sdk)
  - [2.2. Create a Connection](https://console.integration.app/docs/getting-started#22-create-a-connection)
- [3\. Add integration logic and UI](https://console.integration.app/docs/getting-started#3-add-integration-logic-and-ui)
- [4\. Generate app-specific implementations](https://console.integration.app/docs/getting-started#4-generate-app-specific-implementations)
- [Next Steps](https://console.integration.app/docs/getting-started#next-steps)

Docs · Integration Console