# TypeSync

A real-time collaborative document editor inspired by Google Docs. Built using **Next.js**, **TailwindCSS**, **ShadCN UI**, **Convex**, **Clerk**, and **Liveblocks** — and deployed on **Vercel**.

🔗 **Live Demo**: [https://type-sync-eta.vercel.app](https://type-sync-eta.vercel.app)

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