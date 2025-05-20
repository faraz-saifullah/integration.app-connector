---
url: "https://console.integration.app/docs/getting-started/front-end/react/components"
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

# UI Components

For now, you are expected to have [Tailwind Preflight](https://tailwindcss.com/docs/preflight) installed, this won't be necessary in future.
It **must be** imported before `@integration-app/react/styles.css`.

Each component and its parts can be addressed by their unique class name. You can use them to style your components and interact with them.

You can find a full list of parts and class names of a given component on its respective documentation page.

## Default Styles

To apply default styles to components, simply import styles.css:

```tsx
import '@integration-app/react/styles.css'
```

## Custom Styles

All style layers exported by `styles.css` are prefixed with `iap-` value to prevent layers collision.

```css
@layer iap_reset, iap_base, iap_tokens, iap_recipes, iap_utilities;
```

Let's looks at the imaginary `button` component example:

Button

| Part `className` | Description |
| --- | --- |
| `button__container` | Container for button |
| `button__title` | Title for button |
| `button__icon-left` | Left icon for button |
| `button__icon-right` | Right icon for button |

### Styling with CSS

When using plain CSS it is enough to just use `className` of a part.
Let's change button background color to red and both icons to black:

```css
/* styles.css */
@layer iap_reset, iap_base, iap_tokens, iap_recipes, iap_utilities;

@layer iap_reset {
  @tailwind base;
}

.button__container {
  background: #e54d2e;
}

.button__container:hover {
  background: #dd4425;
}

.button__icon-left,
.button__icon-right {
  background: #000;
}
```

```tsx
import { ExampleButton } from '@integration-app/react';
import './styles.css'
import '@integration-app/react/styles.css'

const App = () => {
  return (<ExampleButton />)
}
```

Button

**Example**

#### [Live example](https://codesandbox.io/p/github/bohdanbirdie/integration-app-react-css-example/main)

Project with live CSS styling example

### Styling with Tailwind

For projects that use Tailwind an extra step is required.
To avoid layers order collision you need to define layers in your main `css` file.

You can target part `className` by using [`@apply` directive](https://tailwindcss.com/docs/functions-and-directives#apply).

In this example let's make button sharp and blue, then change the title text style to bold:

```css
/* styles.css */
@layer iap_reset, iap_base, iap_tokens, iap_recipes, iap_utilities;

@layer iap_reset {
  @tailwind base;
}

@tailwind components;
@tailwind utilities;

.button__container {
  @apply rounded-none;
}

.button__title {
  @apply font-bold bg-blue-700;
}
```

```tsx
import { ExampleButton } from '@integration-app/react';
import './styles.css'
import '@integration-app/react/styles.css'

const App = () => {
  return (<ExampleButton />)
}
```

Button

**Example**

#### [Live example](https://codesandbox.io/p/github/bohdanbirdie/integration-app-react-tailwind-example/main)

Vite project with live Tailwind styling example

#### [Next.js project example](https://github.com/integration-app/next-tailwind-overrides-example)

Next.js project with Tailwind styling example

Integration.app is free to try. It takes just one click to get started.

Login and Try it Yourself

- ### On this page

- [Default Styles](https://console.integration.app/docs/getting-started/front-end/react/components#default-styles)
- [Custom Styles](https://console.integration.app/docs/getting-started/front-end/react/components#custom-styles)
  - [Styling with CSS](https://console.integration.app/docs/getting-started/front-end/react/components#styling-with-css)
  - [Styling with Tailwind](https://console.integration.app/docs/getting-started/front-end/react/components#styling-with-tailwind)

Docs · Integration Console