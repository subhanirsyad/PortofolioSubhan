export const personal = {
  name: "Subhan Irsyaduddien",
  title: "Data Scientist",
  subtitle: "Mathematics · Universitas Indonesia",
  bio: "Turning messy real-world data into models that actually ship.",
  email: "subhanirsyaduddien@gmail.com",
  github: "https://github.com/subhanirsyad",
  linkedin: "https://www.linkedin.com/in/subhan-irsyaduddien-alhaq",
  location: "Jakarta, Indonesia",
};

export const stackItems = [
  { label: "Python",       short: "PY",  bg: "#0d1f33", text: "#5bc0f8" },
  { label: "TensorFlow",   short: "TF",  bg: "#2c1200", text: "#ff8c42" },
  { label: "SQL",          short: "SQL", bg: "#0a2417", text: "#5fcf80" },
  { label: "Scikit-learn", short: "SK",  bg: "#190d33", text: "#a78bfa" },
  { label: "Pandas",       short: "PD",  bg: "#1e0d30", text: "#d8b4fe" },
  { label: "NumPy",        short: "NP",  bg: "#0d1f2e", text: "#60b8f5" },
  { label: "Keras",        short: "KR",  bg: "#2c0d14", text: "#fb7185" },
  { label: "R",            short: "R",   bg: "#0d2015", text: "#6ee7b7" },
  { label: "Tableau",      short: "TB",  bg: "#2a1e00", text: "#fcd34d" },
  { label: "SHAP",         short: "SH",  bg: "#1a1a0d", text: "#d4e157" },
  { label: "SMOTE",        short: "SM",  bg: "#0d1a24", text: "#7dd3fc" },
  { label: "Jupyter",      short: "JP",  bg: "#2a1500", text: "#fb923c" },
];

export const skillGroups = [
  {
    label: "Machine Learning",
    items: ["TensorFlow", "Keras", "Scikit-learn", "SHAP", "SMOTE", "Random Forest", "LSTM", "CNN"],
  },
  {
    label: "Data Engineering",
    items: ["Pandas", "NumPy", "SQL", "MySQL", "Tableau", "Jupyter"],
  },
  {
    label: "Specializations",
    items: ["NLP", "Time Series", "Computer Vision", "Anomaly Detection", "Statistical Analysis"],
  },
  {
    label: "Languages",
    items: ["Python", "R", "SQL"],
  },
];

export type ExperienceType = "teaching" | "org" | "leadership" | "finance";

export interface Experience {
  role: string;
  organization: string;
  period: string;
  type: ExperienceType;
}

export const experiences: Experience[] = [
  { role: "Mathematics Tutor",          organization: "Bimbingan Alumni",         period: "Nov 2025 – Now",         type: "teaching"  },
  { role: "Assistant Lecturer, Calculus", organization: "Universitas Indonesia",  period: "Sep – Dec 2025",         type: "teaching"  },
  { role: "Mathematics Tutor",          organization: "Tutorin Math",             period: "May 2025 – Now",         type: "teaching"  },
  { role: "Steering Committee",         organization: "LOGIKA UI 2024",           period: "May – Dec 2025",         type: "org"       },
  { role: "Head of Academic Dept.",     organization: "HMD Matematika FMIPA UI",  period: "Mar 2025 – Now",         type: "leadership"},
  { role: "Staff, Academic Division",   organization: "HMD Matematika FMIPA UI",  period: "Mar 2024 – Feb 2025",    type: "leadership"},
  { role: "Treasurer Controller",       organization: "Ksatria MIPA 2024",        period: "Jul – Nov 2024",         type: "finance"   },
  { role: "Competition Coordinator",    organization: "UI Science Olympiad",      period: "Jun – Nov 2024",         type: "leadership"},
  { role: "External Relations Staff",   organization: "MATRIX XIX",               period: "Jun – Oct 2024",         type: "org"       },
  { role: "Intern",                     organization: "HMD Matematika FMIPA UI",  period: "Aug 2023 – Feb 2024",    type: "org"       },
  { role: "Competition Division Staff", organization: "LOGIKA UI 2024",           period: "Oct – Dec 2023",         type: "org"       },
  { role: "Project Officer",            organization: "Salam UI",                 period: "Oct – Dec 2023",         type: "org"       },
];

export type AccentColor = "amber" | "rose" | "orange" | "teal" | "sky" | "emerald" | "violet";

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
    description: "SQL database for grocery products with allergen filtering.",
    tech: ["MySQL", "SQL"],
    github: "https://github.com/subhanirsyad/safebites-sql1",
    demo: "https://safebites-sql1.vercel.app",
    accent: "amber",
  },
  {
    id: "sentiment",
    name: "Play Store Sentiment",
    description: "NLP pipeline for Indonesian app review classification.",
    tech: ["Python", "TF-IDF", "SVM"],
    github: "https://github.com/subhanirsyad/sentiment-analysis",
    accent: "rose",
  },
  {
    id: "bitcoin",
    name: "Bitcoin Forecast",
    description: "LSTM + Attention architecture for BTC time-series forecasting.",
    tech: ["TensorFlow", "LSTM", "Attention"],
    github: "https://github.com/subhanirsyad/bitcoin-forecast",
    accent: "orange",
  },
  {
    id: "animal",
    name: "Animal Classifier",
    description: "10-class CNN exported to TFLite for edge deployment.",
    tech: ["TensorFlow", "CNN", "TFLite"],
    github: "https://github.com/subhanirsyad/animal-image-clasifier",
    accent: "teal",
  },
  {
    id: "cloud",
    name: "Cloud Security",
    description: "UEBA anomaly detection using Isolation Forest.",
    tech: ["Python", "Isolation Forest", "UEBA"],
    accent: "sky",
  },
  {
    id: "nutrition",
    name: "Nutrition Classification",
    description: "ANN vs. Random Forest for stunting risk — 99% accuracy.",
    tech: ["ANN", "Random Forest", "SMOTE"],
    accent: "emerald",
  },
  {
    id: "house",
    name: "House Price Prediction",
    description: "Multiple linear regression with 7 predictors for Jakarta housing.",
    tech: ["R", "Linear Regression"],
    accent: "violet",
  },
];

export const accentStyles: Record<AccentColor, { border: string; text: string; bg: string }> = {
  amber:   { border: "#f59e0b", text: "#fbbf24", bg: "rgba(245,158,11,0.06)" },
  rose:    { border: "#f43f5e", text: "#fb7185", bg: "rgba(244,63,94,0.06)" },
  orange:  { border: "#f97316", text: "#fb923c", bg: "rgba(249,115,22,0.06)" },
  teal:    { border: "#14b8a6", text: "#2dd4bf", bg: "rgba(20,184,166,0.06)" },
  sky:     { border: "#0ea5e9", text: "#38bdf8", bg: "rgba(14,165,233,0.06)" },
  emerald: { border: "#10b981", text: "#34d399", bg: "rgba(16,185,129,0.06)" },
  violet:  { border: "#8b5cf6", text: "#a78bfa", bg: "rgba(139,92,246,0.06)" },
};
