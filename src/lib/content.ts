import type {
  CategoryTab,
  ClassCard,
  FaqItem,
  FeedColumn,
  FooterColumn,
  TeacherCard,
} from "@/types/skillshare";

export const categories: CategoryTab[] = [
  { id: "featured", label: "Featured" },
  { id: "music", label: "Music" },
  { id: "drawing", label: "Drawing & Painting" },
  { id: "marketing", label: "Marketing" },
  { id: "animation", label: "Animation" },
  { id: "social", label: "Social Media" },
  { id: "uiux", label: "UI/UX Design" },
  { id: "writing", label: "Creative Writing" },
  { id: "digital", label: "Digital Illustration" },
  { id: "film", label: "Film & Video" },
  { id: "crafts", label: "Crafts" },
  { id: "freelance", label: "Freelance & Entrepreneurship" },
  { id: "graphic", label: "Graphic Design" },
  { id: "photography", label: "Photography" },
  { id: "productivity", label: "Productivity" },
];

export const featuredClasses: ClassCard[] = [
  {
    id: "procreate",
    title:
      "Kickstart your Creativity with Procreate: 20 Fun Drawings for Beginners and Beyond",
    teacher: "Lisa Bardot",
    students: "26,571 students",
    duration: "6h 24m",
    image: "/images/classes/procreate-kickstart.jpg",
    staffPick: true,
    href: "#",
  },
  {
    id: "canva",
    title: "Social Media Content Creation in Canva: From Beginner to Advanced",
    teacher: "Maggie Stara",
    students: "46,745 students",
    duration: "13h 19m",
    image: "/images/classes/canva-social.jpg",
    staffPick: true,
    href: "#",
  },
  {
    id: "watercolour",
    title: "Landscapes: A Free-Flow Watercolour Masterclass with Jane Davies",
    teacher: "Jane Davies",
    students: "2,957 students",
    duration: "1h 42m",
    image: "/images/classes/watercolour-landscapes.jpg",
    staffPick: true,
    href: "#",
  },
  {
    id: "figma",
    title: "Figma UI UX Design Advanced: Become a Figma Pro",
    teacher: "Daniel Scott",
    students: "7,156 students",
    duration: "8h 48m",
    image: "/images/classes/figma-advanced.jpg",
    staffPick: true,
    href: "#",
  },
  {
    id: "chatgpt",
    title: "ChatGPT for Creatives: AI-Powered SEO, Marketing, & Productivity",
    teacher: "Peggy Dean",
    students: "19,244 students",
    duration: "1h 18m",
    image: "/images/classes/chatgpt-creatives.jpg",
    staffPick: true,
    href: "#",
  },
  {
    id: "draw",
    title: "How to Draw: A Beginner’s Guide - Part 1 of The Drawing Laboratory",
    teacher: "Brent Eviston",
    students: "32,634 students",
    duration: "5h 57m",
    image: "/images/classes/how-to-draw.jpg",
    staffPick: true,
    href: "#",
  },
  {
    id: "premiere",
    title: "Learn Video Editing With Adobe Premiere Pro For Beginners (2025)",
    teacher: "Jordy Vandeput",
    students: "19,224 students",
    duration: "3h 44m",
    image: "/images/classes/premiere-beginners.jpg",
    staffPick: true,
    href: "#",
  },
  {
    id: "iphone",
    title: "iPhone Photography Essentials: Take Pro Photos With Your iPhone",
    teacher: "Sean Dalton",
    students: "13,721 students",
    duration: "1h 34m",
    image: "/images/classes/iphone-photography.jpg",
    staffPick: true,
    href: "#",
  },
];

/** Lightweight per-tab variants — rotate featured set for demo fidelity */
export const classesByCategory: Record<string, ClassCard[]> = {
  featured: featuredClasses,
  music: featuredClasses.slice(0, 4),
  drawing: [
    featuredClasses[0],
    featuredClasses[2],
    featuredClasses[5],
    featuredClasses[7],
  ],
  marketing: [featuredClasses[1], featuredClasses[4], featuredClasses[3]],
  animation: [featuredClasses[6], featuredClasses[3], featuredClasses[0]],
  social: [featuredClasses[1], featuredClasses[4], featuredClasses[7]],
  uiux: [featuredClasses[3], featuredClasses[4], featuredClasses[1]],
  writing: [featuredClasses[4], featuredClasses[5]],
  digital: [featuredClasses[0], featuredClasses[5], featuredClasses[2]],
  film: [featuredClasses[6], featuredClasses[7]],
  crafts: [featuredClasses[2], featuredClasses[0]],
  freelance: [featuredClasses[4], featuredClasses[1], featuredClasses[3]],
  graphic: [featuredClasses[3], featuredClasses[1], featuredClasses[0]],
  photography: [featuredClasses[7], featuredClasses[6], featuredClasses[2]],
  productivity: [featuredClasses[4], featuredClasses[3], featuredClasses[1]],
};

export const teachers: TeacherCard[] = [
  {
    id: "lisa",
    name: "Lisa Bardot",
    role: "ILLUSTRATOR",
    image: "/images/teachers/lisa-bardot.webp",
    href: "#",
  },
  {
    id: "daniel",
    name: "Daniel Scott",
    role: "DIGITAL DESIGNER",
    image: "/images/teachers/daniel-scott.webp",
    href: "#",
  },
  {
    id: "derek",
    name: "Derek Elliot",
    role: "ANIMATOR, PRODUCT DESIGNER",
    image: "/images/teachers/derek-elliot.webp",
    href: "#",
  },
  {
    id: "aaron",
    name: "Aaron Draplin",
    role: "GRAPHIC DESIGNER",
    image: "/images/teachers/aaron-draplin.webp",
    href: "#",
  },
  {
    id: "zaneena",
    name: "Zaneena Nabeel",
    role: "WATERCOLOR ARTIST",
    image: "/images/teachers/zaneena-nabeel.webp",
    href: "#",
  },
  {
    id: "emonee",
    name: "Emonee LaRussa",
    role: "MOTION GRAPHICS ARTIST",
    image: "/images/teachers/emonee-larussa.webp",
    href: "#",
  },
  {
    id: "brent",
    name: "Brent Eviston",
    role: "MASTER ARTIST",
    image: "/images/teachers/brent-eviston.webp",
    href: "#",
  },
  {
    id: "jordy",
    name: "Jordy Vandeput",
    role: "FILMMAKER AND YOUTUBER",
    image: "/images/teachers/jordy-vandeput.webp",
    href: "#",
  },
];

export const feedColumns: FeedColumn[] = [
  {
    id: "inspired",
    title: "Stay Inspired",
    description:
      "Discover trending topics, get quick answers, and find your people.",
    image: "/images/feed/feed-4.png",
  },
  {
    id: "connected",
    title: "Stay Connected",
    description:
      "Follow your peers and teachers, exchange perspectives, and share some love.",
  },
  {
    id: "creating",
    title: "Keep Creating",
    description:
      "Explore new ideas for your next project, post your work, and get feedback.",
  },
];

export const faqs: FaqItem[] = [
  {
    id: "what",
    question: "What is Skillshare?",
    answer:
      "Skillshare is an online learning community with thousands of classes for creative and curious people, on topics including illustration, design, photography, video, freelancing, and more. On Skillshare, you’ll find inspiration from hands-on classes and teachers at the top of their creative fields, so you can take the next step in your creative journey.",
  },
  {
    id: "included",
    question: "What is included in my Skillshare membership?",
    answer:
      "As a Skillshare member, you’ll have unlimited access to all Skillshare classes to watch when and where you want, and additional features such as offline viewing, access to a vibrant community of lifelong learners, and so much more.",
  },
  {
    id: "learn",
    question: "What can I learn from Skillshare?",
    answer:
      "Skillshare has thousands of classes in everything from graphic design to cooking, productivity, filmmaking, content creation, UI/UX design, marketing, crafts, music, social media, entrepreneurship. If it's something creative, you can learn it on Skillshare.",
  },
  {
    id: "trial",
    question: "What happens after my trial is over?",
    answer:
      "After your trial ends, your annual Skillshare membership begins. You’ll be billed for the year in full, so you can enjoy continuous access to creative classes year-round.",
  },
  {
    id: "teach",
    question: "Can I teach on Skillshare?",
    answer:
      "Yes! Skillshare teachers are everyday creatives and professionals who want to share their passion, and the skills and experience they’ve gained in their creative disciplines with a community of eager learners. To learn more about teaching on Skillshare, visit our Help Center.",
  },
];

export const footerColumns: FooterColumn[] = [
  {
    title: "Art and Illustration",
    links: [
      { label: "Illustration classes", href: "#" },
      { label: "Digital art classes", href: "#" },
      { label: "Drawing classes", href: "#" },
      { label: "Painting classes", href: "#" },
      { label: "Watercolor classes", href: "#" },
      { label: "More...", href: "#" },
    ],
  },
  {
    title: "Graphic Design",
    links: [
      { label: "Graphic design classes", href: "#" },
      { label: "UI/UX design classes", href: "#" },
      { label: "Type design classes", href: "#" },
      { label: "Surface pattern design classes", href: "#" },
      { label: "Motion design classes", href: "#" },
      { label: "More...", href: "#" },
    ],
  },
  {
    title: "Creative Career",
    links: [
      { label: "Marketing classes", href: "#" },
      { label: "Freelance classes", href: "#" },
      { label: "AI classes", href: "#" },
      { label: "Productivity classes", href: "#" },
      { label: "Social media classes", href: "#" },
      { label: "More...", href: "#" },
    ],
  },
  {
    title: "Film, Video, and Photography",
    links: [
      { label: "Film career classes", href: "#" },
      { label: "Video production classes", href: "#" },
      { label: "Photography technique classes", href: "#" },
      { label: "Photography editing classes", href: "#" },
      { label: "Content creation classes", href: "#" },
      { label: "More...", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Press", href: "#" },
      { label: "Blog", href: "#" },
    ],
  },
];

export const heroCopy = {
  headline: "Creative Classes Taught by the Best Creative Pros",
  sublineBefore: "Thousands of creative classes.",
  highlight: "1 free month",
  sublineAfter: "Cancel anytime*",
  teacherCredit: { name: "Lisa Bardot", role: "Illustrator & Teacher" },
  signupTitle: "Get 1 free month of Skillshare",
  legal:
    "By signing up you agree to Skillshare's Terms of Service and Privacy Policy, and agree to receive marketing communications from Skillshare at the email address provided. This page is protected by reCAPTCHA and is subject to Google's Terms of Service and Privacy Policy.",
};

export const teachersIntro = {
  title: "Learn from Creative Experts",
  body: "Skillshare teachers are industry leaders excited to share their tools, techniques, and professional journeys with you.",
};
