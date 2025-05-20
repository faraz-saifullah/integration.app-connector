---
url: "https://console.integration.app/ref/react/classes/_integration-app_react.Eval.html"
title: "Eval | Integration App React - v2.14.3"
---

- [Integration App React](https://console.integration.app/ref/react/index.html)
- [@integration-app/react](https://console.integration.app/ref/react/modules/_integration-app_react.html)
- [Eval](https://console.integration.app/ref/react/classes/_integration-app_react.Eval.html)

# Class Eval

#### Hierarchy ( [View Summary](https://console.integration.app/ref/react/hierarchy.html\#@integration-app/react.Eval), Expand)

- [Base](https://console.integration.app/ref/react/classes/Formula.Base.html)
  - Eval

##### Index

### Constructors

[constructor](https://console.integration.app/ref/react/classes/_integration-app_react.Eval.html#constructor)

### Methods

[resolveValue](https://console.integration.app/ref/react/classes/_integration-app_react.Eval.html#resolvevalue) [toString](https://console.integration.app/ref/react/classes/_integration-app_react.Eval.html#tostring) [getVariableLocators](https://console.integration.app/ref/react/classes/_integration-app_react.Eval.html#getvariablelocators) [getAvailableOperators](https://console.integration.app/ref/react/classes/_integration-app_react.Eval.html#getavailableoperators) [getOperator](https://console.integration.app/ref/react/classes/_integration-app_react.Eval.html#getoperator) [getValue](https://console.integration.app/ref/react/classes/_integration-app_react.Eval.html#getvalue) [getSchema](https://console.integration.app/ref/react/classes/_integration-app_react.Eval.html#getschema) [toObject](https://console.integration.app/ref/react/classes/_integration-app_react.Eval.html#toobject) [transformVars](https://console.integration.app/ref/react/classes/_integration-app_react.Eval.html#transformvars)

### Properties

[type](https://console.integration.app/ref/react/classes/_integration-app_react.Eval.html#type) [args](https://console.integration.app/ref/react/classes/_integration-app_react.Eval.html#args) [value](https://console.integration.app/ref/react/classes/_integration-app_react.Eval.html#value) [operatorKey](https://console.integration.app/ref/react/classes/_integration-app_react.Eval.html#operatorkey) [operand](https://console.integration.app/ref/react/classes/_integration-app_react.Eval.html#operand)

## Constructors

### constructor [Permalink](https://console.integration.app/ref/react/classes/_integration-app_react.Eval.html\#constructor)

- newEval(args:any,formulaValue:any): [Eval](https://console.integration.app/ref/react/classes/_integration-app_react.Eval.html) [Permalink](https://console.integration.app/ref/react/classes/_integration-app_react.Eval.html#constructoreval)





#### Parameters



- args: any
- formulaValue: any

#### Returns [Eval](https://console.integration.app/ref/react/classes/_integration-app_react.Eval.html)

## Methods

### resolveValue [Permalink](https://console.integration.app/ref/react/classes/_integration-app_react.Eval.html\#resolvevalue)

- resolveValue(params: [ResolveFormulaParams](https://console.integration.app/ref/react/interfaces/_integration-app_react.ResolveFormulaParams.html)):Promise<any> [Permalink](https://console.integration.app/ref/react/classes/_integration-app_react.Eval.html#resolvevalue-1)





#### Parameters



- params: [ResolveFormulaParams](https://console.integration.app/ref/react/interfaces/_integration-app_react.ResolveFormulaParams.html)

#### Returns Promise<any>

### toString [Permalink](https://console.integration.app/ref/react/classes/_integration-app_react.Eval.html\#tostring)

- toString(\_variablesSchema?:any):string [Permalink](https://console.integration.app/ref/react/classes/_integration-app_react.Eval.html#tostring-1)





#### Parameters



- `Optional`\_variablesSchema: any

#### Returns string

### getVariableLocators [Permalink](https://console.integration.app/ref/react/classes/_integration-app_react.Eval.html\#getvariablelocators)

- getVariableLocators():string\[\] [Permalink](https://console.integration.app/ref/react/classes/_integration-app_react.Eval.html#getvariablelocators-1)



#### Returns string\[\]


### getAvailableOperators [Permalink](https://console.integration.app/ref/react/classes/_integration-app_react.Eval.html\#getavailableoperators)

- getAvailableOperators(variablesSchema: [DataSchema](https://console.integration.app/ref/react/interfaces/DataSchema.html)): [EvalOperator](https://console.integration.app/ref/react/interfaces/EvalOperator.html)\[\] [Permalink](https://console.integration.app/ref/react/classes/_integration-app_react.Eval.html#getavailableoperators-1)





#### Parameters



- variablesSchema: [DataSchema](https://console.integration.app/ref/react/interfaces/DataSchema.html)

#### Returns [EvalOperator](https://console.integration.app/ref/react/interfaces/EvalOperator.html)\[\]

### getOperator [Permalink](https://console.integration.app/ref/react/classes/_integration-app_react.Eval.html\#getoperator)

- getOperator(variablesSchema:any): [EvalOperator](https://console.integration.app/ref/react/interfaces/EvalOperator.html) [Permalink](https://console.integration.app/ref/react/classes/_integration-app_react.Eval.html#getoperator-1)





#### Parameters



- variablesSchema: any

#### Returns [EvalOperator](https://console.integration.app/ref/react/interfaces/EvalOperator.html)

### getValue [Permalink](https://console.integration.app/ref/react/classes/_integration-app_react.Eval.html\#getvalue)

- getValue(variables:any):boolean [Permalink](https://console.integration.app/ref/react/classes/_integration-app_react.Eval.html#getvalue-1)





#### Parameters



- variables: any

#### Returns boolean

### getSchema [Permalink](https://console.integration.app/ref/react/classes/_integration-app_react.Eval.html\#getschema)

- getSchema():{type:string} [Permalink](https://console.integration.app/ref/react/classes/_integration-app_react.Eval.html#getschema-1)



#### Returns {type:string}


### toObject [Permalink](https://console.integration.app/ref/react/classes/_integration-app_react.Eval.html\#toobject)

- toObject():{$eval:any} [Permalink](https://console.integration.app/ref/react/classes/_integration-app_react.Eval.html#toobject-1)



#### Returns {$eval:any}


### transformVars [Permalink](https://console.integration.app/ref/react/classes/_integration-app_react.Eval.html\#transformvars)

- transformVars(

transformations:any,

):undefined\|{$eval:any;\[x:string\]:any} [Permalink](https://console.integration.app/ref/react/classes/_integration-app_react.Eval.html#transformvars-1)





#### Parameters



- transformations: any

#### Returns undefined\|{$eval:any;\[x:string\]:any}

## Properties

### type [Permalink](https://console.integration.app/ref/react/classes/_integration-app_react.Eval.html\#type)

type: [DataBuilderFormulaType](https://console.integration.app/ref/react/enums/DataBuilderFormulaType.html)

### args [Permalink](https://console.integration.app/ref/react/classes/_integration-app_react.Eval.html\#args)

args:any

### value [Permalink](https://console.integration.app/ref/react/classes/_integration-app_react.Eval.html\#value)

value:any

### operatorKey [Permalink](https://console.integration.app/ref/react/classes/_integration-app_react.Eval.html\#operatorkey)

operatorKey:string

### operand [Permalink](https://console.integration.app/ref/react/classes/_integration-app_react.Eval.html\#operand)

operand:any

### Settings

Member Visibility

- Protected
- Inherited
- External

ThemeOSLightDark

### On This Page

Constructors

[constructor](https://console.integration.app/ref/react/classes/_integration-app_react.Eval.html#constructor)

Methods

[resolveValue](https://console.integration.app/ref/react/classes/_integration-app_react.Eval.html#resolvevalue) [toString](https://console.integration.app/ref/react/classes/_integration-app_react.Eval.html#tostring) [getVariableLocators](https://console.integration.app/ref/react/classes/_integration-app_react.Eval.html#getvariablelocators) [getAvailableOperators](https://console.integration.app/ref/react/classes/_integration-app_react.Eval.html#getavailableoperators) [getOperator](https://console.integration.app/ref/react/classes/_integration-app_react.Eval.html#getoperator) [getValue](https://console.integration.app/ref/react/classes/_integration-app_react.Eval.html#getvalue) [getSchema](https://console.integration.app/ref/react/classes/_integration-app_react.Eval.html#getschema) [toObject](https://console.integration.app/ref/react/classes/_integration-app_react.Eval.html#toobject) [transformVars](https://console.integration.app/ref/react/classes/_integration-app_react.Eval.html#transformvars)

Properties

[type](https://console.integration.app/ref/react/classes/_integration-app_react.Eval.html#type) [args](https://console.integration.app/ref/react/classes/_integration-app_react.Eval.html#args) [value](https://console.integration.app/ref/react/classes/_integration-app_react.Eval.html#value) [operatorKey](https://console.integration.app/ref/react/classes/_integration-app_react.Eval.html#operatorkey) [operand](https://console.integration.app/ref/react/classes/_integration-app_react.Eval.html#operand)

MMNEPVFCICPMFPCPTTAAATR