export const personal = {
  name: "Subhan Irsyaduddien Alhaq",
  tagline: "Extracting insight, building intelligence",
  roles: ["Data Analyst", "Data Scientist"],
  bio: "Mathematics student at Universitas Indonesia — building end-to-end ML pipelines across NLP, computer vision, time series, and anomaly detection. Strong in analytical thinking and reproducible results.",
  email: "subhanirsyaduddien@gmail.com",
  github: "https://github.com/subhanirsyad",
  linkedin: "https://www.linkedin.com/in/subhan-irsyaduddien-alhaq",
  location: "South Jakarta, Indonesia",
  cv: "/CV_Subhan_Irsyaduddien_Alhaq.pdf",
};

export const stats = {
  gpa: "3.51",
  projects: "10",
};

export const skillGroups = [
  {
    label: "Languages & Platforms",
    skills: ["Python", "R", "SQL", "MySQL", "Git", "Google Colab", "Jupyter"],
  },
  {
    label: "ML & Deep Learning",
    skills: ["TensorFlow", "Keras", "PyTorch", "Hugging Face", "TRL", "BERTopic", "Scikit-learn", "SHAP", "Pandas", "NumPy", "Matplotlib", "Seaborn"],
  },
  {
    label: "Tools & Deployment",
    skills: ["Streamlit", "Power BI", "FastAPI", "Selenium", "Tableau", "Google Data Studio", "VS Code"],
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
    role: "Data Analyst Intern",
    organization: "PT Warna Emas Indonesia",
    period: "Aug 2026 – Present",
    type: "work",
    bullets: [
      "Track GMV and content compliance (live sessions, short videos, share links) across 7+ FMCG brands",
      "Built Python pipelines that clean, merge and split TikTok Shop and Shopee reports per brand",
      "Automated content tracking in Google Sheets with Apps Script to feed a live performance dashboard",
      "Benchmark competitors with Kalodata and Fastmoss, and built a creator-contact scraper for pitches",
    ],
  },
  {
    role: "Mathematics Tutor",
    organization: "Tutorin Math",
    period: "May 2025 – Present",
    type: "work",
    bullets: [
      "Tutored 50+ students for UTBK, SIMAK UI, TPA and CPNS TIU",
      "Wrote 40+ learning modules and question banks with worked solutions",
    ],
  },
  {
    role: "Teaching Assistant — Calculus I & II",
    organization: "Universitas Indonesia",
    period: "Sep 2025 – Jun 2026",
    type: "work",
    bullets: [
      "Graded assignments and wrote solution explanations for both courses",
      "Built grading rubrics and kept score recaps in Excel with the teaching team",
    ],
  },
  {
    role: "Head of Academic Division",
    organization: "HMD Matematika FMIPA UI",
    period: "Apr 2025 – Feb 2026",
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

export type Figure = {
  src: string;
  width: number;
  height: number;
  alt: string;
  caption: string;
};

export type Table = { caption: string; head: string[]; rows: string[][] };

export type Project = {
  id: string;
  title: string;
  year: string;
  kind: string;
  /** Who did what. Omitted for solo projects. */
  team?: string;
  featured?: boolean;
  summary: string;
  finding?: { value: string; label: string };
  figures: Figure[];
  problem: string;
  approach: string[];
  result: string[];
  table?: Table;
  limitations: string[];
  stack: string[];
  links: { label: string; href: string }[];
  /** Card thumbnail. poster: [front page, back figure]. fan: 3 images, middle one on top. */
  mockup: { style: "browser" | "display" | "poster" | "fan"; images: string[] };
};

const gh = (repo: string, path = "") =>
  `https://github.com/subhanirsyad/${repo}${path ? `/blob/main/${path}` : ""}`;

export const projects: Project[] = [
  {
    id: "qwen-dpo",
    title: "DPO vs GRPO for math reasoning on Qwen3-0.6B",
    year: "2026",
    kind: "LLM alignment",
    team: "Group project, 5 people. My part: DPO training.",
    featured: true,
    summary:
      "Preference-tuned a 0.6B model on MATH level 4-5 with QLoRA DPO on one free Kaggle T4, then compared it with the SFT baseline and GRPO on 500 test problems.",
    finding: {
      value: "9.4%",
      label: "exact match after DPO, up from 8.8% for SFT. That is 3 more correct answers, and the format got worse.",
    },
    figures: [
      {
        src: "/projects/qwen-dpo/training.png",
        width: 2084,
        height: 1475,
        alt: "Four panels from the DPO run: train loss drops to near zero by step 100, eval loss falls to about 0.0006, reward margin rises to about 8, chosen reward stays near 1 while rejected reward falls to about minus 7.",
        caption: "DPO training run over 900 steps on 2,394 preference pairs: train loss, eval loss, reward margin, chosen vs rejected reward.",
      },
      {
        src: "/projects/qwen-dpo/hf-model-card.png",
        width: 1440,
        height: 900,
        alt: "Hugging Face model page for qwen3-0.6b-math-l45-dpo-adapter-v1, a fine-tuned version of the group's QLoRA SFT checkpoint, trained with TRL.",
        caption: "The DPO adapter published on Hugging Face.",
      },
    ],
    problem:
      "Small models are cheap to run but weak at multi-step math. Our group asked whether preference optimisation (DPO) or reinforcement learning (GRPO) helps a 0.6B model that was already fine-tuned on hard MATH problems, on a free Kaggle GPU budget.",
    approach: [
      "Started from the group's SFT checkpoint (Qwen3-0.6B-Base, QLoRA SFT on 3,994 MATH level 4-5 problems) and kept its exact prompt template.",
      "Preference pairs: chosen is the dataset's gold solution, rejected is the SFT model's own wrong answer, checked with SymPy. 2,520 pairs, split 2,394 train and 126 eval.",
      "Trained a LoRA adapter with TRL's DPOTrainer: rank 16, alpha 32, beta 0.1, learning rate 1e-5, 3 epochs, 900 steps, 4-bit base model. Checkpoints were pushed to Hugging Face so a 12-hour Kaggle session could resume.",
      "Logged runtime and memory: 123 minutes and 7.75 GB peak VRAM on one T4.",
    ],
    result: [
      "Exact match moved from 8.8% (SFT) to 9.4% (DPO). GRPO, trained by a teammate, reached 9.8%.",
      "DPO hurt the output format: answers inside \\boxed{} fell from 73.4% to 62.2%, and answers cut off at the token limit rose from 27% to 38%.",
      "In the team's manual review of 50 chain-of-thought answers (scored 1 to 5), DPO averaged 2.44, below SFT at 2.70 and GRPO at 2.78.",
    ],
    table: {
      caption: "Automatic evaluation on 500 stratified MATH level 4-5 test problems, from the team's evaluation notebook.",
      head: ["Model", "Exact match", "Boxed answer", "Hit token limit", "Avg tokens"],
      rows: [
        ["SFT", "8.8% (44/456)", "73.4%", "27.0%", "277"],
        ["DPO", "9.4% (47/453)", "62.2%", "38.0%", "310"],
        ["GRPO", "9.8% (49/451)", "82.2%", "18.0%", "255"],
      ],
    },
    limitations: [
      "Reward accuracy reached 100% and eval loss fell to about 0.0006 within the first few hundred steps. Chosen answers were written by people and rejected answers by the model, so the pairs could be told apart by writing style alone. DPO most likely learned style, not correctness. Next time both sides of a pair should be the model's own rollouts, one right and one wrong.",
      "Gaps of 0.6 to 1.0 points on about 450 graded answers are within noise, and no significance test was run.",
    ],
    stack: ["Python", "PyTorch", "Transformers", "TRL", "PEFT / QLoRA", "bitsandbytes", "Kaggle T4"],
    links: [
      { label: "DPO adapter on Hugging Face", href: "https://huggingface.co/Subhaaannn/qwen3-0.6b-math-l45-dpo-adapter-v1" },
    ],
    mockup: { style: "browser", images: ["/projects/qwen-dpo/hf-model-card.png"] },
  },
  {
    id: "retail-sales",
    title: "Retail sales data warehouse and dashboard",
    year: "2026",
    kind: "BI and SQL",
    featured: true,
    summary:
      "Turned 5,000 raw transactions into a MySQL star schema, an Excel model built only from formulas, and a 4-page Power BI dashboard.",
    finding: {
      value: "37.5%",
      label: "of customers fall in the Lost or Needs Attention RFM segments, the group to win back first.",
    },
    figures: [
      {
        src: "/projects/retail-sales/sales-overview.png",
        width: 2075,
        height: 1200,
        alt: "Power BI sales overview page with KPI cards, a monthly revenue and growth combo chart, and revenue by category.",
        caption: "Sales overview: KPI cards, monthly revenue vs month-on-month growth, revenue by category.",
      },
      {
        src: "/projects/retail-sales/rfm-segments.png",
        width: 2075,
        height: 1200,
        alt: "Power BI customer analytics page showing six RFM segments with size, monetary value and average recency and frequency.",
        caption: "Customer analytics: six RFM segments with size, spend, recency and frequency.",
      },
      {
        src: "/projects/retail-sales/store-performance.png",
        width: 2075,
        height: 1200,
        alt: "Power BI store performance page with a region slicer, a profit margin vs revenue scatter by store and category, and a store table.",
        caption: "Store performance: profit margin vs revenue by store and category.",
      },
    ],
    problem:
      "A retailer's transactions sit in flat CSV files. Questions like which category actually earns the margin, whether one store carries the business, and which customers are slipping away need a proper data model first.",
    approach: [
      "Designed a star schema in MySQL 8: one fact table with revenue, cost and profit, plus customer, product and store dimensions. Nine SQL scripts go from schema to analytics.",
      "Wrote the analysis in SQL with window functions: RFM scoring with NTILE, cohort retention, rolling averages, Pareto 80/20, and purchase-gap churn flags.",
      "Rebuilt the RFM model in plain Excel formulas (SUMIFS, COUNTIFS, RANK, INDEX/MATCH) to cross-check the SQL.",
      "Modelled the warehouse in Power BI with DAX measures across 4 report pages.",
    ],
    result: [
      "Electronics and Fashion each bring about 44% of revenue, but Groceries has the best margin: 30.4% against 25.8% to 26.6%.",
      "Revenue is even across the 5 stores (Rp2.75M to Rp2.92M each), so no single location carries the business.",
      "Champions are 16.5% of customers and the natural loyalty-programme target. Lost plus Needs Attention are 37.5%.",
    ],
    limitations: [
      "The data is a public synthetic Kaggle set (5,000 transactions, 200 customers, 50 products, 5 stores, Sep 2023 to Sep 2025). The pipeline is real work; the business findings do not describe a real company.",
      "Customer join dates start in 2020 but transactions start in Sep 2023, so early cohorts show zero retention that is not real churn. Cohort results only hold from mid-2023.",
    ],
    stack: ["MySQL 8", "SQL window functions", "Excel", "Power BI", "DAX"],
    links: [
      { label: "Code and SQL", href: gh("Retail-Sales-Analytics") },
      { label: "Dashboard export (PDF)", href: gh("Retail-Sales-Analytics", "Power%20BI%20Projek.pdf") },
    ],
    mockup: {
      style: "fan",
      images: [
        "/projects/retail-sales/store-performance.png",
        "/projects/retail-sales/sales-overview.png",
        "/projects/retail-sales/rfm-segments.png",
      ],
    },
  },
  {
    id: "gopay-sentiment",
    title: "GoPay review sentiment dashboard",
    year: "2026",
    kind: "NLP and dashboard",
    featured: true,
    summary:
      "Scraped 4,945 GoPay Play Store reviews, labelled sentiment with a pretrained Indonesian RoBERTa model, grouped them into topics with BERTopic, and served it as a Streamlit dashboard.",
    finding: {
      value: "89%",
      label: "of reviews in the PIN, account and CS topic are negative, against 30% across all reviews.",
    },
    figures: [
      {
        src: "/projects/gopay-sentiment/dashboard.png",
        width: 1440,
        height: 900,
        alt: "GoPay sentiment dashboard with filters in a blue sidebar, summary cards for 4,945 reviews, average rating 4.20, 2,950 positive, 1,470 negative, 525 neutral, 15 topics, and a sentiment donut chart.",
        caption: "The Streamlit dashboard, run locally from the repo's SQLite database.",
      },
    ],
    problem:
      "Star ratings say how users feel, not why. The goal was to find which parts of GoPay drive the negative reviews.",
    approach: [
      "Scraped reviews with google-play-scraper (1 to 10 April 2026) and cleaned the text.",
      "Labelled sentiment with a pretrained Indonesian RoBERTa classifier from Hugging Face, without fine-tuning.",
      "Found 15 recurring topics with BERTopic and tagged six product aspects with keyword rules.",
      "Stored everything in SQLite and built a Streamlit dashboard filtered by date, rating, sentiment and topic.",
    ],
    result: [
      "59.7% of reviews are positive, 29.7% negative and 10.6% neutral. Average rating 4.20.",
      "Complaints cluster in two topics: PIN, account and CS (152 reviews, 89% negative) and balance and loans (334 reviews, 80% negative).",
    ],
    table: {
      caption: "Largest BERTopic topics by size, labelled with their top keywords, and the share of negative reviews in each. Counted from data/gopay_reviews.db.",
      head: ["Topic keywords", "Reviews", "Negative"],
      rows: [
        ["pin, akun, jelas, cs, login", "152", "88.8%"],
        ["saldo, pinjaman, uang, masuk, pinjam", "334", "79.6%"],
        ["(no clear topic)", "1,245", "37.8%"],
        ["good, puas, terbaik, best, bermanfaat", "1,303", "18.6%"],
        ["aplikasinya, promo, membantu, suka, mudah", "377", "8.5%"],
      ],
    },
    limitations: [
      "Sentiment labels come from a pretrained model and were not checked against a hand-labelled sample, so the per-topic shares carry its errors.",
      "Ten days of reviews is a snapshot. One outage or promo can move the topic shares.",
      "Aspect tags are keyword rules, so a word like 'lambat' (slow) is counted under both app issues and transaction speed.",
    ],
    stack: ["Python", "google-play-scraper", "Transformers", "BERTopic", "SQLite", "Streamlit", "Plotly"],
    links: [{ label: "Code", href: gh("gopay-sentiment-analisis") }],
    mockup: { style: "browser", images: ["/projects/gopay-sentiment/dashboard.png"] },
  },
  {
    id: "cloud-security",
    title: "Cloud data security risk from user behaviour",
    year: "2025",
    kind: "Anomaly detection",
    team: "Course project, group of 6. My role: data science.",
    summary:
      "Turned cloud activity logs into daily per-user behaviour features, flagged unusual days with Isolation Forest, and explained the flags with Tree SHAP.",
    finding: {
      value: "31 of 49",
      label: "labelled anomalous user-days caught, at the cost of 96 false alarms.",
    },
    figures: [
      {
        src: "/projects/cloud-security/daily-features.png",
        width: 798,
        height: 645,
        alt: "Two tables: raw events with time, uid, type and label, and below them the same data pivoted into one row per user per day with counts per event type.",
        caption: "Raw log events pivoted into one row per user per day.",
      },
      {
        src: "/projects/cloud-security/confusion-matrix.png",
        width: 493,
        height: 465,
        alt: "Confusion matrix: 147 normal days predicted normal, 96 normal days predicted anomaly, 18 anomalies missed, 31 anomalies caught.",
        caption: "Confusion matrix on 292 labelled user-days.",
      },
    ],
    problem:
      "Nobody reads every log line. The question was whether unusual user behaviour can be flagged without labels, and which behaviours drive the flag.",
    approach: [
      "Used the CLUE-LDS cloud user-behaviour log dataset (JSON lines, one event per line).",
      "Aggregated events into counts and ratios per user per day: files accessed, updated and written, public shares accessed, logins.",
      "Scored every user-day with Isolation Forest and set the anomaly threshold at a high percentile of the score.",
      "Explained the model with Tree SHAP, ranking features by mean absolute SHAP value.",
    ],
    result: [
      "The strongest drivers were the share of public-share accesses, file updates, and user-data views.",
      "On 292 labelled user-days (243 normal, 49 anomalous): accuracy 61%, anomaly precision 24%, recall 63%, F1 0.35.",
    ],
    limitations: [
      "Too many false alarms for real use: 96 of 243 normal days were flagged. A tuned threshold, or a mixture model fitted to the score distribution, is the next step named in the report.",
      "Only 49 labelled anomalies, so the metrics move a lot with a few cases.",
    ],
    stack: ["Python", "pandas", "scikit-learn", "SHAP"],
    links: [
      { label: "Code", href: gh("anomaly-detection") },
      { label: "Report (PDF, Indonesian)", href: gh("anomaly-detection", "report/paper.pdf") },
    ],
    mockup: {
      style: "poster",
      images: ["/projects/cloud-security/report-p1.png", "/projects/cloud-security/confusion-matrix.png"],
    },
  },
  {
    id: "animal-classifier",
    title: "Animal image classifier on TensorFlow Lite",
    year: "2026",
    kind: "Computer vision",
    summary:
      "A 10-class image classifier trained on Animals-10, exported to TensorFlow Lite and served in a Streamlit app.",
    finding: { value: "96.4%", label: "test accuracy on 5,236 held-out images." },
    figures: [
      {
        src: "/projects/animal-classifier/app-prediction.png",
        width: 1440,
        height: 900,
        alt: "Animal classifier app: an uploaded photo of a squirrel on a branch, predicted Squirrel at 97.4% confidence, with a top-5 list where Cat is next at 1.2%.",
        caption: "The Streamlit app predicting a held-out test photo, with the top 5 classes.",
      },
      {
        src: "/projects/animal-classifier/app-home.png",
        width: 1440,
        height: 900,
        alt: "App landing view titled 'What animal is this?' with the 10 supported animals and three steps: add a photo, the model looks at it, read the result.",
        caption: "The app explains the 10 classes and the three steps before you upload.",
      },
      {
        src: "/projects/animal-classifier/training-curves.png",
        width: 1189,
        height: 490,
        alt: "Accuracy and loss curves over about 19 epochs. Validation accuracy stays between 93% and 97% and above training accuracy, which climbs from 79% to 94%.",
        caption: "Training and validation accuracy and loss per epoch.",
      },
    ],
    problem: "Ship an image model small enough to run on a free CPU host.",
    approach: [
      "Trained a CNN in TensorFlow/Keras on Animals-10 (butterfly, cat, chicken, cow, dog, elephant, horse, sheep, spider, squirrel) at 224×224, keeping the checkpoint with the best validation accuracy.",
      "Exported to SavedModel, TF.js and TFLite. The Streamlit app runs the TFLite model.",
    ],
    result: ["Accuracy: 97.7% train, 96.7% validation, 96.4% test."],
    limitations: [
      "Validation accuracy sits above training accuracy for most epochs. That usually comes from augmentation or dropout applied only in training, and is worth confirming before trusting the gap.",
      "The live app sleeps when idle, so the first visit has to wake it.",
    ],
    stack: ["TensorFlow", "Keras", "TFLite", "Streamlit"],
    links: [
      { label: "Code", href: gh("animal-image-clasifier") },
      { label: "Live app", href: "https://animal-image-clasifier1.streamlit.app/" },
    ],
    mockup: { style: "browser", images: ["/projects/animal-classifier/app-prediction.png"] },
  },
  {
    id: "bitcoin-forecast",
    title: "Bitcoin price forecast with a seq2seq LSTM",
    year: "2026",
    kind: "Time series",
    summary:
      "Compared a baseline LSTM with a seq2seq LSTM with attention that forecasts 24 steps from the last 168, and wrapped both in a Streamlit app.",
    finding: { value: "0.082 vs 0.112", label: "scaled test MAE, seq2seq vs baseline LSTM. The forecast itself is still a flat line." },
    figures: [
      {
        src: "/projects/bitcoin-forecast/forecast.png",
        width: 989,
        height: 290,
        alt: "Line chart over 24 steps: the actual close price moves between about 7,700 and 8,300 while the prediction is almost flat around 5,800 to 6,000.",
        caption: "Seq2seq forecast vs actual close over one 24-step window. The forecast is flat and sits about 2,000 below the actual price.",
      },
    ],
    problem: "Forecast a volatile price series several steps ahead and judge it against a baseline.",
    approach: [
      "Built rolling features over 24 and 168 steps and scaled the series.",
      "Trained a baseline LSTM and a seq2seq LSTM with attention that predicts 24 steps autoregressively, with learning-rate decay on plateau.",
      "The Streamlit app lets you pick a model, upload a CSV and download the forecast.",
    ],
    result: ["Seq2seq beat the baseline on scaled test MAE: 0.082 against 0.112."],
    limitations: [
      "The plotted forecast is close to a flat line about 2,000 below the actual price. Beating a weak baseline on MAE does not make it a usable forecast.",
      "No naive last-value baseline was compared. That should be the first benchmark for any price forecast.",
    ],
    stack: ["TensorFlow", "Keras", "pandas", "Streamlit"],
    links: [{ label: "Code", href: gh("bitcoin-forecast") }],
    mockup: { style: "display", images: ["/projects/bitcoin-forecast/forecast.png"] },
  },
  {
    id: "nutrition-stunting",
    title: "Toddler stunting classification",
    year: "2026",
    kind: "Classification",
    team: "Course project, group of 4.",
    summary:
      "Random Forest vs a neural network on age, sex and height to classify stunting, with SMOTE and GridSearchCV, served in Streamlit.",
    finding: {
      value: "99.98%",
      label: "accuracy, and the scatter shows why: the label is a fixed function of height for age.",
    },
    figures: [
      {
        src: "/projects/nutrition-stunting/height-vs-age.png",
        width: 984,
        height: 584,
        alt: "Scatter of height against age from 0 to 60 months. The four status classes form clean, non-overlapping bands: tall on top, normal, stunted, severely stunted at the bottom.",
        caption: "Height vs age coloured by status. The classes are clean bands because status is defined from height-for-age.",
      },
    ],
    problem: "Screen toddlers for stunting from basic measurements.",
    approach: [
      "About 121,000 records with age in months, sex and height. Merged 4 classes into stunted vs not stunted.",
      "Compared Random Forest and an MLP, with SMOTE for class imbalance and GridSearchCV for tuning.",
      "Served the Random Forest in a Streamlit app with single and batch CSV prediction.",
    ],
    result: ["Random Forest 99.98% accuracy, MLP 99.48%, ROC AUC about 1.00 on a 20% test split."],
    limitations: [
      "The near-perfect score is not a modelling achievement. Stunting status is defined by thresholds on height-for-age, and the features are exactly age, sex and height, so the model re-learns a formula.",
      "A useful version would predict stunting risk before it shows in height, from features such as birth weight, feeding or household data.",
    ],
    stack: ["scikit-learn", "imbalanced-learn", "Streamlit"],
    links: [
      { label: "Code", href: gh("nutritional-status-classification") },
      { label: "Report (PDF, Indonesian)", href: gh("nutritional-status-classification", "report/paper_nutritional_status_classification.pdf") },
    ],
    mockup: {
      style: "poster",
      images: ["/projects/nutrition-stunting/paper-p1.png", "/projects/nutrition-stunting/height-vs-age.png"],
    },
  },
  {
    id: "indo-sentiment",
    title: "Indonesian review sentiment with TF-IDF and SVM",
    year: "2026",
    kind: "NLP",
    summary:
      "A positive/negative classifier for Indonesian Play Store reviews, labelled from star ratings and served in Streamlit.",
    finding: { value: "88.1%", label: "test accuracy for TF-IDF with a linear SVM on 1,889 reviews." },
    figures: [
      {
        src: "/projects/indo-sentiment/inference.png",
        width: 2027,
        height: 490,
        alt: "Notebook cell loading svm_tfidf.joblib and predicting two reviews: 'aplikasinya sering error dan lemot' as negative and 'fiturnya bagus banget, mantap' as positive.",
        caption: "The saved model classifying two new reviews.",
      },
    ],
    problem: "A fast, small sentiment model for Indonesian app reviews.",
    approach: [
      "Labelled reviews from stars: 1 to 2 negative, 4 to 5 positive, 3 dropped.",
      "Compared word TF-IDF with LinearSVC (88.1%), character TF-IDF with logistic regression (88.8%) and a small neural network (88.0%).",
      "Shipped the SVM: small, fast, and within a point of the best model. The app does single and batch CSV prediction.",
    ],
    result: ["88.1% test accuracy on 1,889 reviews."],
    limitations: [
      "Star ratings are noisy labels: a 5-star review that complains still counts as positive.",
      "Neutral reviews were removed, so the model can never answer neutral.",
    ],
    stack: ["scikit-learn", "Streamlit"],
    links: [
      { label: "Code", href: gh("sentiment-analysis") },
      { label: "Live app", href: "https://sentiment-analysis000.streamlit.app/" },
    ],
    mockup: { style: "display", images: ["/projects/indo-sentiment/inference.png"] },
  },
  {
    id: "house-price",
    title: "House price regression in R",
    year: "2024",
    kind: "Statistics",
    team: "Course project, group of 5. My role: data science.",
    summary:
      "Multiple linear regression on 1,000 houses with stepwise selection and the classical assumption tests, later wrapped in a Streamlit app.",
    finding: { value: "p = 0.454", label: "for neighbourhood quality, the one predictor that adds nothing." },
    figures: [
      {
        src: "/projects/house-price/lm-summary.png",
        width: 1173,
        height: 817,
        alt: "R lm summary output for House_Price on seven predictors. All coefficients are significant except Neighborhood_Quality with p-value 0.454. Adjusted R-squared 0.9985.",
        caption: "R lm() summary: 7 predictors, adjusted R² 0.9985.",
      },
    ],
    problem: "Explain house prices with a model whose assumptions are actually checked.",
    approach: [
      "Fitted multiple linear regression in R and selected variables with stepwise regression and nested-model ANOVA.",
      "Tested the assumptions: Durbin-Watson, Breusch-Pagan, Shapiro-Wilk and VIF.",
      "Later retrained a Random Forest in Python for the Streamlit app (R² 0.994 on a 20% test split).",
    ],
    result: ["Adjusted R² 0.9985. Every predictor is significant except neighbourhood quality (p = 0.454)."],
    limitations: ["The dataset is synthetic, which is why R² is close to 1. Real housing data will not fit this cleanly."],
    stack: ["R", "Python", "scikit-learn", "Streamlit"],
    links: [
      { label: "Code", href: gh("house-price-regression") },
      { label: "Report (PDF, Indonesian)", href: gh("house-price-regression", "report/report.pdf") },
      { label: "Live app", href: "https://house-price-regression1.streamlit.app/" },
    ],
    mockup: {
      style: "poster",
      images: ["/projects/house-price/report-p1.png", "/projects/house-price/lm-summary.png"],
    },
  },
  {
    id: "safebites",
    title: "SafeBites allergen-safe food finder",
    year: "2024–2025",
    kind: "Database and web",
    team: "Course project, group of 5. My role: data science.",
    summary:
      "A MySQL database of grocery products with a search page that hides every product containing a given ingredient.",
    figures: [
      {
        src: "/projects/safebites/app.png",
        width: 1708,
        height: 768,
        alt: "SafeBites web page with an About Us section, a Show All Products button, an ingredient filter box and a product table header.",
        caption: "The SafeBites search page.",
      },
    ],
    problem: "People with allergies need to rule products out by ingredient, not search them in.",
    approach: [
      "Modelled products, ingredients and categories in MySQL from Nutritionix grocery brand data.",
      "Node.js and Express API, with an HTML, CSS and JavaScript front end that filters by ingredient and category.",
    ],
    result: ["Working filter over the product database when run locally from the SQL dump."],
    limitations: [
      "The front end is on Vercel but the database API is not deployed, so the public page loads without data. The repo includes the SQL dump to run it locally.",
    ],
    stack: ["MySQL", "Node.js", "Express", "HTML/CSS/JS"],
    links: [
      { label: "Code", href: gh("safebites-sql1") },
      { label: "Report (PDF, Indonesian)", href: gh("safebites-sql1", "report/safebites_report.pdf") },
    ],
    mockup: {
      style: "poster",
      images: ["/projects/safebites/report-p1.png", "/projects/safebites/app.png"],
    },
  },
];

export const featured = projects.filter((p) => p.featured);

export const awards = [
  { title: "Finalist, University Track DATATHON 2026", org: "RISTEK Fasilkom UI", period: "Aug 2026" },
  { title: "Top 15 Finalist, SmartPath Business Case Competition", org: "Team of three", period: "Dec 2023" },
];
