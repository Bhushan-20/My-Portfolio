import { LuLinkedin, LuGithub } from "react-icons/lu";
import { SiLeetcode } from "react-icons/si";
import Edulicious from "../assets/Edulicious.mp4";
import Jobify from "../assets/Jobify.mp4";
import Face from "../assets/face.mp4";

export const navLinks = [
  {
    url: "/#",
    name: "Home",
  },
  {
    url: "/#about",
    name: "About",
  },

  {
    url: "/#projects",
    name: "Projects",
  },
  {
    url: "/#contact",
    name: "Contact",
  },
];

export const skills = [
  "C++",
  "Python",
  "JavaScript",
  "SQL",
  "React Js",
  "Node.js",
  "ExpressJS",
  "MongoDB",
  "MySQL",
  "Tailwind CSS",
];

export const social_links = [
  {
    url: "https://github.com/Bhushan-20",
    icon: <LuGithub className="w-[22px] h-[22px]" />,
    name: "Github",
  },
  {
    url: "https://www.linkedin.com/in/bhushan-patil-11410a173/",
    icon: <LuLinkedin className="w-[22px] h-[22px]" />,
    name: "Linkedin",
  },
  {
    url: "https://leetcode.com/u/Bhushan-20/",
    icon: <SiLeetcode className="w-[22px] h-[22px]" />,
    name: "Leetcode",
  },
];

export const mainProjects = [
  {
    title: "Edulicious - EdTech Platform",
    description:
      "Developed an online learning platform built with the MERN stack, featuring role-based modules for Admin, Instructors, and Students. Integrated secure payment via Razorpay, course management, and data visualization using Chart.js. Media stored using Cloudinary for seamless course content management.",
    tags: ["React","Tailwind CSS", "ExpressJS", "Node.js","MongoDB"],
    github: "https://github.com/Bhushan-20/Edulicious",
    demo: "https://edulicious-bhushan.vercel.app/",
    video: Edulicious,
  },
  {
    title: "Jobify - Job Portal",
    description:
        "A full-stack job portal connecting recruiters and applicants. Developed secure authentication with JWT, job posting and application tracking functionalities, and integrated Cloudinary for resume storage with Multer for smooth file uploads.",
    tags: ["React", "Tailwind CSS", "ExpressJS", "Node.js","MongoDB"],
    github: "https://github.com/Bhushan-20/Job-Portal",
    demo: "https://jobify-bhushan.vercel.app/",
    video: Jobify,
  },
  {
    title: "Face Recognition Attendance System",
    description:
    "A Python-based system replacing manual attendance with facial recognition. Utilized Haar Cascade and LBPH algorithms for accurate face detection, storing data in MySQL and automatically recording attendance in an Excel sheet via a Tkinter interface.",
    tags: ["Python", "MySQL", "Excel", "Tkinter", "LBPH Algorithm"],
    github: "https://github.com/Bhushan-20/Face-Recognition-Attendance-System",
    demo: "https://github.com/Bhushan-20/Face-Recognition-Attendance-System",
    video: Face,
  },
];

export const otherProjects = [
  {
    title: "Discord CLone",
    description:
    "A frontend clone of Discord, built using HTML, CSS, and Tailwind. This project replicates the user interface of Discord, featuring responsive layouts and a modern design aesthetic using Tailwind's utility-first CSS framework.",
    tags: ["HTML", "CSS", "Tailwind CSS"],
    github: "https://github.com/Bhushan-20/discordCLone",
    demo: "https://bhushan-discordclone.vercel.app/",
  },
  {
    title: "Weather App",
    description:
    "A responsive Weather App built with HTML, CSS, and JavaScript, utilizing a weather API to deliver real-time weather updates. Users can easily search for locations to view current weather conditions in a clean and intuitive interface.",
    tags: ["HTML5","CSS","Javascript", "API"],
    github: "https://github.com/Bhushan-20/Weather-App",
    demo: "https://github.com/Bhushan-20/Weather-App",
  },
  {
    title: "Github Profile Viewer",
    description:
      "Crafted using HTML, CSS, and JavaScript DOM, it fetches your GitHub data via API, presenting a clean showcase of repositories.",
    tags: ["HTML", "CSS", "JavaScript", "Github API"],
    github: "https://github.com/Bhushan-20/Github-profile-viewer",
    demo: "https://bhushan-20.github.io/Github-profile-viewer/",
  },
  {
    title: "Password Generator",
    description:
      "Simple UI crafted using HTML, CSS, and JS, this tool offers multiple filters for customizing your passwords. Copy your generated passwords with a single click.",
    tags: ["HTML5", "CSS", "JavaScript", "DOM"],
    github: "https://github.com/Bhushan-20/Random-password-generator-main",
    demo: "https://bhushan-20.github.io/Random-password-generator-main/",
  },
  {
    title: "Razorpay Clone",
    description:
    "A frontend clone of the Razorpay payment gateway, developed using HTML, CSS, and Tailwind. This project emulates the user interface of Razorpay, featuring a clean and responsive design with a focus on user experience. ",
    tags: ["HTML5", "CSS", "TailwindCSS"],
    github: "https://github.com/Bhushan-20/Random-Gif-Generator",
    demo: "https://razorpay-clone-bhushan.vercel.app/",
  },
  {
    title: "Random Gif Generator",
    description:
    "A dynamic Random GIF Generator built with React and Tailwind, which fetches GIFs from an API. This project features a user-friendly interface that allows users to easily generate and view random GIFs",
    tags: ["React", "Tailwind CSS", "API"],
    github: "https://github.com/Bhushan-20/Random-Gif-Generator",
    demo: "https://random-gif-generator-bhushan.vercel.app/",
  },
];
