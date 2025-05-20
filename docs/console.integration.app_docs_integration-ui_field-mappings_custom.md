---
url: "https://console.integration.app/docs/integration-ui/field-mappings/custom"
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

# Building Native Field Mapping UI

## Create a Field Mapping

Before building a field mapping UI, you need to create a [Field Mapping](https://console.integration.app/w/0/field-mappings).
Select what you want to map your fields from and to, and the mapping direction. Then continue.

## Get a Field Mapping Instance

To apply field mapping to a specific Connection, you need to get a Field Mapping Instance:

Javascript

[How to run it in your app](https://console.integration.app/docs/getting-started/front-end/javascript)

Copy

```javascript
await integrationApp
  .connection('{INTEGRATION_KEY}')
  .fieldMapping('{FIELD_MAPPINGS_KEY}')
  .get()
```

Run Now

[log in](https://console.integration.app/login?returnTo=https%3A%2F%2Fconsole.integration.app%2Fdocs%2Fintegration-ui%2Ffield-mappings%2Fcustom) to run this example

Field Mapping Instance has the following properties:

- `externalSchema` \- [Data Schema](https://console.integration.app/docs/membrane/references/data-schemas) on the external app side.
- `appSchema` \- Data Schema on your app's side.
- `importValue` \- mapping from external app to your app.
- `exportValue` \- mapping from your app to external app.
- `direction` \- mapping direction. Can be `import`, `export`, or `both`.

## Using DataForm

This API is experimental and is likely to change significantly in the future.
Expect needing to migrate this code when new versions of our SDK are released.

To simplify working with schemas and values, we provide a DataForm class. It works like this:

Javascript

[How to run it in your app](https://console.integration.app/docs/getting-started/front-end/javascript)

Copy

```javascript
import { DataForm } from '@integration-app/sdk'

const fieldMappingInstance = await integrationApp
  .connection('{INTEGRATION_KEY}')
  .fieldMapping('{FIELD_MAPPING_KEY}')
  .get({ autoCreate: true })

const importDataForm = new DataForm({
  schema: fieldMappingInstance.appSchema,
  value: fieldMappingInstance.importValue,
  variablesSchema: fieldMappingInstance.externalSchema,
})

const fields = importDataForm.getFields()
const fieldOptions = importDataForm.getFieldValueOptions(fields[0])
const newImportValue = importDataForm.setFieldValue(fields[0], fieldOptions[0])

// fieldMappingInstance.patch({ importValue: newImportValue })
```

Run Now

[log in](https://console.integration.app/login?returnTo=https%3A%2F%2Fconsole.integration.app%2Fdocs%2Fintegration-ui%2Ffield-mappings%2Fcustom) to run this example

To put it all together, here is an example of a simple field mapping editing UI:

React

Copy

```jsx
import { useFieldMappingInstance, DataForm } from '@integration-app/react'

export function FieldMappingUI() {
  const { fieldMappingInstance, patch, loading, error } =
    useFieldMappingInstance({
      integrationKey: '{INTEGRATION_KEY}',
      fieldMappingKey: '{FIELD_MAPPING_KEY}',
      autoCreate: true
    })

  if (!fieldMappingInstance) {
    return (
      <div>
        {loading && <div>Loading...</div>}
        {error && <div>Error: {error.message}</div>}
      </div>
    )
  }

  const importForm = new DataForm({
    schema: fieldMappingInstance.appSchema,
    value: fieldMappingInstance.importValue,
    variablesSchema: fieldMappingInstance.externalSchema
  })

  function handleOptionSelected(field, idx) {
    const option = importForm.getFieldValueOptions(field)[idx]
    const newImportValue = importForm.setFieldValue(
      field,
      option ? option.value : undefined,
    )

    return patch({ importValue: newImportValue })
  }

  return (
    <table>
      <tr>
        <th>Field</th>
        <th>Value</th>
      </tr>
      {importForm.getFields().map((field) => (
        <tr key={field.locator}>
          <td>{field.name}</td>
          <td>
            <select
              onChange={(e) => handleOptionSelected(field, e.target.value)}
            >
              <option></option>
              {importForm.getFieldValueOptions(field).map((option, idx) => (
                <option key={idx} value={idx} selected={option.selected}>
                  {option.name}
                </option>
              ))}
            </select>
          </td>
        </tr>
      ))}
    </table>
  )
}
```

Run Now

Please [log in](https://console.integration.app/login?returnTo=https%3A%2F%2Fconsole.integration.app%2Fdocs%2Fintegration-ui%2Ffield-mappings%2Fcustom) to run this example

## Advanced Functionality

This example does not handle complex fields (like arrays or objects) and does not support formulas.

Here are articles you should check out to build a more advanced field mapping UI:

#### [Field Mappings](https://console.integration.app/docs/membrane/interfaces/field-mappings)

Mapping fields between your app and external apps.

#### [Data Schemas](https://console.integration.app/docs/membrane/references/data-schemas)

Representing data structures used in integrations.

#### [Formulas](https://console.integration.app/docs/membrane/references/formulas)

Dynamically generate values when building Flows.

Integration.app is free to try. It takes just one click to get started.

Login and Try it Yourself

- ### On this page

- [Create a Field Mapping](https://console.integration.app/docs/integration-ui/field-mappings/custom#create-a-field-mapping)
- [Get a Field Mapping Instance](https://console.integration.app/docs/integration-ui/field-mappings/custom#get-a-field-mapping-instance)
- [Using DataForm](https://console.integration.app/docs/integration-ui/field-mappings/custom#using-dataform)
- [Advanced Functionality](https://console.integration.app/docs/integration-ui/field-mappings/custom#advanced-functionality)

Integration Console