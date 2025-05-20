---
url: "https://console.integration.app/docs/connector-builder"
title: "Docs · Integration Console"
---

[Integration.app](https://integration.app/)

`` `Ctrl` + `K`

[NPM packages](https://www.npmjs.com/~integration.app) [GitHub organization](https://github.com/integration-app)

- [Authentication](https://console.integration.app/docs/connector-builder/authentication)
- [API Specification](https://console.integration.app/docs/connector-builder/api)
- [Events](https://console.integration.app/docs/connector-builder/events)
- [Data Collections](https://console.integration.app/docs/connector-builder/data)
- [Operations](https://console.integration.app/docs/connector-builder/operations)
- [Global Webhooks](https://console.integration.app/docs/connector-builder/global-webhooks)
- [Methods](https://console.integration.app/docs/connector-builder/methods)

# Connector Builder

Connector Builder lets you modify public connectors or create new ones from scratch.

Each connector is just a set of YAML and JavaScript files transforming the underlying API into a consistent format.

Connectors![Connectors](https://console.integration.app/images/docs/connectors.png)

## Parameters

Some connectors (for example, all connectors that use oAuth authentication) can be configured with parameters.
Most of them have default parameters provided by integration.app that let connector work out of the box.

You can set your own parameters on the connector page.
For security reasons, connector parameters are write-only: you can set them, but you cannot read them back.

## Authentication

Every connector must have authentication configured.
It specifies how user interface for connecting the external application looks like,
how to get API credentials, and how to access the API using the credentials.

Full article: [Authentication](https://console.integration.app/docs/connector-builder/authentication)

## API Specification

API specification describes possible requests and responses that the API supports.

You can find and upload an existing API specification or generate one from the API documentation using built-in AI.

Having API specification as a part of a connector allows to configure API requests and responses with an easy-to-use UI - both in connector builder
and as a part of building an integration.

You can make API calls without API specification, but you will have to configure them manually, which is less straightforward.

Full article: [API Specification](https://console.integration.app/docs/connector-builder/api)

## API Operations

API Operations are automatically generated from the API specification whenever possible. You can add more operations manually.

Full article: [Operations](https://console.integration.app/docs/connector-builder/operations)

## Events

Events let you react to changes in the external application.

Full article: [Events](https://console.integration.app/docs/connector-builder/events)

## Data Collections

Data Collections let you read and write data from the external application in a consistent way.

Full article: [Data Collections](https://console.integration.app/docs/connector-builder/data)

## Global webhooks

Global webhooks let you handle webhooks that are configured on the OAuth application level rather than individually for each customer/connection.

Full article: [Global Webhooks](https://console.integration.app/docs/connector-builder/global-webhooks)

## Testing

After configuring authentication, you will be able to test the connector right from the connector builder.
To do this, create a test integration and then a connection.

This integration and connection are linked to your workspace. This will allow you to run any of your integrations with a connector you build right away.

## Versioning

When a new version of a connector is released to the library, you can update your connector to the latest version using the "Update" button on the connector page.

When you implement a new version of the custom connector, you can publish it and update any integrations using this connector.

Integration.app is free to try. It takes just one click to get started.

Login and Try it Yourself

- ### On this page

- [Parameters](https://console.integration.app/docs/connector-builder#parameters)
- [Authentication](https://console.integration.app/docs/connector-builder#authentication)
- [API Specification](https://console.integration.app/docs/connector-builder#api-specification)
- [API Operations](https://console.integration.app/docs/connector-builder#api-operations)
- [Events](https://console.integration.app/docs/connector-builder#events)
- [Data Collections](https://console.integration.app/docs/connector-builder#data-collections)
- [Global webhooks](https://console.integration.app/docs/connector-builder#global-webhooks)
- [Testing](https://console.integration.app/docs/connector-builder#testing)
- [Versioning](https://console.integration.app/docs/connector-builder#versioning)

Docs · Integration Console