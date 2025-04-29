# Next.js Fullstack Todo App

A modern, full-stack Todo application built with **Next.js 15 App Router**, **React 19**, **Prisma (MongoDB)**, **Clerk authentication**, **Tailwind CSS v4**, and **shadcn/ui components**. Features include user registration, todo creation, update, completion, and deletion — all scoped per authenticated user.

---

## 🚀 Live Preview

> Visit the live application: [https://nextjs-fullstack-todo-psi.vercel.app](https://nextjs-fullstack-todo-psi.vercel.app/)

---

## 🛠️ Tech Stack

- **Frontend**: [Next.js 15](https://nextjs.org) `with App Router` , [React 19](https://reactjs.org)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com), [shadcn/ui](https://ui.shadcn.com)
- **Auth**: [Clerk](https://clerk.com/)
- **Database**: [MongoDB](https://www.mongodb.com/) via [Prisma ORM](https://www.prisma.io/)
- **Form Handling**: `react-hook-form`, `zod` validation
- **Icons**: `lucide-react`

---

## ✨ Features

- ✅ User authentication (Clerk)
- ✅ Add, edit, delete, and complete todos
- ✅ Todos scoped by logged-in user
- ✅ Server actions with form validation
- ✅ Radix UI + Tailwind design system
- ✅ Responsive, accessible, and clean UI
- ✅ Dark/light mode toggle
- ✅ Prisma schema & MongoDB support

---

## 📦 Project Structure

```sh
/nextjs-fullstack-todo
├── app/
├── components/
├── interfaces/
├── lib/
├── prisma/
├── provider/
├── public/
├── schema/
├── .env
├── prisma/schema.prisma
├── middleware.ts
├── tailwind.config.mjs
├── eslint.config.mjs
├── tsconfig.json
└── package.json
```

---

## 🔧 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/mmt20/nextjs-fullstack-todo
cd nextjs-fullstack-todo
```

### 2. Install dependencies

```bash
pnpm install
```

### 3. Set up environment variables

```bash
DATABASE_URL="your_mongodb_connection_string"
CLERK_SECRET_KEY="your_clerk_secret_key"
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY="your_clerk_publishable_key"
```

### 4. Generate Prisma client

```bash
pnpm prisma generate
# or
npx prisma generate
```

### 5. Start development server

```bash
pnpm dev
```

Open <http://localhost:3000> in your browser to see the application.

## 🚀 Deployment

- Deploy easily on Vercel.

- Use MongoDB Atlas for database.

- Set environment variables in your project settings.

## 📬 Contact

📧 Email: [mmt202002@gmail.com](mailto:mmt202002@gmail.com)  
🔗 LinkedIn: [mostafa22](https://linkedin.com/in/mostafa22/)
