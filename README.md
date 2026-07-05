# Vandana Tripathi — Premium Software Development Engineer Portfolio

A premium, interactive, and high-performance developer portfolio built for **Vandana Tripathi**. This project showcases professional experience as a Software Development Engineer, full-stack capabilities, verified certifications (AWS, Google Cloud), and production-ready SaaS platforms.

It utilizes cinematic interactions, a customized responsive video reel, an interactive canvas particle background, and a responsive custom floating social dock themed in a beautiful soft pink palette.

---

## 🚀 Key Features
- **Visual Identity**: Immersive dark theme with high-contrast soft pink accent glows (`#FF8EAF`) matching client assets.
- **Intelligent Hero Video Preloading**: Coordinates the loading states of the background video with the preloader and falls back to a poster image with a timeout to eliminate layout shift.
- **Interactive Cursor Particles**: High-performance HTML5 canvas particle trail with spring physics (lerping) and mouse tracking, fully responsive and optimized.
- **Software Dev & AI Process Pipeline**: An interactive scroll-linked SVG dashed path tracking 5 steps of business-first engineering.
- **Glassmorphic Grid Sections**: Glowing, percentage-free skills badges, a dedicated education journey block, and a timeline of professional experiences.
- **Real Freelance Screenshots**: Premium, responsive Bento-grid layout showing exact visual previews of 5 verified freelance client projects.
- **Hire Me & Freelance Availability Flows**: Intercepts contact requests to copy a pre-drafted message to the clipboard, displays a toast alert, and redirects to LinkedIn. Fallback modal handles copy instructions if clipboard APIs are blocked.
- **EmailJS Contact Form**: Form validation, submit states, and clean fallback to native prefilled mailto client routing.

---

## 🛠️ Tech Stack
- **Core**: React 19, Vite, ES6 Javascript
- **Styling**: Tailwind CSS v4, Custom CSS variables
- **Animations**: Framer Motion, AOS (Animate on Scroll)
- **Email Delivery**: `@emailjs/browser` (with native mailto fallback)
- **Icons**: Customized lightweight inline SVG vectors

---

## 💻 Local Development Setup

To run this project locally, follow these steps:

### 1. Prerequisites
Ensure you have [Node.js](https://nodejs.org/) installed (v18+ recommended).

### 2. Install Dependencies
In the root directory of the project, run:
```bash
npm install
```

### 3. Start Development Server
Launch Vite's hot-reload local server:
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 4. Build for Production
To build and optimize the bundle size for hosting:
```bash
npm run build
```
This generates a static production bundle inside the `dist/` directory.

---

## ✉️ EmailJS Contact Form Setup

The contact form works out of the box by opening the user's default email client with a prefilled subject and body. If you wish to enable silent direct inbox emails seamlessly on the website, you need to configure EmailJS.

### How to get all keys from EmailJS:

1. **Sign Up / Log In**: Go to [EmailJS](https://www.emailjs.com/) and create a free account.
2. **Add a Service**:
   - Go to the **Email Services** tab.
   - Click **Add New Service** (e.g., Gmail) and connect your Google account.
   - Once connected, you will see a **Service ID** (e.g., `service_abc123`). Copy this.
3. **Create an Email Template**:
   - Go to the **Email Templates** tab and click **Create New Template**.
   - Design how you want to receive the email. You can use variables like `{{user_name}}`, `{{user_email}}`, and `{{message}}`.
   - Save the template. Go to the template settings to find your **Template ID** (e.g., `template_xyz789`). Copy this.
4. **Get your Public Key**:
   - Go to the **Account** section (top right drop-down).
   - Under the **API Keys** tab, you will find your **Public Key** (e.g., `aBcDeFgHiJkLmNoPq`). Copy this.

### Adding the keys to your project:

Once you have these 3 keys, create a `.env` file in the root directory of your project (same level as `package.json`) and paste them like this:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id_here
VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
```

*(Note: If you are hosting on Vercel or Netlify, add these exact variables to your project's Environment Variables settings in their respective dashboards).*

**No code adjustments are needed!** The form will automatically detect these keys and securely send the message directly to your inbox without opening an external mail client.

---

## ☁️ Deploying on Vercel

1. Push this project to your GitHub repository.
2. Log in to [Vercel](https://vercel.com/) and click **Add New Project**.
3. Import your repository. Vercel automatically detects **Vite**.
4. Add your EmailJS `.env` variables under the **Environment Variables** section before deploying.
5. Click **Deploy**. Vercel will provide a live URL in under a minute.
