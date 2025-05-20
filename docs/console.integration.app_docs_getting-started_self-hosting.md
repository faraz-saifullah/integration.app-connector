---
url: "https://console.integration.app/docs/getting-started/self-hosting"
title: "Docs · Integration Console"
---

[Integration.app](https://integration.app/)

`` `Ctrl` + `K`

[NPM packages](https://www.npmjs.com/~integration.app) [GitHub organization](https://github.com/integration-app)

- [Authentication](https://console.integration.app/docs/getting-started/authentication)
- [Front End](https://console.integration.app/docs/getting-started/front-end)
- [Backend](https://console.integration.app/docs/getting-started/backend)
- [Self-hosting](https://console.integration.app/docs/getting-started/self-hosting)
  - [Google Cloud Platform](https://console.integration.app/docs/getting-started/self-hosting/gcp)
  - [AWS](https://console.integration.app/docs/getting-started/self-hosting/aws)

# Self-hosting

Out product is distributed as a set of Docker images that can be deployed in your infrastructure.

## Docker Registry Access

Contact our support team to receive access credentials to our Docker registry (harbor.integration.app).
You'll receive a username in the format `robot$core+<your-company-name>` and a password.

```bash
docker login harbor.integration.app
```

### Image Versioning

Images are tagged with `:latest` and date-based immutable tags (e.g., `2025-05-16`).
For production deployments, we recommend using the immutable tags: `harbor.integration.app/core/api:2025-05-16`.

## Infrastructure Requirements

Integration.app requires:

- S3-compatible storage
- MongoDB server
- Redis server
- Auth0 for authentication (free tier sufficient)

### Auth0 Configuration

When configuring your Auth0 application:

- Application Type: Single-page Application
- Allowed Callback URLs: Base URL of your console service
- Allowed Web Origins: Base URL of your console service

## Core Services

Integration.app consists of four essential services:

### API Service

The primary engine API that stores and executes integrations.

**Docker Image:** `harbor.integration.app/core/api`

**Environment Variables:**

| Variable | Example | Description |
| --- | --- | --- |
| NODE\_ENV | production | Environment mode |
| BASE\_URI | https://api.yourdomain.com | Service deployment URL |
| CUSTOM\_CODE\_RUNNER\_URI | https://custom-code-runner.yourdomain.com | Custom Code Runner service URL |
| AUTH0\_DOMAIN | login.integration.yourdomain.com | Auth0 domain for authentication |
| AUTH0\_CLIENT\_ID | clientId | Auth0 client ID |
| AUTH0\_CLIENT\_SECRET | clientSecret | Auth0 client secret |
| TMP\_S3\_BUCKET | integration-app-tmp | Temporary storage bucket (recommend auto-expiration policy) |
| CONNECTORS\_S3\_BUCKET | integration-app-connectors | Connectors storage bucket |
| STATIC\_S3\_BUCKET | integration-app-static | Static files storage bucket |
| BASE\_STATIC\_URI | https://static.integration.app | Static content base URL (files uploaded to the static bucket should be served from this URL) |
| REDIS\_URI or REDIS\_CLUSTER\_URI\_X | redis://user:password@redis-service.com:6379/ | URL that can be used to connect to the Redis server. If you use redis cluster, you can provide any number of initial redis nodes like this: REDIS\_CLUSTER\_URI\_1=redis://host1:port1 REDIS\_CLUSTER\_URI\_2=redis://host2:port2 REDIS\_CLUSTER\_URI\_3=redis://host3:port3 |
| SECRET | s3cr3tString | JWT token signing secret |
| ENCRYPTION\_SECRET | v3rys3cr3tstring | Credentials encryption secret |
| MONGO\_URI | mongodb+srv://login:pass@mymongo.com/integration-api | MongoDB connection string |
| PORT | 5000 | Container listening port (default: 5000) |
| AWS\_REGION | eu-central-1 | S3 region |
| AWS\_ACCESS\_KEY\_ID |  | S3 access key |
| AWS\_SECRET\_ACCESS\_KEY |  | S3 secret key |
| ENABLE\_LIMITS | true | Optional: Enable workspace resource limits |

**Advanced API Scaling Configuration**

For granular control over container roles, use these environment variables instead of IS\_WORKER:

| Variable | Function |
| --- | --- |
| IS\_API | Run API server |
| IS\_INSTANT\_TASKS\_WORKER | Run worker for semi-instant background tasks. There should be enough of them to never queue up. |
| IS\_QUEUED\_TASKS\_WORKER | Run worker for tasks that can be queued up (like event pulls or flow runs) |
| IS\_SCHEDULE\_RUNNER | Run schedule triggers, data source syncs, and cleanup tasks |
| IS\_WORKER | Enable all worker types (equivalent to setting all above variables) |
| MAX\_FLOW\_RUN\_MEMORY\_MB | Memory limit for flow execution |
| MAX\_FLOW\_RUN\_TIME\_SECONDS | Time limit for flow execution |

Each worker container processes one background job at a time. All services scale horizontally without additional configuration (aside from load balancing for API services).

### UI Service

Provides pre-built integration user interfaces.

**Docker Image:** `harbor.integration.app/core/ui`

**Environment Variables:**

| Variable | Example | Description |
| --- | --- | --- |
| NEXT\_PUBLIC\_ENGINE\_URI | https://api.yourdomain.com | API service URL |
| PORT | 5000 | Container listening port (default: 5000) |

### Console Service

Administration interface for managing integrations.

**Docker Image:** `harbor.integration.app/core/console`

**Environment Variables:**

| Variable | Example | Description |
| --- | --- | --- |
| NEXT\_PUBLIC\_BASE\_URI | https://console.integration.yourdomain.com | Console access URL |
| NEXT\_PUBLIC\_AUTH0\_DOMAIN | login.integration.yourdomain.com | Auth0 domain |
| NEXT\_PUBLIC\_ENGINE\_API\_URI | https://api.integrations.yourdomain.com | API service URL |
| NEXT\_PUBLIC\_ENGINE\_UI\_URI | https://ui.integrations.yourdomain.com | UI service URL |
| NEXT\_PUBLIC\_AUTH0\_CLIENT\_ID | clientId | Auth0 client ID |
| PORT | 5000 | Container listening port (default: 5000) |
| NEXT\_PUBLIC\_ENABLE\_LIMITS | true | Optional: Enable limits management UI |

### Custom Code Runner

Provides an isolated environment for executing custom code in connectors or middleware. This service should only be accessible internally from other services.

**Docker Image:** `harbor.integration.app/core/custom-code-runner`

**Note**: On AMD architecture (not ARM), set `CUSTOM_CODE_MEMORY_LIMIT` environment variable for the API service to at least 21474836480 (20GB) to ensure sufficient virtual memory for WebAssembly. Physical memory allocation of 2GB is typically sufficient.

## Scaling Recommendations

All services scale horizontally. For production workloads:

- **API**: Monitor memory/CPU usage, scale as needed
- **Scheduler**: Deploy 2 instances for zero-downtime updates
- **Workers**: Monitor queue status via `/prometheus` endpoint:

  - Scale `IS_DEFAULT_WORKER` instances based on default queue
  - Scale `IS_PULL_DATA_SOURCES_WORKER` instances based on pull-data-sources queue
- **Custom Code Runner**: Monitor memory/CPU usage, scale as needed
- **Console/UI**: Deploy 2 instances each for zero-downtime updates

## Connector Management

### Automated Deployment

Use [Membrane CLI](https://www.npmjs.com/package/@integration-app/membrane-cli) to migrate connectors from cloud to self-hosted environments.

### Manual Deployment

Upload connector .zip archives through the Console UI via Integrations > Apps > Upload Connector.

## Troubleshooting

For enhanced debugging output, add `DEBUG_ALL=1` to any container's environment variables.

## Cloud-specific Guides

#### [Google Cloud Platform](https://console.integration.app/docs/getting-started/self-hosting/gcp)

Guide for self-hosting Membrane on Google Cloud Platform.

#### [AWS](https://console.integration.app/docs/getting-started/self-hosting/aws)

Guide for self-hosting Membrane on AWS infrastructure.

## Resource Limiting

To enable resource limits by workspace and customer:

1. Add `ENABLE_LIMITS=1` to the API container
2. Add `true=1` to the Console container

This enables workspace managers to set customer-level limits and platform administrators to configure workspace-level resource restrictions.

## FAQ and Advanced Configuration

### Resource Requirements

- **Minimum Requirements**: 500 millicores (0.5 CPU) and 2GB of memory per container is sufficient for most deployments.

### Data Persistence and Backups

- **MongoDB**: Requires regular backups
- **S3 Storage**: All buckets should be backed up regularly
- **Redis**: Used only as a cache; can be safely rebooted or erased

### Health Monitoring

- **HTTP Health Checks**: The root endpoint of each service (e.g., `https://api.yourdomain.com/`) serves as a health check endpoint
- **Worker Health Checks**: Workers and custom code runners also expose an HTTP server at their root endpoint for health monitoring

### Security

- We monitor containers daily with the following SLAs:
  - Critical issues: 1 business day
  - High severity issues: 3 business days
  - Other issues: 2 weeks

### Logging and Error Handling

- **Log Format**: Services log to stdout/stderr in plain text

Integration.app is free to try. It takes just one click to get started.

Login and Try it Yourself

- ### On this page

- [Docker Registry Access](https://console.integration.app/docs/getting-started/self-hosting#docker-registry-access)
  - [Image Versioning](https://console.integration.app/docs/getting-started/self-hosting#image-versioning)
- [Infrastructure Requirements](https://console.integration.app/docs/getting-started/self-hosting#infrastructure-requirements)
  - [Auth0 Configuration](https://console.integration.app/docs/getting-started/self-hosting#auth0-configuration)
- [Core Services](https://console.integration.app/docs/getting-started/self-hosting#core-services)
  - [API Service](https://console.integration.app/docs/getting-started/self-hosting#api-service)
  - [UI Service](https://console.integration.app/docs/getting-started/self-hosting#ui-service)
  - [Console Service](https://console.integration.app/docs/getting-started/self-hosting#console-service)
  - [Custom Code Runner](https://console.integration.app/docs/getting-started/self-hosting#custom-code-runner)
- [Scaling Recommendations](https://console.integration.app/docs/getting-started/self-hosting#scaling-recommendations)
- [Connector Management](https://console.integration.app/docs/getting-started/self-hosting#connector-management)
  - [Automated Deployment](https://console.integration.app/docs/getting-started/self-hosting#automated-deployment)
  - [Manual Deployment](https://console.integration.app/docs/getting-started/self-hosting#manual-deployment)
- [Troubleshooting](https://console.integration.app/docs/getting-started/self-hosting#troubleshooting)
- [Cloud-specific Guides](https://console.integration.app/docs/getting-started/self-hosting#cloud-specific-guides)
- [Resource Limiting](https://console.integration.app/docs/getting-started/self-hosting#resource-limiting)
- [FAQ and Advanced Configuration](https://console.integration.app/docs/getting-started/self-hosting#faq-and-advanced-configuration)
  - [Resource Requirements](https://console.integration.app/docs/getting-started/self-hosting#resource-requirements)
  - [Data Persistence and Backups](https://console.integration.app/docs/getting-started/self-hosting#data-persistence-and-backups)
  - [Health Monitoring](https://console.integration.app/docs/getting-started/self-hosting#health-monitoring)
  - [Security](https://console.integration.app/docs/getting-started/self-hosting#security)
  - [Logging and Error Handling](https://console.integration.app/docs/getting-started/self-hosting#logging-and-error-handling)

Docs · Integration Console

[iframe](https://td.doubleclick.net/td/rul/11398203743?random=1747732513219&cv=11&fst=1747732513219&fmt=3&bg=ffffff&guid=ON&async=1&gtm=45je55g2v9171934834z8892090687za200zb892090687&gcd=13l3l3l3l1l1&dma=0&tag_exp=101509157~103116025~103130495~103130497~103136993~103136995~103200001~103207802~103233427~103252644~103252646~103263073~103301114~103301116&ptag_exp=101509157~103116026~103130498~103130500~103136993~103136995~103200004~103207802~103233427~103252644~103252646~103263073~103301114~103301116&u_w=1280&u_h=1024&url=https%3A%2F%2Fconsole.integration.app%2Fdocs%2Fgetting-started%2Fself-hosting&hn=www.googleadservices.com&frm=0&tiba=Docs%20%C2%B7%20Integration%20Console&npa=0&pscdl=noapi&auid=528858687.1747732513&uaa=x86&uab=64&uafvl=Chromium%3B136.0.7103.113%7CGoogle%2520Chrome%3B136.0.7103.113%7CNot.A%252FBrand%3B99.0.0.0&uamb=0&uam=&uap=Linux%20x86_64&uapv=6.6.72&uaw=0&fledge=1&data=event%3Dgtag.config)[iframe](https://td.doubleclick.net/td/rul/11474966929?random=1747732513325&cv=11&fst=1747732513325&fmt=3&bg=ffffff&guid=ON&async=1&gtm=45je55g2v9171934834z8892090687za200zb892090687&gcd=13l3l3l3l1l1&dma=0&tag_exp=101509157~103116025~103130495~103130497~103136993~103136995~103200001~103207802~103233427~103252644~103252646~103263073~103301114~103301116&ptag_exp=101509157~103116026~103130498~103130500~103136993~103136995~103200004~103207802~103233427~103252644~103252646~103263073~103301114~103301116&u_w=1280&u_h=1024&url=https%3A%2F%2Fconsole.integration.app%2Fdocs%2Fgetting-started%2Fself-hosting&hn=www.googleadservices.com&frm=0&tiba=Docs%20%C2%B7%20Integration%20Console&npa=0&pscdl=noapi&auid=528858687.1747732513&uaa=x86&uab=64&uafvl=Chromium%3B136.0.7103.113%7CGoogle%2520Chrome%3B136.0.7103.113%7CNot.A%252FBrand%3B99.0.0.0&uamb=0&uam=&uap=Linux%20x86_64&uapv=6.6.72&uaw=0&fledge=1&data=event%3Dgtag.config)[iframe](https://td.doubleclick.net/td/rul/11474966929?random=1747732513342&cv=11&fst=1747732513342&fmt=3&bg=ffffff&guid=ON&async=1&gcl_ctr=1&gtm=45je55g2v9171934834z8892090687za200zb892090687&gcd=13l3l3l3l1l1&dma=0&tag_exp=101509157~103116025~103130495~103130497~103136993~103136995~103200001~103207802~103233427~103252644~103252646~103263073~103301114~103301116&ptag_exp=101509157~103116026~103130498~103130500~103136993~103136995~103200004~103207802~103233427~103252644~103252646~103263073~103301114~103301116&u_w=1280&u_h=1024&url=https%3A%2F%2Fconsole.integration.app%2Fdocs%2Fgetting-started%2Fself-hosting&label=9M_TCKCTp5oaEJGz2N8q&hn=www.googleadservices.com&frm=0&tiba=Docs%20%C2%B7%20Integration%20Console&value=0&bttype=purchase&npa=0&pscdl=noapi&auid=528858687.1747732513&uaa=x86&uab=64&uafvl=Chromium%3B136.0.7103.113%7CGoogle%2520Chrome%3B136.0.7103.113%7CNot.A%252FBrand%3B99.0.0.0&uamb=0&uam=&uap=Linux%20x86_64&uapv=6.6.72&uaw=0&ec_mode=a&fledge=1&capi=1&_tu=Cg&em=tv.1&ct_cookie_present=0)