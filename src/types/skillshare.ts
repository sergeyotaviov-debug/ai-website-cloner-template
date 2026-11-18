export type ClassCard = {
  id: string;
  title: string;
  teacher: string;
  students: string;
  duration: string;
  image: string;
  staffPick?: boolean;
  href: string;
};

export type CategoryId =
  | "featured"
  | "music"
  | "drawing"
  | "marketing"
  | "animation"
  | "social"
  | "uiux"
  | "writing"
  | "digital"
  | "film"
  | "crafts"
  | "freelance"
  | "graphic"
  | "photography"
  | "productivity";

export type CategoryTab = {
  id: CategoryId;
  label: string;
};

export type TeacherCard = {
  id: string;
  name: string;
  role: string;
  image: string;
  href: string;
};

export type FaqItem = {
  id: string;
  question: string;
  answer: string;
};

export type FeedColumn = {
  id: string;
  title: string;
  description: string;
  image?: string;
};

export type FooterColumn = {
  title: string;
  links: { label: string; href: string }[];
};
