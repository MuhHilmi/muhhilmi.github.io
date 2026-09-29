import photoProfile from "../assets/photoProfile.jpg";

export const PROFILE = {
    name: "Muh. Hilmi Abdul Aziz",
    role: "Junior full-stack web developer",
    location: "Cianjur, Indonesia",
    bio: "Saya membangun aplikasi web yang cepat, rapi, dan nyaman dipakai. Fokus di React, Node.JS, dan arsitektur backend yang scalable.",
    email: "muhhilmiabdulaziz@gmail.com",
    github: "https://github.com/muhhilmi",
    linkedin: "https://linkedin.com/in/muh-hilmi-abdul-aziz-798381325/",
    photo: photoProfile,
    cvUrl: "",
    portfolioPdfUrl: "",
};

export const PROJECT = [
    {
        id: 1,
        file: "commerce-dashboard.tsx",
        title: "Commerce Dashboard",
        description: "Dashboard analitik real-time untuk toko online dengan visualisasi penjualan, manajemen stok, dan laporan otomatis.",
        stack: ["React", "Typescript", "Node.JS", "PostgreSQL"],
        demo: "#",
        repo: "#",
    },
    {
        id: 2,
        file: "task-flow.tsx",
        title: "TaskFlow",
        description: "Aplikasi manajemen proyek kolaboratif dengan drag-and-drop board, real-time sync via WebSocket, dan notifikasi.",
        stack: ["Next.JS", "Prisma", "WebSocket", "Tailwind"],
        demo: "#",
        repo: "#",
    },
    {
        id: 3,
        file: "api-gateway.ts",
        title: "API Gateway Service",
        description: "Layanan gateway untuk microservices dengan rate limiting, autentikasi terpusat, dan logging terstruktur.",
        stack: ["Node.JS", "Redis", "Docker", "Express"],
        demo: "#",
        repo: "#",
    },
    {
        id: 4,
        file: "booking-app.blade.php",
        title: "Aplikasi Sistem Booking",
        description: "Aplikasi Sistem Booking Lapang yang dibuat untuk mempermudah dalam melakukan booking lapang tanpa perlu konfirmasi ke pihak lapang.",
        stack: ["Laravel", "Blade", "MySQL"],
        demo: "#",
        repo: "#",
    },
];

export const EXPERIENCE = [
    {
        hash: "a3f9c1e",
        date: "2024 — Sekarang",
        title: "Senior Frontend Engineer",
        org: "PT Teknologi Nusantara",
        message: "Memimpin migrasi arsitektur frontend ke React 18 dan membangun design system internal yang dipakai 6 tim produk.",
    },
    {
        hash: "7d2e881",
        date: "2022 — 2024",
        title: "Full-Stack Developer",
        org: "Startup Digitalku",
        message: "Membangun platform e-commerce dari nol, menangani traffic 50rb+ pengguna aktif per bulan.",
    },
    {
        hash: "f01b4a6",
        date: "2020 — 2022",
        title: "Junior Web Developer",
        org: "Agensi Kreatif Studio",
        message: "Mengembangkan website klien menggunakan React dan WordPress, fokus pada performa dan aksesibilitas.",
    },
];

export const SKILLS = {
    frontend: [
        { name: "react", version: "^18.2.0" },
        { name: "typescript", version: "^5.4.0" },
        { name: "tailwindcss", version: "^3.4.0" },
        { name: "next.js", version: "^14.1.0" },
    ],
    backend: [
        { name: "node.js", version: "^20.11.0" },
        { name: "express", version: "^4.19.0" },
        { name: "postgresql", version: "^16.0.0" },
        { name: "redis", version: "^7.2.0" },
    ],
    tools: [
        { name: "docker", version: "^25.0.0" },
        { name: "git", version: "^2.43.0" },
        { name: "vitest", version: "^1.3.0" },
        { name: "figma", version: "n/a" },
    ],
};
