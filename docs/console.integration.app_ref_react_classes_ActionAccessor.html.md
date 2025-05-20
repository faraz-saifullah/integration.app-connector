---
url: "https://console.integration.app/ref/react/classes/ActionAccessor.html"
title: "ActionAccessor | Integration App React - v2.14.3"
---

- [Integration App React](https://console.integration.app/ref/react/index.html)
- [ActionAccessor](https://console.integration.app/ref/react/classes/ActionAccessor.html)

# Class ActionAccessor

#### Hierarchy ( [View Summary](https://console.integration.app/ref/react/hierarchy.html\#ActionAccessor), Expand)

- [ElementAccessor](https://console.integration.app/ref/react/classes/ElementAccessor.html) < [Action](https://console.integration.app/ref/react/interfaces/Action.html), [UpdateActionRequest](https://console.integration.app/ref/react/types/UpdateActionRequest.html), [ActionSelector](https://console.integration.app/ref/react/interfaces/ActionSelector.html) >
  - ActionAccessor

##### Index

### Constructors

[constructor](https://console.integration.app/ref/react/classes/ActionAccessor.html#constructor)

### Methods

[getUniqueIdentifier](https://console.integration.app/ref/react/classes/ActionAccessor.html#getuniqueidentifier) [get](https://console.integration.app/ref/react/classes/ActionAccessor.html#get) [put](https://console.integration.app/ref/react/classes/ActionAccessor.html#put) [patch](https://console.integration.app/ref/react/classes/ActionAccessor.html#patch) [archive](https://console.integration.app/ref/react/classes/ActionAccessor.html#archive) [getPath](https://console.integration.app/ref/react/classes/ActionAccessor.html#getpath) [apply](https://console.integration.app/ref/react/classes/ActionAccessor.html#apply) [reset](https://console.integration.app/ref/react/classes/ActionAccessor.html#reset)

### Properties

[options](https://console.integration.app/ref/react/classes/ActionAccessor.html#options)

## Constructors

### constructor [Permalink](https://console.integration.app/ref/react/classes/ActionAccessor.html\#constructor)

- newActionAccessor(

client: [IntegrationAppApiClient](https://console.integration.app/ref/react/classes/_integration-app_react.IntegrationAppApiClient.html),

selector:string\| [ActionSelector](https://console.integration.app/ref/react/interfaces/ActionSelector.html),

): [ActionAccessor](https://console.integration.app/ref/react/classes/ActionAccessor.html) [Permalink](https://console.integration.app/ref/react/classes/ActionAccessor.html#constructoractionaccessor)





#### Parameters



- client: [IntegrationAppApiClient](https://console.integration.app/ref/react/classes/_integration-app_react.IntegrationAppApiClient.html)
- selector: string\| [ActionSelector](https://console.integration.app/ref/react/interfaces/ActionSelector.html)

#### Returns [ActionAccessor](https://console.integration.app/ref/react/classes/ActionAccessor.html)

## Methods

### getUniqueIdentifier [Permalink](https://console.integration.app/ref/react/classes/ActionAccessor.html\#getuniqueidentifier)

- getUniqueIdentifier():string [Permalink](https://console.integration.app/ref/react/classes/ActionAccessor.html#getuniqueidentifier-1)



#### Returns string


### get [Permalink](https://console.integration.app/ref/react/classes/ActionAccessor.html\#get)

- get():Promise< [Action](https://console.integration.app/ref/react/interfaces/Action.html) > [Permalink](https://console.integration.app/ref/react/classes/ActionAccessor.html#get-1)



#### Returns Promise< [Action](https://console.integration.app/ref/react/interfaces/Action.html) >


### put [Permalink](https://console.integration.app/ref/react/classes/ActionAccessor.html\#put)

- put(data: [UpdateActionRequest](https://console.integration.app/ref/react/types/UpdateActionRequest.html)):Promise< [Action](https://console.integration.app/ref/react/interfaces/Action.html) > [Permalink](https://console.integration.app/ref/react/classes/ActionAccessor.html#put-1)





#### Parameters



- data: [UpdateActionRequest](https://console.integration.app/ref/react/types/UpdateActionRequest.html)

#### Returns Promise< [Action](https://console.integration.app/ref/react/interfaces/Action.html) >

### patch [Permalink](https://console.integration.app/ref/react/classes/ActionAccessor.html\#patch)

- patch(data:Partial< [UpdateActionRequest](https://console.integration.app/ref/react/types/UpdateActionRequest.html) >):Promise< [Action](https://console.integration.app/ref/react/interfaces/Action.html) > [Permalink](https://console.integration.app/ref/react/classes/ActionAccessor.html#patch-1)





#### Parameters



- data: Partial< [UpdateActionRequest](https://console.integration.app/ref/react/types/UpdateActionRequest.html) >

#### Returns Promise< [Action](https://console.integration.app/ref/react/interfaces/Action.html) >

### archive [Permalink](https://console.integration.app/ref/react/classes/ActionAccessor.html\#archive)

- archive():Promise<void> [Permalink](https://console.integration.app/ref/react/classes/ActionAccessor.html#archive-1)



#### Returns Promise<void>


### getPath [Permalink](https://console.integration.app/ref/react/classes/ActionAccessor.html\#getpath)

- getPath(operation?:string):string [Permalink](https://console.integration.app/ref/react/classes/ActionAccessor.html#getpath-1)





#### Parameters



- `Optional` operation: string

#### Returns string

### apply [Permalink](https://console.integration.app/ref/react/classes/ActionAccessor.html\#apply)

- apply(integrationKeys:string\[\]):Promise< [Action](https://console.integration.app/ref/react/interfaces/Action.html)\[\]> [Permalink](https://console.integration.app/ref/react/classes/ActionAccessor.html#apply-1)





#### Parameters



- integrationKeys: string\[\]

#### Returns Promise< [Action](https://console.integration.app/ref/react/interfaces/Action.html)\[\]>

### reset [Permalink](https://console.integration.app/ref/react/classes/ActionAccessor.html\#reset)

- reset():Promise<any> [Permalink](https://console.integration.app/ref/react/classes/ActionAccessor.html#reset-1)



#### Returns Promise<any>


## Properties

### `Protected` options [Permalink](https://console.integration.app/ref/react/classes/ActionAccessor.html\#options)

options:{

client: [IntegrationAppApiClient](https://console.integration.app/ref/react/classes/_integration-app_react.IntegrationAppApiClient.html);

path:string;

selector:string\| [ActionSelector](https://console.integration.app/ref/react/interfaces/ActionSelector.html);

}

### Settings

Member Visibility

- Protected
- Inherited
- External

ThemeOSLightDark

### On This Page

Constructors

[constructor](https://console.integration.app/ref/react/classes/ActionAccessor.html#constructor)

Methods

[getUniqueIdentifier](https://console.integration.app/ref/react/classes/ActionAccessor.html#getuniqueidentifier) [get](https://console.integration.app/ref/react/classes/ActionAccessor.html#get) [put](https://console.integration.app/ref/react/classes/ActionAccessor.html#put) [patch](https://console.integration.app/ref/react/classes/ActionAccessor.html#patch) [archive](https://console.integration.app/ref/react/classes/ActionAccessor.html#archive) [getPath](https://console.integration.app/ref/react/classes/ActionAccessor.html#getpath) [apply](https://console.integration.app/ref/react/classes/ActionAccessor.html#apply) [reset](https://console.integration.app/ref/react/classes/ActionAccessor.html#reset)

Properties

[options](https://console.integration.app/ref/react/classes/ActionAccessor.html#options)

MMNEPVFCICPMFPCPTTAAATR