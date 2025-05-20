---
url: "https://console.integration.app/docs/membrane/references/data-schemas"
title: "Docs · Integration Console"
---

[Integration.app](https://integration.app/)

`` `Ctrl` + `K`

[NPM packages](https://www.npmjs.com/~integration.app) [GitHub organization](https://github.com/integration-app)

- [External Apps](https://console.integration.app/docs/membrane/apps)
- [Interfaces](https://console.integration.app/docs/membrane/interfaces)
- [Customers](https://console.integration.app/docs/membrane/customers)
- [Monitoring & Troubleshooting](https://console.integration.app/docs/membrane/monitoring)
- [Security And Privacy](https://console.integration.app/docs/membrane/security-and-privacy)
- References
  - [Execution Context](https://console.integration.app/docs/membrane/references/execution-context)
  - [Formulas](https://console.integration.app/docs/membrane/references/formulas)
  - [Data Schemas](https://console.integration.app/docs/membrane/references/data-schemas)
  - [Limits](https://console.integration.app/docs/membrane/references/limits)
  - [Universal Data Models](https://console.integration.app/docs/membrane/references/udm)

# Data Schemas

Data Schema is used whenever you need to describe the data structure without providing the actual value.

Data Schema we use is based on [JSONSchema](https://json-schema.org/) with additional features.

## Additional Properties

### Reference Records (Enums or Picklists):

To specify reference records that can be used for a field (for example, to create field with limited option for selection) use schema like this:

```yaml
status:
  type: number // Type of `id` keys below
  referenceRecords:
    - name: Open // Title of that option displayed in the UI
      id: 1 // Actual value that will be used after selecting an option
    - name: Won
      id: 2
    - name: Lost
      id: 3
```

### Reference Collection

When working in a context of a [Connection](https://console.integration.app/docs/membrane/apps/connections),
you can point to a specific [Data Collection](https://console.integration.app/docs/membrane/interfaces/data-collections) to use its records as possible values for a field.

Example:

```yaml
ownerId:
  type: string
  referenceCollection:
    key: users
    parameters:
      isActive: true
```

### Rich Text

There is an additional property `isRichText` (boolean) that can be used to specify that the field of type `string` is a rich text field.

Example:

```yaml
note:
  type: string
  isRichText: true
```

## Dynamic Data Schema

You can use [Formulas](https://console.integration.app/docs/membrane/references/formulas) in data schemas to make them dynamic. For example:

```yaml
parent:
  type: object
  properties:
    type:
      type: string
      enum: ['tasks', 'projects']
    id:
      type: string
      referenceCollection:
        key:
          $var: parent.type
```

In this, `parent.id` property will reference `tasks` collection if `parent.type` is `tasks` and `projects` collection if `parent.type` is `projects`.

Schema will be evaluated in the context of the current value the schema is applied to.

It works in a special way for `array` schemas: when evaluating dynamic schemas, all arrays leading to the current value will be replaced with the current item that is being evaluated.

For example:

```yaml
parents:
  type: array
  items:
    type: object
    properties:
      type:
        type: string
        enum: ['tasks', 'projects']
      id:
        type: string
        referenceCollection:
          key:
            $var: parents.type
```

Notice the locator in the `id` field: `parents.type`. It treats `parents` as if it was an object rather than array. When evaluated, it will use the current item of the `parents` array.

For example, if the schema is applied to the following object:

```yaml
parents:
  - type: tasks
    id: 1
  - type: projects
```

The schema for the first item of the `parents` list will be the following:

```yaml
type: object
properties:
  type:
    type: string
    enum: ['tasks', 'projects']
  id:
    type: string
    referenceCollection:
      key: tasks
```

But for the second item, it will be:

```yaml
type: object
properties:
  type:
    type: string
    enum: ['tasks', 'projects']
  id:
    type: string
    referenceCollection:
      key: projects
```

Integration.app is free to try. It takes just one click to get started.

Login and Try it Yourself

- ### On this page

- [Additional Properties](https://console.integration.app/docs/membrane/references/data-schemas#additional-properties)
  - [Reference Records (Enums or Picklists):](https://console.integration.app/docs/membrane/references/data-schemas#reference-records-enums-or-picklists)
  - [Reference Collection](https://console.integration.app/docs/membrane/references/data-schemas#reference-collection)
  - [Rich Text](https://console.integration.app/docs/membrane/references/data-schemas#rich-text)
- [Dynamic Data Schema](https://console.integration.app/docs/membrane/references/data-schemas#dynamic-data-schema)

Docs · Integration Console