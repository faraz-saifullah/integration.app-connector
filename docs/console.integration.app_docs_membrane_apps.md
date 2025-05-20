---
url: "https://console.integration.app/docs/membrane/apps"
title: "Docs · Integration Console"
---

[Integration.app](https://integration.app/)

`` `Ctrl` + `K`

[NPM packages](https://www.npmjs.com/~integration.app) [GitHub organization](https://github.com/integration-app)

- [External Apps](https://console.integration.app/docs/membrane/apps)
  - [Connectors](https://console.integration.app/docs/membrane/apps/connectors)
  - [Connections](https://console.integration.app/docs/membrane/apps/connections)
- [Interfaces](https://console.integration.app/docs/membrane/interfaces)
- [Customers](https://console.integration.app/docs/membrane/customers)
- [Monitoring & Troubleshooting](https://console.integration.app/docs/membrane/monitoring)
- [Security And Privacy](https://console.integration.app/docs/membrane/security-and-privacy)
- References

# External Apps

You can add, configure, and remove your integrations with external apps from the [Apps](https://console.integration.app/w/0/external-apps/integrations) section of the console.

When adding apps, you can choose from a list of supported integrations we have in our library or write-in your own.

Adding External Apps![Adding External Apps](https://console.integration.app/images/docs/add-apps.png)

## Connector

To interact with an external app, it needs a [connector](https://console.integration.app/docs/membrane/apps/connectors).

For popular apps, you can usually find a connector in our library of public connectors.
For less popular apps, you can create a custom connector using [Connector Builder](https://console.integration.app/docs/connector-builder) or ask our Solutions team to do this for you (with a predictable cost and time).

### Configuring Connectors

Some connectors may require you to configure them. In those cases, there will be configuration documentation you can follow:

Missing connector parameters![Missing connector parameters](https://console.integration.app/images/docs/app-missing-parameters.png)

### Connector Versions

All connectors are versioned. A connector will never be updated without your consent. You can rely on the connector logic to be unchanged as long as version stays the same.

If there is a new version of a connector available, you will see a notification and will be able to update it in one click:

Adding Apps![Adding Apps](https://console.integration.app/images/docs/connector-version-update.png)

You can also switch to any other connector version by clicking on the current version number.

Connectors follow semantic versioning scheme, which means:

- If the last digit of the version is changed, it is a patch update. It usually includes bug fixes or minor improvements. It should be safe to update.
- If the middle digit is changed, it is a minor update. It usually includes new features or changes that are backward-compatible. It may include breaking changes, so you should read the changelog to see if it's safe to update.
- If the first digit is changed, it is a major update. It usually includes breaking changes. You should review the changes and test the integration before updating, or consider creating a new integration with the new connector version and deprecatin the current one.

### Switching Connectors

You can switch a connector used for this app to a different one. The most common scenario is switching between a public connector and a custom connector you've created.

Adding Apps![Adding Apps](https://console.integration.app/images/docs/app-change-connector.png)

Integration.app is free to try. It takes just one click to get started.

Login and Try it Yourself

- ### On this page

- [Connector](https://console.integration.app/docs/membrane/apps#connector)
  - [Configuring Connectors](https://console.integration.app/docs/membrane/apps#configuring-connectors)
  - [Connector Versions](https://console.integration.app/docs/membrane/apps#connector-versions)
  - [Switching Connectors](https://console.integration.app/docs/membrane/apps#switching-connectors)

Docs · Integration Console