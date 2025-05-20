---
url: "https://console.integration.app/ref/react/classes/ActionInstanceAccessor.html"
title: "ActionInstanceAccessor | Integration App React - v2.14.3"
---

- [Integration App React](https://console.integration.app/ref/react/index.html)
- [ActionInstanceAccessor](https://console.integration.app/ref/react/classes/ActionInstanceAccessor.html)

# Class ActionInstanceAccessor

#### Hierarchy ( [View Summary](https://console.integration.app/ref/react/hierarchy.html\#ActionInstanceAccessor), Expand)

- [ElementInstanceAccessor](https://console.integration.app/ref/react/classes/ElementInstanceAccessor.html) <

[ActionInstance](https://console.integration.app/ref/react/interfaces/ActionInstance.html),

[ActionInstanceSelector](https://console.integration.app/ref/react/interfaces/ActionInstanceSelector.html),

[CreateActionInstanceRequest](https://console.integration.app/ref/react/interfaces/CreateActionInstanceRequest.html),

[UpdateActionInstanceRequest](https://console.integration.app/ref/react/interfaces/UpdateActionInstanceRequest.html),

>
  - ActionInstanceAccessor

##### Index

### Constructors

[constructor](https://console.integration.app/ref/react/classes/ActionInstanceAccessor.html#constructor)

### Methods

[getUniqueIdentifier](https://console.integration.app/ref/react/classes/ActionInstanceAccessor.html#getuniqueidentifier) [get](https://console.integration.app/ref/react/classes/ActionInstanceAccessor.html#get) [getId](https://console.integration.app/ref/react/classes/ActionInstanceAccessor.html#getid) [create](https://console.integration.app/ref/react/classes/ActionInstanceAccessor.html#create) [put](https://console.integration.app/ref/react/classes/ActionInstanceAccessor.html#put) [patch](https://console.integration.app/ref/react/classes/ActionInstanceAccessor.html#patch) [archive](https://console.integration.app/ref/react/classes/ActionInstanceAccessor.html#archive) [delete](https://console.integration.app/ref/react/classes/ActionInstanceAccessor.html#delete) [getPath](https://console.integration.app/ref/react/classes/ActionInstanceAccessor.html#getpath) [setup](https://console.integration.app/ref/react/classes/ActionInstanceAccessor.html#setup) [reset](https://console.integration.app/ref/react/classes/ActionInstanceAccessor.html#reset) [run](https://console.integration.app/ref/react/classes/ActionInstanceAccessor.html#run) [open](https://console.integration.app/ref/react/classes/ActionInstanceAccessor.html#open)

### Properties

[options](https://console.integration.app/ref/react/classes/ActionInstanceAccessor.html#options) [client](https://console.integration.app/ref/react/classes/ActionInstanceAccessor.html#client)

## Constructors

### constructor [Permalink](https://console.integration.app/ref/react/classes/ActionInstanceAccessor.html\#constructor)

- newActionInstanceAccessor(

client: [IntegrationAppApiClient](https://console.integration.app/ref/react/classes/_integration-app_react.IntegrationAppApiClient.html),

selector:string\| [ActionInstanceSelector](https://console.integration.app/ref/react/interfaces/ActionInstanceSelector.html),

): [ActionInstanceAccessor](https://console.integration.app/ref/react/classes/ActionInstanceAccessor.html) [Permalink](https://console.integration.app/ref/react/classes/ActionInstanceAccessor.html#constructoractioninstanceaccessor)





#### Parameters



- client: [IntegrationAppApiClient](https://console.integration.app/ref/react/classes/_integration-app_react.IntegrationAppApiClient.html)
- selector: string\| [ActionInstanceSelector](https://console.integration.app/ref/react/interfaces/ActionInstanceSelector.html)

#### Returns [ActionInstanceAccessor](https://console.integration.app/ref/react/classes/ActionInstanceAccessor.html)

## Methods

### getUniqueIdentifier [Permalink](https://console.integration.app/ref/react/classes/ActionInstanceAccessor.html\#getuniqueidentifier)

- getUniqueIdentifier():string [Permalink](https://console.integration.app/ref/react/classes/ActionInstanceAccessor.html#getuniqueidentifier-1)



#### Returns string


### get [Permalink](https://console.integration.app/ref/react/classes/ActionInstanceAccessor.html\#get)

- get():Promise< [ActionInstance](https://console.integration.app/ref/react/interfaces/ActionInstance.html) > [Permalink](https://console.integration.app/ref/react/classes/ActionInstanceAccessor.html#get-1)



#### Returns Promise< [ActionInstance](https://console.integration.app/ref/react/interfaces/ActionInstance.html) >


### getId [Permalink](https://console.integration.app/ref/react/classes/ActionInstanceAccessor.html\#getid)

- getId():Promise<string> [Permalink](https://console.integration.app/ref/react/classes/ActionInstanceAccessor.html#getid-1)



#### Returns Promise<string>


### create [Permalink](https://console.integration.app/ref/react/classes/ActionInstanceAccessor.html\#create)

- create(data?: [CreateActionInstanceRequest](https://console.integration.app/ref/react/interfaces/CreateActionInstanceRequest.html)):Promise< [ActionInstance](https://console.integration.app/ref/react/interfaces/ActionInstance.html) > [Permalink](https://console.integration.app/ref/react/classes/ActionInstanceAccessor.html#create-1)





#### Parameters



- `Optional` data: [CreateActionInstanceRequest](https://console.integration.app/ref/react/interfaces/CreateActionInstanceRequest.html)

#### Returns Promise< [ActionInstance](https://console.integration.app/ref/react/interfaces/ActionInstance.html) >

### put [Permalink](https://console.integration.app/ref/react/classes/ActionInstanceAccessor.html\#put)

- put(data: [CreateActionInstanceRequest](https://console.integration.app/ref/react/interfaces/CreateActionInstanceRequest.html)):Promise< [ActionInstance](https://console.integration.app/ref/react/interfaces/ActionInstance.html) > [Permalink](https://console.integration.app/ref/react/classes/ActionInstanceAccessor.html#put-1)





#### Parameters



- data: [CreateActionInstanceRequest](https://console.integration.app/ref/react/interfaces/CreateActionInstanceRequest.html)

#### Returns Promise< [ActionInstance](https://console.integration.app/ref/react/interfaces/ActionInstance.html) >

### patch [Permalink](https://console.integration.app/ref/react/classes/ActionInstanceAccessor.html\#patch)

- patch(data: [UpdateActionInstanceRequest](https://console.integration.app/ref/react/interfaces/UpdateActionInstanceRequest.html)):Promise< [ActionInstance](https://console.integration.app/ref/react/interfaces/ActionInstance.html) > [Permalink](https://console.integration.app/ref/react/classes/ActionInstanceAccessor.html#patch-1)





#### Parameters



- data: [UpdateActionInstanceRequest](https://console.integration.app/ref/react/interfaces/UpdateActionInstanceRequest.html)

#### Returns Promise< [ActionInstance](https://console.integration.app/ref/react/interfaces/ActionInstance.html) >

### archive [Permalink](https://console.integration.app/ref/react/classes/ActionInstanceAccessor.html\#archive)

- archive():Promise<void> [Permalink](https://console.integration.app/ref/react/classes/ActionInstanceAccessor.html#archive-1)



#### Returns Promise<void>


### delete [Permalink](https://console.integration.app/ref/react/classes/ActionInstanceAccessor.html\#delete)

- delete():Promise<void> [Permalink](https://console.integration.app/ref/react/classes/ActionInstanceAccessor.html#delete-1)



#### Returns Promise<void>


### `Protected` getPath [Permalink](https://console.integration.app/ref/react/classes/ActionInstanceAccessor.html\#getpath)

- getPath(operation?:string):string [Permalink](https://console.integration.app/ref/react/classes/ActionInstanceAccessor.html#getpath-1)





#### Parameters



- `Optional` operation: string

#### Returns string

### setup [Permalink](https://console.integration.app/ref/react/classes/ActionInstanceAccessor.html\#setup)

- setup():Promise<void> [Permalink](https://console.integration.app/ref/react/classes/ActionInstanceAccessor.html#setup-1)



#### Returns Promise<void>


### reset [Permalink](https://console.integration.app/ref/react/classes/ActionInstanceAccessor.html\#reset)

- reset():Promise<void> [Permalink](https://console.integration.app/ref/react/classes/ActionInstanceAccessor.html#reset-1)



#### Returns Promise<void>


### run [Permalink](https://console.integration.app/ref/react/classes/ActionInstanceAccessor.html\#run)

- run(input?:any):Promise< [ActionRunResponse](https://console.integration.app/ref/react/interfaces/ActionRunResponse.html) > [Permalink](https://console.integration.app/ref/react/classes/ActionInstanceAccessor.html#run-1)





#### Parameters



- `Optional` input: any

#### Returns Promise< [ActionRunResponse](https://console.integration.app/ref/react/interfaces/ActionRunResponse.html) >

### open [Permalink](https://console.integration.app/ref/react/classes/ActionInstanceAccessor.html\#open)

- open(\_\_namedParameters?: [OpenActionConfigurationOptions](https://console.integration.app/ref/react/interfaces/OpenActionConfigurationOptions.html)):Promise<void> [Permalink](https://console.integration.app/ref/react/classes/ActionInstanceAccessor.html#open-1)





#### Parameters



- `Optional`\_\_namedParameters: [OpenActionConfigurationOptions](https://console.integration.app/ref/react/interfaces/OpenActionConfigurationOptions.html)

#### Returns Promise<void>

## Properties

### `Protected` options [Permalink](https://console.integration.app/ref/react/classes/ActionInstanceAccessor.html\#options)

options:{

client: [IntegrationAppApiClient](https://console.integration.app/ref/react/classes/_integration-app_react.IntegrationAppApiClient.html);

instancePath:string;

selector:string\| [ActionInstanceSelector](https://console.integration.app/ref/react/interfaces/ActionInstanceSelector.html);

type?: [WorkspaceElementType](https://console.integration.app/ref/react/enums/WorkspaceElementType.html);

}

### client [Permalink](https://console.integration.app/ref/react/classes/ActionInstanceAccessor.html\#client)

client: [IntegrationAppApiClient](https://console.integration.app/ref/react/classes/_integration-app_react.IntegrationAppApiClient.html)

### Settings

Member Visibility

- Protected
- Inherited
- External

ThemeOSLightDark

### On This Page

Constructors

[constructor](https://console.integration.app/ref/react/classes/ActionInstanceAccessor.html#constructor)

Methods

[getUniqueIdentifier](https://console.integration.app/ref/react/classes/ActionInstanceAccessor.html#getuniqueidentifier) [get](https://console.integration.app/ref/react/classes/ActionInstanceAccessor.html#get) [getId](https://console.integration.app/ref/react/classes/ActionInstanceAccessor.html#getid) [create](https://console.integration.app/ref/react/classes/ActionInstanceAccessor.html#create) [put](https://console.integration.app/ref/react/classes/ActionInstanceAccessor.html#put) [patch](https://console.integration.app/ref/react/classes/ActionInstanceAccessor.html#patch) [archive](https://console.integration.app/ref/react/classes/ActionInstanceAccessor.html#archive) [delete](https://console.integration.app/ref/react/classes/ActionInstanceAccessor.html#delete) [getPath](https://console.integration.app/ref/react/classes/ActionInstanceAccessor.html#getpath) [setup](https://console.integration.app/ref/react/classes/ActionInstanceAccessor.html#setup) [reset](https://console.integration.app/ref/react/classes/ActionInstanceAccessor.html#reset) [run](https://console.integration.app/ref/react/classes/ActionInstanceAccessor.html#run) [open](https://console.integration.app/ref/react/classes/ActionInstanceAccessor.html#open)

Properties

[options](https://console.integration.app/ref/react/classes/ActionInstanceAccessor.html#options) [client](https://console.integration.app/ref/react/classes/ActionInstanceAccessor.html#client)

MMNEPVFCICPMFPCPTTAAATR