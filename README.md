# 📝 TypeSync

A real-time collaborative document editor inspired by Google Docs. Built using **Next.js**, **TailwindCSS**, **ShadCN UI**, **Convex**, **Clerk**, and **Liveblocks** — and deployed on **Vercel**.

🔗 **Live Demo**: [https://type-sync-eta.vercel.app](https://type-sync-eta.vercel.app)

---

## 🚀 Features

- ⚡ Real-time collaboration with cursor presence
- ✅ Authentication & user management (powered by Clerk)
- 📁 Document creation, editing, and live sync
- 🧠 Database-backed document storage (Convex)
- 🎨 Clean and modern UI (TailwindCSS + ShadCN)
- 🌐 Fast and fully serverless deployment on Vercel

---

## 🛠️ Tech Stack

- **Framework:** [Next.js](https://nextjs.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/), [ShadCN UI](https://ui.shadcn.com/)
- **Authentication:** [Clerk](https://clerk.dev/)
- **Database & Backend:** [Convex](https://www.convex.dev/)
- **Real-time Collaboration:** [Liveblocks](https://liveblocks.io/)
- **Deployment:** [Vercel](https://vercel.com/)

---

## 📸 Screenshots

<!-- Uncomment and replace with real screenshots if available -->
<!-- 
<p align="center">
  <img src="https://your-screenshot-url.com/editor.png" alt="TypeSync Editor" width="600"/>
</p> 
-->

---

## 📦 Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/your-username/typesync.git
cd typesync
npm install
🧪 Development
To start the development server:

bash
Copy
Edit
npm run dev
⚙️ Environment Variables
Create a .env.local file and configure the following variables:

env
Copy
Edit
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key

NEXT_PUBLIC_CONVEX_URL=your_convex_url
CONVEX_DEPLOYMENT=your_convex_deployment_name
CONVEX_ADMIN_KEY=your_convex_admin_key

LIVEBLOCKS_PUBLIC_KEY=your_liveblocks_public_key
⚠️ Make sure you set up your Clerk, Convex, and Liveblocks projects before running the app.

🤝 Contributing
Contributions are welcome! Feel free to open issues, suggest new features, or submit pull requests to improve the project.

📄 License
This project is licensed under the MIT License.

🙌 Acknowledgements
Next.js

Convex

Clerk

Liveblocks

ShadCN UI

Vercel