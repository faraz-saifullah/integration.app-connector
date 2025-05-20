---
url: "https://console.integration.app/docs/integration-ui/field-mappings/components"
title: "Docs · Integration Console"
---

[Integration.app](https://integration.app/)

`` `Ctrl` + `K`

[NPM packages](https://www.npmjs.com/~integration.app) [GitHub organization](https://github.com/integration-app)

- [Integrations Catalog](https://console.integration.app/docs/integration-ui/integration-list)
- [Connection UI](https://console.integration.app/docs/integration-ui/connection)
- [Integration](https://console.integration.app/docs/integration-ui/integration)
- [Flows](https://console.integration.app/docs/integration-ui/flows)
- [Data Sources](https://console.integration.app/docs/integration-ui/data-sources)
- [Field Mappings](https://console.integration.app/docs/integration-ui/field-mappings)
  - [Custom Field Mapping UI](https://console.integration.app/docs/integration-ui/field-mappings/custom)
  - [Field Mapping UI using components](https://console.integration.app/docs/integration-ui/field-mappings/components)

# Building Field Mapping UI using components

## Create a Field Mapping

Before building a field mapping UI, you need to create a [Field Mapping](https://console.integration.app/w/0/field-mappings).
Select what you want to map your fields from and to, and the mapping direction. Then continue.

## Configure a Field Mapping Instance

To configure field mapping instance it is enough to use a combination of specific hook and component.
In this case we can use `useFieldMappingInstance` hook and `DataInput` component.

Read more about `DataInput` [here](https://console.integration.app/docs/getting-started/front-end/react/components/data-input).

React

Copy

```jsx
import { useFieldMappingInstance, DataInput } from "@integration-app/react";

export function FieldMappingExample() {
  const { fieldMappingInstance, patch, loading, error } =
    useFieldMappingInstance({
      integrationKey: '{INTEGRATION_KEY}',
      fieldMappingKey: '{FIELD_MAPPING_KEY}',
      autoCreate: true,
    });

  if (loading) {
    return <p>Loading</p>;
  }

  if (error) {
    return <p>{String(error)}</p>;
  }

  if (!fieldMappingInstance) {
    return <p>Field mapping is missing</p>;
  }

  if (!fieldMappingInstance?.appSchema) {
    return <p>This field mapping does not have a schema to map to.</p>;
  }

  return (
    <DataInput
      schema={fieldMappingInstance.appSchema}
      value={fieldMappingInstance.importValue}
      variablesSchema={fieldMappingInstance.externalSchema}
      onChange={(importValue: unknown) => patch({ importValue })}
    />
  );
}
```

Run Now

Please [log in](https://console.integration.app/login?returnTo=https%3A%2F%2Fconsole.integration.app%2Fdocs%2Fintegration-ui%2Ffield-mappings%2Fcomponents) to run this example

#### [Field Mappings](https://console.integration.app/docs/membrane/interfaces/field-mappings)

Mapping fields between your app and external apps.

#### [Data Schemas](https://console.integration.app/docs/membrane/references/data-schemas)

Representing data structures used in integrations.

#### [Formulas](https://console.integration.app/docs/membrane/references/formulas)

Dynamically generate values when building Flows.

#### [DataInput](https://console.integration.app/docs/getting-started/front-end/react/components/data-input)

DataInput component description.

Integration.app is free to try. It takes just one click to get started.

Login and Try it Yourself

- ### On this page

- [Create a Field Mapping](https://console.integration.app/docs/integration-ui/field-mappings/components#create-a-field-mapping)
- [Configure a Field Mapping Instance](https://console.integration.app/docs/integration-ui/field-mappings/components#configure-a-field-mapping-instance)

Docs · Integration Console