---
url: "https://console.integration.app/ref/react/interfaces/_integration-app_react.ConnectorDataCollectionMethodType.html"
title: "ConnectorDataCollectionMethodType | Integration App React - v2.14.3"
---

- [Integration App React](https://console.integration.app/ref/react/index.html)
- [@integration-app/react](https://console.integration.app/ref/react/modules/_integration-app_react.html)
- [ConnectorDataCollectionMethodType](https://console.integration.app/ref/react/interfaces/_integration-app_react.ConnectorDataCollectionMethodType.html)

# Interface ConnectorDataCollectionMethodType<ConfigFields>

interfaceConnectorDataCollectionMethodType< [ConfigFields](https://console.integration.app/ref/react/interfaces/_integration-app_react.ConnectorDataCollectionMethodType.html#configfields) =unknown>{

[name](https://console.integration.app/ref/react/interfaces/_integration-app_react.ConnectorDataCollectionMethodType.html#name)?:string;

[description](https://console.integration.app/ref/react/interfaces/_integration-app_react.ConnectorDataCollectionMethodType.html#description)?:string;

[fileKey](https://console.integration.app/ref/react/interfaces/_integration-app_react.ConnectorDataCollectionMethodType.html#filekey)?:string;

[getConfigSchema](https://console.integration.app/ref/react/interfaces/_integration-app_react.ConnectorDataCollectionMethodType.html#getconfigschema)?:(

args: [ConnectorDataCollectionMethodTypeArgs](https://console.integration.app/ref/react/interfaces/_integration-app_react.ConnectorDataCollectionMethodTypeArgs.html) < [ConfigFields](https://console.integration.app/ref/react/interfaces/_integration-app_react.ConnectorDataCollectionMethodType.html#configfields) >,

)=> [DataSchema](https://console.integration.app/ref/react/interfaces/DataSchema.html);

[getInputSchema](https://console.integration.app/ref/react/interfaces/_integration-app_react.ConnectorDataCollectionMethodType.html#getinputschema)?:(

args: [ConnectorDataCollectionMethodTypeArgs](https://console.integration.app/ref/react/interfaces/_integration-app_react.ConnectorDataCollectionMethodTypeArgs.html) < [ConfigFields](https://console.integration.app/ref/react/interfaces/_integration-app_react.ConnectorDataCollectionMethodType.html#configfields) >,

)=> [DataSchema](https://console.integration.app/ref/react/interfaces/DataSchema.html);

[getOutputSchema](https://console.integration.app/ref/react/interfaces/_integration-app_react.ConnectorDataCollectionMethodType.html#getoutputschema)?:(

args: [ConnectorDataCollectionMethodTypeArgs](https://console.integration.app/ref/react/interfaces/_integration-app_react.ConnectorDataCollectionMethodTypeArgs.html) < [ConfigFields](https://console.integration.app/ref/react/interfaces/_integration-app_react.ConnectorDataCollectionMethodType.html#configfields) >,

)=> [DataSchema](https://console.integration.app/ref/react/interfaces/DataSchema.html);

[supportedImplementationTypes](https://console.integration.app/ref/react/interfaces/_integration-app_react.ConnectorDataCollectionMethodType.html#supportedimplementationtypes): [ConnectorMethodImplementationType](https://console.integration.app/ref/react/enums/ConnectorMethodImplementationType.html)\[\];

[isDeprecated](https://console.integration.app/ref/react/interfaces/_integration-app_react.ConnectorDataCollectionMethodType.html#isdeprecated)?:boolean;

}

#### Type Parameters

- ConfigFields = unknown

##### Index

### Properties

[name?](https://console.integration.app/ref/react/interfaces/_integration-app_react.ConnectorDataCollectionMethodType.html#name) [description?](https://console.integration.app/ref/react/interfaces/_integration-app_react.ConnectorDataCollectionMethodType.html#description) [fileKey?](https://console.integration.app/ref/react/interfaces/_integration-app_react.ConnectorDataCollectionMethodType.html#filekey) [getConfigSchema?](https://console.integration.app/ref/react/interfaces/_integration-app_react.ConnectorDataCollectionMethodType.html#getconfigschema) [getInputSchema?](https://console.integration.app/ref/react/interfaces/_integration-app_react.ConnectorDataCollectionMethodType.html#getinputschema) [getOutputSchema?](https://console.integration.app/ref/react/interfaces/_integration-app_react.ConnectorDataCollectionMethodType.html#getoutputschema) [supportedImplementationTypes](https://console.integration.app/ref/react/interfaces/_integration-app_react.ConnectorDataCollectionMethodType.html#supportedimplementationtypes) [isDeprecated?](https://console.integration.app/ref/react/interfaces/_integration-app_react.ConnectorDataCollectionMethodType.html#isdeprecated)

## Properties

### `Optional` name [Permalink](https://console.integration.app/ref/react/interfaces/_integration-app_react.ConnectorDataCollectionMethodType.html\#name)

name?:string

### `Optional` description [Permalink](https://console.integration.app/ref/react/interfaces/_integration-app_react.ConnectorDataCollectionMethodType.html\#description)

description?:string

### `Optional` fileKey [Permalink](https://console.integration.app/ref/react/interfaces/_integration-app_react.ConnectorDataCollectionMethodType.html\#filekey)

fileKey?:string

### `Optional` getConfigSchema [Permalink](https://console.integration.app/ref/react/interfaces/_integration-app_react.ConnectorDataCollectionMethodType.html\#getconfigschema)

getConfigSchema?:(

args: [ConnectorDataCollectionMethodTypeArgs](https://console.integration.app/ref/react/interfaces/_integration-app_react.ConnectorDataCollectionMethodTypeArgs.html) < [ConfigFields](https://console.integration.app/ref/react/interfaces/_integration-app_react.ConnectorDataCollectionMethodType.html#configfields) >,

)=> [DataSchema](https://console.integration.app/ref/react/interfaces/DataSchema.html)

### `Optional` getInputSchema [Permalink](https://console.integration.app/ref/react/interfaces/_integration-app_react.ConnectorDataCollectionMethodType.html\#getinputschema)

getInputSchema?:(

args: [ConnectorDataCollectionMethodTypeArgs](https://console.integration.app/ref/react/interfaces/_integration-app_react.ConnectorDataCollectionMethodTypeArgs.html) < [ConfigFields](https://console.integration.app/ref/react/interfaces/_integration-app_react.ConnectorDataCollectionMethodType.html#configfields) >,

)=> [DataSchema](https://console.integration.app/ref/react/interfaces/DataSchema.html)

### `Optional` getOutputSchema [Permalink](https://console.integration.app/ref/react/interfaces/_integration-app_react.ConnectorDataCollectionMethodType.html\#getoutputschema)

getOutputSchema?:(

args: [ConnectorDataCollectionMethodTypeArgs](https://console.integration.app/ref/react/interfaces/_integration-app_react.ConnectorDataCollectionMethodTypeArgs.html) < [ConfigFields](https://console.integration.app/ref/react/interfaces/_integration-app_react.ConnectorDataCollectionMethodType.html#configfields) >,

)=> [DataSchema](https://console.integration.app/ref/react/interfaces/DataSchema.html)

### supportedImplementationTypes [Permalink](https://console.integration.app/ref/react/interfaces/_integration-app_react.ConnectorDataCollectionMethodType.html\#supportedimplementationtypes)

supportedImplementationTypes: [ConnectorMethodImplementationType](https://console.integration.app/ref/react/enums/ConnectorMethodImplementationType.html)\[\]

### `Optional` isDeprecated [Permalink](https://console.integration.app/ref/react/interfaces/_integration-app_react.ConnectorDataCollectionMethodType.html\#isdeprecated)

isDeprecated?:boolean

### Settings

Member Visibility

- Protected
- Inherited
- External

ThemeOSLightDark

### On This Page

Properties

[name](https://console.integration.app/ref/react/interfaces/_integration-app_react.ConnectorDataCollectionMethodType.html#name) [description](https://console.integration.app/ref/react/interfaces/_integration-app_react.ConnectorDataCollectionMethodType.html#description) [fileKey](https://console.integration.app/ref/react/interfaces/_integration-app_react.ConnectorDataCollectionMethodType.html#filekey) [getConfigSchema](https://console.integration.app/ref/react/interfaces/_integration-app_react.ConnectorDataCollectionMethodType.html#getconfigschema) [getInputSchema](https://console.integration.app/ref/react/interfaces/_integration-app_react.ConnectorDataCollectionMethodType.html#getinputschema) [getOutputSchema](https://console.integration.app/ref/react/interfaces/_integration-app_react.ConnectorDataCollectionMethodType.html#getoutputschema) [supportedImplementationTypes](https://console.integration.app/ref/react/interfaces/_integration-app_react.ConnectorDataCollectionMethodType.html#supportedimplementationtypes) [isDeprecated](https://console.integration.app/ref/react/interfaces/_integration-app_react.ConnectorDataCollectionMethodType.html#isdeprecated)

MMNEPVFCICPMFPCPTTAAATR