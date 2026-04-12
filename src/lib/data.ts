export const personal = {
  name: "SUBHAN IRSYADUDDIEN",
  title: "Data Scientist",
  bio: "Mathematics student at Universitas Indonesia — turning messy data into models that actually work.",
  email: "subhanirsyaduddien@gmail.com",
  github: "https://github.com/subhanirsyad",
  linkedin: "https://www.linkedin.com/in/subhan-irsyaduddien-alhaq",
  location: "Jakarta, Indonesia",
};

export const stats = {
  gpa: "3.51",
  projects: "7+",
  accuracy: "99%",
  modelsTrained: 7,
};

export const skills = {
  languages: ["Python", "R", "SQL", "MySQL"],
  frameworks: ["TensorFlow", "Keras", "Scikit-learn", "SHAP", "SMOTE"],
  tools: ["Pandas", "NumPy", "Tableau", "Jupyter"],
  specializations: [
    "NLP",
    "Time Series",
    "Computer Vision",
    "Anomaly Detection",
    "Statistical Analysis",
    "Predictive Modeling",
  ],
};

export const allTechBadges = [
  "Python",
  "R",
  "SQL",
  "MySQL",
  "TensorFlow",
  "Keras",
  "Scikit-learn",
  "SHAP",
  "Pandas",
  "NumPy",
  "Tableau",
  "LSTM",
  "CNN",
  "NLP",
  "TF-IDF",
  "SVM",
  "SMOTE",
  "Random Forest",
  "Isolation Forest",
  "Linear Regression",
  "Computer Vision",
  "TFLite",
  "Jupyter",
  "Git",
];

export type ExperienceType = "teaching" | "org" | "leadership" | "finance";

export interface Experience {
  role: string;
  organization: string;
  period: string;
  type: ExperienceType;
}

export const experiences: Experience[] = [
  {
    role: "Mathematics Tutor",
    organization: "Bimbingan Alumni",
    period: "Nov 2025 – Present",
    type: "teaching",
  },
  {
    role: "Assistant Lecturer, Calculus",
    organization: "Universitas Indonesia",
    period: "Sep – Dec 2025",
    type: "teaching",
  },
  {
    role: "Mathematics Tutor",
    organization: "Tutorin Math",
    period: "May 2025 – Present",
    type: "teaching",
  },
  {
    role: "Steering Committee",
    organization: "LOGIKA UI 2024",
    period: "May – Dec 2025",
    type: "org",
  },
  {
    role: "Head of Academic Dept.",
    organization: "HMD Matematika FMIPA UI",
    period: "Mar 2025 – Present",
    type: "leadership",
  },
  {
    role: "Staff, Academic Division",
    organization: "HMD Matematika FMIPA UI",
    period: "Mar 2024 – Feb 2025",
    type: "leadership",
  },
  {
    role: "Treasurer Controller",
    organization: "Ksatria MIPA 2024",
    period: "Jul – Nov 2024",
    type: "finance",
  },
  {
    role: "Competition Coordinator",
    organization: "UI Science Olympiad",
    period: "Jun – Nov 2024",
    type: "leadership",
  },
  {
    role: "External Relations Staff",
    organization: "MATRIX XIX",
    period: "Jun – Oct 2024",
    type: "org",
  },
  {
    role: "Intern",
    organization: "HMD Matematika FMIPA UI",
    period: "Aug 2023 – Feb 2024",
    type: "org",
  },
  {
    role: "Competition Division Staff",
    organization: "LOGIKA UI 2024",
    period: "Oct – Dec 2023",
    type: "org",
  },
  {
    role: "Project Officer",
    organization: "Salam Universitas Indonesia",
    period: "Oct – Dec 2023",
    type: "org",
  },
];

export type AccentColor =
  | "amber"
  | "rose"
  | "orange"
  | "teal"
  | "sky"
  | "emerald"
  | "violet";

export interface Project {
  id: string;
  name: string;
  description: string;
  tech: string[];
  github?: string;
  demo?: string;
  accent: AccentColor;
}

export const projects: Project[] = [
  {
    id: "safebites",
    name: "SafeBites",
    description:
      "SQL database for grocery products with allergen filtering — enabling safe meal planning at scale.",
    tech: ["MySQL", "SQL", "Vercel"],
    github: "https://github.com/subhanirsyad/safebites-sql1",
    demo: "https://safebites-sql1.vercel.app",
    accent: "amber",
  },
  {
    id: "sentiment",
    name: "Play Store Sentiment Analysis",
    description:
      "NLP pipeline for Indonesian app review classification using TF-IDF vectorization and SVM.",
    tech: ["Python", "TF-IDF", "SVM", "NLP"],
    github: "https://github.com/subhanirsyad/sentiment-analysis",
    accent: "rose",
  },
  {
    id: "bitcoin",
    name: "Bitcoin Forecast Pipeline",
    description:
      "LSTM + Attention architecture for BTC time-series price forecasting with multi-step horizons.",
    tech: ["TensorFlow", "Keras", "LSTM", "Attention"],
    github: "https://github.com/subhanirsyad/bitcoin-forecast",
    accent: "orange",
  },
  {
    id: "animal",
    name: "Animal Image Classifier",
    description:
      "10-class CNN image classifier exported to TFLite for edge deployment — trained on custom dataset.",
    tech: ["TensorFlow", "CNN", "TFLite", "Computer Vision"],
    github: "https://github.com/subhanirsyad/animal-image-clasifier",
    accent: "teal",
  },
  {
    id: "cloud",
    name: "Cloud Data Security",
    description:
      "UEBA anomaly detection system using Isolation Forest to identify suspicious cloud access patterns.",
    tech: ["Python", "Isolation Forest", "UEBA", "Unsupervised ML"],
    accent: "sky",
  },
  {
    id: "nutrition",
    name: "Nutrition Classification",
    description:
      "ANN vs. Random Forest comparison for stunting risk classification — 99% accuracy with SMOTE balancing.",
    tech: ["Python", "ANN", "Random Forest", "SMOTE"],
    accent: "emerald",
  },
  {
    id: "house",
    name: "House Price Prediction",
    description:
      "Multiple linear regression model with 7 predictors for Jakarta housing market price estimation.",
    tech: ["R", "Linear Regression", "Statistics"],
    accent: "violet",
  },
];

export const accentMap: Record<AccentColor, { border: string; text: string; glow: string }> = {
  amber:   { border: "border-amber-500",   text: "text-amber-400",   glow: "hover:border-amber-400/80 hover:shadow-[0_0_16px_rgba(245,158,11,0.2)]" },
  rose:    { border: "border-rose-500",    text: "text-rose-400",    glow: "hover:border-rose-400/80 hover:shadow-[0_0_16px_rgba(244,63,94,0.2)]" },
  orange:  { border: "border-orange-500",  text: "text-orange-400",  glow: "hover:border-orange-400/80 hover:shadow-[0_0_16px_rgba(249,115,22,0.2)]" },
  teal:    { border: "border-teal-500",    text: "text-teal-400",    glow: "hover:border-teal-400/80 hover:shadow-[0_0_16px_rgba(20,184,166,0.2)]" },
  sky:     { border: "border-sky-500",     text: "text-sky-400",     glow: "hover:border-sky-400/80 hover:shadow-[0_0_16px_rgba(14,165,233,0.2)]" },
  emerald: { border: "border-emerald-500", text: "text-emerald-400", glow: "hover:border-emerald-400/80 hover:shadow-[0_0_16px_rgba(16,185,129,0.2)]" },
  violet:  { border: "border-violet-500",  text: "text-violet-400",  glow: "hover:border-violet-400/80 hover:shadow-[0_0_16px_rgba(139,92,246,0.2)]" },
};
