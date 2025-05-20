---
url: "https://console.integration.app/ref/react/interfaces/_integration-app_react.ConnectorAuthMethodType.html"
title: "ConnectorAuthMethodType | Integration App React - v2.14.3"
---

- [Integration App React](https://console.integration.app/ref/react/index.html)
- [@integration-app/react](https://console.integration.app/ref/react/modules/_integration-app_react.html)
- [ConnectorAuthMethodType](https://console.integration.app/ref/react/interfaces/_integration-app_react.ConnectorAuthMethodType.html)

# Interface ConnectorAuthMethodType

interfaceConnectorAuthMethodType{

[authTypes](https://console.integration.app/ref/react/interfaces/_integration-app_react.ConnectorAuthMethodType.html#authtypes)?: (

\|"oauth2"

\|"integration-app-token"

\|"oauth1"

\|"client-credentials"

\|"proxy"

    )\[\];

[fileKeys](https://console.integration.app/ref/react/interfaces/_integration-app_react.ConnectorAuthMethodType.html#filekeys)?:string\[\];

[getInputSchema](https://console.integration.app/ref/react/interfaces/_integration-app_react.ConnectorAuthMethodType.html#getinputschema)?:(args: [ConnectorAuthMethodArgs](https://console.integration.app/ref/react/interfaces/_integration-app_react.ConnectorAuthMethodArgs.html))=>undefined\| [DataSchema](https://console.integration.app/ref/react/interfaces/DataSchema.html);

[getOutputSchema](https://console.integration.app/ref/react/interfaces/_integration-app_react.ConnectorAuthMethodType.html#getoutputschema)?:(args: [ConnectorAuthMethodArgs](https://console.integration.app/ref/react/interfaces/_integration-app_react.ConnectorAuthMethodArgs.html))=>undefined\| [DataSchema](https://console.integration.app/ref/react/interfaces/DataSchema.html);

[supportedImplementationTypes](https://console.integration.app/ref/react/interfaces/_integration-app_react.ConnectorAuthMethodType.html#supportedimplementationtypes): [ConnectorMethodImplementationType](https://console.integration.app/ref/react/enums/ConnectorMethodImplementationType.html)\[\];

[isRequired](https://console.integration.app/ref/react/interfaces/_integration-app_react.ConnectorAuthMethodType.html#isrequired):boolean;

}

##### Index

### Properties

[authTypes?](https://console.integration.app/ref/react/interfaces/_integration-app_react.ConnectorAuthMethodType.html#authtypes) [fileKeys?](https://console.integration.app/ref/react/interfaces/_integration-app_react.ConnectorAuthMethodType.html#filekeys) [getInputSchema?](https://console.integration.app/ref/react/interfaces/_integration-app_react.ConnectorAuthMethodType.html#getinputschema) [getOutputSchema?](https://console.integration.app/ref/react/interfaces/_integration-app_react.ConnectorAuthMethodType.html#getoutputschema) [supportedImplementationTypes](https://console.integration.app/ref/react/interfaces/_integration-app_react.ConnectorAuthMethodType.html#supportedimplementationtypes) [isRequired](https://console.integration.app/ref/react/interfaces/_integration-app_react.ConnectorAuthMethodType.html#isrequired)

## Properties

### `Optional` authTypes [Permalink](https://console.integration.app/ref/react/interfaces/_integration-app_react.ConnectorAuthMethodType.html\#authtypes)

authTypes?: (

\|"oauth2"

\|"integration-app-token"

\|"oauth1"

\|"client-credentials"

\|"proxy"

)\[\]

### `Optional` fileKeys [Permalink](https://console.integration.app/ref/react/interfaces/_integration-app_react.ConnectorAuthMethodType.html\#filekeys)

fileKeys?:string\[\]

### `Optional` getInputSchema [Permalink](https://console.integration.app/ref/react/interfaces/_integration-app_react.ConnectorAuthMethodType.html\#getinputschema)

getInputSchema?:(args: [ConnectorAuthMethodArgs](https://console.integration.app/ref/react/interfaces/_integration-app_react.ConnectorAuthMethodArgs.html))=>undefined\| [DataSchema](https://console.integration.app/ref/react/interfaces/DataSchema.html)

### `Optional` getOutputSchema [Permalink](https://console.integration.app/ref/react/interfaces/_integration-app_react.ConnectorAuthMethodType.html\#getoutputschema)

getOutputSchema?:(args: [ConnectorAuthMethodArgs](https://console.integration.app/ref/react/interfaces/_integration-app_react.ConnectorAuthMethodArgs.html))=>undefined\| [DataSchema](https://console.integration.app/ref/react/interfaces/DataSchema.html)

### supportedImplementationTypes [Permalink](https://console.integration.app/ref/react/interfaces/_integration-app_react.ConnectorAuthMethodType.html\#supportedimplementationtypes)

supportedImplementationTypes: [ConnectorMethodImplementationType](https://console.integration.app/ref/react/enums/ConnectorMethodImplementationType.html)\[\]

### isRequired [Permalink](https://console.integration.app/ref/react/interfaces/_integration-app_react.ConnectorAuthMethodType.html\#isrequired)

isRequired:boolean

### Settings

Member Visibility

- Protected
- Inherited
- External

ThemeOSLightDark

### On This Page

Properties

[authTypes](https://console.integration.app/ref/react/interfaces/_integration-app_react.ConnectorAuthMethodType.html#authtypes) [fileKeys](https://console.integration.app/ref/react/interfaces/_integration-app_react.ConnectorAuthMethodType.html#filekeys) [getInputSchema](https://console.integration.app/ref/react/interfaces/_integration-app_react.ConnectorAuthMethodType.html#getinputschema) [getOutputSchema](https://console.integration.app/ref/react/interfaces/_integration-app_react.ConnectorAuthMethodType.html#getoutputschema) [supportedImplementationTypes](https://console.integration.app/ref/react/interfaces/_integration-app_react.ConnectorAuthMethodType.html#supportedimplementationtypes) [isRequired](https://console.integration.app/ref/react/interfaces/_integration-app_react.ConnectorAuthMethodType.html#isrequired)

MMNEPVFCICPMFPCPTTAAATR