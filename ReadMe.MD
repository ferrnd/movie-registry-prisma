### 1. Initialize the Project
- `npm init -y`

### 2. Configure `package.json`
- Add: `"type": "module"`
- Add: `"main": "server.js"`
- Add to scripts: `"dev": "nodemon server.js"`

### 3. Install Dependencies
- **Production:** `npm i express dotenv pg @prisma/client @prisma/adapter-pg`
- **Development:** `npm i -D nodemon prisma`

### 4. Initialize Prisma
- `npx prisma init --datasource-provider postgresql`

### 5. Configure `.env`
- Set your connection string:
  `DATABASE_URL="postgresql://user:password@localhost:port/database_name"`

### 6. Configure `schema.prisma`
- Define your models and tables.

### 7. Generate Migrations and Client
- `npx prisma migrate dev --name init`
- `npx prisma generate`

### 8. Seed the Database
- `npx prisma db seed`

### 9. Launch Prisma Studio
- `npx prisma studio`

---

## 🛠️ Troubleshooting & Common Scenarios

### After updating `schema.prisma`
- Run a new migration: `npx prisma migrate dev --name describe_your_change` (e.g., `add_user_table`)

### Inconsistent Database (⚠️ WARNING: Deletes all data)
- Reset the database state: `npx prisma migrate reset`

### Populating Data Only
- Run the seed script: `npx prisma db seed`

### Quick Reference Table

| Command | Deletes Data? | Creates Migrations? | Primary Use Case |
| :--- | :---: | :---: | :--- |
| `migrate dev` | No* | **Yes** | Schema changes |
| `db seed` | No | No | Populating initial data |
| `migrate reset` | **Yes** | No | Fix corruption (Dev only) |
