import photoProfile from "../assets/photoProfile.jpg";

export const PROFILE = {
    name: "Muh. Hilmi Abdul Aziz",
    role: "Junior full-stack web developer",
    location: "Cianjur, Indonesia",
    bio: "Saya membangun aplikasi web yang cepat, rapi, dan nyaman dipakai. Fokus di Laravel, React, dan arsitektur yang scalable.",
    email: "muhhilmiabdulaziz@gmail.com",
    github: "https://github.com/muhhilmi",
    linkedin: "https://linkedin.com/in/muh-hilmi-abdul-aziz-798381325/",
    photo: photoProfile,
    cvUrl: "/CV Muh. Hilmi Abdul Aziz.pdf",
    portfolioPdfUrl: "",
};

export const PROJECT = [
    {
        id: 1,
        file: "website-smk-cianjur.blade.php",
        title: "Website SMK Kesehatan",
        description: "Website sekolah merupakan media informasi digital yang menyediakan berbagai informasi mengenai profil, kegiatan, fasilitas, berita, pengumuman, serta layanan akademik sekolah bagi siswa, guru, orang tua, dan masyarakat.",
        stack: ["Laravel", "Blade", "MySQL"],
        demo: "#",
        repo: "#",
    },
    {
        id: 2,
        file: "price-comparison.html",
        title: "Perbandingan Harga",
        description: "Aplikasi perbandingan harga minimarket yang dibuat untuk mempermudah konsumen dalam membeli dan membandingkan.",
        stack: ["Laravel", "Blade", "MySQL", "Tailwind"],
        demo: "#",
        repo: "#",
    },
    {
        id: 3,
        file: "monopoli.jsx",
        title: "Aplikasi Monopoli",
        description: "Aplikasi Monopoli ini dirancang untuk mempermudah jalannya permainan dengan membantu menentukan pemain, mengelola keuangan, serta mengatur kartu kepemilikan secara praktis dan terstruktur.",
        stack: ["Laravel", "React.JS", "TailwindCSS", "SQLite"],
        demo: "https://monopoli.freehosting.dev",
        repo: "https://github.com/MuhHilmi/MonopoliApp",
    },
    {
        id: 4,
        file: "booking-app.blade.php",
        title: "Aplikasi Sistem Booking",
        description: "Aplikasi Sistem Booking Lapang yang dibuat untuk mempermudah dalam melakukan booking lapang tanpa perlu konfirmasi ke pihak lapang.",
        stack: ["Laravel", "Blade", "MySQL", "TailwindCSS"],
        demo: "#",
        repo: "#",
    },
    {
        id: 5,
        file: "notion-clone.jsx",
        title: "Mini Notion Clone",
        description: "Aplikasi yang serupa dengan Notion App dengan model yang lebih sederhana.",
        stack: ["React.JS", "Prisma", "Express.JS", "TailwindCSS", "MySQL"],
        demo: "https://mini-notion-clone-five.vercel.app/",
        repo: "#",
    },
];

export const EXPERIENCE = [
    {
        hash: "7d2e881",
        date: "2024 — 2025",
        title: "IT Staff & Full-Stack Developer",
        org: "SMK Kesehatan Cianjur",
        message: "Membuat, mengembangkan, dan memelihara situs web sekolah, menangani pemeliharaan perangkat keras serta jaringan, mengelola sistem Dapodik, dan mendukung administrasi serta pengelolaan data siswa secara akurat dan terstruktur.",
    },
    {
        hash: "f01b4a6",
        date: "2023",
        title: "IT Support",
        org: "MA Tanwiriyyah",
        message: "Mengembangkan sistem PPDB online, mengelola perangkat keras, perangkat lunak, dan jaringan laboratorium komputer, mendukung administrasi serta pengelolaan dokumen sekolah, dan memberikan dukungan teknis untuk memastikan kelancaran pelaksanaan ujian berbasis komputer.",
    },
];

export const SKILLS = {
    frontend: [
        { name: "react", version: "^18.2.0" },
        // { name: "typescript", version: "^5.4.0" },
        { name: "tailwindcss", version: "^3.4.0" },
        { name: "next.js", version: "^14.1.0" },
    ],
    backend: [
        // { name: "node.js", version: "^20.11.0" },
        { name: "express", version: "^4.19.0" },
        // { name: "postgresql", version: "^16.0.0" },
        // { name: "redis", version: "^7.2.0" },
        { name: "laravel", version: "^13.0.0" },
    ],
    tools: [
        // { name: "docker", version: "^25.0.0" },
        { name: "git", version: "^2.43.0" },
        { name: "vitest", version: "^1.3.0" },
        { name: "figma", version: "n/a" },
    ],
};
