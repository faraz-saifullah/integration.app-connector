---
url: "https://console.integration.app/docs/getting-started/front-end/react/components/portal-boundary"
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

# Portal boundary

Most of floating components in `@integration-app/react`,
like [Combobox](https://console.integration.app/docs/getting-started/front-end/react/components/combobox)
using `Portal` to mount outside of the stacking context.

If you are using floating component on the default stacking context - no additional setup is required
as default portal boundary is a `<body/>` element.

But for cases when you want to use floating component within floating component - stacking context need to be adjusted by bounding portal area.
This can be done with `FloatingPortalBoundary` component.

Common situation is a custom `Modal` rendered in `Portal` with
[`Combobox`](https://console.integration.app/docs/getting-started/front-end/react/components/combobox)
as part of [`DataInput`](https://console.integration.app/docs/getting-started/front-end/react/components/data-input).

```tsx
import { DataInput } from "@integration-app/react";
import { Modal } from './my-modal'

const schema = {...}
const variablesSchema = {...}

export function ModalWithDataInput() {

return (
    <Modal.RootWithPortal>
      <Modal.Header>Create record</Modal.Header>

      <Modal.Content>
        <DataInput
          schema={schema}
          variablesSchema={variablesSchema}
        />
      </Modal.Content>
    </Modal.RootWithPortal>
  )
}
```

With this setup both `Modal` and `Combobox` are rendered over their respective `Portal` inside of the `<body />`,
resulting in two separate stacking contexts and `Modal` might appear above `Combobox`.

Broken portal bounding![Broken portal bounding](https://console.integration.app/images/docs/portal-boundary-broken.png)

To fix this problem we should bound `Combobox` portal with `Modal.Content`.
Use `FloatingPortalBoundary` to wrap the content container.

Note: `FloatingPortalBoundary` should only have single child because it attaches `data-*` attribute to it,
which serves as an anchor for `Portal`.

```tsx
import { DataInput, FloatingPortalBoundary } from "@integration-app/react";
import { Modal } from './my-modal'

const schema = {...}
const variablesSchema = {...}

export function ModalWithDataInput() {

return (
    <Modal.RootWithPortal>
      <Modal.Header>Create record</Modal.Header>

      <FloatingPortalBoundary>
        <Modal.Content>
          <DataInput
            schema={schema}
            variablesSchema={variablesSchema}
          />
        </Modal.Content>
      </FloatingPortalBoundary>
    </Modal.RootWithPortal>
  )
}
```

Now, as content has its own boundary, the `Combobox` from `DataInput` it portalled into correct stacking context.

Fixed portal bounding![Fixed portal bounding](https://console.integration.app/images/docs/portal-boundary-fixed.png)

## Props: `FloatingPortalBoundary`

| Prop | Type | Description |
| --- | --- | --- |
| `children` | `React.ReactElement` | Components Children. Accepts only single child. |
| `id` | `string | undefined` | Custom ID for boundary container. If not passed - `useId` is used. |

Integration.app is free to try. It takes just one click to get started.

Login and Try it Yourself

- ### On this page

- [Props: FloatingPortalBoundary](https://console.integration.app/docs/getting-started/front-end/react/components/portal-boundary#props-floatingportalboundary)

Docs · Integration Console