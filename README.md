<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest


# PI-SCM Base Features Overview

This document provides a comprehensive overview of the features and architectural components of the PI-SCM (Supply Chain Management) backend system.

## 🚀 Core Architecture & Tech Stack
- **Framework:** NestJS (Modular, Scalable Node.js framework)
- **Language:** TypeScript
- **Database:** PostgreSQL (via Prisma ORM)
- **Communication:** REST API, Kafka (for microservices/async communication)
- **Message Queue:** Bull (Redis-backed) for background tasks like email processing
- **Validation:** Zod (Type-safe validation)
- **Authentication:** JWT (JSON Web Tokens), Passport.js (Google OAuth 2.0 support)
- **Deployment:** Docker support (docker-compose included)

---

## 🏗️ Core Infrastructure Systems

### 1. Multi-Tenancy
- **Strategy:** Tenant identification via Host Header (Subdomains or Custom Domains).
- **Handling:** Dedicated `ExtractTenant` decorator to dynamically route requests based on the tenant context.

### 2. Authentication & Authorization
- **JWT-Based Auth:** Secure token extraction from headers or cookies.
- **RBAC (Role-Based Access Control):** Granular permission management using `RolesGuard`.
- **Super Admin Support:** Global access for system administrators.
- **Two-Factor Authentication (2FA):** Integrated via `otplib` and QR code generation.
- **Social Login:** Google OAuth 2.0 integration.

### 3. Security
- **Encryption:** Utility for sensitive data encryption.
- **Throttling:** Atomic throttle guards for rate limiting.
- **Logging:** Interceptor for comprehensive request/response logging.

---

## 📦 Functional SCM Modules

### 1. Procurement
- Management of purchasing processes, vendor interactions, and procurement lifecycles.

### 2. Inventory Management
- Real-time tracking of stock levels, inventory movements, and stock adjustments.

### 3. Warehouse Management
- Management of warehouse layouts, storage bins, picking, packing, and shipping processes.

### 4. Transportation Management System (TMS)
- Logistics planning, carrier management, and shipment tracking.

### 5. Manufacturing
- Production planning, Bill of Materials (BOM), work orders, and manufacturing execution.

### 6. Sales & Fulfillment
- Order management, customer relationship management (CRM) links, and fulfillment workflows.

---

## 💼 Supporting Business Systems

### 1. Finance & Asset Management
- Enterprise Asset Management (EAM) and financial accounting integration.
- Asset tracking, depreciation, and financial reporting.

### 2. Payment System
- **Provider:** Stripe integration.
- **Features:** Subscription management, payment processing, and transaction history.

### 3. Business Network Collaboration
- Tools for collaborating across the supply chain network with partners and suppliers.

### 4. Analytics & Reporting
- Data-driven insights across all SCM modules.
- Performance metrics and operational reports.

---

## 🛠️ Technical Utilities & Integrations
- **Email System:** Asynchronous email dispatching using Bull queues and Nodemailer.
- **2FA Utilities:** Support for TOTP-based multi-factor authentication.
- **Prisma Schema Splitting:** Large schema managed across multiple specialized `.prisma` files for better maintainability.
- **Kafka Integration:** Ready for event-driven architecture and microservice communication.
