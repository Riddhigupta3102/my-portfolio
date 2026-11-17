/**
 * =====================================================================
 * DATA.JS - SINGLE SOURCE OF TRUTH FOR RIDDHI GUPTA'S PORTFOLIO
 * =====================================================================
 * Edit all text, stats, links, projects, and contact info directly here!
 */

export const personalInfo = {
  name: "Riddhi Gupta",
  role: "MERN Stack Full Stack Developer",
  headline: "MERN Stack Full Stack Developer",
  tagline: "I build responsive, scalable, user-focused web applications — from REST APIs to polished UIs.",
  status: "Open to work", // Open to work badge text
  statusRole: "Available for Software Developer / SDE Roles (Immediate)",
  location: "Delhi, India",
  email: "riddhigupta3102@gmail.com",
  phone: "+91 7302627643",
  resumePath: "/Riddhi_Gupta_2026.pdf", // Place your resume PDF in the public/ folder
  
  socials: {
    github: "https://github.com/Riddhigupta3102",
    linkedin: "https://www.linkedin.com/in/riddhi-gupta-540568330",
    email: "mailto:riddhigupta3102@gmail.com",
    whatsapp: "https://wa.me/917302627643?text=Hi%20Riddhi,%20I%20reviewed%20your%20portfolio%20and%20would%20love%20to%20connect!",
  },
  
  // Formspree Form ID for Contact Form (Optional - replace with your Formspree ID e.g. "xyzyzqla")
  // If left as "", it defaults to an interactive feedback form that also provides a direct mailto action.
  formspreeEndpoint: "", 
};

export const aboutData = {
  summary: `BCA graduate (IGNOU, Delhi, 2025) and MERN Stack developer with hands-on experience building responsive full-stack web applications and REST APIs. Completed a Java Full Stack certification (DUCAT, Pitampura) and a Web Builder internship covering requirement analysis, debugging, testing and cross-browser compatibility. Comfortable with MongoDB, SQL, Git/GitHub and AI-assisted development tools. Also founder of GanExa Digital Solution, where I build websites for real clients.`,
  
  stats: [
    {
      value: "2",
      suffix: " Live Projects",
      label: "Production Deployments",
      desc: "Full-stack MERN e-commerce & Agency web platform"
    },
    {
      value: "4+",
      suffix: " Months",
      label: "Industry Experience",
      desc: "Client delivery, requirement analysis & debugging"
    },
    {
      value: "MERN + Java",
      suffix: "",
      label: "Tech Core Stack",
      desc: "React, Node, Express, MongoDB, Java & SQL"
    }
  ],

  highlights: [
    {
      title: "Full-Cycle Engineering",
      description: "From architecting MongoDB schemas & Node/Express REST APIs to delivering animated, accessible React interfaces."
    },
    {
      title: "Real Client Delivery",
      description: "Founded GanExa Digital Solution, translating commercial requirements into revenue-generating, high-converting digital products."
    },
    {
      title: "Agile & Quality Driven",
      description: "Trained in cross-browser compatibility, rigorous testing, Git workflows, and modern AI-augmented developer velocity."
    }
  ]
};

export const skillsData = [
  {
    category: "Languages",
    icon: "Code2",
    skills: [
      "JavaScript (ES6+)",
      "Java (Basic)",
      "SQL (Relational Queries)",
      "HTML5",
      "CSS3",
      "JSON"
    ]
  },
  {
    category: "Frontend",
    icon: "Layout",
    skills: [
      "React.js",
      "JavaScript (ES6+)",
      "State Management (Context/Redux)",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Bootstrap",
      "Responsive Web Design",
      "Reusable Components",
      "DOM Manipulation",
      "UI/UX Design"
    ]
  },
  {
    category: "Backend",
    icon: "Server",
    skills: [
      "Node.js",
      "Express.js",
      "RESTful APIs",
      "JWT / Authentication",
      "CRUD Operations",
      "MVC Architecture",
      "Client-Server Architecture",
      "JSON Web Services",
      "Postman"
    ]
  },
  {
    category: "Database",
    icon: "Database",
    skills: [
      "MongoDB",
      "Mongoose",
      "SQL (MySQL)",
      "Database Schema Design",
      "CRUD Queries",
      "Data Normalization"
    ]
  },
  {
    category: "Web Platforms",
    icon: "Globe",
    skills: [
      "WordPress",
      "Wix",
      "Content Management (CMS)",
      "Theme Customization"
    ]
  },
  {
    category: "Tools & Deployment",
    icon: "Wrench",
    skills: [
      "Git",
      "GitHub",
      "Vercel",
      "GitHub Pages",
      "Postman",
      "npm",
      "VS Code",
      "Cursor",
      "Claude",
      "GitHub Copilot"
    ]
  },
  {
    category: "Practices",
    icon: "ShieldCheck",
    skills: [
      "Full Stack Development",
      "Agile",
      "Debugging & Testing",
      "Cross-Browser Compatibility",
      "Requirement Analysis",
      "Documentation"
    ]
  },
  {
    category: "Core Strengths",
    icon: "Sparkles",
    skills: [
      "Attention to Detail",
      "Collaboration",
      "Adaptability",
      "Learning Agility",
      "Problem Solving",
      "Requirement Scoping"
    ]
  }
];

export const projectsData = [
  {
    id: "shopx-mern",
    featured: true,
    title: "Full Stack E-Commerce Website (MERN)",
    subtitle: "ShopX — Modern Luxury Storefront & Multi-Step Checkout",
    badge: "MERN Stack Live",
    description: "Full-stack e-commerce application with a React.js frontend and Node.js/Express.js backend, deployed on Vercel. Includes product listings, category filtering, an interactive shopping cart, and RESTful APIs for product management and cart functionality with full CRUD operations. MongoDB stores product and application data.",
    features: [
      "Dynamic product catalog with real-time category filtering (Electronics, Fashion, Footwear, Watches)",
      "Multi-step checkout workflow: Shipping Address -> Delivery Method -> Encrypted Card/UPI Payment simulation",
      "RESTful API architecture handling product queries, cart state persistence, and total bill calculations",
      "Persistent MongoDB database schemas for high-speed catalog querying and cart sessions",
      "Fully responsive mobile-first UI with dark aesthetic, discount coupons, and trust badges"
    ],
    techStack: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "JWT/Auth",
      "REST APIs",
      "CRUD",
      "Context API",
      "Responsive Design",
      "Vercel"
    ],
    liveUrl: "https://e-commerce-git-main-riddhigupta3102s-projects.vercel.app/",
    githubUrl: "https://github.com/Riddhigupta3102/E-Commerce",
    primaryImage: "/projects/shopx-hero.jpg",
    gallery: [
      { url: "/projects/shopx-hero.jpg", caption: "Storefront & Hero Promotion Banner" },
      { url: "/projects/shopx-products.jpg", caption: "Product Grid & Instant Cart Adding" },
      { url: "/projects/shopx-filter.png", caption: "Category Filtering Engine (Electronics)" },
      { url: "/projects/shopx-checkout.png", caption: "Multi-Step Checkout Address Selection" },
      { url: "/projects/shopx-payment.png", caption: "Encrypted Card & Instant UPI Gateway Simulation" },
      { url: "/projects/shopx-footer.jpg", caption: "Free Shipping & 2-Year Warranty Trust Badges" }
    ]
  },
  {
    id: "ganexa-digital",
    featured: true,
    title: "GanExa Digital Solution — Business Website",
    subtitle: "Commercial Agency Platform",
    badge: "Agency Platform",
    description: "Production website for my digital agency offering website development, redesign, CRM development, maintenance and digital marketing. Features a conversion-focused layout, interactive 3D hero element, services and pricing sections, WhatsApp quick-chat integration, inquiry form with email alerts, SEO meta setup and a fully responsive design.",
    features: [
      "Developed and launched the production website for GanExa Digital Solution using Next.js and React.js to present web development, CRM, and digital marketing services",
      "Built a responsive, mobile-first user interface with services, packages, and contact sections using HTML5 and CSS3 across mobile, tablet, and desktop",
      "Implemented a lead-capture inquiry form with 2 lead channels, automated email notifications and WhatsApp click-to-chat to capture and manage client leads",
      "Integrated SEO meta configuration, high performance Lighthouse scores, and conversion-focused CTAs"
    ],
    techStack: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "Responsive Design",
      "SEO",
      "Forms & Email Alerts",
      "UI/UX",
      "Deployment"
    ],
    liveUrl: "https://www.ganexadigital.com",
    githubUrl: "https://github.com/Riddhigupta3102/Ganexa-digital-solutions",
    primaryImage: "/projects/ganexa-hero.jpg",
    gallery: [
      { url: "/projects/ganexa-hero.jpg", caption: "Interactive 3D Sphere Agency Hero" },
      { url: "/projects/ganexa-services.jpg", caption: "Services & Tiered Pricing Showcase" },
      { url: "/projects/ganexa-inquiry.jpg", caption: "Client Inquiry Form & Direct Channels" },
      { url: "/projects/ganexa-nav.jpg", caption: "Header Navigation & Free Quote Conversion Funnel" }
    ]
  },
  {
    id: "portfolio-foundations",
    featured: false,
    title: "Personal Portfolio Website",
    subtitle: "React.js 18, Tailwind CSS & Vercel Deployment",
    badge: "React.js + Tailwind",
    description: "Designed and developed a responsive personal portfolio website using React.js 18 with component-driven architecture, functional components, and hooks (useState, useEffect). Styled with Tailwind CSS 3 for responsive layouts across devices and deployed on Vercel.",
    features: [
      "Component-driven single page architecture built with React 18 functional components and hooks",
      "Styled with Tailwind CSS 3 with custom glassmorphism, responsive design and dark/light theme persistence",
      "Zero-backend contact integration with Formspree and native mailto triggers",
      "Continuous deployment pipeline hosted on Vercel"
    ],
    techStack: [
      "React.js 18",
      "Tailwind CSS 3",
      "Vite",
      "JavaScript (ES6+)",
      "Vercel",
      "Responsive Design"
    ],
    liveUrl: "https://my-portfolio-git-main-riddhigupta3102s-projects.vercel.app/",
    githubUrl: "https://github.com/Riddhigupta3102/my-portfolio",
    primaryImage: "/projects/shopx-hero.jpg",
    gallery: [
      { url: "/projects/shopx-hero.jpg", caption: "Single-Page Responsive Portfolio" }
    ]
  }
];

export const experienceData = [
  {
    title: "Founder & Developer",
    organization: "GanExa Digital Solution",
    location: "Delhi, India",
    period: "2026 – Present",
    type: "Leadership / Client Delivery",
    isCurrent: true,
    points: [
      "Founded and manage a digital agency delivering high-performance websites and digital solutions for small and mid-sized businesses.",
      "Engineered conversion-focused layouts, pricing matrices, automated inquiry funnels, and CRM pipeline workflows.",
      "Spearhead full-cycle technical deliverables from requirement scoping to architecture, production deployment, and client support."
    ]
  },
  {
    title: "SaaS Web Builder Intern",
    organization: "Adaan Digital Solutions Pvt. Ltd.",
    location: "Delhi, India",
    period: "Aug 2025 – Nov 2025",
    type: "Industry Internship",
    isCurrent: false,
    points: [
      "Analyzed client requirements and delivered website projects end to end during a 3-month internship, ensuring outputs met business requirements and quality standards.",
      "Performed testing, debugging, and cross-browser compatibility checks using HTML, CSS, and JavaScript to identify and resolve front-end issues early and improve user experience.",
      "Maintained and updated websites across 2 platforms, WordPress and Wix, modifying pages, layouts, and content to keep websites accurate and consistent.",
      "Developed responsive layouts for 3 screen sizes (desktop, tablet, mobile) using HTML5 and CSS3, following design specifications and project guidelines."
    ]
  }
];

export const educationData = [
  {
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "Indira Gandhi National Open University (IGNOU)",
    location: "Delhi, India",
    period: "Graduated 2025",
    type: "Degree",
    badge: "Graduated 2025 (61.54%)",
    details: "Core Computer Science curriculum: Data Structures & Algorithms, Database Management Systems (DBMS), Software Engineering, Web Technologies, and Computer Networking. Percentage: 61.54%."
  },
  {
    degree: "Java Full Stack Certification",
    institution: "DUCAT",
    location: "Pitampura, Delhi",
    period: "Completed 2025",
    type: "Certification",
    badge: "Certified",
    details: "Comprehensive hands-on training across Core Java, Object-Oriented Design, J2EE/Spring basics, SQL databases, RESTful Web Services, and client-server architecture. Completed practical projects involving database, development, and presentations."
  }
];

export const contactInfo = {
  heading: "Let's build something remarkable together.",
  subheading: "Open to Software Developer, Full Stack Developer, and SDE roles at MNCs and high-growth startups.",
  email: "riddhigupta3102@gmail.com",
  phone: "+91 7302627643",
  location: "Delhi, India (Open to Remote / Relocation)",
  socials: [
    { name: "GitHub", url: "https://github.com/Riddhigupta3102", icon: "Github" },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/riddhi-gupta-540568330", icon: "Linkedin" },
    { name: "Email", url: "mailto:riddhigupta3102@gmail.com", icon: "Mail" }
  ]
};
