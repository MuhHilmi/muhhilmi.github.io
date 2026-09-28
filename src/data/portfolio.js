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
