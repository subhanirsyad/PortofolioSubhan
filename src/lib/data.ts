export const personal = {
  name: "Subhan Irsyaduddien Alhaq",
  tagline: "Extracting insight, building intelligence",
  roles: ["Data Scientist", "AI Engineer"],
  bio: "Mathematics student at Universitas Indonesia — building end-to-end ML pipelines across NLP, computer vision, time series, and anomaly detection. Strong in analytical thinking and reproducible results.",
  email: "subhanirsyaduddien@gmail.com",
  github: "https://github.com/subhanirsyad",
  linkedin: "https://www.linkedin.com/in/subhan-irsyaduddien-alhaq",
  location: "South Jakarta, Indonesia",
};

export const stats = {
  gpa: "3.51",
  projects: "8+",
  accuracy: "99%",
};

export const skillGroups = [
  {
    label: "Languages & Platforms",
    skills: ["Python", "R", "SQL", "MySQL", "Git", "Google Colab", "Jupyter"],
  },
  {
    label: "ML & Deep Learning",
    skills: ["TensorFlow", "Keras", "Scikit-learn", "SHAP", "Pandas", "NumPy", "Matplotlib", "Seaborn"],
  },
  {
    label: "Tools & Deployment",
    skills: ["Streamlit", "FastAPI", "Selenium", "Tableau", "Google Data Studio", "VS Code"],
  },
  {
    label: "Specializations",
    skills: ["NLP", "Computer Vision", "Time Series", "Anomaly Detection", "Sentiment Analysis", "Classification", "Statistical Modeling", "LangChain", "MLOps"],
  },
];

export type ExperienceType = "work" | "org";

export interface Experience {
  role: string;
  organization: string;
  period: string;
  type: ExperienceType;
  bullets?: string[];
}

export const experiences: Experience[] = [
  {
    role: "Mathematics Tutor",
    organization: "Tutorin Math",
    period: "May 2025 – Present",
    type: "work",
    bullets: [
      "Designed 20+ learning modules for Calculus, TKA, and CPNS TIU programs",
      "Adapted teaching strategies to diagnose common errors and improve accuracy",
    ],
  },
  {
    role: "Teaching Assistant — Calculus",
    organization: "Universitas Indonesia",
    period: "Sep – Dec 2025",
    type: "work",
    bullets: [
      "Supported course delivery for 40+ students in research-based learning",
      "Graded assignments and coordinated with TA team on rubric alignment",
    ],
  },
  {
    role: "Head of Academic Division",
    organization: "HMD Matematika FMIPA UI",
    period: "Apr 2025 – Present",
    type: "org",
  },
  {
    role: "Steering Committee",
    organization: "LOGIKA UI 2024",
    period: "May – Dec 2025",
    type: "org",
  },
  {
    role: "Competition Coordinator",
    organization: "UI Science Olympiad",
    period: "Jun – Nov 2024",
    type: "org",
  },
  {
    role: "Treasurer Controller",
    organization: "Ksatria MIPA 2024",
    period: "Jul – Nov 2024",
    type: "org",
  },
  {
    role: "Staff — Academic Division",
    organization: "HMD Matematika FMIPA UI",
    period: "Mar 2024 – Feb 2025",
    type: "org",
  },
  {
    role: "External Relations Staff",
    organization: "MATRIX XIX",
    period: "Jun – Oct 2024",
    type: "org",
  },
];

export interface Project {
  id: string;
  name: string;
  description: string;
  longDescription: string;
  tech: string[];
  github?: string;
  demo?: string;
  documentPdfUrl?: string;
  gradient: string;
}

export const projects: Project[] = [
  {
    id: "gopay-sentiment",
    name: "GoPay Sentiment Analysis",
    description:
      "Sentiment analysis dashboard for GoPay Google Play reviews using IndoBERT fine-tuning and BERTopic topic modeling.",
    longDescription:
      "Built a full NLP pipeline to analyze user sentiment on GoPay's Google Play Store reviews. Fine-tuned IndoBERT for sentiment classification and applied BERTopic for unsupervised topic discovery. The results are visualized through an interactive Streamlit dashboard showing sentiment trends and emerging complaint topics.",
    tech: ["Python", "IndoBERT", "BERTopic", "Streamlit", "NLP", "Transformers"],
    github: "https://github.com/subhanirsyad/gopay-sentiment-analysis",
    gradient: "from-purple-900/60 to-indigo-900/60",
  },
  {
    id: "cloud",
    name: "Cloud Data Security",
    description:
      "UEBA anomaly detection system using Isolation Forest + SHAP to identify suspicious cloud access patterns.",
    longDescription:
      "Analyzed cloud storage security risk by modeling user behavior from activity logs. Engineered daily per-user behavioral features from raw event logs, then built an unsupervised anomaly detection pipeline using Isolation Forest. Used Tree SHAP for model interpretability to identify the most influential behavior signals.",
    tech: ["Python", "Isolation Forest", "SHAP", "Unsupervised ML", "Cybersecurity"],
    github: "https://github.com/subhanirsyad/anomaly-detection",
    documentPdfUrl: "https://github.com/subhanirsyad/anomaly-detection/raw/main/cloud%20data%20security%20risk.pdf",
    gradient: "from-cyan-900/60 to-blue-900/60",
  },
  {
    id: "animal",
    name: "Animal Image Classifier",
    description:
      "10-class CNN image classifier exported to TFLite for edge deployment, deployed via Streamlit Cloud.",
    longDescription:
      "Trained a convolutional neural network to classify 10 animal categories with high accuracy. The model was exported to TensorFlow Lite (TFLite) format for lightweight edge deployment. Includes a full training notebook and a Streamlit web app for live inference.",
    tech: ["TensorFlow", "CNN", "TFLite", "Streamlit", "Computer Vision"],
    github: "https://github.com/subhanirsyad/animal-image-clasifier",
    gradient: "from-teal-900/60 to-emerald-900/60",
  },
  {
    id: "nutrition",
    name: "Nutritional Status Classification",
    description:
      "ANN vs. Random Forest comparison for toddler stunting risk classification — 99% accuracy with SMOTE.",
    longDescription:
      "Multi-class classification project to predict toddler nutritional status (stunting risk) using anthropometric features. Compared Random Forest and ANN (MLPClassifier) with SMOTE for class imbalance and GridSearchCV for hyperparameter tuning. Evaluated with Accuracy, ROC-AUC, and Confusion Matrix — achieving ~99% accuracy after tuning.",
    tech: ["Python", "Scikit-learn", "ANN", "Random Forest", "SMOTE", "GridSearchCV"],
    github: "https://github.com/subhanirsyad/nutritional-status-classification",
    gradient: "from-emerald-900/60 to-green-900/60",
  },
  {
    id: "sentiment",
    name: "Indonesian Sentiment Analysis",
    description:
      "Streamlit NLP app classifying Indonesian text sentiment using TF-IDF vectorization and SVM.",
    longDescription:
      "Built a sentiment analysis pipeline for Indonesian-language text using TF-IDF vectorization and a Support Vector Machine classifier. Deployed as an interactive Streamlit app where users can input text and receive real-time sentiment predictions.",
    tech: ["Python", "TF-IDF", "SVM", "Streamlit", "NLP"],
    github: "https://github.com/subhanirsyad/sentiment-analysis",
    gradient: "from-rose-900/60 to-pink-900/60",
  },
  {
    id: "bitcoin",
    name: "Bitcoin Forecast",
    description:
      "LSTM + Attention architecture for BTC time-series price forecasting with multi-step horizons.",
    longDescription:
      "Developed a time-series forecasting model for Bitcoin price prediction using LSTM networks with an attention mechanism. Implemented multi-step horizon forecasting and evaluated with standard regression metrics.",
    tech: ["Python", "TensorFlow", "LSTM", "Attention", "Time Series"],
    github: "https://github.com/subhanirsyad/bitcoin-forecast",
    gradient: "from-orange-900/60 to-amber-900/60",
  },
  {
    id: "house",
    name: "House Price Regression",
    description:
      "Multiple linear regression model with stepwise selection and full statistical assumption testing.",
    longDescription:
      "Built and validated a multiple linear regression model to predict house prices using 1,000 observations and 7 predictors in R. Applied stepwise regression and nested-model ANOVA for feature selection. Verified all classical regression assumptions: linearity, independence (Durbin–Watson), homoskedasticity (Breusch–Pagan), normality (Shapiro–Wilk), and multicollinearity (VIF).",
    tech: ["R", "Linear Regression", "ANOVA", "Statistical Modeling"],
    github: "https://github.com/subhanirsyad/house-price-regression",
    gradient: "from-violet-900/60 to-purple-900/60",
  },
  {
    id: "safebites",
    name: "SafeBites",
    description:
      "Allergy-safe food finder using SQL database with allergen keyword filtering from Nutritionix Grocery Brands.",
    longDescription:
      "Built a SQL-powered food safety tool that lets users find grocery products safe for specific dietary restrictions. Uses allergen keyword filtering against a curated database sourced from Nutritionix Grocery Brands.",
    tech: ["MySQL", "SQL", "HTML"],
    github: "https://github.com/subhanirsyad/safebites-sql1",
    demo: "https://safebites-sql1.vercel.app",
    gradient: "from-sky-900/60 to-blue-900/60",
  },
];
