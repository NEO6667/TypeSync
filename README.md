<p align="center">
  <img src="https://your-banner-image-url.com/banner.png" alt="TypeSync Banner" width="100%" />
</p>

<h1 align="center">📝 TypeSync</h1>

<p align="center">
  A real-time collaborative document editor inspired by Google Docs.
</p>

< align="center">
  <a href="https://nextjs.org/"><img src="https://img.shields.io/badge/Next.js-000?style=flat&logo=nextdotjs" alt="Next.js" /></a>
  <a href="https://tailwindcss.com/"><img src="https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=flat&logo=tailwind-css&logoColor=white" alt="TailwindCSS" /></a>
  <a href="https://ui.shadcn.com/"><img src="https://img.shields.io/badge/ShadCN_UI-000000?style=flat&logo=storybook&logoColor=white" alt="ShadCN UI" /></a>
  <a href="https://clerk.dev/"><img src="https://img.shields.io/badge/Clerk-3B82F6?style=flat&logo=clerk&logoColor=white" alt="Clerk" /></a>
  <a href="https://www.convex.dev/"><img src="https://img.shields.io/badge/Convex-4F46E5?style=flat&logo=databricks&logoColor=white" alt="Convex" /></a>
  <a href="https://liveblocks.io/"><img src="https://img.shields.io/badge/Liveblocks-111827?style=flat&logo=liveblocks&logoColor=white" alt="Liveblocks" /></a>
  <a href="https://vercel.com/"><img src="https://img.shields.io/badge/Vercel-000000?style=flat&logo=vercel&logoColor=white" alt="Vercel" /></a>
  <a href="https://github.com/NEO6667/TypeSync.git"><img src="https://img.shields.io/github/stars/NEO6667/TypeSync?style=social" alt="GitHub Stars" /></a>
  🔗 <strong><a href="https://type-sync-eta.vercel.app" target="_blank">Live Demo</a></strong>
</p>

---

## 🚀 Features

- ⚡ **Real-time collaboration** with cursor presence, allowing multiple users to edit documents simultaneously.
- ✅ **Authentication & user management** powered by Clerk for secure access and personalized experiences.
- 📁 **Document creation, editing, and live sync** to ensure all changes are reflected instantly across collaborators.
- 🧠 **Database-backed document storage** using Convex, providing a robust and scalable backend.
- 🎨 **Clean and modern UI** designed with TailwindCSS and ShadCN UI for an intuitive user experience.
- 🌐 **Fast and fully serverless deployment** on Vercel, ensuring high availability and performance.



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

---

## 📦 Installation

To get a local copy up and running, follow these simple steps:

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/your-username/typesync.git](https://github.com/your-username/typesync.git)
    ```
2.  **Navigate to the project directory:**
    ```bash
    cd typesync
    ```
3.  **Install dependencies:**
    ```bash
    npm install
    ```

---

## 🧪 Development

To start the development server:

```bash
npm run dev
```
## ⚙️ Environment Variables
Create a .env.local file and configure the following variables:
```bash

NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key

NEXT_PUBLIC_CONVEX_URL=your_convex_url
CONVEX_DEPLOYMENT=your_convex_deployment_name
CONVEX_ADMIN_KEY=your_convex_admin_key

LIVEBLOCKS_PUBLIC_KEY=your_liveblocks_public_key
```
⚠️ Make sure you set up your Clerk, Convex, and Liveblocks projects before running the app.

## 🤝 Contributing
Contributions are welcome! Feel free to open issues, suggest new features, or submit pull requests to improve the project.

📄 License
This project is licensed under the MIT License.

## 🙌 Acknowledgements
Next.js

Convex

Clerk

Liveblocks

ShadCN UI

Vercel