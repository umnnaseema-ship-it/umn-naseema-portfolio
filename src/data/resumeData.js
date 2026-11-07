export const resumeData = {
  personal: {
    name: "Umn Naseema M",
    title: "Data Science Student | Data Analyst | AI/ML Enthusiast",
    headline: "Turning Data Into Insights. Building Technology For Impact.",
    bio: "I am a final-year Data Science student passionate about data analytics, artificial intelligence, and building technology-driven solutions to real-world problems.",
    email: "umnnaseema@gmail.com",
    phone: "9578164639",
    phoneFormatted: "+91 95781 64639",
    location: "Dharapuram, Tamil Nadu, India",
    linkedin: "https://www.linkedin.com/in/umn-naseema-209704308/",
    github: "https://github.com/umnnaseema-ship-it",
    resumePdf: "/Umn_Naseema_M_Resume.pdf",
    resumeDocx: "/Umn_Naseema_M_Resume.docx",
  },
  education: {
    degree: "Bachelor of Science in Data Science",
    institution: "Vivekanandha College of Arts and Sciences for Women (Autonomous)",
    affiliation: "Affiliated with Periyar University",
    expectedGraduation: "2027",
    highlights: [
      "Rigorous curriculum focused on statistical modeling, modern data analysis, machine learning algorithms, and database systems.",
      "Active team leader in competitive hackathons and innovative technology problem statements.",
      "Dedicated to advancing women in technology, data intelligence, and AI research."
    ]
  },
  about: {
    story: [
      "I am currently in my final year pursuing a B.Sc. in Data Science at Vivekanandha College of Arts and Sciences for Women (Autonomous), affiliated with Periyar University, graduating in 2027.",
      "My passion lies at the intersection of data analytics, machine learning, and human-centric artificial intelligence. With hands-on internship experience across corporate environments like Cybernaut and Codec Technologies, I transform raw data into interactive dashboards, statistical insights, and strategic business decisions.",
      "As a hackathon leader and SIH finalist, I thrive in fast-paced collaborative environments, architecting end-to-end intelligent systems that solve authentic grassroots challenges."
    ],
    pillars: [
      {
        title: "Analytical Rigor",
        description: "Transforming ambiguous, complex datasets into crisp interactive dashboards and actionable business metrics."
      },
      {
        title: "Practical AI & ML",
        description: "Designing end-to-end machine learning pipelines from preprocessing to model evaluation and on-device deployment."
      },
      {
        title: "Collaborative Leadership",
        description: "Guiding multidisciplinary teams through rigorous 24-hour hackathons and building production-ready prototypes."
      }
    ]
  },
  skillCategories: [
    {
      category: "Data Analytics & Core Libraries",
      icon: "LineChart",
      description: "Extracting meaning and driving data-informed decisions",
      skills: [
        "Microsoft Excel",
        "Data Cleaning",
        "Data Preprocessing",
        "Exploratory Data Analysis (EDA)",
        "Pandas",
        "NumPy"
      ]
    },
    {
      category: "Data Visualization & BI",
      icon: "BarChart3",
      description: "Translating metrics into compelling visual stories",
      skills: [
        "Power BI",
        "Tableau",
        "Dashboard Development",
        "Interactive KPI Visuals"
      ]
    },
    {
      category: "AI/ML & NLP Concepts",
      icon: "Cpu",
      description: "Intelligent architectures and language models",
      skills: [
        "Machine Learning",
        "Speech Recognition",
        "Neural Machine Translation",
        "Text-to-Speech (TTS)",
        "Model Evaluation (ROC-AUC)"
      ]
    },
    {
      category: "Programming & Foundations",
      icon: "Code2",
      description: "Algorithm design and software implementation",
      skills: [
        "Python",
        "C++",
        "Java"
      ]
    },
    {
      category: "Databases & Cloud Platforms",
      icon: "Database",
      description: "Structured storage and cloud analytics",
      skills: [
        "SQL",
        "MongoDB",
        "Google Cloud Platform (GCP)",
        "BigQuery"
      ]
    },
    {
      category: "Developer Tools & Environments",
      icon: "Wrench",
      description: "Daily development workflow and version control",
      skills: [
        "Jupyter Notebook",
        "Google Colab",
        "Visual Studio Code",
        "Git",
        "GitHub"
      ]
    }
  ],
  experiences: [
    {
      company: "Codec Technologies",
      role: "Data Analytics Intern",
      period: "July 2026",
      duration: "1 Month",
      badge: "Recent Internship",
      description: "Delivered data-driven research and analytics through comprehensive data cleaning, trend identification, and visual storytelling.",
      responsibilities: [
        "Performed end-to-end data cleaning, preprocessing, and statistical analysis on high-variance business datasets.",
        "Identified underlying trends, seasonal patterns, and key performance insights to facilitate decision-making.",
        "Created rich, intuitive data visualizations to effectively communicate analytical findings to stakeholders.",
        "Built and successfully completed 2 comprehensive data analytics projects during the 1-month internship."
      ],
      deliverables: ["2 Complete Data Analytics Projects", "Trend Analysis Reports", "Executive Presentation Visuals"],
      tools: ["Python", "Pandas", "NumPy", "Data Cleaning", "Data Visualization"]
    },
    {
      company: "Cybernaut",
      role: "Data Analytics Intern",
      period: "June 2025",
      duration: "1 Month",
      badge: "Industry Internship",
      description: "Engineered actionable management dashboards analyzing human resource metrics and sales performance.",
      responsibilities: [
        "Analyzed and cleaned complex datasets using Microsoft Excel and Power BI, ensuring high data integrity.",
        "Developed a comprehensive HR Analytics Dashboard in Power BI analyzing workforce metrics, attrition, and employee distribution.",
        "Created a dynamic Sales Dashboard using advanced Excel formulas, pivot tables, and interactive slicers.",
        "Applied practical data analysis techniques to solve real business operational challenges.",
        "Delivered 2 fully functional executive dashboards within the one-month internship duration."
      ],
      deliverables: ["HR Analytics Power BI Dashboard", "Sales Performance Excel Dashboard"],
      tools: ["Power BI", "Microsoft Excel", "Data Cleaning", "Dashboard Development"]
    }
  ],
  projects: [
    {
      id: "palash",
      title: "PALASH",
      tagline: "AI-Powered Mother Tongue-Based Multilingual Learning Platform",
      badge: "Smart India Hackathon 2026 | Team Leader",
      featured: true,
      category: "AI / EdTech / Edge Computing",
      summary: "An AI-assisted multilingual learning platform designed to support primary education for tribal students in Jharkhand, operating fully offline on low-resource Android tablets.",
      description: "PALASH is designed to bridge critical linguistic divides for tribal children in Jharkhand by enabling mother tongue-based primary education. Leading our hackathon team, we architected an edge-native AI translation pipeline that converts Hindi to tribal languages (Ho, Mundari, Santhali) and back through natural voice interactions without reliance on internet connectivity.",
      problem: "Tribal primary students often struggle in mainstream schools due to language barriers between state Hindi curriculum and native tongues (Ho, Mundari, Santhali), exacerbated by intermittent internet in rural regions.",
      solution: "An offline-first Android tablet platform equipped with optimized on-device speech models and neural machine translation, delivering sub-3-second voice translation latency without external API dependency.",
      features: [
        "Hindi-to-Ho, Mundari and Santhali translation",
        "Tribal-to-Hindi reciprocal translation",
        "Natural voice-based interactive learning",
        "Offline-first Android tablet solution",
        "On-device AI processing without external API dependency",
        "Target voice translation latency of 3 seconds or less"
      ],
      technologies: [
        "AI4Bharat Conformer",
        "IndicTrans2 Distilled",
        "VITS",
        "Android",
        "Speech Recognition",
        "Neural Machine Translation",
        "Text-to-Speech (TTS)"
      ],
      metrics: {
        latency: "< 3.0s",
        offline: "100% On-Device",
        languages: "Ho, Mundari, Santhali, Hindi"
      }
    },
    {
      id: "fraud-detection",
      title: "Fraud Detection in Financial Transactions",
      tagline: "High-Precision Anomaly & Anomaly-Pattern Machine Learning Pipeline",
      badge: "Machine Learning / FinTech",
      featured: false,
      category: "Machine Learning / Analytics",
      summary: "An advanced machine learning pipeline developed to identify fraudulent transactions and anomalous behavior in skewed financial datasets.",
      description: "Financial transactions present severe class imbalance where fraudulent behavior is rare but detrimental. This project implements a multi-model comparative machine learning framework applying ensemble techniques and anomaly detection to accurately flag illicit financial movements with minimal false alarms.",
      problem: "Massive transaction velocity and heavy class imbalances make detecting fraudulent financial anomalies without obstructing genuine customer transactions extremely difficult.",
      solution: "A robust pipeline leveraging rigorous exploratory data analysis, class-weight rebalancing, and ensemble model evaluation achieving an impressive 0.97 ROC-AUC score.",
      features: [
        "Comprehensive data cleaning, outlier handling, and preprocessing",
        "In-depth Exploratory Data Analysis (EDA) on transaction distributions",
        "Fraud pattern identification across temporal and monetary features",
        "Isolation Forest, Random Forest, and XGBoost comparative modeling",
        "Exceptional ROC-AUC score of 0.97 on the evaluated test dataset"
      ],
      technologies: [
        "Python",
        "Isolation Forest",
        "Random Forest",
        "XGBoost",
        "Scikit-Learn",
        "Pandas",
        "NumPy",
        "ROC-AUC Evaluation"
      ],
      metrics: {
        rocAuc: "0.97",
        models: "Isolation Forest, RF, XGBoost",
        domain: "Financial Transactions"
      }
    },
    {
      id: "churn-prediction",
      title: "Customer Churn Prediction",
      tagline: "Predictive Analytics on the Telco Customer Dataset",
      badge: "Predictive Analytics / Machine Learning",
      featured: false,
      category: "Machine Learning / Customer Intelligence",
      summary: "A machine learning system built to forecast customer attrition using behavioral and demographic patterns from the Telco dataset.",
      description: "Customer churn significantly impacts recurring revenue. This project analyzes customer tenure, contract types, service packages, and payment methods to predict likelihood of cancellation, giving retention teams proactive intervention opportunities.",
      problem: "Telecommunications providers experience revenue attrition because churn triggers are identified only after the customer has cancelled service.",
      solution: "Built predictive classification models on the Telco Churn dataset with end-to-end data preprocessing, feature importance scoring, and actionable churn indicators.",
      features: [
        "Extensive data preprocessing, missing value imputation, and encoding",
        "Exploratory Data Analysis revealing tenure and contract churn correlations",
        "Customer behavior analysis across service tiers and billing methods",
        "Machine learning model development, hyperparameter tuning, and evaluation"
      ],
      technologies: [
        "Python",
        "Pandas",
        "Scikit-Learn",
        "Exploratory Data Analysis",
        "Data Preprocessing",
        "Model Evaluation"
      ],
      metrics: {
        dataset: "Telco Customer Churn",
        objective: "Retention Risk Modeling",
        analysis: "Behavioral Feature Importance"
      }
    }
  ],
  achievements: [
    {
      title: "Winner – SIH Internal Hackathon 2026",
      organization: "Smart India Hackathon Campus Selection",
      type: "First Place",
      highlight: true,
      description: "Secured 1st place in the internal campus evaluation for Smart India Hackathon 2026 as Team Leader presenting project PALASH."
    },
    {
      title: "Winner – Agenticathon 2K26",
      organization: "Mahendra Engineering College",
      type: "Champion",
      highlight: true,
      description: "Won first prize in the inter-college agentic AI hackathon solving state-of-the-art autonomous challenge statements."
    },
    {
      title: "Participant – CIH-26 Grand Finale",
      organization: "Rathinam Global University",
      type: "Grand Finale",
      highlight: false,
      description: "Selected and competed in the prestigious grand finale round of CIH-26 alongside elite collegiate innovators."
    },
    {
      title: "Participant – 24-hour ONEST Hackathon",
      organization: "ONEST Network",
      type: "24h Hackathon",
      highlight: false,
      description: "Ideated and engineered high-impact startup-oriented problem solutions within a fast-paced 24-hour collaborative sprint."
    },
    {
      title: "Participant – 24-hour Hackathon",
      organization: "KPR Institute of Technology",
      type: "24h Hackathon",
      highlight: false,
      description: "Collaborated on intense 24-hour continuous prototype development addressing industry-scale challenges."
    },
    {
      title: "Participant – 24-hour Hackathon",
      organization: "Jai Shriram Engineering College",
      type: "24h Hackathon",
      highlight: false,
      description: "Awarded participation certificate for 24-hour continuous technical problem-solving and software development."
    },
    {
      title: "Participant – SDG Solve-a-thon (2025)",
      organization: "SRMIST ACM SIGAI Student Chapter",
      type: "AI for Good",
      highlight: false,
      description: "Engineered AI-driven sustainable development solutions addressing UN Sustainable Development Goals."
    },
    {
      title: "Participant – Aarvam26",
      organization: "Cybernaut EdTech with PCB Cupid",
      type: "Tech Conclave",
      highlight: false,
      description: "Participated in national technical ideation and analytics conclave celebrating technology innovation."
    }
  ],
  certifications: [
    {
      title: "Deloitte Australia Data Analytics Job Simulation",
      issuer: "Forage",
      date: "August 2026",
      badge: "Industry Simulation",
      description: "Completed practical simulation involving business data analysis, client presentations, forensic data hygiene, and strategic analytical synthesis.",
      skills: ["Data Analysis", "Business Communication", "Forensic Analytics", "Strategic Presentation"]
    },
    {
      title: "Tech Trio Training – C++, Python & Java",
      issuer: "Technical Training Program",
      date: "Completed",
      badge: "Core Programming",
      description: "Completed comprehensive training building robust programming fundamentals, data structures, algorithmic thinking, and cross-language problem-solving skills.",
      skills: ["Python", "C++", "Java", "Problem Solving", "Object-Oriented Programming"]
    }
  ]
};
