import { BsGithub, BsInstagram, BsLinkedin, BsTiktok } from "react-icons/bs";
export const Techs = [
  { name: "React.js", src: "/techstack/react.svg" },
  { name: "Next.js", src: "/techstack/nextjs.svg" },
  { name: "Laravel", src: "/techstack/laravel.svg" },
  { name: "PHP", src: "/techstack/php.svg" },
  { name: "TailwindCSS", src: "/techstack/tailwindcss.svg" },
  { name: "JavaScript", src: "/techstack/javascript.svg" },
  { name: "Java", src: "/techstack/java.svg" },
  { name: "Flutter", src: "/techstack/flutter.svg" },
  { name: "Dart", src: "/techstack/dart.svg" },
  {name: "C#", src:"/techstack/csharp.svg"}
];

export const iconHero = [
  {
    href: "https://linkedin.com/in/yourprofile",
    label: "LinkedIn",
    icon: <BsLinkedin className="text-blue-500 w-5 h-5" />,
  },
  {
    href: "https://instagram.com/yourprofile",
    label: "Instagram",
    icon: <BsInstagram className="text-red-500 w-5 h-5" />,
  },
  {
    href: "https://github.com/yourprofile",
    label: "GitHub",
    icon: <BsGithub className="text-black w-5 h-5" />,
  },
];

export const projects = [
  {
    title: "BumiKita",
    description: "Sistem manajemen bencana untuk BPBD dengan fitur real-time monitoring",
    tags: ["React", "Tailwind CSS", "Mapbox"],
    image: "img/bumikita.png",
    link: "#",
    techIcons: ["techstack/react.svg", "techstack/tailwindcss.svg", "techstack/mapbox.svg"]
  },
  {
    title: "MariPeduli",
    description: "Platform crowdfunding untuk kegiatan sosial dan donasi",
    tags: ["Next.js", "Firebase", "Stripe"],
    image: "img/maripeduli.png",
    link: "#",
    techIcons: ["techstack/nextjs.svg", "techstack/firebase.svg", "techstack/stripe.svg"]
  },
  {
    title: "Food Scan Health",
    description: "Aplikasi pemindai nutrisi makanan menggunakan computer vision",
    tags: ["TensorFlow.js", "React Native", "Node.js"],
    image: "img/foodscan.png",
    link: "#",
    techIcons: ["techstack/tensorflow.svg", "techstack/react.svg", "techstack/nodejs.svg"]
  },
  {
    title: "FlootieCook",
    description: "Platform resep masakan dengan rekomendasi bahan terdekat",
    tags: ["Vue.js", "Laravel", "MySQL"],
    image: "img/flootiecook.png",
    link: "#",
    techIcons: ["techstack/vuejs.svg", "techstack/laravel.svg", "techstack/mysql.svg"]
  }
];