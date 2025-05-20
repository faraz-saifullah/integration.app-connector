---
url: "https://console.integration.app/docs/membrane/customers/data-link-table-instances"
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

# Data Link Table Instances

Each pair of Data Link Table and [Connection](https://console.integration.app/docs/membrane/apps/connections) will have a separate Data Link Table Instance.

You can find all the Data Link Table Instances on the [Instances](https://console.integration.app/w/0/deployments/data-link-table-instances) page.
If you click on a given Data Link Instance, you can see and modify the list of Data Links in that instance.

Whenever you create a link from one record to another, it is recorded in a corresponding Data Link Table Instance.

## Data Links

Data Link is a record within Data Link Table Instance that has:

- externalRecordId - id of a record on the external app's side.
- appRecordId - id of a record on your app's side.
- direction - one of:
  - `export` \- link from your app to an external app.
  - `import` \- link from external app to your app.

### Creating Data Link

Data Link is created with the following data:

- dataLinkTableInstanceId - id of Data Link Table Instance associated with the record
- externalRecordId
- appRecordId
- direction - `export`, `import`, or `both`.

If direction `both` is selected then both `export` and `import` link will be created.

Only one link with the same `externalRecordId`, `appRecordId`, and `direction` can exist within a single Data Link Table Instance. If another one is created, it will overwrite the previously existing one.

### Finding Data Link

When finding a data link with a Flow Node or a Formula, you need to provide:

- dataLinkTableInstanceId
- direction
- recordId

Find External Record Id and Find App Record Id formulas provide `direction` automatically.

Integration.app is free to try. It takes just one click to get started.

Login and Try it Yourself

- ### On this page

- [Data Links](https://console.integration.app/docs/membrane/customers/data-link-table-instances#data-links)
  - [Creating Data Link](https://console.integration.app/docs/membrane/customers/data-link-table-instances#creating-data-link)
  - [Finding Data Link](https://console.integration.app/docs/membrane/customers/data-link-table-instances#finding-data-link)

Docs · Integration Console