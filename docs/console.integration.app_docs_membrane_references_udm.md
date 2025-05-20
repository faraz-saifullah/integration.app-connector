---
url: "https://console.integration.app/docs/membrane/references/udm"
title: "Docs · Integration Console"
---

[Integration.app](https://integration.app/)

`` `Ctrl` + `K`

[NPM packages](https://www.npmjs.com/~integration.app) [GitHub organization](https://github.com/integration-app)

- [External Apps](https://console.integration.app/docs/membrane/apps)
- [Interfaces](https://console.integration.app/docs/membrane/interfaces)
- [Customers](https://console.integration.app/docs/membrane/customers)
- [Monitoring & Troubleshooting](https://console.integration.app/docs/membrane/monitoring)
- [Security And Privacy](https://console.integration.app/docs/membrane/security-and-privacy)
- References
  - [Execution Context](https://console.integration.app/docs/membrane/references/execution-context)
  - [Formulas](https://console.integration.app/docs/membrane/references/formulas)
  - [Data Schemas](https://console.integration.app/docs/membrane/references/data-schemas)
  - [Limits](https://console.integration.app/docs/membrane/references/limits)
  - [Universal Data Models](https://console.integration.app/docs/membrane/references/udm)

# Universal Data Models

Universal Data Models let you work with data from third-party applications in a standardized way - without knowing anything about the underlying data structure.

Connectors provide mappings from and to UDM for relevant data models.

You can find currently supported Universal Data Models below.

## Activities

**Fields Schema**

id:string

Read Only:true

title:string

description:string

type:string

durationSeconds:number

location:string

isRecurrent:boolean

participants:list

item:object

userId:string

contactId:string

status:string

contactId:string

companyId:string

dealId:string

leadId:string

ownerId:string

startTime:string

Format:date-time

endTime:string

Format:date-time

dueTime:string

Format:date-time

createdTime:string

Format:date-timeRead Only:true

createdBy:string

Read Only:true

updatedTime:string

Format:date-timeRead Only:true

updatedBy:string

Read Only:true

## Bills

**Fields Schema**

id:string

Read Only:true

number:string

name:string

memo:string

status:string

paymentMethod:string

supplierId:string

currency:string

payments:list

item:string

lineItems:list

item:object

id:string

itemName:string

description:string

code:string

type:string

companyId:string

ledgerAccountId:string

quantity:number

unitPrice:number

unitOfMeasure:string

purchasePrice:number

salesPrice:number

taxable:boolean

taxAmount:number

totalAmount:number

totalAmount:number

totalTax:number

exchangeRate:number

totalDiscount:number

subTotal:number

balance:number

ledgerAccountId:string

issueDate:string

Format:date-time

dueDate:string

Format:date-time

paidOnDate:string

Format:date-time

createdTime:string

Format:date-timeRead Only:true

createdBy:string

Read Only:true

updatedTime:string

Format:date-timeRead Only:true

updatedBy:string

Read Only:true

## Campaign Members

**Fields Schema**

id:string

Read Only:true

fullName:string

firstName:string

lastName:string

primaryEmail:string

campaignId:string

contactId:string

leadId:string

source:string

status:string

companyId:string

jobTitle:string

hasOptedOutOfEmail:boolean

createdTime:string

Format:date-time

createdBy:string

Read Only:true

updatedTime:string

Format:date-timeRead Only:true

updatedBy:string

Read Only:true

## Campaigns

**Fields Schema**

id:string

Read Only:true

name:string

cost:number

description:string

source:string

stage:string

type:string

ownerId:string

sentCount:number

Read Only:true

replyCount:number

Read Only:true

openCount:number

Read Only:true

clickCount:number

Read Only:true

startTime:string

Format:date-time

endTime:string

Format:date-time

createdTime:string

Format:date-timeRead Only:true

createdBy:string

Read Only:true

updatedTime:string

Format:date-timeRead Only:true

updatedBy:string

Read Only:true

lastActivityTime:string

Format:date-timeRead Only:true

## Companies

**Fields Schema**

id:string

Read Only:true

name:string

websiteUrl:string

phones:list

item:object

value:string

type:string

primaryPhone:string

description:string

currency:string

industry:string

ownerId:string

primaryAddress:object

type:string

full:string

street:string

city:string

state:string

country:string

zip:string

addresses:list

item:object

type:string

full:string

street:string

city:string

state:string

country:string

zip:string

numberOfEmployees:number

createdTime:string

Format:date-time

createdBy:string

Read Only:true

updatedTime:string

Format:date-timeRead Only:true

updatedBy:string

Read Only:true

lastActivityTime:string

Format:date-timeRead Only:true

## Contacts

**Fields Schema**

id:string

Read Only:true

fullName:string

firstName:string

lastName:string

primaryEmail:string

emails:list

item:object

value:string

type:string

primaryPhone:string

phones:list

item:object

value:string

type:string

primaryAddress:object

type:string

full:string

street:string

city:string

state:string

country:string

zip:string

addresses:list

item:object

type:string

full:string

street:string

city:string

state:string

country:string

zip:string

stage:string

companyName:string

companyId:string

ownerId:string

jobTitle:string

source:string

createdTime:string

Format:date-timeRead Only:true

createdBy:string

Read Only:true

updatedTime:string

Format:date-timeRead Only:true

updatedBy:string

Read Only:true

lastActivityTime:string

Format:date-timeRead Only:true

## Contact Lists

**Fields Schema**

id:string

Read Only:true

name:string

description:string

source:string

type:string

ownerId:string

createdTime:string

Format:date-timeRead Only:true

createdBy:string

Read Only:true

updatedTime:string

Format:date-timeRead Only:true

updatedBy:string

Read Only:true

## Credit Notes

**Fields Schema**

id:string

Read Only:true

number:string

memo:string

status:string

customerId:string

currency:string

exchangeRate:number

payments:list

item:string

lineItems:list

item:object

id:string

itemName:string

description:string

quantity:number

totalLineAmount:number

companyId:string

ledgerAccountId:string

unitPrice:number

taxRate:string

allocations:list

item:object

id:string

type:string

Enum:invoice,order,expense,credit\_memo,over\_payment,pre...

amount:number

totalAmount:number

totalTax:number

totalDiscount:number

subTotal:number

balance:number

ledgerAccountId:string

issueDate:string

Format:date-time

paidOnDate:string

Format:date-time

createdTime:string

Format:date-timeRead Only:true

createdBy:string

Read Only:true

updatedTime:string

Format:date-timeRead Only:true

updatedBy:string

Read Only:true

## Customers

**Fields Schema**

id:string

Read Only:true

name:string

code:string

description:string

firstName:string

lastName:string

companyName:string

companyId:string

status:any

currency:string

addresses:list

item:object

type:string

full:string

street:string

city:string

state:string

country:string

zip:string

phones:list

item:object

value:string

type:string

emails:list

item:object

value:string

type:string

websiteUrl:string

notes:string

tax\_number:string

orderIds:list

item:string

createdTime:string

Format:date-timeRead Only:true

createdBy:string

Read Only:true

updatedTime:string

Format:date-timeRead Only:true

updatedBy:string

Read Only:true

## Deal Products

**Fields Schema**

id:string

Read Only:true

name:string

quantity:number

price:number

dealId:string

productId:string

isActive:boolean

createdTime:string

Format:date-time

createdBy:string

Read Only:true

updatedTime:string

Format:date-timeRead Only:true

updatedBy:string

Read Only:true

## Deals

**Fields Schema**

id:string

Read Only:true

name:string

amount:number

currency:string

companyId:string

contactId:string

campaignId:string

source:string

description:string

stage:string

stageId:string

status:string

Enum:open,won,lost

type:string

ownerId:string

probability:number

closeTime:string

Format:date-time

createdTime:string

Format:date-timeRead Only:true

createdBy:string

Read Only:true

updatedTime:string

Format:date-timeRead Only:true

updatedBy:string

Read Only:true

lastActivityTime:string

Format:date-timeRead Only:true

## Deal Stages

**Fields Schema**

id:string

Read Only:true

name:string

state:string

Enum:open,won,lost

## Documents

**Fields Schema**

id:string

Read Only:true

uri:string

Read Only:true

title:string

parentDocumentId:string

canHaveChildren:boolean

Read Only:true

isDownloadable:boolean

Default:trueRead Only:true

text:string

ownerId:string

createdTime:string

Format:date-timeRead Only:true

createdBy:string

Read Only:true

updatedTime:string

Format:date-timeRead Only:true

updatedBy:string

Read Only:true

## Drives

**Fields Schema**

id:string

Read Only:true

name:string

description:string

ownerId:string

uri:string

Read Only:true

createdTime:string

Format:date-timeRead Only:true

createdBy:string

Read Only:true

updatedTime:string

Format:date-timeRead Only:true

updatedBy:string

Read Only:true

## Drive Items

**Fields Schema**

id:string

Read Only:true

itemType:string

Enum:file,folderAllow Custom:true

name:string

mimeType:string

description:string

previewUri:string

Read Only:true

size:integer

Read Only:true

path:string

Read Only:true

folderId:string

ownerId:string

driveId:string

downloadUri:string

Read Only:true

uri:string

Read Only:true

createdTime:string

Format:date-timeRead Only:true

createdBy:string

Read Only:true

updatedTime:string

Format:date-timeRead Only:true

updatedBy:string

Read Only:true

## Eeocs

**Fields Schema**

id:string

candidateId:string

race:string

gender:string

veteranStatus:string

disabilityStatus:string

submittedTime:string

Format:date-timeRead Only:true

createdTime:string

Format:date-timeRead Only:true

createdBy:string

Read Only:true

updatedTime:string

Format:date-timeRead Only:true

updatedBy:string

Read Only:true

## Emails

**Fields Schema**

id:string

Read Only:true

threadId:string

Read Only:true

to:list

item:string

cc:list

item:string

bcc:list

item:string

from:string

replyTo:string

subject:string

body:string

html\_body:string

status:string

ownerId:string

contactId:string

leadId:string

companyId:string

dealId:string

attachments:list

item:object

id:string

type:string

name:string

url:string

content:string

createdTime:string

Format:date-timeRead Only:true

createdBy:string

Read Only:true

updatedTime:string

Format:date-timeRead Only:true

updatedBy:string

Read Only:true

## Employees

**Fields Schema**

id:string

Read Only:true

fullName:string

firstName:string

lastName:string

userName:string

preferredName:string

personalEmail:string

workEmail:string

mobileNumber:string

homeAddress:object

type:string

full:string

street:string

city:string

state:string

country:string

zip:string

workAddress:object

type:string

full:string

street:string

city:string

state:string

country:string

zip:string

employmentStatus:string

Enum:active,inactive,terminated,other

companyId:string

departmentId:string

startDate:string

Format:date-time

terminationDate:string

Format:date-time

gender:string

Enum:male,female,other,not\_specifiedAllow Custom:true

ethnicity:string

birthday:string

Format:date-time

photoUrl:string

timezone:string

title:string

employments:list

item:any

compensations:list

item:object

id:string

jobId:string

rate:number

paymentUnit:string

currency:string

paymentFrequency:string

flsaStatus:string

effectiveDate:string

Format:date-time

createdTime:string

Format:date-timeRead Only:true

createdBy:string

Read Only:true

updatedTime:string

Format:date-timeRead Only:true

updatedBy:string

Read Only:true

## Files

**Fields Schema**

id:string

Read Only:true

mimeType:string

name:string

description:string

previewUri:string

Read Only:true

size:integer

Read Only:true

path:string

Read Only:true

folderId:string

ownerId:string

driveId:string

downloadUri:string

Read Only:true

uri:string

Read Only:true

createdTime:string

Format:date-timeRead Only:true

createdBy:string

Read Only:true

updatedTime:string

Format:date-timeRead Only:true

updatedBy:string

Read Only:true

## Folders

**Fields Schema**

id:string

Read Only:true

name:string

description:string

size:integer

Read Only:true

path:string

Read Only:true

parentFolderId:string

ownerId:string

driveId:string

downloadUri:string

Read Only:true

uri:string

Read Only:true

createdTime:string

Format:date-timeRead Only:true

createdBy:string

Read Only:true

updatedTime:string

Format:date-timeRead Only:true

updatedBy:string

Read Only:true

## Invoices

**Fields Schema**

id:string

Read Only:true

number:string

name:string

memo:string

status:string

paymentMethod:string

customerId:string

currency:string

payments:list

item:string

lineItems:list

item:object

id:string

itemName:string

description:string

code:string

type:string

status:string

companyId:string

ledgerAccountId:string

quantity:number

unitOfMeasure:string

unitPrice:number

purchasePrice:number

salesPrice:number

taxable:boolean

taxAmount:number

totalAmount:number

inventoryDate:string

Format:date-time

totalAmount:number

totalTax:number

exchangeRate:number

totalDiscount:number

subTotal:number

balance:number

ledgerAccountId:string

issueDate:string

Format:date-time

dueDate:string

Format:date-time

paidOnDate:string

Format:date-time

createdTime:string

Format:date-timeRead Only:true

createdBy:string

Read Only:true

updatedTime:string

Format:date-timeRead Only:true

updatedBy:string

Read Only:true

## Job Applications

**Fields Schema**

id:string

candidateId:string

jobId:string

appliedAt:string

Format:date-time

status:string

currentStage:string

source:string

rejectedTime:string

Format:date-time

rejectionReason:string

creditedTo:string

createdTime:string

Format:date-timeRead Only:true

createdBy:string

Read Only:true

updatedTime:string

Format:date-timeRead Only:true

updatedBy:string

Read Only:true

## Job Candidates

**Fields Schema**

id:string

fullName:string

firstName:string

lastName:string

company:string

title:string

addresses:list

item:object

type:string

full:string

street:string

city:string

state:string

country:string

zip:string

phones:list

item:object

value:string

type:string

primaryEmail:string

primaryPhone:string

emails:list

item:object

value:string

type:string

urls:list

item:object

value:string

type:string

applicationIds:list

item:string

createdTime:string

Format:date-timeRead Only:true

createdBy:string

Read Only:true

updatedTime:string

Format:date-timeRead Only:true

updatedBy:string

Read Only:true

## Job Interviews

**Fields Schema**

id:string

candidateId:string

organizerId:string

interviewerIds:list

item:string

stage:string

status:string

location:string

startTime:string

Format:date-time

endTime:string

Format:date-time

createdTime:string

Format:date-timeRead Only:true

createdBy:string

Read Only:true

updatedTime:string

Format:date-timeRead Only:true

updatedBy:string

Read Only:true

## Job Offers

**Fields Schema**

id:string

jobApplicationId:string

status:string

sentTime:string

Format:date-time

closedTime:string

Format:date-time

startDate:string

Format:date

createdTime:string

Format:date-timeRead Only:true

createdBy:string

Read Only:true

updatedTime:string

Format:date-timeRead Only:true

updatedBy:string

Read Only:true

## Jobs

**Fields Schema**

id:string

name:string

description:string

code:string

status:string

isConfidential:boolean

hiringManagersIds:list

item:string

recruitersIds:list

item:string

departmentsIds:list

item:string

officesIds:list

item:string

createdTime:string

Format:date-timeRead Only:true

createdBy:string

Read Only:true

updatedTime:string

Format:date-timeRead Only:true

updatedBy:string

Read Only:true

## Journal Entries

**Fields Schema**

id:string

Read Only:true

number:string

title:string

memo:string

currency:string

companyId:string

lineItems:list

item:object

id:string

description:string

type:string

Enum:debit,credit

amount:number

ledgerAccountId:string

companyId:string

contactId:string

exchangeRate:number

taxType:string

taxCode:string

ledgerAccountId:string

payments:list

item:string

transactionDate:string

Format:date-time

createdTime:string

Format:date-timeRead Only:true

updatedTime:string

Format:date-timeRead Only:true

## Leads

**Fields Schema**

id:string

Read Only:true

fullName:string

firstName:string

lastName:string

primaryEmail:string

emails:list

item:object

value:string

type:string

primaryPhone:string

phones:list

item:object

value:string

type:string

primaryAddress:object

type:string

full:string

street:string

city:string

state:string

country:string

zip:string

addresses:list

item:object

type:string

full:string

street:string

city:string

state:string

country:string

zip:string

stage:string

value:number

companyName:string

companyId:string

ownerId:string

jobTitle:string

source:string

createdTime:string

Format:date-timeRead Only:true

createdBy:string

Read Only:true

updatedTime:string

Format:date-timeRead Only:true

updatedBy:string

Read Only:true

lastActivityTime:string

Format:date-timeRead Only:true

## Ledger Accounts

**Fields Schema**

id:string

Read Only:true

name:string

code:string

description:string

classification:string

Enum:Asset,Liability,Equity,Revenue,Expense

type:string

status:string

Enum:Active,Inactive,Archived

currentBalance:number

currency:string

taxRateId:string

companyId:string

createdTime:string

Format:date-timeRead Only:true

createdBy:string

Read Only:true

updatedTime:string

Format:date-timeRead Only:true

updatedBy:string

Read Only:true

## Meetings

**Fields Schema**

id:string

Read Only:true

title:string

description:string

durationSeconds:number

location:string

isRecurrent:boolean

participants:list

item:object

userId:string

contactId:string

leadId:string

status:string

contactId:string

companyId:string

dealId:string

leadId:string

ownerId:string

startTime:string

Format:date-time

endTime:string

Format:date-time

createdTime:string

Format:date-timeRead Only:true

createdBy:string

Read Only:true

updatedTime:string

Format:date-timeRead Only:true

updatedBy:string

Read Only:true

## Messages

**Fields Schema**

id:string

Read Only:true

subject:string

channelId:string

threadId:string

text:string

ownerId:string

status:string

createdTime:string

Format:date-timeRead Only:true

createdBy:string

Read Only:true

updatedTime:string

Format:date-timeRead Only:true

updatedBy:string

Read Only:true

## Notes

**Fields Schema**

id:string

Read Only:true

title:string

content:string

status:string

ownerId:string

contactId:string

leadId:string

companyId:string

dealId:string

createdTime:string

Format:date-timeRead Only:true

createdBy:string

Read Only:true

updatedTime:string

Format:date-timeRead Only:true

updatedBy:string

Read Only:true

## Orders

**Fields Schema**

id:string

Read Only:true

name:string

notes:string

status:string

Enum:open,closed

customerId:string

currency:string

totalAmount:number

paymentMethod:string

paymentStatus:string

fullFillmentStatus:string

billingAddress:object

type:string

full:string

street:string

city:string

state:string

country:string

zip:string

shippingAddress:object

type:string

full:string

street:string

city:string

state:string

country:string

zip:string

lineItems:list

item:object

name:string

productId:string

sku:string

quantity:number

unitPrice:number

totalAmount:number

createdTime:string

Format:date-timeRead Only:true

createdBy:string

Read Only:true

updatedTime:string

Format:date-timeRead Only:true

updatedBy:string

Read Only:true

## Payments

**Fields Schema**

id:string

Read Only:true

status:string

type:string

notes:string

currency:string

exchangeRate:string

totalAmount:number

supplierId:string

customerId:string

ledgerAccountId:string

paymentMethod:string

transactionDate:string

Format:date-time

isReconciled:boolean

createdTime:string

Format:date-timeRead Only:true

createdBy:string

Read Only:true

updatedTime:string

Format:date-timeRead Only:true

updatedBy:string

Read Only:true

## Payrolls

**Fields Schema**

id:string

Read Only:true

employeeId:string

companyId:string

runState:string

Enum:PAID,DRAFT,APPROVED,CLOSEDAllow Custom:true

runType:string

Enum:REGULAR,OFF\_CYCLE,UNSCHEDULED,CORRECTION,TERMINATI...Allow Custom:true

isProcessed:boolean

processedTime:string

Format:date-time

checkTime:string

Format:date-time

startTime:string

Format:date-time

endTime:string

Format:date-time

createdTime:string

Format:date-timeRead Only:true

createdBy:string

Read Only:true

updatedTime:string

Format:date-timeRead Only:true

updatedBy:string

Read Only:true

## Products

**Fields Schema**

id:string

Read Only:true

name:string

description:string

code:string

type:string

weight:number

isActive:boolean

price:number

status:string

options:list

item:object

id:string

name:string

values:list

item:string

variants:list

item:object

id:string

name:string

price:number

sku:string

weight:number

createdTime:string

Format:date-timeRead Only:true

createdBy:string

Read Only:true

updatedTime:string

Format:date-timeRead Only:true

updatedBy:string

Read Only:true

## Projects

**Fields Schema**

id:string

Read Only:true

name:string

description:string

type:string

parentId:string

ownerId:string

startTime:string

Format:date-time

dueTime:string

Format:date-time

createdTime:string

Format:date-timeRead Only:true

createdBy:string

Read Only:true

updatedTime:string

Format:date-timeRead Only:true

updatedBy:string

Read Only:true

## Suppliers

**Fields Schema**

id:string

Read Only:true

name:string

code:string

description:string

firstName:string

lastName:string

companyName:string

companyId:string

status:string

currency:string

addresses:list

item:object

type:string

full:string

street:string

city:string

state:string

country:string

zip:string

phones:list

item:object

value:string

type:string

emails:list

item:object

value:string

type:string

websiteUrl:string

notes:string

taxNumber:string

orderIds:list

item:string

createdTime:string

Format:date-timeRead Only:true

createdBy:string

Read Only:true

updatedTime:string

Format:date-timeRead Only:true

updatedBy:string

Read Only:true

## Tasks

**Fields Schema**

id:string

Read Only:true

subject:string

content:string

status:string

type:string

priority:string

ownerId:string

assigneeId:string

followerIds:list

item:string

parentTaskId:string

projectId:string

tags:list

item:string

contactId:string

leadId:string

companyId:string

dealId:string

dueTime:string

Format:date-time

startTime:string

Format:date-time

endTime:string

Format:date-time

createdTime:string

Format:date-timeRead Only:true

createdBy:string

Read Only:true

updatedTime:string

Format:date-timeRead Only:true

updatedBy:string

Read Only:true

## Tax Rates

**Fields Schema**

id:string

Read Only:true

name:string

code:string

description:string

effectiveTaxRate:number

totalTaxRate:number

type:string

createdTime:string

Format:date-timeRead Only:true

createdBy:string

Read Only:true

updatedTime:string

Format:date-timeRead Only:true

updatedBy:string

Read Only:true

## Users

**Fields Schema**

id:string

Read Only:true

title:string

fullName:string

firstName:string

lastName:string

userName:string

primaryEmail:string

emails:list

item:object

value:string

type:string

primaryPhone:string

phones:list

item:object

value:string

type:string

primaryAddress:object

type:string

full:string

street:string

city:string

state:string

country:string

zip:string

addresses:list

item:object

type:string

full:string

street:string

city:string

state:string

country:string

zip:string

companyName:string

companyId:string

imageUrl:string

timezone:string

isActive:boolean

roleId:string

createdTime:string

Format:date-timeRead Only:true

createdBy:string

Read Only:true

updatedTime:string

Format:date-timeRead Only:true

updatedBy:string

Read Only:true

## Timeoff Balances

**Fields Schema**

id:string

Read Only:true

employeeId:string

balanceHours:number

usedHours:number

policyType:string

Enum:VACATION,SICK,PERSONAL,JURY\_DUTY,VOLUNTEER,BEREAVE...Allow Custom:true

createdTime:string

Format:date-timeRead Only:true

createdBy:string

Read Only:true

updatedTime:string

Format:date-timeRead Only:true

updatedBy:string

Read Only:true

## Timeoff Requests

**Fields Schema**

id:string

Read Only:true

employeeId:string

approverId:string

status:string

Enum:REQUESTED,APPROVED,DECLINED,CANCELLEDAllow Custom:true

employeeNote:string

units:string

Enum:DAYS,HOURSAllow Custom:true

amount:number

requestType:string

Enum:VACATION,SICK,PERSONAL,JURY\_DUTY,VOLUNTEER,BEREAVE...Allow Custom:true

startTime:string

Format:date-time

endTime:string

Format:date-time

createdTime:string

Format:date-timeRead Only:true

createdBy:string

Read Only:true

updatedTime:string

Format:date-timeRead Only:true

updatedBy:string

Read Only:true

Integration.app is free to try. It takes just one click to get started.

Login and Try it Yourself

Docs · Integration Console