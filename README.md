# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/REPLACE_WITH_PROJECT_ID

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/REPLACE_WITH_PROJECT_ID) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/REPLACE_WITH_PROJECT_ID) and click on Share -> Publish.

## Contact form email setup

The contact forms post to `/api/contact`, which sends lead emails to `talentpull.uk@gmail.com`.
This route requires a Node/serverless host such as Vercel.

Set these environment variables in your hosting dashboard before publishing:

```sh
CONTACT_TO_EMAIL=talentpull.uk@gmail.com
CONTACT_FROM_EMAIL=talentpull.uk@gmail.com
SMTP_HOST=smtp.gmail.com
SMTP_PORT=465
SMTP_SECURE=true
SMTP_USER=talentpull.uk@gmail.com
SMTP_PASS=your_gmail_app_password_here
```

For Gmail, use a Gmail App Password for `SMTP_PASS`, not your normal Gmail password.

### Hostinger Business Node.js setup

Use Hostinger's Node.js Web App option, not static hosting.

Recommended settings:

```sh
Framework/type: Other or Express.js
Build command: npm install && npm run build
Start command: npm start
Entry file: server.js
Output directory: dist
Node.js version: 20.x or 22.x
```

Add the same environment variables listed above in the Hostinger Node.js app settings,
then redeploy or restart the app.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/features/custom-domain#custom-domain)
