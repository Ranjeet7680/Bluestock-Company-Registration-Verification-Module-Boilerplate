# Bluestock Company Registration & Verification Module

This repository contains the ready-to-use project scaffold for the Bluestock internship warm-up assignment. It includes a **React frontend** (for the multi-step form) and a **Node.js/Express backend** (with PostgreSQL and stubs for Firebase and Cloudinary integration).

## 🚀 Quick Setup (Local Environment)

Follow these steps to get the full-stack application running on your local machine.

### 1. Database Setup (PostgreSQL)

You must have a local instance of **PostgreSQL** running.

1.  **Create Database:** Create a new database named `company_db` (or whatever name you prefer).
    ```sql
    CREATE DATABASE company_db;
    ```
2.  **Import Schema:** Import the provided SQL schema file (e.g., `company_db.sql`) into your newly created database.
    ```bash
    psql -U your_postgres_user -d company_db -f path/to/company_db.sql
    ```

### 2. Environment Variables

Create separate `.env` files for the frontend and backend with the required connection details and secrets.

#### **A. Backend Setup (`/backend/.env`)**

Create a file named `.env` inside the `backend/` directory and populate it with your specific credentials.

```env
# Server Configuration
PORT=5000
NODE_ENV=development

# --- Database Connection ---
DB_HOST=localhost
DB_PORT=5432
DB_USER=your_postgres_user
DB_PASSWORD=your_postgres_password
DB_NAME=company_db

# --- Security & Auth ---
JWT_SECRET=your_super_secret_key_change_me_to_a_long_random_string
JWT_EXPIRY=90d 

# --- External Services ---
# Replace these with your actual Firebase/Cloudinary credentials
FIREBASE_API_KEY=your_firebase_api_key
# ... add other necessary Firebase variables (AUTH_DOMAIN, PROJECT_ID, etc.)

CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
