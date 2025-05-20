---
url: "https://console.integration.app/docs/membrane/interfaces/field-mappings"
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

# Field Mappings

Field Mappings allow you to map data fields between a [Data Source](https://console.integration.app/docs/membrane/interfaces/data-sources) and your app.

## Configuring Field Mapping

To configure field mapping, you provide:

- External Fields define the [Data Schema](https://console.integration.app/docs/membrane/references/data-schemas) of the fields in the external app.
- Internal Fields define the schema of fields in your app. It can be generated automatically based on the mapping configuration, defined statically, or calculated dynamically via [Internal Data Schemas](https://console.integration.app/docs/membrane/interfaces/internal-data-schemas)
- Direction: import, export, or bi-directional.
- Export Value: mapping from your app to external app.
- Import Value: mapping from external app to your app.

Depending on the level of abstraction (universal, integration, or customer level), different set of fields will be available for mapping:

- Universal: fields from the Universal Data Model configured in the data source will be available.
- Integration: standard fields from the Data Collection data source is pointing to will be available.
- Customer: connection-specific fields from the data collection that data source is pointing to will be available, including any custom fields.

## Applying Field Mapping

When field mapping is applied in a Flow or an Action, the data will be transformed based on the customer-level field mapping configuration.

You will see the mapping and the result in the Flow or Action logs.

### Fields in Create and Update methods

If `create` or `update` methods for a Data Collection mapping is used for specify supported fields, only those fields will stay in the mapping, ignoring values of the rest of the fields.

This is done to let you use the same mapping for different methods, and to avoid errors due to extra fields.

For example, if `type` field is supported in the `create` method, but not supported in the `update` method and you have this field in the field mapping, it will not be sent to the `update` method.

## Learn More

#### [Field Mappings](https://console.integration.app/docs/integration-ui/field-mappings)

Drop-in UI for a single field mapping.

#### [Data Schemas](https://console.integration.app/docs/membrane/references/data-schemas)

Representing data structures used in integrations.

#### [Data Sources](https://console.integration.app/docs/membrane/interfaces/data-sources)

Configuring access to data in external apps.

#### [Internal Data Schemas](https://console.integration.app/docs/membrane/interfaces/internal-data-schemas)

Reusing data schemas between integration elements.

#### [Internal Events](https://console.integration.app/docs/membrane/interfaces/internal-events)

Reacting to events in your app.

Integration.app is free to try. It takes just one click to get started.

Login and Try it Yourself

- ### On this page

- [Configuring Field Mapping](https://console.integration.app/docs/membrane/interfaces/field-mappings#configuring-field-mapping)
- [Applying Field Mapping](https://console.integration.app/docs/membrane/interfaces/field-mappings#applying-field-mapping)
  - [Fields in Create and Update methods](https://console.integration.app/docs/membrane/interfaces/field-mappings#fields-in-create-and-update-methods)
- [Learn More](https://console.integration.app/docs/membrane/interfaces/field-mappings#learn-more)

Docs · Integration Console