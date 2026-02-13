import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Temple Ajuzie",
  initials: "TA",
  url: "https://www.templeajuzie.online",
  location: "Port Harcourt, Nigeria",
  locationLink: "https://www.google.com/maps/place/Port+Harcourt",
  description:
    "Full-Stack & AI Engineer specializing in scalable cloud-native systems and multi-model AI integration. Built and co-leading Gennit, a multi-model AI platform integrating OpenAI, Anthropic, and open-source models. Experienced in backend architecture, distributed systems, and AWS infrastructure. Passionate about bridging production engineering with machine learning systems.",
  summary:
    "Full-Stack & AI Engineer specializing in scalable cloud-native systems and multi-model AI integration. Built and co-leading Gennit, a multi-model AI platform integrating OpenAI, Anthropic, and open-source models. Experienced in backend architecture, distributed systems, and AWS infrastructure. Passionate about bridging production engineering with machine learning systems.",
  avatarUrl:
    "https://gennit-storage.s3.eu-north-1.amazonaws.com/templeajuzie/profiles/avatar/1770996303886-2026-02-13%204.14.52%C3%A2%C2%80%C2%AFPM%20%281%29.jpg",
  skills: [
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "PostgreSQL",
    "AWS (EC2, S3, IAM, Lambda)",
    "LLM integration",
    "Model routing",
    "API orchestration",
    "RESTful API architecture",
    "CI/CD",
    "Docker",
    "Git",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    {
      href: "https://medium.com/@templeajuzie",
      icon: NotebookIcon,
      label: "Blog",
    },
  ],
  contact: {
    email: "templeajuzie@gmail.com",
    tel: "(+234) 905 263 7046",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/templeajuzie",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/iamtempleajuzie/",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/iamtempleajuzie",
        icon: Icons.x,
        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "https://www.youtube.com/@templeajuzie",
        icon: Icons.youtube,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:templeajuzie@gmail.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Kliptolite Enterprise",
      href: "#",
      badges: [],
      location: "Port Harcourt, Nigeria",
      title: "Software Engineer",
      logoUrl:
        "https://lh3.googleusercontent.com/a/ACg8ocJnmc6IR2Yy7p1Q_EzGeCJ9APIfahM1Z6_SwcD_LwI4-Y5Krg_V=s96-c",
      start: "Oct. 2024",
      end: "Present",
      description:
        "Design and build scalable full-stack systems with strong focus on backend architecture, cloud integrations, and AI-enabled workflows. Develop and maintain high-performance server-side applications, design secure RESTful APIs, and integrate databases and third-party services to power production systems. Implement CI/CD pipelines, monitor cloud-hosted services, and optimize application performance for scalability and reliability.",
    },
    {
      company: "Kshop Limited",
      badges: [],
      href: "#",
      location: "Remote",
      title: "Frontend Engineer",
      logoUrl:
        "https://pbs.twimg.com/profile_images/1479545028708118528/a2WFqnUb_x96.jpg",
      start: "Jun 2022",
      end: "Feb 2023",
      description:
        "Built responsive and interactive user interfaces using React.js. Improved application performance and user experience. Implemented reusable frontend components to improve development speed.",
    },
    {
      company: "Leadwise Consulting",
      href: "#",
      badges: [],
      location: "Virtual",
      title: "Chief Technology Officer (Volunteer)",
      logoUrl:
        "https://pbs.twimg.com/profile_images/3368042704/3c8f962d72b8b73fbbd855d0ea583b4a_400x400.jpeg",
      start: "Sept 2021",
      end: "2024",
      description:
        "Led web development strategy and technical project execution. Managed infrastructure decisions and system architecture planning.",
    },
    {
      company: "The Wisdom Place",
      href: "https://thewisdomplace.net/",
      badges: [],
      location: "Port Harcourt, Nigeria",
      title: "Team Lead (Volunteer)",
      logoUrl: "https://i1.sndcdn.com/avatars-000771078445-b9l7hc-t240x240.jpg",
      start: "April 2016",
      end: "June 2019",
      description:
        "Led a 25-member multimedia team managing live streaming and digital production workflows. Managed digital workflows and technical project execution.",
    },
  ],
  education: [
    {
      school: "University of Port Harcourt",
      href: "https://www.uniport.edu.ng/",
      degree: "(B.SC) Computer Science",
      logoUrl:
        "https://myschoolnewsng.wordpress.com/wp-content/uploads/2018/08/uniport.jpeg",
      start: "2017",
      end: "2023",
    },
  ],
  projects: [
    {
      title: "Gennit",
      href: "https://www.gennit.online",
      dates: "Jan 2024 - Present",
      active: true,
      description:
        "Architected a multi-model AI platform integrating OpenAI, Anthropic, and open-source LLMs to dynamically route queries based on user requirements, cost, and latency. Implemented Retrieval-Augmented Generation (RAG) pipelines enabling users to query personalized document knowledge bases with high accuracy.",
      technologies: [
        "Next.js",
        "Typescript",
        "Node.js",
        "Express",
        "MongoDB",
        "AWS (S3, EC2)",
        "OpenAI API",
        "Anthropic API",
      ],
      links: [
        {
          type: "Website",
          href: "https://www.gennit.online",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop",
      video: "/gennit.mp4",
    },
    {
      title: "Enterbox",
      href: "https://www.enterbox.app",
      dates: "Jan 2023 - Dec 2023",
      active: true,
      description:
        "Architected a drag-and-drop website and email builder with dynamic component rendering. Built a modular UI block system allowing real-time editing and preview. Designed backend template storage and rendering engine for customizable web/email layouts.",
      technologies: [
        "Next.js",
        "Typescript",
        "Node.js",
        "MongoDB",
        "Cloud-based deployment",
      ],
      links: [
        {
          type: "Website",
          href: "https://www.enterbox.app",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/enterbox_thumbnail.png",
      video: "/enterbox.mp4",
    },
    {
      title: "Jobba",
      href: "#",
      dates: "2023",
      active: true,
      description:
        "Engineered a complete job recommendation system featuring both client-side and server-side logic for personalized job matching. Developed recommendation algorithms based on user profiles and preferences.",
      technologies: ["React", "Node.js", "Express", "MongoDB", "Python (ML)"],
      links: [],
      image: "/jobba_thumbnail.png",
      video: "",
    },
    {
      title: "ABC Networks 24",
      href: "https://www.abcnetworks24.com",
      dates: "2023 - 2024",
      active: true,
      description:
        "Developed a complete news platform system, comprising full-stack client and server-side code. Implemented a dynamic content management system (CMS) for real-time news publishing and multi-user access control.",
      technologies: [
        "Next.js",
        "Typescript",
        "Node.js",
        "MongoDB",
        "Cloudinary",
      ],
      links: [
        {
          type: "Website",
          href: "https://www.abcnetworks24.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/abc_networks_thumbnail.png",
      video: "",
    },
    {
      title: "Esthington",
      href: "#",
      dates: "2023",
      active: true,
      description:
        "Designed and built a full-featured real estate platform with an integrated wallet system for secure in-app transactions. Integrated payment APIs with transaction logging and audit trail mechanisms. Designed role-based authentication for buyers, sellers, and agents.",
      technologies: ["React", "Node.js", "Express", "AWS", "Payment APIs"],
      links: [],
      image: "/esthington_thumbnail.png",
      video: "",
    },
    {
      title: "Proliferate",
      href: "#",
      dates: "2022",
      active: true,
      description:
        "Built an online virtual classroom platform with course management and live session integration. Implemented student enrollment, attendance tracking, and assignment workflows. Structured database schema for scalable multi-course management.",
      technologies: ["React", "Node.js", "MongoDB", "WebRTC / Zoom API"],
      links: [],
      image: "/proliferate_thumbnail.png",
      video: "",
    },
  ],
  certifications: [
    {
      title: "AWS Certified Cloud Practitioner",
      platform: "Amazon Web Services",
      description:
        "Achieved foundational AWS certification covering core cloud concepts, security, and pricing.",
      image:
        "data:image/png;base64,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",
      links: [
        {
          title: "Certificate",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://aws.amazon.com/certification/certified-cloud-practitioner/",
        },
      ],
    },
    {
      title: "JavaScript",
      platform: "Udemy",
      description:
        "Completed JavaScript course covering ES6+ syntax, DOM manipulation, and basic programming concepts.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6cvDwu6u48GUXeh-QG5JC1iA-IiTLwKLZoA&s",
      links: [
        {
          title: "Course",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://www.udemy.com/course/javascript-basics/",
        },
      ],
    },
    {
      title: "TypeScript Essentials",
      platform: "Udemy",
      description:
        "Learned TypeScript basics, type safety, and interfaces for enhanced JavaScript development.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrJC9Qwc8eLVhYZ6c5GVh3frPEDDcvnHzbSg&s",
      links: [
        {
          title: "Course",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://www.udemy.com/course/typescript-essentials/",
        },
      ],
    },
    {
      title: "Node.js Development",
      platform: "Udemy",
      description:
        "Covered Node.js fundamentals, asynchronous programming, and building RESTful APIs.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXnNmPWdtMfb7UJedqajo_MhCz6StV_uAusQ&s",
      links: [
        {
          title: "Course",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://www.udemy.com/course/nodejs-development/",
        },
      ],
    },
    {
      title: "React.js",
      platform: "Udemy",
      description:
        "Completed React.js course focused on component-based architecture and state management.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBqNRb0px21xIiprH16maquX7X1XrN9THIkw&s",
      links: [
        {
          title: "Course",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://www.udemy.com/course/reactjs-for-beginners/",
        },
      ],
    },
  ],
} as const;
