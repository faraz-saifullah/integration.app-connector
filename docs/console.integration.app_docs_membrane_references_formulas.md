---
url: "https://console.integration.app/docs/membrane/references/formulas"
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

# Formulas

You can use formulas to dynamically generate values when building [Flows](https://console.integration.app/docs/membrane/interfaces/flows),
configuring [Field Mappings](https://console.integration.app/docs/membrane/interfaces/field-mappings),
and in many other places that require data based on variables.

Formulas look like this:

```yaml
fieldFromVariable:
  $var: $.someVariable
mappedField:
  $map:
    value: $.someVariable
    mappings:
      - from: From Value 1
        to: To Value 2
      - from: From Value 2
        to: To Value 2
```

## Variables

All formulas use variables to calculate. The simplest formula just references the variable:

```yaml
fieldFromVariable:
  $var: $.someVariable
```

`$.someVariable` here is called a Locator. Locators reference a value within the variables structure.

You can use `.` to address a field of an object and `[<idx>]` to address an index in an array.

If fields of an object have `.` or `[` inside them, you can escape them with `\`.\
For example, `$.dot\.field.bracket\[field[0]` will point to the first element in the field `bracket[field` array inside the `dot.field` variable.\
\
## List of Formulas\
\
### $tpl\
\
Generates a string with interpolated variables.\
\
Example:\
\
```yaml\
subject:\
  $tpl:\
    template: 'Hello, {firstName} {lastName}!'\
    values:\
      firstName:\
        $var: input.firstName\
      lastName:\
        $var: input.lastName\
```\
\
### $lookup\
\
Lets you find a record in a related data collection or create one if it does not exist yet.\
\
Example:\
\
```yaml\
contactId:\
  $lookup:\
    query:\
      email: john.doe@example.com\
    createIfNotFound: true\
    create:\
      fields:\
        name: John Doe\
        email: john.doe@example.com\
```\
\
It has the following parameters:\
\
- `query` \- one or more fields used to find a matching related record.\
- `createIfNotFound` \- if set to `true`, a new record will be created if no matching record is found.\
- `create`\
  - `fields` \- a set of fields to use when creating a new record.\
\
### $eval\
\
This formula evaluates a value using one of supported operators and returns `true` or `false` depending on the result.\
\
Example:\
\
```yaml\
condition:\
  $eval:\
    $var: status\
  is: Open\
```\
\
All $eval formulas have the same form:\
\
```yaml\
$eval: <value>\
<operator>: <operand>\
```\
\
This $eval formula will return `true` if the `status` variable has value `Open`.\
\
Supported operators:\
\
- `is` \- value is equal to the operand.\
- `isNot` \- value is not equal to the operand\
- `isEmpty` \- value is empty (null, undefined, empty string, empty array, object without keys). Operand is ignored.\
- `isNotEmpty` \- value is not empty. Operand is ignored.\
- `contains` \- value contains the operand. For strings, it checks if the string contains the provided substring. For arrays, it checks if the array contains the provided value.\
- `doesNotContain` \- value does not contain the operand.\
- `oneOf` \- value is one of the values in the operand array.\
- `noneOf` \- value is none of the values in the operand array.\
- `gt` \- value is greater than the operand.\
- `gte` \- value is greater than or equal to the operand.\
- `lt` \- value is less than operand.\
- `lte` \- value is less than or equal to the operand.\
\
### $and\
\
Returns true if all of its arguments are true\
\
Example:\
\
```yaml\
condition:\
  $and:\
    - $eval:\
        $var: status\
      is: Open\
    - $var: isActive\
```\
\
It will resolve to `true` if `status` variable is set to `Open` and `isActive` variable is `true`.\
\
### $or\
\
Returns `true` if at least one of its arguments is `true`, otherwise returns `false`.\
\
Example:\
\
```yaml\
condition:\
  $or:\
    - $eval:\
        $var: status\
      is: Open\
    - $var: isActive\
```\
\
This will return `true` if `status` variable is set to `Open` or `isActive` variable is `true`.\
\
### $case\
\
Case formula selects a value based on a list of conditions. It has the following structure:\
\
```yaml\
conditionalValue:\
  $case:\
    cases:\
      # A list of cases,\
      # each containing optional `filter` and `value`\
      - filter:\
          # Each filter is a list of conditions\
          - field: status\
            operator: is\
            value: Won\
        # If all the conditions are met, this value will be used.\
        value: 'Status is Won'\
      # Value without `filter` acts as "else". It will always be used\
      # if none of the previous filters matched.\
      - value: 'Status is not Won'\
    # If no cases match - this value is used\
    default: 'Default Value'\
```\
\
- If filters of multiple cases match, the first one will be used\
- A case without a filter always matches.\
- Filter with zero conditions always matches.\
\
### $map\
\
Map formula transforms a set of input values into corresponding output values.\
\
```yaml\
mappedValue:\
  $map:\
    # Value that will be checked against the list of mappings below\
    value:\
      $var: $.status\
    mapping:\
      # Each mapping item has `from` and `to`.\
      # If `value` above matches `from`,\
      # then `to` will be used as the output of the formula.\
      - from: ToDo\
        to: Open\
      - from: In Progress\
        to: Open\
      - from: Done\
        to: Closed\
    # If none of the mappings matched, then default value will be used.\
    # If `default` is not specified and no mapping matched,\
    # the output will be empty.\
    default: 'Unknown Status'\
```\
\
### $iterate\
\
Iterates over an array and returns an array of values calculated for each item.\
\
Example:\
\
```yaml\
transformedContacts:\
  $iterate:\
    source:\
      $var: $.contacts\
    item:\
      name:\
        $var: $.item.name\
      tags:\
        $var: $.parent.tags\
```\
\
The formula accepts two arguments:\
\
- source: the source list to iterate over. Could be a value or any formula that returns an array.\
- item: value for each item in the new list. When item value is calculated, two variables are available for it:\
  - item - the current item in the source list.\
  - parent - all the variables of the parent scope (i.e. variables available to the $iterate formula itself).\
\
The resulting list will contain one `item` for each item of the source list.\
\
### $firstName\
\
Extract first name from the name.\
\
Example:\
\
```yaml\
firstName:\
  $firstName:\
    $var: fullName\
```\
\
### $lastName\
\
Extract last name from the name.\
\
Example:\
\
```yaml\
lastName:\
  $lastName:\
    $var: fullName\
```\
\
Note: we will treat single-word names as Last Name because some applications require Last Name, but not First Name. This logic leads to fewer validation errors.\
\
### $copy\
\
Copies another field from your value. Useful when you need the same value in two places and don't want to define it twice.\
\
```yaml\
# Value\
firstName:\
   $extractFirstName:\
      $var: fullName\
preferredName:\
    $copy: firstName\
\
# Variables\
fullName: John Snow\
\
# Result\
firstName: John\
preferredName: John\
```\
\
### $findExternalRecordId\
\
Finds id of a record in an external application matching record in your application using a provided [Data Link Table](https://console.integration.app/docs/membrane/main-concepts/data-links.md).\
\
```yaml\
# Will find a link in "person-to-lead" data link table\
# with appRecordId equal 'leadId'.\
# Will return externalRecordId from the link.\
externalPersonId:\
  $findExternalRecordId:\
    dataLinkTable:\
      key: person-to-lead\
    recordId: 'leadId'\
```\
\
### $findAppRecordId\
\
Finds id of a record in you app that matches an external record id using a provided [Data Link Table](https://console.integration.app/docs/membrane/main-concepts/data-links.md).\
\
```yaml\
# Will find a link in "person-to-lead" data link table\
# with externalRecordId equal 'personId'.\
# Will return appRecordId from the link.\
appLeadId:\
  $findAppRecordId:\
    dataLinkTable:\
      key: person-to-lead\
    recordId: 'personId'\
```\
\
### $dataSchemaRef\
\
This formula is **exprimental**. Breaking changes are possible.\
\
Used inside [Data Schemas](https://console.integration.app/docs/membrane/references/data-schemas) to reference another data schema.\
\
Example:\
\
```yaml\
type: object\
title: Update Contact Payload\
properties:\
  id:\
    type: string\
  fields:\
    $dataSchemaRef:\
      type: data-collection\
      key: contacts\
```\
\
In this example, the `fields` property of the schema will be equal to the fieldsSchema of the `contacts` data collection.\
\
Which data schemas types are available depends on the context this formula is used in.\
\
**Internal Data Schemas**\
\
You can reference an [Internal Data Shema](https://console.integration.app/docs/membrane/interfaces/internal-data-schemas) this way:\
\
```yaml\
$dataSchemaRef:\
  type: internal-data-schema\
  key: contact\
```\
\
This schema type is always available. If used in a context of a specific customer, it will use the customer-specific fields.\
\
**Data Collections**\
\
You can reference a `fieldsSchema` of a [Data Collection](https://console.integration.app/docs/membrane/interfaces/data-collections) this way:\
\
```yaml\
$dataSchemaRef:\
  type: data-collection\
  key: contacts\
  parameters:\
    listId: 10\
```\
\
This schema type is available in a context of a specific [Connection](https://console.integration.app/docs/membrane/apps/connections).\
It will resolve into data collection fields for a given connection, including any custom fields.\
\
### $jsonata\
\
If you want to apply complex data transformations, we support [Jsonata](https://jsonata.org/) expressions.\
\
Example:\
\
```yaml\
sumOfPrices:\
  $jsonata: $sum($.products.price)\
```\
\
### $plain\
\
This formula preserves everything inside it as is. It is useful when you need to skip evaluating formulas in a part of the expression.\
\
```yaml\
# Formula\
$plain:\
  $firstName:\
    $var: fullName\
\
# Result\
$firstName:\
  $var: fullName\
```\
\
### $formula\
\
This formula allows you to use a formula as a value, but it still evaluates $var inside it. It is useful when you want to produce a formula dynamically, parametrized by variables.\
\
This is, for example, used in connectors when mapping fields to/from unified fields when you want the result to be a formula.\
\
```yaml\
# When mapping unified fields to application-specific fields\
# we want the result to be a $firstNotEmpty formula,\
# but we want $.contactId and $.companyId to be replaced with actual values of unified fields.\
unifiedFieldsToNative:\
  parent:\
    $formula:\
      $firstNotEmpty:\
        - $var: $.contactId\
        - $var: $.companyId\
\
# Variables\
contactId:\
  $var: $.input.contactId\
companyId:\
  $var: $.input.companyId\
\
# Result\
unifiedFieldsToNative:\
  parent:\
    $firstNotEmpty:\
      - $var: $.input.contactId\
      - $var: $.input.companyId\
```\
\
Integration.app is free to try. It takes just one click to get started.\
\
Login and Try it Yourself\
\
- ### On this page\
\
- [Variables](https://console.integration.app/docs/membrane/references/formulas#variables)\
- [List of Formulas](https://console.integration.app/docs/membrane/references/formulas#list-of-formulas)\
  - [$tpl](https://console.integration.app/docs/membrane/references/formulas#tpl)\
  - [$lookup](https://console.integration.app/docs/membrane/references/formulas#lookup)\
  - [$eval](https://console.integration.app/docs/membrane/references/formulas#eval)\
  - [$and](https://console.integration.app/docs/membrane/references/formulas#and)\
  - [$or](https://console.integration.app/docs/membrane/references/formulas#or)\
  - [$case](https://console.integration.app/docs/membrane/references/formulas#case)\
  - [$map](https://console.integration.app/docs/membrane/references/formulas#map)\
  - [$iterate](https://console.integration.app/docs/membrane/references/formulas#iterate)\
  - [$firstName](https://console.integration.app/docs/membrane/references/formulas#firstname)\
  - [$lastName](https://console.integration.app/docs/membrane/references/formulas#lastname)\
  - [$copy](https://console.integration.app/docs/membrane/references/formulas#copy)\
  - [$findExternalRecordId](https://console.integration.app/docs/membrane/references/formulas#findexternalrecordid)\
  - [$findAppRecordId](https://console.integration.app/docs/membrane/references/formulas#findapprecordid)\
  - [$dataSchemaRef](https://console.integration.app/docs/membrane/references/formulas#dataschemaref)\
  - [$jsonata](https://console.integration.app/docs/membrane/references/formulas#jsonata)\
  - [$plain](https://console.integration.app/docs/membrane/references/formulas#plain)\
  - [$formula](https://console.integration.app/docs/membrane/references/formulas#formula)\
\
Docs · Integration Console