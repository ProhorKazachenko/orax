# ORAX

## Server Requirements

Before starting, make sure the server has:

- **Node.js** (recommended LTS version, e.g. `18.x`)
- **npm** or **yarn**
- **Git**
- Terminal access with a user that has permission to run and edit files

---

## 1. Clone the Repository

```bash
git clone <repository_url>
cd <project_folder_name>
```

## 2. Install Dependencies
```bash
npm install
```

## 3. Set Environment Variables
Create a `.env` file in the project root (if it doesn’t exist yet):
```bash
touch .env
```
Add the required environment variables (these are essential for the app to function correctly):
```dotenv
#actual domain name
NEXT_PUBLIC_HOST=https://example.com

# SMTP (for sending emails)
SMTP_HOST=smtp.example.com
SMTP_PORT=465
SMTP_USER=your@email.com
SMTP_PASS=your-password

# Email recipient
EMAIL_TGT=target@email.com

# API url for backend
NEXT_PUBLIC_API_URL=http://localhost:3000/api
```

## Build the Project
```bash
npm run build
```

## Start the App
```bash
npm run start
```
The application will listen for connections on port 3000