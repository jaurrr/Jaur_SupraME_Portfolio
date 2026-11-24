/* Central content source for the whole portfolio. Edit here, site updates everywhere. */

export interface SkillCategory {
  icon: string;
  title: string;
  subtitle: string;
  skills: string[];
}

export interface Service {
  icon: string;
  title: string;
  desc: string;
}

export interface Project {
  title: string;
  year: string;
  desc: string;
  tech: string[];
  liveUrl?: string;
  liveLabel?: string;
  /** Homepage screenshot shown on the project card, e.g. 'assets/project-toos.jpg' */
  image?: string;
  /** Additional links, e.g. company site alongside the app login */
  extraLinks?: { url: string; label: string }[];
  tag: string;
}

export interface GalleryImage {
  src: string;
  alt: string;
}

export interface Certificate {
  title: string;
  org: string;
  thumb: string;
  pdf: string;
}

export interface Education {
  title: string;
  org: string;
  url?: string;
}

export const PROFILE = {
  firstName: 'Jauhar',
  lastName: 'Ayyub',
  brand: 'jauhar.dev',
  roles: ['Software Engineer', 'AI Engineer', 'Frontend Developer', 'Angular Specialist', 'AI-Assisted Developer'],
  tagline:
    'Software engineer with 3+ years of experience building scalable web applications with Angular and TypeScript. I combine solid engineering fundamentals with AI-assisted workflows and reverse engineering to deliver quality software, faster.',
  email: 'jaurazmi42@gmail.com',
  phone: '+91 9936786415',
  whatsapp: 'https://wa.me/919936786415',
  location: 'India',
  github: 'https://github.com/jaurrr',
  linkedin: 'https://www.linkedin.com/in/jauhar-ayyub-xxxyt42',
  instagram: 'https://www.instagram.com/jaur__',
  cvPath: 'assets/Jauhar_Ayyub_CV.pdf',
  heroImage: 'assets/flip-front.jpg',
  heroBackImage: 'assets/flip-back.jpg',
  contactLine:
    "Whether it's a job opportunity, an invite to coffee, or feedback on my portfolio, my inbox is always open. Available immediately — open to remote roles worldwide.",
};

export const ABOUT = {
  heading: 'About Me',
  image: 'assets/about-final.jpg',
  paragraphs: [
    "I'm Jauhar Ayyub, a software engineer from India with over 3 years of experience building web applications. At Digital Transformation Factory, I work on a Manufacturing Execution System (MES) used in real production environments — integrating REST APIs, building reusable Angular components with PrimeNG, and handling complex data workflows with Reactive Forms and RxJS.",
    'Beyond my day job, I run Jaurvo — my own web studio with a 15+ member team building websites, brands and designs for clients worldwide. I also design and ship complete products independently, from idea to deployment, and I work with AI agents and reverse-engineering tools to prototype faster, learn how great apps work, and keep code quality high.',
  ],
  stats: [
    { value: '3+', label: 'Years Experience' },
    { value: '9', label: 'Major Projects' },
    { value: '15+', label: 'Technologies' },
  ],
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    icon: '🖥️',
    title: 'Frontend Development',
    subtitle: 'Production Angular apps — from MES dashboards used in real factories to public products.',
    skills: [
      'HTML5', 'CSS3', 'SCSS', 'JavaScript (ES6+)', 'TypeScript', 'Angular',
      'Angular Signals', 'RxJS', 'Reactive Forms', 'State Management',
      'PrimeNG', 'Angular Material', 'Bootstrap', 'Tailwind CSS', 'Lucide',
      'React', 'Responsive Design', 'i18n & RTL Layouts', 'SSR / Prerendering', 'PWA', 'Frontend Architecture',
    ],
  },
  {
    icon: '⚙️',
    title: 'Backend & Databases',
    subtitle: 'APIs, auth and data — Supabase backends in production and REST integrations that hold up under real load.',
    skills: [
      'REST APIs', 'Node.js', 'Express.js', 'Supabase', 'PostgreSQL',
      'Row Level Security', 'Edge Functions', 'Token Auth / JWT', 'Python',
      'C# (.NET)', 'MySQL', 'MongoDB', 'SQL', 'SQL Optimization',
    ],
  },
  {
    icon: '🤖',
    title: 'AI & Reverse Engineering',
    subtitle: 'Building with AI agents — and taking apps apart to learn exactly how great products work.',
    skills: [
      'AI Agents', 'Prompt Engineering', 'AI-assisted Development',
      'Reverse Engineering', 'REA', 'Ghidra', 'APK Analysis', 'IL2CPP Analysis',
    ],
  },
  {
    icon: '🛠️',
    title: 'Tools & Workflow',
    subtitle: 'The daily setup — version control, debugging, CI/CD and shipping.',
    skills: [
      'Visual Studio Code', 'Git & GitHub', 'GitHub Actions', 'Vercel',
      'Chrome DevTools', 'Postman', 'Bash', 'PowerShell', 'Linux (Ubuntu)',
      'Agile / Scrum',
    ],
  },
  {
    icon: '🎨',
    title: 'Design & Practices',
    subtitle: 'Clean code, sharp interfaces, and the discipline that keeps both.',
    skills: [
      'Figma', 'Canva', 'UI/UX Implementation', 'AI-assisted Design',
      'Technical SEO', 'Documentation', 'Code Reviews',
      'Clean Code Principles', 'Design Patterns', 'OOP', 'Team Leading', 'Client Handling',
    ],
  },
];

export const SERVICES: Service[] = [
  { icon: '🖥️', title: 'Landing Pages', desc: 'Conversion-focused pages engineered for speed, clarity, and lead generation.' },
  { icon: '🏢', title: 'Business Websites', desc: 'Corporate websites built to establish credibility and drive engagement.' },
  { icon: '📱', title: 'Responsive Redesign', desc: 'Modernize outdated sites with layouts optimized for every screen size.' },
  { icon: '✨', title: 'UI/UX Implementation', desc: 'Translate designs into production-ready interfaces with precision.' },
  { icon: '🚀', title: 'Deployment & Hosting', desc: 'End-to-end deployment on Vercel or Netlify with CI/CD best practices.' },
  { icon: '🔧', title: 'Site Maintenance', desc: 'Proactive updates, performance tuning, and ongoing support.' },
];

export const SERVICES_IMAGE = 'assets/services-offer.jpg';

export const EXPERIENCE = {
  role: 'Frontend Developer',
  company: 'Digital Transformation Factory (DTF)',
  period: 'Jun 2024 – Present',
  liveUrl: 'https://dtf-ai.com/',
  summary:
    'Manufacturing Execution System (MES) — a web application for managing quality processes in field operations: checklist creation, sample execution, dynamic forms, and reporting.',
  points: [
    'Build and maintain production MES workflows in Angular and TypeScript — checklist creation, sample execution, dynamic forms and reporting — used in real field operations.',
    'Design complex, validated forms with Reactive Forms and RxJS, turning changing business rules into reusable, maintainable form components.',
    'Integrate REST APIs with token-based authentication and build data-heavy screens with PrimeNG components.',
    'Create reusable components so new checklists, forms and reports ship faster without duplicating code.',
    'Fix production bugs and improve existing screens while the system stays live for its users.',
  ],
};

export const CERTIFICATIONS: Certificate[] = [
  {
    title: 'Artificial Intelligence Internship',
    org: 'NIELIT · Ministry of Electronics & IT, Govt. of India',
    thumb: 'assets/certificates/thumb-nielit.png',
    pdf: 'assets/certificates/ai-internship-nielit.pdf',
  },
  {
    title: 'Selenium Testing',
    org: 'Naresh Technologies, Hyderabad · Jun–Aug 2024',
    thumb: 'assets/certificates/thumb-selenium.png',
    pdf: 'assets/certificates/selenium-naresh.pdf',
  },
  {
    title: 'AI Tools Workshop',
    org: 'be10x · Nov 2023',
    thumb: 'assets/certificates/thumb-aitools.png',
    pdf: 'assets/certificates/ai-tools-be10x.pdf',
  },
];

export const EDUCATION: Education[] = [
  { title: 'BCA · 2024', org: 'Veer Bahadur Singh Purvanchal University, Jaunpur', url: 'https://www.vbspu.ac.in' },
  { title: 'Intermediate · 2019', org: 'Shibli National Inter College, Azamgarh' },
  { title: 'High School · 2017', org: 'R.N Public School, Azamgarh' },
];

export const PROJECTS: Project[] = [
  {
    title: 'MES · Manufacturing Execution System',
    year: '2024',
    tag: 'Professional Project',
    desc: 'Manufacturing Execution System for real production environments — checklist creation, sample execution, dynamic forms and reporting for quality processes in field operations. Built at Digital Transformation Factory with Angular, TypeScript, PrimeNG, REST APIs, Reactive Forms and RxJS.',
    tech: ['Angular', 'TypeScript', 'PrimeNG', 'RxJS', 'SQL'],
    image: 'assets/project-mes.jpg',
    liveUrl: 'https://mes.digitaltransformationfactory.com/auth/login',
    liveLabel: 'MES App',
    extraLinks: [{ url: 'https://dtf-ai.com/', label: 'DTF Website' }],
  },
  {
    title: 'Hamza Travels',
    year: '2025',
    tag: 'Solo Project',
    desc: 'Travel documents, ticketing & packages platform — designed and built end to end: frontend architecture, UI/UX, and booking workflows. Live production site, solo delivered from idea to deployment.',
    tech: ['Angular', 'TypeScript', 'Lucide'],
    liveUrl: 'https://hamza-travels-ruddy.vercel.app/',
    liveLabel: 'Live Demo',
    image: 'assets/project-hamza.jpg',
    extraLinks: [{ url: 'https://github.com/jaurrr/hamza-travels', label: 'GitHub' }],
  },
  {
    title: 'JaurTools',
    year: '2026',
    tag: 'Team Project',
    desc: 'Free browser-based tools in English, Hindi and Arabic — 600+ tools that run entirely in the browser: no signup, no server, no data collected. I lead a 4-member team building it.',
    tech: ['Angular', 'TypeScript'],
    liveUrl: 'https://jaurtools.vercel.app/',
    liveLabel: 'Live Demo',
    image: 'assets/project-jaurtools.jpg',
    extraLinks: [{ url: 'https://github.com/jaurrr/Jaurtools', label: 'GitHub' }],
  },
  {
    title: 'SnapLink',
    year: '2024',
    tag: 'College Team Project',
    desc: 'Multi-platform video downloader built with a 3-member college team. I handled the responsive frontend and API integration for the download functionality.',
    tech: ['Angular'],
    image: 'assets/project-snaplink.jpg',
    liveUrl: 'https://play.google.com/store/apps/details?id=video.downloader.video_downloader',
    liveLabel: 'Play Store',
  },
  {
    title: 'Jaurvo',
    year: '2026',
    tag: 'My Company',
    desc: 'My own web studio — websites, brands and designs for clients worldwide, built by a 15+ member team across Riyadh and Hyderabad. I founded Jaurvo and run it alongside my day job.',
    tech: ['Angular', 'TypeScript', 'Supabase'],
    image: 'assets/project-jaurvo.jpg',
    liveUrl: 'https://jaurvo.vercel.app/',
    liveLabel: 'Live Demo',
    extraLinks: [{ url: 'https://github.com/jaurvo/jaurvo', label: 'GitHub' }],
  },
  {
    title: 'Toos Kitchen & Zaffran',
    year: '2026',
    tag: 'Live Client Project',
    desc: 'A bilingual (English / Arabic) website for two sister restaurants in Saihat, Saudi Arabia, a complete 362-dish menu with categories and search, a cart that sends the order straight to the restaurant, a photo gallery and table booking.',
    tech: ['Angular', 'TypeScript', 'i18n & RTL'],
    liveUrl: 'https://toos-kitchen-zaffran.vercel.app',
    liveLabel: 'Live Demo',
    image: 'assets/project-toos.jpg',
  },
  {
    title: "Tipsy Topsy Baker's & Restaurant",
    year: '2026',
    tag: 'Sample Design',
    desc: 'A studio sample website for a pure-veg family restaurant and eggless bakery in Azamgarh, menu-first layout, Google ratings up front and one-tap direct ordering. Built to show exactly what a restaurant site from Jaurvo looks like.',
    tech: ['Angular', 'TypeScript'],
    liveUrl: 'https://tipsy-topsy-baker-s-restaurant.vercel.app',
    liveLabel: 'Live Demo',
    image: 'assets/project-tipsy.jpg',
  },
  {
    title: 'Azka & Sajid, Nikah Invitation',
    year: '2026',
    tag: 'Live Client Project',
    desc: "A wedding invitation website designed in the printed card's own deep maroon and gold style, a curtain-opening welcome, a live countdown to the Nikah on Monday, 16 November 2026 at Sangam Marriage Hall, Bilariyaganj, the venue on Google Maps and one-tap RSVP for guests.",
    tech: ['Angular', 'TypeScript'],
    liveUrl: 'https://azka-sajid-invitation.vercel.app',
    liveLabel: 'Live Demo',
    image: 'assets/project-azka.jpg',
  },
  {
    title: 'Bride Herbal Beauty Parlour',
    year: '2026',
    tag: 'Live Client Project',
    desc: 'A website for a beauty parlour with 20 years of trusted care, facials, bridal makeup and henna services with a tap-to-add booking cart, curated bridal and glow combo packages, a photo gallery, beauty tips journal and appointment booking.',
    tech: ['Angular', 'TypeScript'],
    liveUrl: 'https://bride-herbal-beauty-parlorrr.vercel.app/',
    liveLabel: 'Live Demo',
    image: 'assets/project-parlor.jpg',
  },
];

export const PROJECTS_IMAGE = 'assets/projects-feature.jpg';

export const GALLERY: GalleryImage[] = [
  { src: 'assets/gallery/gallery-1-code.jpg', alt: 'Late-night coding session' },
  { src: 'assets/gallery/gallery-4-balcony.jpg', alt: 'Balcony with mountain view' },
  { src: 'assets/gallery/gallery-5-breakfast.jpg', alt: 'Healthy breakfast plate' },
  { src: 'assets/gallery/gallery-6-toycar-notebook.jpg', alt: 'Toy car on study notes' },
  { src: 'assets/gallery/gallery-7-toycar-laptop.jpg', alt: 'Toy car on laptop keyboard' },
  { src: 'assets/gallery/gallery-9-portrait.jpg', alt: 'Studio portrait' },
  { src: 'assets/gallery/gallery-10-shoes.jpg', alt: 'Sneaker collection' },
  { src: 'assets/gallery/gallery-11-book.jpg', alt: 'Reading and reflections' },
  { src: 'assets/gallery/gallery-12-food.jpg', alt: 'Food diaries' },
];

export const CONTACT_IMAGE = 'assets/contact-final.jpg';

export const NAV_LINKS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'gallery', label: 'Gallery' },
  { id: 'contact', label: 'Contact' },
];
