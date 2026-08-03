# PI-SCM: Advanced Supply Chain Management System

PI-SCM is a comprehensive, modular, and scalable Backend system designed to handle complex Supply Chain Management (SCM) operations. Built with a modern tech stack, it supports multi-tenancy, high-performance communication, and robust security.

---

## 🚀 Core Architecture & Tech Stack

- **Framework:** [NestJS](https://nestjs.com/) (Modular, Scalable Node.js framework)
- **Language:** TypeScript
- **Database:** PostgreSQL (via [Prisma ORM](https://www.prisma.io/))
- **Communication:**
  - **REST API:** Primary interface for frontend and external services.
  - **gRPC:** High-performance microservice communication (e.g., Auth services).
  - **Kafka:** Event-driven architecture for asynchronous service communication.
- **Message Queue:** [Bull](https://github.com/OptimalBits/bull) (Redis-backed) for background tasks like email processing.
- **Validation:** [Zod](https://zod.dev/) (Type-safe schema validation).
- **Security:**
  - **JWT & Passport.js:** Secure authentication with Google OAuth 2.0 support.
  - **RBAC:** Granular Role-Based Access Control.
  - **Two-Factor Authentication (2FA):** Integrated via `otplib`.

---

## 🏗️ Core Infrastructure Systems

### 1. Multi-Tenancy
The system supports a robust multi-tenant architecture:
- **Tenant Identification:** Dynamically routes requests based on Host Headers or Tenant IDs.
- **Isolation:** Ensures data integrity and security across different business entities.

### 2. Hybrid Application
Operates as both an HTTP server and a gRPC microservice:
- **REST Gateway:** Handles standard web requests.
- **gRPC Service:** Exposed on port `50051` for internal high-speed communication.

### 3. Background Processing
Utilizes Redis and Bull queues for:
- Asynchronous email dispatching.
- Scalable task processing without blocking the main event loop.

---

## 📦 Functional SCM Modules

| Module | Description |
| :--- | :--- |
| **Procurement** | Manage purchasing, vendor interactions, and procurement lifecycles. |
| **Inventory** | Real-time stock tracking, movements, and reorder alerts. |
| **Warehouse** | Warehouse layouts, bin management, picking, and packing workflows. |
| **TMS** | Transportation Management: Logistics planning and carrier tracking. |
| **Manufacturing** | Production planning, BOM (Bill of Materials), and work orders. |
| **Sales & Fulfillment** | Order management, CRM integration, and fulfillment tracking. |
| **Finance & EAM** | Enterprise Asset Management and financial accounting integration. |
| **Analytics** | Data-driven reporting and performance metrics across all modules. |
| **Payment** | Stripe-integrated subscription and transaction management. |
| **Collaboration** | Tools for business network collaboration with partners/suppliers. |

---

## 🛠️ Getting Started

### Prerequisites
- Node.js (v18+)
- Docker & Docker Compose
- PostgreSQL (or use Docker)
- Redis (for Bull queues)

### Installation
1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd pi-scm
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up environment variables:
   Create a `.env` file based on the required configurations (Database URL, Redis, Kafka, Stripe, Google OAuth).

### Database Setup
1. Generate Prisma client:
   ```bash
   npx prisma generate
   ```
2. Run migrations:
   ```bash
   npx prisma migrate dev
   ```

### Running the Application
```bash
# Development mode
npm run start:dev

# Production mode
npm run start:prod
```

### Infrastructure (Docker)
Start Kafka and Zookeeper using Docker Compose:
```bash
docker-compose up -d
```

---

## 📂 Project Structure

```text
src/
├── common/           # Shared decorators, guards, interceptors, and pipes
├── grpc/             # gRPC module configuration
├── modules/          # Functional SCM and supporting business modules
├── prisma/           # Prisma service and module
├── proto/            # Protobuf definitions for gRPC
├── utils/            # Shared utility functions
└── main.ts           # Application entry point (Hybrid setup)
```

---

## 🛡️ Security & Permissions

### Role-Based Access Control (RBAC)
The system implements strict **Role-Based Access Control (RBAC)**. Key roles include:
- `SUPER_ADMIN`, `TENANT_ADMIN`
- `WMS_MANAGER`, `INVENTORY_CLERK`
- `PROCUREMENT_OFFICER`, `FINANCE_CONTROLLER`
- `SUPPLY_CHAIN_ANALYST`

### Granular Resource Permissions
The codebase supports fine-grained permissions (CREATE, READ, UPDATE, DELETE) across various SCM resources:
- **WMS & Inventory:** Warehouses, zones, live stock counts, FEFO, safety stocks.
- **TMS:** Fleet vehicles, shipments, GPS tracking, Proof of Delivery (POD).
- **Procurement:** Purchase Orders (POs), RFQs, Vendor scorecards.
- **Manufacturing:** BOMs, Work Orders, MRP calculations.
- **Sales:** Order aggregation, dynamic pricing, invoices.
- **Finance & EAM:** Ledgers, tax rules, fixed assets, depreciation.
- **AI & Automation:** Demand forecasting, anomaly detection, predictive maintenance.
- **Governance:** Audit trails (GDPR compliant), role matrices.

---

## 🗄️ Database & Schema Management

- **Multi-Schema Support:** Prisma is configured to use a modular schema structure located in `prisma/schemas/`.
- **Automated Seeding:** Initial permissions and system roles can be bootstrapped using the provided `permission.sql`.
- **Client Generation:** The Prisma client is generated into a custom path: `src/generated/prisma`.

---

## 📜 License
This project is [UNLICENSED](LICENSE).
