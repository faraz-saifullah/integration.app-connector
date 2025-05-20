---
url: "https://console.integration.app/ref/react/classes/FieldMappingInstanceAccessor.html"
title: "FieldMappingInstanceAccessor | Integration App React - v2.14.3"
---

- [Integration App React](https://console.integration.app/ref/react/index.html)
- [FieldMappingInstanceAccessor](https://console.integration.app/ref/react/classes/FieldMappingInstanceAccessor.html)

# Class FieldMappingInstanceAccessor

#### Hierarchy ( [View Summary](https://console.integration.app/ref/react/hierarchy.html\#FieldMappingInstanceAccessor), Expand)

- [ElementInstanceAccessor](https://console.integration.app/ref/react/classes/ElementInstanceAccessor.html) <

[FieldMappingInstance](https://console.integration.app/ref/react/interfaces/FieldMappingInstance.html),

[FieldMappingInstanceSelector](https://console.integration.app/ref/react/interfaces/FieldMappingInstanceSelector.html),

[CreateFieldMappingInstanceRequest](https://console.integration.app/ref/react/interfaces/CreateFieldMappingInstanceRequest.html),

[UpdateFieldMappingInstanceRequest](https://console.integration.app/ref/react/interfaces/UpdateFieldMappingInstanceRequest.html),

>
  - FieldMappingInstanceAccessor

##### Index

### Constructors

[constructor](https://console.integration.app/ref/react/classes/FieldMappingInstanceAccessor.html#constructor)

### Methods

[getUniqueIdentifier](https://console.integration.app/ref/react/classes/FieldMappingInstanceAccessor.html#getuniqueidentifier) [get](https://console.integration.app/ref/react/classes/FieldMappingInstanceAccessor.html#get) [getId](https://console.integration.app/ref/react/classes/FieldMappingInstanceAccessor.html#getid) [create](https://console.integration.app/ref/react/classes/FieldMappingInstanceAccessor.html#create) [put](https://console.integration.app/ref/react/classes/FieldMappingInstanceAccessor.html#put) [patch](https://console.integration.app/ref/react/classes/FieldMappingInstanceAccessor.html#patch) [archive](https://console.integration.app/ref/react/classes/FieldMappingInstanceAccessor.html#archive) [delete](https://console.integration.app/ref/react/classes/FieldMappingInstanceAccessor.html#delete) [getPath](https://console.integration.app/ref/react/classes/FieldMappingInstanceAccessor.html#getpath) [setup](https://console.integration.app/ref/react/classes/FieldMappingInstanceAccessor.html#setup) [reset](https://console.integration.app/ref/react/classes/FieldMappingInstanceAccessor.html#reset) [openConfiguration](https://console.integration.app/ref/react/classes/FieldMappingInstanceAccessor.html#openconfiguration)

### Properties

[options](https://console.integration.app/ref/react/classes/FieldMappingInstanceAccessor.html#options)

## Constructors

### constructor [Permalink](https://console.integration.app/ref/react/classes/FieldMappingInstanceAccessor.html\#constructor)

- newFieldMappingInstanceAccessor(

client: [IntegrationAppApiClient](https://console.integration.app/ref/react/classes/_integration-app_react.IntegrationAppApiClient.html),

selector:string\| [FieldMappingInstanceSelector](https://console.integration.app/ref/react/interfaces/FieldMappingInstanceSelector.html),

): [FieldMappingInstanceAccessor](https://console.integration.app/ref/react/classes/FieldMappingInstanceAccessor.html) [Permalink](https://console.integration.app/ref/react/classes/FieldMappingInstanceAccessor.html#constructorfieldmappinginstanceaccessor)





#### Parameters



- client: [IntegrationAppApiClient](https://console.integration.app/ref/react/classes/_integration-app_react.IntegrationAppApiClient.html)
- selector: string\| [FieldMappingInstanceSelector](https://console.integration.app/ref/react/interfaces/FieldMappingInstanceSelector.html)

#### Returns [FieldMappingInstanceAccessor](https://console.integration.app/ref/react/classes/FieldMappingInstanceAccessor.html)

## Methods

### getUniqueIdentifier [Permalink](https://console.integration.app/ref/react/classes/FieldMappingInstanceAccessor.html\#getuniqueidentifier)

- getUniqueIdentifier():string [Permalink](https://console.integration.app/ref/react/classes/FieldMappingInstanceAccessor.html#getuniqueidentifier-1)



#### Returns string


### get [Permalink](https://console.integration.app/ref/react/classes/FieldMappingInstanceAccessor.html\#get)

- get():Promise< [FieldMappingInstance](https://console.integration.app/ref/react/interfaces/FieldMappingInstance.html) > [Permalink](https://console.integration.app/ref/react/classes/FieldMappingInstanceAccessor.html#get-1)



#### Returns Promise< [FieldMappingInstance](https://console.integration.app/ref/react/interfaces/FieldMappingInstance.html) >


### getId [Permalink](https://console.integration.app/ref/react/classes/FieldMappingInstanceAccessor.html\#getid)

- getId():Promise<string> [Permalink](https://console.integration.app/ref/react/classes/FieldMappingInstanceAccessor.html#getid-1)



#### Returns Promise<string>


### create [Permalink](https://console.integration.app/ref/react/classes/FieldMappingInstanceAccessor.html\#create)

- create(data?: [CreateFieldMappingInstanceRequest](https://console.integration.app/ref/react/interfaces/CreateFieldMappingInstanceRequest.html)):Promise< [FieldMappingInstance](https://console.integration.app/ref/react/interfaces/FieldMappingInstance.html) > [Permalink](https://console.integration.app/ref/react/classes/FieldMappingInstanceAccessor.html#create-1)





#### Parameters



- `Optional` data: [CreateFieldMappingInstanceRequest](https://console.integration.app/ref/react/interfaces/CreateFieldMappingInstanceRequest.html)

#### Returns Promise< [FieldMappingInstance](https://console.integration.app/ref/react/interfaces/FieldMappingInstance.html) >

### put [Permalink](https://console.integration.app/ref/react/classes/FieldMappingInstanceAccessor.html\#put)

- put(data: [CreateFieldMappingInstanceRequest](https://console.integration.app/ref/react/interfaces/CreateFieldMappingInstanceRequest.html)):Promise< [FieldMappingInstance](https://console.integration.app/ref/react/interfaces/FieldMappingInstance.html) > [Permalink](https://console.integration.app/ref/react/classes/FieldMappingInstanceAccessor.html#put-1)





#### Parameters



- data: [CreateFieldMappingInstanceRequest](https://console.integration.app/ref/react/interfaces/CreateFieldMappingInstanceRequest.html)

#### Returns Promise< [FieldMappingInstance](https://console.integration.app/ref/react/interfaces/FieldMappingInstance.html) >

### patch [Permalink](https://console.integration.app/ref/react/classes/FieldMappingInstanceAccessor.html\#patch)

- patch(data: [UpdateFieldMappingInstanceRequest](https://console.integration.app/ref/react/interfaces/UpdateFieldMappingInstanceRequest.html)):Promise< [FieldMappingInstance](https://console.integration.app/ref/react/interfaces/FieldMappingInstance.html) > [Permalink](https://console.integration.app/ref/react/classes/FieldMappingInstanceAccessor.html#patch-1)





#### Parameters



- data: [UpdateFieldMappingInstanceRequest](https://console.integration.app/ref/react/interfaces/UpdateFieldMappingInstanceRequest.html)

#### Returns Promise< [FieldMappingInstance](https://console.integration.app/ref/react/interfaces/FieldMappingInstance.html) >

### archive [Permalink](https://console.integration.app/ref/react/classes/FieldMappingInstanceAccessor.html\#archive)

- archive():Promise<void> [Permalink](https://console.integration.app/ref/react/classes/FieldMappingInstanceAccessor.html#archive-1)



#### Returns Promise<void>


### delete [Permalink](https://console.integration.app/ref/react/classes/FieldMappingInstanceAccessor.html\#delete)

- delete():Promise<void> [Permalink](https://console.integration.app/ref/react/classes/FieldMappingInstanceAccessor.html#delete-1)



#### Returns Promise<void>


### `Protected` getPath [Permalink](https://console.integration.app/ref/react/classes/FieldMappingInstanceAccessor.html\#getpath)

- getPath(operation?:string):string [Permalink](https://console.integration.app/ref/react/classes/FieldMappingInstanceAccessor.html#getpath-1)





#### Parameters



- `Optional` operation: string

#### Returns string

### setup [Permalink](https://console.integration.app/ref/react/classes/FieldMappingInstanceAccessor.html\#setup)

- setup():Promise<void> [Permalink](https://console.integration.app/ref/react/classes/FieldMappingInstanceAccessor.html#setup-1)



#### Returns Promise<void>


### reset [Permalink](https://console.integration.app/ref/react/classes/FieldMappingInstanceAccessor.html\#reset)

- reset():Promise<void> [Permalink](https://console.integration.app/ref/react/classes/FieldMappingInstanceAccessor.html#reset-1)



#### Returns Promise<void>


### openConfiguration [Permalink](https://console.integration.app/ref/react/classes/FieldMappingInstanceAccessor.html\#openconfiguration)

- openConfiguration(

\_\_namedParameters?: [OpenFieldMappingInstanceConfigurationOptions](https://console.integration.app/ref/react/interfaces/OpenFieldMappingInstanceConfigurationOptions.html),

):Promise<void> [Permalink](https://console.integration.app/ref/react/classes/FieldMappingInstanceAccessor.html#openconfiguration-1)





#### Parameters



- `Optional`\_\_namedParameters: [OpenFieldMappingInstanceConfigurationOptions](https://console.integration.app/ref/react/interfaces/OpenFieldMappingInstanceConfigurationOptions.html)

#### Returns Promise<void>

## Properties

### `Protected` options [Permalink](https://console.integration.app/ref/react/classes/FieldMappingInstanceAccessor.html\#options)

options:{

client: [IntegrationAppApiClient](https://console.integration.app/ref/react/classes/_integration-app_react.IntegrationAppApiClient.html);

instancePath:string;

selector:string\| [FieldMappingInstanceSelector](https://console.integration.app/ref/react/interfaces/FieldMappingInstanceSelector.html);

type?: [WorkspaceElementType](https://console.integration.app/ref/react/enums/WorkspaceElementType.html);

}

### Settings

Member Visibility

- Protected
- Inherited
- External

ThemeOSLightDark

### On This Page

Constructors

[constructor](https://console.integration.app/ref/react/classes/FieldMappingInstanceAccessor.html#constructor)

Methods

[getUniqueIdentifier](https://console.integration.app/ref/react/classes/FieldMappingInstanceAccessor.html#getuniqueidentifier) [get](https://console.integration.app/ref/react/classes/FieldMappingInstanceAccessor.html#get) [getId](https://console.integration.app/ref/react/classes/FieldMappingInstanceAccessor.html#getid) [create](https://console.integration.app/ref/react/classes/FieldMappingInstanceAccessor.html#create) [put](https://console.integration.app/ref/react/classes/FieldMappingInstanceAccessor.html#put) [patch](https://console.integration.app/ref/react/classes/FieldMappingInstanceAccessor.html#patch) [archive](https://console.integration.app/ref/react/classes/FieldMappingInstanceAccessor.html#archive) [delete](https://console.integration.app/ref/react/classes/FieldMappingInstanceAccessor.html#delete) [getPath](https://console.integration.app/ref/react/classes/FieldMappingInstanceAccessor.html#getpath) [setup](https://console.integration.app/ref/react/classes/FieldMappingInstanceAccessor.html#setup) [reset](https://console.integration.app/ref/react/classes/FieldMappingInstanceAccessor.html#reset) [openConfiguration](https://console.integration.app/ref/react/classes/FieldMappingInstanceAccessor.html#openconfiguration)

Properties

[options](https://console.integration.app/ref/react/classes/FieldMappingInstanceAccessor.html#options)

MMNEPVFCICPMFPCPTTAAATR