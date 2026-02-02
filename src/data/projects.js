import { FaShieldHalved, FaChildReaching, FaHouseChimney } from 'react-icons/fa6'

export const projects = [
  {
    title: "Anomaly Detection (Isolation Forest + SHAP)",
    icon: FaShieldHalved,
    accent: "text-blue-400",
    desc: "Deteksi anomali pada event log menggunakan Isolation Forest, dilengkapi interpretasi fitur dengan SHAP.",
    overlayTitle: "Event Log Anomaly Detection",
    overlayDesc: "Feature engineering → model anomali → interpretasi hasil untuk investigasi lebih cepat.",
    tags: ["Python", "Scikit-learn", "SHAP"],
    repoUrl: "https://github.com/subhanirsyad/anomaly-detection",
  },
  {
    title: "Nutritional Status Classification (Balita)",
    icon: FaChildReaching,
    accent: "text-green-400",
    desc: "Klasifikasi status gizi balita (stunting) dengan Random Forest vs ANN + SMOTE, serta siap inference via Streamlit.",
    overlayTitle: "Streamlit Inference",
    overlayDesc: "Form input & prediksi batch (upload CSV) untuk penggunaan yang lebih praktis.",
    tags: ["Machine Learning", "Random Forest", "Streamlit"],
    repoUrl: "https://github.com/subhanirsyad/nutritional-status-classification",
    demoUrl: "https://nutritional-status.streamlit.app/",
  },
  {
    title: "House Price Regression (R)",
    icon: FaHouseChimney,
    accent: "text-purple-400",
    desc: "Prediksi harga rumah dengan regresi linear di R, termasuk stepwise selection dan uji asumsi klasik.",
    overlayTitle: "Regression & Assumption Tests",
    overlayDesc: "Validasi model (CV) + uji normalitas, homoskedastisitas, multikolinearitas, dan lain-lain.",
    tags: ["R", "Statistics", "Regression"],
    repoUrl: "https://github.com/subhanirsyad/house-price-regression",
    demoUrl: "https://house-price-regression1.streamlit.app/",
  },
]
