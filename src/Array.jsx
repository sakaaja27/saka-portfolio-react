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
    tags: ["React.js"],
    image: "img/maripeduli.png",
    link: "#",
    techIcons: ["techstack/react.svg"]
  },
  {
    title: "Wound Scan Diabetic",
    description: "Aplikasi pemindai luka diabetes menggunakan CNN",
    tags: ["TensorFlow", "Next.Js", "Flask"],
    image: "img/wound-scan.png",
    link: "#",
    techIcons: ["techstack/tensorflow.svg", "techstack/nextjs.svg", "techstack/nodejs.svg"]
  },
  {
    title: "Timbangan Prodis",
    description: "Aplikasi dekstop timbangan tebu dan material PT Sinergi Teknologi",
    tags: ["C#", "Postgresql"],
    image: "img/prodis.png",
    link: "#",
    techIcons: ["techstack/csharp.svg", "techstack/postgresql-icon.svg"]
  }
];