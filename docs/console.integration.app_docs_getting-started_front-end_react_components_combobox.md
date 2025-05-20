---
url: "https://console.integration.app/docs/getting-started/front-end/react/components/combobox"
title: "Docs · Integration Console"
---

[Integration.app](https://integration.app/)

`` `Ctrl` + `K`

[NPM packages](https://www.npmjs.com/~integration.app) [GitHub organization](https://github.com/integration-app)

- [Authentication](https://console.integration.app/docs/getting-started/authentication)
- [Front End](https://console.integration.app/docs/getting-started/front-end)
  - [Javascript SDK](https://console.integration.app/docs/getting-started/front-end/javascript)
  - [React](https://console.integration.app/docs/getting-started/front-end/react)
    - [Hooks](https://console.integration.app/docs/getting-started/front-end/react/hooks)
    - [UI Components](https://console.integration.app/docs/getting-started/front-end/react/components)
      - [DataInput](https://console.integration.app/docs/getting-started/front-end/react/components/data-input)
      - [Combobox](https://console.integration.app/docs/getting-started/front-end/react/components/combobox)
      - [Portal boundary](https://console.integration.app/docs/getting-started/front-end/react/components/portal-boundary)
  - [Vue.js](https://console.integration.app/docs/getting-started/front-end/vue)
  - [CSP Rules](https://console.integration.app/docs/getting-started/front-end/csp_rules)
- [Backend](https://console.integration.app/docs/getting-started/backend)
- [Self-hosting](https://console.integration.app/docs/getting-started/self-hosting)

# Combobox

The `ComboBox` component is used internally for the [`DataForm`](https://console.integration.app/docs/getting-started/front-end/react/components/data-input) UI.
It handles each input with dropdown, tags, formula configuration, etc.
It is possible to use it without `DataForm` by passing `options` or `optionFactories`. Additionally, `variablesSchema` is supported.

Here is the example with static options and local state:

React

Copy

```jsx
import { ComboBox, ComboBoxOption } from "@integration-app/react";

const staticOptions: ComboBoxOption[] = [\
  {\
    label: 'Option 1',\
    value: 'option-1',\
  },\
  {\
    label: 'Option 2',\
    value: 'option-2',\
  },\
]

export function ComboboxExample() {
  const [value, setValue] = useState<unknown>(null)

  return (
    <ComboBox
      value={value}
      onChange={setValue}
      placeholder='Type here...'
      options={staticOptions}
    />
  )
}
```

Run Now

Please [log in](https://console.integration.app/login?returnTo=https%3A%2F%2Fconsole.integration.app%2Fdocs%2Fgetting-started%2Ffront-end%2Freact%2Fcomponents%2Fcombobox) to run this example

## Styling component parts

Styling is supported, see [Components](https://console.integration.app/docs/getting-started/front-end/react/components) page for more details.

The `ComboBox` component is made of multiple smaller components, here is a list of parts for each:

#### Component: `dropdown`

| Part `className` | Description |
| --- | --- |
| `dropdown__popover-container` | Main container of a dropdown. Emits keyboard navigation events |
| `dropdown__content` | Dropdown content container |
| `dropdown__panel` | Section panel. Can be multiple. Can be nested |
| `dropdown__search-input` | Search input element |
| `dropdown__search-divider` | Divider between search input and rest of elements |
| `dropdown__list` | Items list container |
| `dropdown__items-list-header` | Items list header |
| `dropdown__item` | Single list item container |
| `dropdown__item-title` | List item title |
| `dropdown__no-options-heading` | Heading title for empty search result |
| `dropdown__error-heading` | Heading for error when options failed to load |
| `dropdown__error-heading-icon` | Error heading icon |
| `dropdown__info-heading` | Heading for unsupported states within the dropdown |
| `dropdown__info-heading-icon` | Info heading icon |
| `dropdown__loading-item-container` | List item skeleton container |
| `dropdown__loading-item-icon` | List item icon skeleton |
| `dropdown__loading-item-title` | Loading item title skeleton |

Integration.app is free to try. It takes just one click to get started.

Login and Try it Yourself

- ### On this page

- [Styling component parts](https://console.integration.app/docs/getting-started/front-end/react/components/combobox#styling-component-parts)

Docs · Integration Console