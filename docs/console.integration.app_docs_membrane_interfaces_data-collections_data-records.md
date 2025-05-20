---
url: "https://console.integration.app/docs/membrane/interfaces/data-collections/data-records"
title: "Docs · Integration Console"
---

[Integration.app](https://integration.app/)

`` `Ctrl` + `K`

[NPM packages](https://www.npmjs.com/~integration.app) [GitHub organization](https://github.com/integration-app)

- [External Apps](https://console.integration.app/docs/membrane/apps)
- [Interfaces](https://console.integration.app/docs/membrane/interfaces)
  - [Scenarios](https://console.integration.app/docs/membrane/interfaces/scenarios)
  - [Actions](https://console.integration.app/docs/membrane/interfaces/actions)
  - [Flows](https://console.integration.app/docs/membrane/interfaces/flows)
  - [Data Sources](https://console.integration.app/docs/membrane/interfaces/data-sources)
  - [Field Mappings](https://console.integration.app/docs/membrane/interfaces/field-mappings)
  - [Data Links](https://console.integration.app/docs/membrane/interfaces/data-links)
  - [Connecting Your App API](https://console.integration.app/docs/membrane/interfaces/internal-api)
  - [Internal Events](https://console.integration.app/docs/membrane/interfaces/internal-events)
  - [Internal Data Schemas](https://console.integration.app/docs/membrane/interfaces/internal-data-schemas)
  - [Api Operations](https://console.integration.app/docs/membrane/interfaces/api-operations)
  - [Data Collections](https://console.integration.app/docs/membrane/interfaces/data-collections)
    - [Data Records](https://console.integration.app/docs/membrane/interfaces/data-collections/data-records)
    - [Custom Fields](https://console.integration.app/docs/membrane/interfaces/data-collections/custom-fields)
  - [API Proxy](https://console.integration.app/docs/membrane/interfaces/api-proxy)
  - [Files](https://console.integration.app/docs/membrane/interfaces/files)
  - [Running Custom Code](https://console.integration.app/docs/membrane/interfaces/custom-code)
- [Customers](https://console.integration.app/docs/membrane/customers)
- [Monitoring & Troubleshooting](https://console.integration.app/docs/membrane/monitoring)
- [Security And Privacy](https://console.integration.app/docs/membrane/security-and-privacy)
- References

# Data Records

Each record in Data Collections will have the following structure:

```yaml
id: <unique record id>
name: <human-readable record name>
url: <url record can be accessed at>
fields:
     field: <field value>
     ...
```

Connectors are responsible for transforming data from application-specific format into Data Records and back. Each record will have the following top-level properties:

- `id` \- record id, unique within a given data collection.
- `name` \- human-readable name of the record. It will be a person's name in case of person, task title in case of task, etc.
- `uri` \- link to the record if it has its own page.
- `createdTime`
- `updatedTime`
- `deletedTime`
- `createdById` \- id of an entity (usually a user) that created the record.
- `updatedById` \- id of an entity that updated the record last.
- `fields` \- data fields of the record that match `fieldsSchema` of the collection. Usually they match exactly the fields returned by the external application. They may differ if connector developer decided to simplify the schema for end-users.

Connector will try to do its best to populate as many of these properties as possible. At the very least, `id` is always populated.

Integration.app is free to try. It takes just one click to get started.

Login and Try it Yourself

Docs · Integration Console

[iframe](https://td.doubleclick.net/td/rul/11398203743?random=1747732549652&cv=11&fst=1747732549652&fmt=3&bg=ffffff&guid=ON&async=1&gtm=45je55g2v9171934834z8892090687za200zb892090687&gcd=13l3l3l3l1l1&dma=0&tag_exp=101509157~103116025~103130498~103130500~103136993~103136995~103200001~103207802~103233427~103252644~103252646~103263073~103301114~103301116&ptag_exp=101509157~103116025~103130495~103130497~103136993~103136995~103200001~103207802~103233427~103252644~103252646~103263073~103301114~103301116~104506547&u_w=1280&u_h=1024&url=https%3A%2F%2Fconsole.integration.app%2Fdocs%2Fmembrane%2Finterfaces%2Fdata-collections%2Fdata-records&hn=www.googleadservices.com&frm=0&tiba=Docs%20%C2%B7%20Integration%20Console&npa=0&pscdl=noapi&auid=1435551365.1747732549&uaa=x86&uab=64&uafvl=Chromium%3B136.0.7103.113%7CGoogle%2520Chrome%3B136.0.7103.113%7CNot.A%252FBrand%3B99.0.0.0&uamb=0&uam=&uap=Linux%20x86_64&uapv=6.6.72&uaw=0&fledge=1&data=event%3Dgtag.config)[iframe](https://td.doubleclick.net/td/rul/11474966929?random=1747732549710&cv=11&fst=1747732549710&fmt=3&bg=ffffff&guid=ON&async=1&gtm=45je55g2v9171934834z8892090687za200zb892090687&gcd=13l3l3l3l1l1&dma=0&tag_exp=101509157~103116025~103130498~103130500~103136993~103136995~103200001~103207802~103233427~103252644~103252646~103263073~103301114~103301116&ptag_exp=101509157~103116025~103130495~103130497~103136993~103136995~103200001~103207802~103233427~103252644~103252646~103263073~103301114~103301116~104506547&u_w=1280&u_h=1024&url=https%3A%2F%2Fconsole.integration.app%2Fdocs%2Fmembrane%2Finterfaces%2Fdata-collections%2Fdata-records&hn=www.googleadservices.com&frm=0&tiba=Docs%20%C2%B7%20Integration%20Console&npa=0&pscdl=noapi&auid=1435551365.1747732549&uaa=x86&uab=64&uafvl=Chromium%3B136.0.7103.113%7CGoogle%2520Chrome%3B136.0.7103.113%7CNot.A%252FBrand%3B99.0.0.0&uamb=0&uam=&uap=Linux%20x86_64&uapv=6.6.72&uaw=0&fledge=1&data=event%3Dgtag.config)[iframe](https://td.doubleclick.net/td/rul/11474966929?random=1747732549722&cv=11&fst=1747732549722&fmt=3&bg=ffffff&guid=ON&async=1&gcl_ctr=1&gtm=45je55g2v9171934834z8892090687za200zb892090687&gcd=13l3l3l3l1l1&dma=0&tag_exp=101509157~103116025~103130498~103130500~103136993~103136995~103200001~103207802~103233427~103252644~103252646~103263073~103301114~103301116&ptag_exp=101509157~103116025~103130495~103130497~103136993~103136995~103200001~103207802~103233427~103252644~103252646~103263073~103301114~103301116~104506547&u_w=1280&u_h=1024&url=https%3A%2F%2Fconsole.integration.app%2Fdocs%2Fmembrane%2Finterfaces%2Fdata-collections%2Fdata-records&label=9M_TCKCTp5oaEJGz2N8q&hn=www.googleadservices.com&frm=0&tiba=Docs%20%C2%B7%20Integration%20Console&value=0&bttype=purchase&npa=0&pscdl=noapi&auid=1435551365.1747732549&uaa=x86&uab=64&uafvl=Chromium%3B136.0.7103.113%7CGoogle%2520Chrome%3B136.0.7103.113%7CNot.A%252FBrand%3B99.0.0.0&uamb=0&uam=&uap=Linux%20x86_64&uapv=6.6.72&uaw=0&ec_mode=a&fledge=1&capi=1&_tu=Cg&em=tv.1&ct_cookie_present=0)