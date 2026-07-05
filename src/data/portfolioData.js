// ============================================================
// portfolioData.js — Centralized configuration for Vandana's Portfolio
// All external links, personal info, and content in one place.
// ============================================================

export const personalInfo = {
  name: "Vandana",
  firstName: "Vandana Tripathi",
  brandName: "Vandana Tripathi",
  title: "Software Development Engineer & Full Stack Developer",
  location: "Mumbai, Maharashtra, India",
  phone: "",
  emails: {
    primary: "vandanagenai31@gmail.com",
    secondary: "",
  },
  summary:
    "Frontend/Full Stack Developer building scalable SaaS platforms with React.js, Next.js, TypeScript, and Node.js for 10,000+ users. Delivered 30%+ performance gains through reusable architecture, secure role-based systems, and optimized API integrations.",
  resumeUrl: "/resume.pdf",
};

export const socialLinks = {
  github: "https://github.com/VandanaTripathi31",
  linkedin: "https://www.linkedin.com/in/vandana-tripathi-96a422227/",
  twitter: "https://x.com/heyitsvandyyy",
  portfolio: "https://vandanatripathi.vercel.app/",
  email: "vandanagenai31@gmail.com",
};

export const heroContent = {
  greeting: "Hi, I'm Vandana Tripathi",
  titleHighlight: "Software Development Engineer & Full Stack Developer",
  subtitle: "",
  ctaPrimary: { text: "View My Work", href: "#projects" },
  ctaSecondary: {
    text: "Contact Me",
    href: "mailto:vandanagenai31@gmail.com?subject=Inquiry – Portfolio&body=Hello Vandana,%0D%0A%0D%0AI came across your portfolio and would like to discuss an opportunity.%0D%0A%0D%0ALooking forward to hearing from you.%0D%0ABest Regards,",
  },
  ctaResume: { text: "Download Resume", href: "/resume.pdf" },
};

export const aboutContent = {
  heading: "Hello!",
  bio: `Hi, my name is <span class="text-black text-xl font-black mx-1 tracking-wide uppercase">Vandana</span>, a Software Development Engineer based in Mumbai. I am available for freelance worldwide. I specialize in building production-ready SaaS applications and admin dashboards with modern web technologies.`,
  techStack: ["React.js", "Next.js", "TypeScript", "Node.js", "MongoDB"],
};

export const skillsContent = {
  badge: "My Process",
  heading: "Engineering Digital Products in Motion",
  description:
    "I follow a structured, business-first engineering process to analyze requirements, construct secure databases, and deploy robust web applications.",
  cards: [
    {
      number: "01",
      title: "Discover & Scope",
      text: "Understanding the problem, mapping requirements, and analyzing business goals."
    },
    {
      number: "02",
      title: "Architect & Plan",
      text: "Designing scalable technical architecture, choosing the stack, and structuring databases."
    },
    {
      number: "03",
      title: "Design & Build",
      text: "Developing highly reliable server-side logic, API services, and robust UI components."
    },
    {
      number: "04",
      title: "Test & Optimize",
      text: "Testing workflows, resolving issues, and ensuring maximum performance and accessibility."
    },
    {
      number: "05",
      title: "Launch & Scale",
      text: "Deploying secure, production-ready applications with continuous optimization strategies."
    }
  ],
  endText: "Ready for production!"
};

export const technicalSkills = {
  categories: [
    {
      title: "Frontend Development",
      skills: ["React.js", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "ShadCN UI", "Redux Toolkit Query", "TanStack Query", "React Hook Form", "Zod"]
    },
    {
      title: "Backend & Databases",
      skills: ["Node.js", "Express.js", "MongoDB", "SQL", "Postgres", "RESTful APIs", "JWT", "CASL"]
    },
    {
      title: "APIs & Integrations",
      skills: ["Stripe Payment Gateway", "Twilio API", "Google Maps API"]
    },
    {
      title: "Tools & Cloud",
      skills: ["Git", "GitHub", "Postman", "VS Code", "Vercel", "Render", "Netlify", "AWS (Basics)"]
    },
    {
      title: "Soft Skills",
      skills: ["Leadership", "Adaptability", "Teamwork", "Business-first engineering"]
    }
  ]
};

export const projects = [
  {
    id: "natures-national-india",
    number: "01",
    badge: "🛒 E-Commerce Platform",
    title: "Nature's National India",
    description:
      "Built full-stack e-commerce platform with admin dashboard for product, order, and customer management. Integrated AI chatbot for customer support and role-based authentication for admin operations.",
    techTags: ["React.js", "Node.js", "MongoDB", "Admin Dashboard", "AI Chatbot", "Role-based Auth"],
    links: {
      github: "https://github.com/VandanaTripathi31/NaturesnationalIndia",
      githubProfile: "https://github.com/VandanaTripathi31",
      demo: "https://naturesnational.vercel.app/",
    },
    previewImage: "/src/assets/vandana/projects/natures-national-preview.png",
    isFlagship: true,
  },
  {
    id: "dellcube-lms",
    number: "02",
    badge: "📊 SaaS Dashboard",
    title: "Dellcube Logistics Management System",
    description:
      "Developed fleet, inventory, and warehouse modules with route optimization and JWT-secured role dashboards, improving security 45%. Designed scalable MongoDB schema supporting production deployment for live client operations.",
    techTags: ["React", "Node.js", "MongoDB", "JWT", "Route Optimization", "Dashboard"],
    links: {
      github: "https://github.com/VandanaTripathi31/DellCube-Lms",
      githubProfile: "https://github.com/VandanaTripathi31",
      demo: "https://dellcube.com/",
    },
    previewImage: "/src/assets/vandana/projects/dellcube-preview.png",
    isFlagship: true,
  },
  {
    id: "diloara-kashvin",
    number: "03",
    badge: "🌐 Business Website",
    title: "Diloara by Kashvin",
    description:
      "Developed a premium business website to showcase the Diloara brand. Focused on high performance and clean UI.",
    techTags: ["React", "Frontend Development", "Responsive Design"],
    links: {
      github: null,
      githubProfile: "https://github.com/VandanaTripathi31",
      demo: "https://diloarabykashvin.netlify.app/",
    },
    previewImage: "/src/assets/vandana/projects/diloara-kashvin-preview.png",
    isFlagship: false,
  },
  {
    id: "framenest",
    number: "04",
    badge: "🌐 Business Website",
    title: "FrameNest",
    description:
      "Built the FrameNest platform focusing on modern web aesthetics, seamless user interaction, and robust component architecture.",
    techTags: ["React", "Web Architecture"],
    links: {
      github: null,
      githubProfile: "https://github.com/VandanaTripathi31",
      demo: "https://framenest.vercel.app/",
    },
    previewImage: "/src/assets/vandana/projects/framenest-preview.png",
    isFlagship: false,
  },
  {
    id: "new-united",
    number: "05",
    badge: "🌐 Business Website",
    title: "New United",
    description:
      "Delivered a professional digital presence for New United, ensuring responsive layout across all device viewports.",
    techTags: ["Frontend Development", "Performance Optimization"],
    links: {
      github: null,
      githubProfile: "https://github.com/VandanaTripathi31",
      demo: "https://newunited-bb75a.netlify.app/",
    },
    previewImage: "/src/assets/vandana/projects/new-united-preview.png",
    isFlagship: false,
  },
];

export const certificates = {
  featured: [
    {
      name: "AWS Academy Graduate",
      issuer: "AWS",
      icon: "☁️",
      link: null,
      verifyLink: null,
      desc: "Completed AWS Academy foundational training for cloud computing."
    },
    {
      name: "Associate Cloud Engineer",
      issuer: "Google Cloud",
      icon: "☁️",
      link: null,
      verifyLink: null,
      desc: "Certified as Associate Cloud Engineer for Google Cloud ecosystem."
    },
    {
      name: "Technical Member",
      issuer: "Google Developer Student Club (GDSC)",
      icon: "👨‍💻",
      link: null,
      verifyLink: null,
      desc: "Active technical member organizing and contributing to university developer initiatives."
    },
  ]
};

export const educationList = [
  {
    institution: "University of Mumbai",
    degree: "B.E in Computer Engineering (Honors in Cyber Security)",
    duration: "Graduated 2025",
    location: "Mumbai, India",
    gpa: "7.50 CGPA"
  }
];

export const experienceList = [
  {
    organization: "SENDVISE",
    role: "Frontend Developer",
    duration: "March 2026 - Present",
    location: "Remote / Office",
    responsibilities: [
      "Architected scalable SaaS dashboards for Admin, Reseller, and User roles on a WhatsApp automation platform using Next.js and TypeScript.",
      "Implemented CRUD workflows across 6 core modules (chats, campaigns, templates, tickets, invoices, calls) using Redux Toolkit Query and TanStack Query.",
      "Enforced multi-tenant role-based access control (CASL) and built type-safe forms with React Hook Form and Zod, reducing input errors."
    ],
    tech: ["Next.js", "TypeScript", "Redux Toolkit Query", "TanStack Query", "CASL", "Zod"]
  },
  {
    organization: "TAX-O-SMART",
    role: "React Developer",
    duration: "Jan 2025 - Feb 2026",
    location: "Remote / Office",
    responsibilities: [
      "Delivered GST/TDS dashboard features for 10,000+ active users, supporting daily financial operations across India.",
      "Built reusable React + Tailwind component system, cutting development time 40% and boosting UI performance 30%.",
      "Optimized large-dataset rendering (tables, filters, search), improving workflow efficiency 35% and reducing production bugs 25%."
    ],
    tech: ["React", "Tailwind CSS", "Data Rendering Optimization"]
  }
];

export const footerContent = {
  taglines: [
    "Software Development Engineer",
    "Full Stack & Frontend Developer",
    "Freelance Software Engineer",
  ],
  credential: "B.E. Computer Engineering · University of Mumbai",
  copyright: `© ${new Date().getFullYear()} Vandana Tripathi | Built with React`,
};

export const emailjsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || "YOUR_EMAILJS_SERVICE_ID",
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "YOUR_EMAILJS_TEMPLATE_ID",
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "YOUR_EMAILJS_PUBLIC_KEY",
};
