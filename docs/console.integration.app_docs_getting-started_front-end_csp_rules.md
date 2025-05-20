---
url: "https://console.integration.app/docs/getting-started/front-end/csp_rules"
title: "Docs · Integration Console"
---

[Integration.app](https://integration.app/)

`` `Ctrl` + `K`

[NPM packages](https://www.npmjs.com/~integration.app) [GitHub organization](https://github.com/integration-app)

- [Authentication](https://console.integration.app/docs/getting-started/authentication)
- [Front End](https://console.integration.app/docs/getting-started/front-end)
  - [Javascript SDK](https://console.integration.app/docs/getting-started/front-end/javascript)
  - [React](https://console.integration.app/docs/getting-started/front-end/react)
  - [Vue.js](https://console.integration.app/docs/getting-started/front-end/vue)
  - [CSP Rules](https://console.integration.app/docs/getting-started/front-end/csp_rules)
- [Backend](https://console.integration.app/docs/getting-started/backend)
- [Self-hosting](https://console.integration.app/docs/getting-started/self-hosting)

# CSP Rules

## Configuring Your Content Security Policy for Integration.app's JavaScript SDK

When using **Integration.app's JavaScript SDK** in your application, you'll need to configure your **Content Security Policy (CSP)** to allow communication with our services. This article outlines the necessary CSP rules to add for proper functionality.

* * *

### Required CSP Rules

Add the following domain to your Content Security Policy under these directives:

- **connect-src**
- **child-src**
- **form-action**

The domain to whitelist is:

`api.integration.app`

* * *

### Example CSP Configuration

Here's an example of how your CSP rules might look after adding these directives:

```plaintext
Content-Security-Policy:
  connect-src 'self' api.integration.app;
  child-src 'self' api.integration.app;
  form-action 'self' api.integration.app;
  // ... other existing rules ...
```

* * *

### Why These Rules Are Needed

- **connect-src**: Allows the SDK to make API calls to Integration.app's servers.
- **child-src**: Permits the loading of necessary resources from Integration.app.
- **form-action**: Required for submitting sensitive data to our API in certain cases.

* * *

### Additional Considerations

There are no region-specific domains or additional rules required for the JavaScript SDK. However, it's always a good practice to verify these settings with your application security team to ensure they align with your organization's security policies.

* * *

### Further Resources

For more information about our SDK, you can refer to the following documentation:

- [SDK Documentation](https://console.integration.app/ref/sdk/index.html)
- [React Integration Documentation](https://console.integration.app/ref/react/index.html)

If you encounter any issues or have further questions about CSP configuration for Integration.app, please don't hesitate to contact our support team.

## Next Steps

#### [Authentication](https://console.integration.app/docs/getting-started/authentication)

Accessing integration engine from your application.

#### [Connection UI](https://console.integration.app/docs/integration-ui/connection)

Create a new connection to a specific integration.

#### [UI Components](https://console.integration.app/docs/getting-started/front-end/react/components)

Customizable building blocks for your integration UI.

Integration.app is free to try. It takes just one click to get started.

Login and Try it Yourself

- ### On this page

- [Configuring Your Content Security Policy for Integration.app's JavaScript SDK](https://console.integration.app/docs/getting-started/front-end/csp_rules#configuring-your-content-security-policy-for-integrationapps-javascript-sdk)
  - [Required CSP Rules](https://console.integration.app/docs/getting-started/front-end/csp_rules#required-csp-rules)
  - [Example CSP Configuration](https://console.integration.app/docs/getting-started/front-end/csp_rules#example-csp-configuration)
  - [Why These Rules Are Needed](https://console.integration.app/docs/getting-started/front-end/csp_rules#why-these-rules-are-needed)
  - [Additional Considerations](https://console.integration.app/docs/getting-started/front-end/csp_rules#additional-considerations)
  - [Further Resources](https://console.integration.app/docs/getting-started/front-end/csp_rules#further-resources)
- [Next Steps](https://console.integration.app/docs/getting-started/front-end/csp_rules#next-steps)

Docs · Integration Console