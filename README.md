# Partner Support Engineer Assessment

## Project Description

This project is a simple full-stack Dockerized application consisting of:
- A Node.js/Express web app that connects to a PostgreSQL database
- An NGINX reverse proxy for the web app
- PostgreSQL database with initialization script

The web app exposes a `/health` endpoint to verify database connectivity and internet access.

---

## Setup Instructions

### 1. Clone the Repository

```sh
git clone https://github.com/Reinhardbett/partner-support-assessment
cd Partner_Support_Engineer_Assessment
```

### 2. Configure Environment Variables

- Copy the provided `.env.example` files (or see below) to `.env` in the appropriate directories.
- **Do not commit your `.env` files to version control.**

#### Example: `db/.env`
```
POSTGRES_USER=user
POSTGRES_PASSWORD=pass
POSTGRES_DB=appdb
```

#### Example: `web-app/.env`
```
DB_USER=user
DB_PASSWORD=pass
DB_NAME=appdb
DB_HOST=db-service
DB_PORT=5432
```

### 3. Build and Start the Application

Make sure Docker and Docker Compose are installed, then run:

```sh
docker-compose up --build
```

This will:
- Build the Node.js app image
- Start the PostgreSQL database and initialize it with `init-db.sql`
- Start the NGINX reverse proxy

---

## Environment Variable Requirements

**Database (`db/.env`):**
- `POSTGRES_USER` - Username for PostgreSQL
- `POSTGRES_PASSWORD` - Password for PostgreSQL
- `POSTGRES_DB` - Database name to create

**Web App (`web-app/.env`):**
- `DB_USER` - Database username
- `DB_PASSWORD` - Database password
- `DB_NAME` - Database name
- `DB_HOST` - Hostname of the database service (should be `db-service`)
- `DB_PORT` - Database port (default: 5432)

---

## How to Access the App

- The app will be available at: [http://localhost](http://localhost)
- Health check endpoint: [http://localhost/health](http://localhost/health)

  - **Expected output:**  
    `OK - Database connected and internet access`

---

## Additional Notes

- To reset the database (e.g., after changing environment variables), run:
  ```sh
  docker-compose down -v
  docker-compose up --build
  ```
- The database is initialized with a `users` table and a test user.
- All sensitive data should be kept in `.env` files and **not** committed to version control.

---