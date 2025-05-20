---
url: "https://console.integration.app/ref/react/interfaces/_integration-app_react.ConnectorDataDirectoryMethodType.html"
title: "ConnectorDataDirectoryMethodType | Integration App React - v2.14.3"
---

- [Integration App React](https://console.integration.app/ref/react/index.html)
- [@integration-app/react](https://console.integration.app/ref/react/modules/_integration-app_react.html)
- [ConnectorDataDirectoryMethodType](https://console.integration.app/ref/react/interfaces/_integration-app_react.ConnectorDataDirectoryMethodType.html)

# Interface ConnectorDataDirectoryMethodType<ConfigType>

interfaceConnectorDataDirectoryMethodType< [ConfigType](https://console.integration.app/ref/react/interfaces/_integration-app_react.ConnectorDataDirectoryMethodType.html#configtype) =unknown>{

[name](https://console.integration.app/ref/react/interfaces/_integration-app_react.ConnectorDataDirectoryMethodType.html#name)?:string;

[description](https://console.integration.app/ref/react/interfaces/_integration-app_react.ConnectorDataDirectoryMethodType.html#description)?:string;

[fileKey](https://console.integration.app/ref/react/interfaces/_integration-app_react.ConnectorDataDirectoryMethodType.html#filekey)?:string;

[getConfigSchema](https://console.integration.app/ref/react/interfaces/_integration-app_react.ConnectorDataDirectoryMethodType.html#getconfigschema)?:(

args: [ConnectorDataDirectoryMethodTypeArgs](https://console.integration.app/ref/react/interfaces/_integration-app_react.ConnectorDataDirectoryMethodTypeArgs.html) < [ConfigType](https://console.integration.app/ref/react/interfaces/_integration-app_react.ConnectorDataDirectoryMethodType.html#configtype) >,

)=> [DataSchema](https://console.integration.app/ref/react/interfaces/DataSchema.html);

[getInputSchema](https://console.integration.app/ref/react/interfaces/_integration-app_react.ConnectorDataDirectoryMethodType.html#getinputschema)?:(

args: [ConnectorDataDirectoryMethodTypeArgs](https://console.integration.app/ref/react/interfaces/_integration-app_react.ConnectorDataDirectoryMethodTypeArgs.html) < [ConfigType](https://console.integration.app/ref/react/interfaces/_integration-app_react.ConnectorDataDirectoryMethodType.html#configtype) >,

)=> [DataSchema](https://console.integration.app/ref/react/interfaces/DataSchema.html);

[getOutputSchema](https://console.integration.app/ref/react/interfaces/_integration-app_react.ConnectorDataDirectoryMethodType.html#getoutputschema)?:(

args: [ConnectorDataDirectoryMethodTypeArgs](https://console.integration.app/ref/react/interfaces/_integration-app_react.ConnectorDataDirectoryMethodTypeArgs.html) < [ConfigType](https://console.integration.app/ref/react/interfaces/_integration-app_react.ConnectorDataDirectoryMethodType.html#configtype) >,

)=> [DataSchema](https://console.integration.app/ref/react/interfaces/DataSchema.html);

[supportedImplementationTypes](https://console.integration.app/ref/react/interfaces/_integration-app_react.ConnectorDataDirectoryMethodType.html#supportedimplementationtypes): [ConnectorMethodImplementationType](https://console.integration.app/ref/react/enums/ConnectorMethodImplementationType.html)\[\];

}

#### Type Parameters

- ConfigType = unknown

##### Index

### Properties

[name?](https://console.integration.app/ref/react/interfaces/_integration-app_react.ConnectorDataDirectoryMethodType.html#name) [description?](https://console.integration.app/ref/react/interfaces/_integration-app_react.ConnectorDataDirectoryMethodType.html#description) [fileKey?](https://console.integration.app/ref/react/interfaces/_integration-app_react.ConnectorDataDirectoryMethodType.html#filekey) [getConfigSchema?](https://console.integration.app/ref/react/interfaces/_integration-app_react.ConnectorDataDirectoryMethodType.html#getconfigschema) [getInputSchema?](https://console.integration.app/ref/react/interfaces/_integration-app_react.ConnectorDataDirectoryMethodType.html#getinputschema) [getOutputSchema?](https://console.integration.app/ref/react/interfaces/_integration-app_react.ConnectorDataDirectoryMethodType.html#getoutputschema) [supportedImplementationTypes](https://console.integration.app/ref/react/interfaces/_integration-app_react.ConnectorDataDirectoryMethodType.html#supportedimplementationtypes)

## Properties

### `Optional` name [Permalink](https://console.integration.app/ref/react/interfaces/_integration-app_react.ConnectorDataDirectoryMethodType.html\#name)

name?:string

### `Optional` description [Permalink](https://console.integration.app/ref/react/interfaces/_integration-app_react.ConnectorDataDirectoryMethodType.html\#description)

description?:string

### `Optional` fileKey [Permalink](https://console.integration.app/ref/react/interfaces/_integration-app_react.ConnectorDataDirectoryMethodType.html\#filekey)

fileKey?:string

### `Optional` getConfigSchema [Permalink](https://console.integration.app/ref/react/interfaces/_integration-app_react.ConnectorDataDirectoryMethodType.html\#getconfigschema)

getConfigSchema?:(

args: [ConnectorDataDirectoryMethodTypeArgs](https://console.integration.app/ref/react/interfaces/_integration-app_react.ConnectorDataDirectoryMethodTypeArgs.html) < [ConfigType](https://console.integration.app/ref/react/interfaces/_integration-app_react.ConnectorDataDirectoryMethodType.html#configtype) >,

)=> [DataSchema](https://console.integration.app/ref/react/interfaces/DataSchema.html)

### `Optional` getInputSchema [Permalink](https://console.integration.app/ref/react/interfaces/_integration-app_react.ConnectorDataDirectoryMethodType.html\#getinputschema)

getInputSchema?:(

args: [ConnectorDataDirectoryMethodTypeArgs](https://console.integration.app/ref/react/interfaces/_integration-app_react.ConnectorDataDirectoryMethodTypeArgs.html) < [ConfigType](https://console.integration.app/ref/react/interfaces/_integration-app_react.ConnectorDataDirectoryMethodType.html#configtype) >,

)=> [DataSchema](https://console.integration.app/ref/react/interfaces/DataSchema.html)

### `Optional` getOutputSchema [Permalink](https://console.integration.app/ref/react/interfaces/_integration-app_react.ConnectorDataDirectoryMethodType.html\#getoutputschema)

getOutputSchema?:(

args: [ConnectorDataDirectoryMethodTypeArgs](https://console.integration.app/ref/react/interfaces/_integration-app_react.ConnectorDataDirectoryMethodTypeArgs.html) < [ConfigType](https://console.integration.app/ref/react/interfaces/_integration-app_react.ConnectorDataDirectoryMethodType.html#configtype) >,

)=> [DataSchema](https://console.integration.app/ref/react/interfaces/DataSchema.html)

### supportedImplementationTypes [Permalink](https://console.integration.app/ref/react/interfaces/_integration-app_react.ConnectorDataDirectoryMethodType.html\#supportedimplementationtypes)

supportedImplementationTypes: [ConnectorMethodImplementationType](https://console.integration.app/ref/react/enums/ConnectorMethodImplementationType.html)\[\]

### Settings

Member Visibility

- Protected
- Inherited
- External

ThemeOSLightDark

### On This Page

Properties

[name](https://console.integration.app/ref/react/interfaces/_integration-app_react.ConnectorDataDirectoryMethodType.html#name) [description](https://console.integration.app/ref/react/interfaces/_integration-app_react.ConnectorDataDirectoryMethodType.html#description) [fileKey](https://console.integration.app/ref/react/interfaces/_integration-app_react.ConnectorDataDirectoryMethodType.html#filekey) [getConfigSchema](https://console.integration.app/ref/react/interfaces/_integration-app_react.ConnectorDataDirectoryMethodType.html#getconfigschema) [getInputSchema](https://console.integration.app/ref/react/interfaces/_integration-app_react.ConnectorDataDirectoryMethodType.html#getinputschema) [getOutputSchema](https://console.integration.app/ref/react/interfaces/_integration-app_react.ConnectorDataDirectoryMethodType.html#getoutputschema) [supportedImplementationTypes](https://console.integration.app/ref/react/interfaces/_integration-app_react.ConnectorDataDirectoryMethodType.html#supportedimplementationtypes)

MMNEPVFCICPMFPCPTTAAATR