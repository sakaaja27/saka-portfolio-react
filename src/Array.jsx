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

export const features = [
  { title: "MariPeduli",
    deskripsi: "Website Frontend competition UCDC 2025 Amikom Surakarta",
    src: "img/maripeduli.png"
  }
]