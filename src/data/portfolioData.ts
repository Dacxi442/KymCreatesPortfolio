import heroPortraitImg from '../assets/images/anthony_hero_portrait_1790071580099.jpg';
import profileArtImg from '../assets/images/anthony_profile_art_1790071593427.jpg';
import creativeCollageImg from '../assets/images/creative_collage_art_1790071606642.jpg';
import fashionEditorialImg from '../assets/images/fashion_editorial_1790071642671.jpg';
import brandIdentityImg from '../assets/images/brand_identity_1790071657067.jpg';
import CreativeKym from '../assets/images/kym.jpg';
import Creativephoto from '../assets/images/Kym2.jpeg';
import Creativelogo from '../assets/images/kym-logo.jpeg'
import { Capability, ClientItem, CVData, ProcessStep, Project } from '../types/portfolio';

export const ASSETS = {
  heroPortrait: heroPortraitImg,
  profileArt: profileArtImg,
  creativeCollage: creativeCollageImg,
  fashionEditorial: fashionEditorialImg,
  brandIdentity: brandIdentityImg,
  creativeKym: CreativeKym,
  creativephoto: Creativephoto,
  creativelogo: Creativelogo,
};

export const ANTHONY_BIO = {
  name: "Anthony Kimani",
  brandName: "Kym Creates",
  tagline: "Different disciplines. One creative mind.",
  signatureQuestion: "What can I do for you?",
  location: "Nairobi, Kenya",
  availability: "Available for Projects & Collaborations",
  experienceYears: "3+",
  projectsCompleted: "Multiple",
  clientsSatisfied: "Various",
  email: "anthonykimani002@gmail.com",
  phone: "+254 791 742 976",
  socials: [
    { name: "LinkedIn", url: "https://linkedin.com/in/anthony-kimani", handle: "Anthony Kimani" },
    { name: "Portfolio", url: "https://kimani-anthony.vercel.app", handle: "kimani-anthony.vercel.app" },
    { name: "Instagram", url: "https://instagram.com", handle: "@kymcreates" },
    { name: "Behance", url: "https://behance.net", handle: "kymcreates" }
  ]
};

export const CAPABILITIES: Capability[] = [
  {
    id: "photography",
    name: "Photography",
    tagline: "Editorial, Portraits, Campaigns & Visual Storytelling",
    iconName: "Camera",
    description: "Capturing presence, tension, and emotional depth through high-end medium format digital and 35mm film aesthetics. From high-fashion lookbooks to architectural spaces and commanding executive portraits.",
    deliverables: [
      "Editorial & Fashion Photography",
      "Executive & Creative Portraits",
      "Brand Campaign Imagery",
      "Architectural & Product Studies",
      "Art Direction & Lighting Design",
      "Digital Darkroom & Color Grading"
    ],
    tools: ["Phase One / Sony Alpha", "Profoto Lighting", "Capture One Pro", "35mm Analog"],
    color: "#FF5500"
  },
  {
    id: "videography",
    name: "Videography",
    tagline: "Cinematic Films, Brand Documentaries & Commercials",
    iconName: "Film",
    description: "Visual movement that commands attention. Writing, directing, shooting, and coloring short-form cinema, brand manifestos, music visuals, and promotional storytelling with cinematic rhythm.",
    deliverables: [
      "Brand Narrative Films",
      "Cinematic Commercials & Promos",
      "Artist Documentaries & Music Visuals",
      "Social-First Cinematic Reels",
      "Post-Production & Motion Sound Design",
      "Davinci Resolve Color Mastering"
    ],
    tools: ["RED / FX6 Cinema Line", "Davinci Resolve Studio", "Premiere Pro", "Gimbal / Anamorphic"],
    color: "#FACC15"
  },
  {
    id: "design",
    name: "Graphic & Visual Design",
    tagline: "Brand Identity Systems, Typographic Spreads & Direction",
    iconName: "Layers",
    description: "Translating abstract philosophies into tangible, memorable visual systems. Designing distinct typographic identities, editorial publications, packaging, and digital branding assets that leave an imprint.",
    deliverables: [
      "Comprehensive Brand Identity Systems",
      "Editorial Layout & Book Design",
      "Typographic Direction & Custom Lettering",
      "Packaging & Print Production",
      "Creative Campaign Art Direction",
      "Exhibition & Environmental Graphics"
    ],
    tools: ["Adobe Illustrator", "InDesign", "Photoshop", "Glyphs", "Print Finishing"],
    color: "#FF6B00"
  },
  {
    id: "web",
    name: "Digital & Web Development",
    tagline: "Bespoke Web Design, Interactive Frontends & Systems",
    iconName: "Code2",
    description: "Websites that break away from sterile templates. Crafting high-performance digital exhibitions, interactive portfolios, and bespoke platforms with fluid motion and robust architecture.",
    deliverables: [
      "Bespoke Website Design & Architecture",
      "Interactive Frontend Development (React/Vite)",
      "Motion Design & Micro-Interactions",
      "Editorial E-Commerce & Portfolios",
      "Website Maintenance & Performance Audits",
      "Responsive Cross-Platform Engineering"
    ],
    tools: ["React / TypeScript", "Tailwind CSS", "Motion / GSAP", "Three.js / WebGL", "Headless CMS"],
    color: "#2563EB"
  },
  {
    id: "creative",
    name: "Creative Solutions",
    tagline: "Holistic Direction, Multidisciplinary Problem-Solving",
    iconName: "Sparkles",
    description: "When a challenge doesn't fit into a single box. Combining photography, motion, branding, and technical code to formulate an all-in-one bespoke solution for ambitious founders and creators.",
    deliverables: [
      "End-to-End Creative Direction",
      "Cross-Discipline Campaign Rollouts",
      "Digital Art Installations & Mixed Media",
      "Strategic Visual Audits",
      "Brand Launch Blueprints",
      "Interactive Exhibition Spaces"
    ],
    tools: ["Creative Strategy", "Multidisciplinary Hybridization", "Design Thinking", "Rapid Prototyping"],
    color: "#FFFFFF"
  }
];

export const PROJECTS: Project[] = [
  {
    id: "lumina-noir",
    number: "01",
    title: "LUMINA NOIR",
    subtitle: "High-Fashion Editorial & Brand Identity",
    client: "Lumina Atelier (Paris / London)",
    year: "2025",
    category: "photography",
    categoryLabel: "Photography & Art Direction",
    role: "Lead Photographer & Visual Director",
    disciplines: ["Editorial Photography", "Art Direction", "Lookbook Design", "Color Grading"],
    heroImage: ASSETS.heroPortrait,
    galleryImages: [
      ASSETS.fashionEditorial,
      ASSETS.heroPortrait,
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1200&auto=format&fit=crop"
    ],
    challenge: "Lumina Atelier needed to launch their autumn capsule collection with a visual signature that moved away from clean corporate lookbooks toward a dark, sculptural, and cinematic atmosphere.",
    approach: "Anthony crafted a custom lighting architecture utilizing low-key amber spotlights and deep natural shadow falloff, creating a museum-grade visual exhibition celebrating tailored silhouettes and textural contrast.",
    whatCreated: "Delivered a 42-plate editorial series, 3 short-form cinematic fashion films, and an oversized bound print catalog distributed to private international buyers.",
    outcome: "Capsule pre-orders sold out within 72 hours of lookbook distribution, with featured press in contemporary design and style publications.",
    stats: [
      { label: "Lookbook Plates", value: "42 Images" },
      { label: "Pre-order Target", value: "185% Met" },
      { label: "Campaign Reach", value: "340K+" }
    ],
    featured: true,
    layoutStyle: "editorial-split",
    accentColor: "#FF5500"
  },
  {
    id: "solaris-sound",
    number: "02",
    title: "SOLARIS DICHROIC",
    subtitle: "Avant-Garde Profile & Visual Campaign",
    client: "Solaris Audio & Visual Arts",
    year: "2025",
    category: "creative",
    categoryLabel: "Creative Direction & Profile Series",
    role: "Creative Director & Solo Creator",
    disciplines: ["Creative Direction", "Studio Photography", "Lighting Engineering", "Graphic Packaging"],
    heroImage: ASSETS.profileArt,
    galleryImages: [
      ASSETS.profileArt,
      ASSETS.creativeCollage,
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?q=80&w=1200&auto=format&fit=crop"
    ],
    challenge: "A multidisciplinary record label needed an iconic promotional visual language representing the warmth of analogue synthesizers paired with contemporary digital precision.",
    approach: "Utilizing custom dichroic glass filters and razor-sharp directional amber rim lights, Anthony produced a stark high-contrast visual portrait series that visually sounds like an analogue synth chord.",
    whatCreated: "Key promotional portraits, vinyl gatefold sleeve packaging, promotional billboard assets, and interactive audio-visual landing page.",
    outcome: "Universal critical acclaim in the electronic music community; recognized as one of the most distinctive visual campaigns of the season.",
    stats: [
      { label: "Vinyl Pressing", value: "2,500 Units Sold" },
      { label: "International Billboard Run", value: "4 Cities" }
    ],
    featured: true,
    layoutStyle: "bold-type",
    accentColor: "#FF6B00"
  },
  {
    id: "heritage-futurism",
    number: "03",
    title: "AFRO-SYNCRETIC ARCHIVE",
    subtitle: "Contemporary Graphic Collage & Cultural Exhibition",
    client: "Pan-African Contemporary Arts Foundation",
    year: "2024",
    category: "design",
    categoryLabel: "Graphic Design & Mixed Media",
    role: "Visual Designer & Mixed Media Artist",
    disciplines: ["Graphic Design", "Mixed-Media Collage", "Exhibition Poster Art", "Technical Typography"],
    heroImage: ASSETS.creativeCollage,
    galleryImages: [
      ASSETS.creativeCollage,
      ASSETS.brandIdentity,
      "https://images.unsplash.com/photo-1547891654-e66ed7ebb968?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1579783902614-a3fb3927b675?q=80&w=1200&auto=format&fit=crop"
    ],
    challenge: "Bridging ancestral African graphic symbolism with contemporary electronic grid diagrams and photographic contact sheets in a unified visual exhibition.",
    approach: "Anthony combined hand-textured silkscreen elements, photographic portraits, camera crosshairs, and bold color blocking in warm orange, electric yellow, and deep indigo blue.",
    whatCreated: "12 museum-scale silkscreen prints, complete exhibition catalog, digital interactive gallery archive, and architectural window graphics.",
    outcome: "Exhibited across 3 cultural biennials and cataloged into permanent university visual libraries.",
    stats: [
      { label: "Exhibition Visitors", value: "18,000+" },
      { label: "Curatorial Awards", value: "2 Honors" }
    ],
    featured: true,
    layoutStyle: "asymmetric-spread",
    accentColor: "#FACC15"
  },
  {
    id: "forma-identity",
    number: "04",
    title: "FORMA ARCHITECTURAL",
    subtitle: "Complete Brand Identity & Digital Platform",
    client: "Forma Spatial Practice",
    year: "2024",
    category: "web",
    categoryLabel: "Brand Design & Web Development",
    role: "Brand Architect & Frontend Engineer",
    disciplines: ["Identity System", "UI/UX Architecture", "React Development", "Editorial Photography"],
    heroImage: ASSETS.brandIdentity,
    galleryImages: [
      ASSETS.brandIdentity,
      ASSETS.fashionEditorial,
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop"
    ],
    challenge: "An architectural atelier wanted a digital home that mirrored the tactile precision of poured concrete and mathematical proportions, refusing standard template website formats.",
    approach: "Designed a bespoke responsive interface using strict grid hierarchies, custom micro-interactions, smooth camera-like transitions, and an editorial dark mode.",
    whatCreated: "Full visual identity, bespoke typographic guidelines, bespoke React/Tailwind web platform with sub-second page loads, and on-site architectural photography.",
    outcome: "Winner of Site of the Day in 2 international design showcases; 300% increase in tier-1 commercial project inquiries within 6 months.",
    stats: [
      { label: "Performance Score", value: "99/100" },
      { label: "Inquiry Value", value: "+320%" }
    ],
    featured: true,
    layoutStyle: "full-cinematic",
    accentColor: "#2563EB"
  },
  {
    id: "chronicle-cinema",
    number: "05",
    title: "RHYTHM OF SILENCE",
    subtitle: "Cinematic Documentary & Sound Design",
    client: "Independent Film Commission",
    year: "2024",
    category: "video",
    categoryLabel: "Videography & Film Direction",
    role: "Director of Photography & Colorist",
    disciplines: ["Cinematography", "Directing", "Sound Design", "Davinci Color Mastering"],
    heroImage: ASSETS.fashionEditorial,
    galleryImages: [
      ASSETS.fashionEditorial,
      ASSETS.profileArt,
      "https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=1200&auto=format&fit=crop"
    ],
    challenge: "Documenting artisanal ceramicists and sculptors in remote ateliers with minimal crew footprint and authentic natural light.",
    approach: "Shot entirely on anamorphic lenses with portable cinema rigs, capturing dust motes, kiln fire, and subtle facial micro-expressions with intimate sensory sound design.",
    whatCreated: "18-minute short documentary, festival teaser trailer, social motion assets, and companion photo booklet.",
    outcome: "Official selection at 4 international documentary festivals; acquired for streaming by an independent arts network.",
    stats: [
      { label: "Festival Selections", value: "4 Festivals" },
      { label: "Audio Mix", value: "Dolby Atmos" }
    ],
    featured: false,
    layoutStyle: "full-cinematic",
    accentColor: "#FF5500"
  },
  {
    id: "kura-capsule",
    number: "06",
    title: "KŪRA LEATHERWORKS",
    subtitle: "Bespoke E-Commerce & Product Photography",
    client: "Kūra Goods",
    year: "2023",
    category: "web",
    categoryLabel: "Product Photography & Web Platform",
    role: "Product Photographer & Full-Stack Developer",
    disciplines: ["Product Stills", "E-Commerce Architecture", "Maintenance", "Packaging"],
    heroImage: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=1200&auto=format&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=1200&auto=format&fit=crop",
      ASSETS.brandIdentity,
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=1200&auto=format&fit=crop"
    ],
    challenge: "Demonstrating the raw grain and hand-stitched patina of handcrafted leather accessories online in a way that feels tactile and honest.",
    approach: "Macro 1:1 product photography showing leather grain and wax threads paired with an ultra-minimalist, lightning-fast digital storefront.",
    whatCreated: "Complete product catalog photography, bespoke e-commerce store with zero third-party bloat, and automated inventory sync.",
    outcome: "Conversion rate increased from 1.4% to 4.2%; zero downtime during Black Friday surge.",
    stats: [
      { label: "Conversion Rate", value: "4.2%" },
      { label: "Load Time", value: "0.6s" }
    ],
    featured: false,
    layoutStyle: "editorial-split",
    accentColor: "#FF6B00"
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: "01",
    title: "Understand",
    tagline: "What are you trying to achieve?",
    summary: "Before picking up a camera or opening code, Anthony listens. What is the fundamental challenge? Who needs to feel this? What does success look like beyond vanity metrics? This is where the solution is born.",
    deliverable: "Creative Brief, Challenge Definition & Strategic Objectives"
  },
  {
    number: "02",
    title: "Explore",
    tagline: "Find the creative direction.",
    summary: "Testing the boundaries. Curating visual moods, lighting concepts, typographic explorations, and technical architectures. Finding the unexpected tension that makes the work unforgettable.",
    deliverable: "Visual Direction Deck, Mood Architecture & Technical Feasibility"
  },
  {
    number: "03",
    title: "Create",
    tagline: "Build the visual and digital solution.",
    summary: "Hands-on execution across disciplines. Lights positioned, cameras rolling, code compiling, layouts set with millimeter precision. No outsourced dilution; pure craft executed with intent.",
    deliverable: "Raw Production Assets, Initial Layouts & Functional Prototypes"
  },
  {
    number: "04",
    title: "Refine",
    tagline: "Polish every important detail.",
    summary: "Elevating good into undeniable. Nuanced color grading, micro-interaction timing, typographic kerning, auditory balance, and cross-browser stress tests. The invisible details make the difference.",
    deliverable: "Color-Mastered Visuals, Perfected Typography & Production Build"
  },
  {
    number: "05",
    title: "Deliver",
    tagline: "Turn the idea into something tangible and usable.",
    summary: "Handing over assets ready to conquer the real world. Deployed web platforms, master cinema exports, high-res print files, and ongoing guidance. The answer to 'What can I do for you?' fulfilled.",
    deliverable: "Production Deploy, Master Asset Vault & Comprehensive Handover"
  }
];

export const CLIENTS: ClientItem[] = [
  {
    name: "Lumina Atelier",
    industry: "High Fashion / Paris",
    scope: "Campaign Photography & Lookbook",
    year: "2025",
    quote: "Anthony understands visual silence better than anyone we've worked with. The imagery redefined our brand's presence.",
    author: "Elena Vance, Creative Director"
  },
  {
    name: "Solaris Audio",
    industry: "Electronic Music / London",
    scope: "Visual Direction & Vinyl Packaging",
    year: "2025",
    quote: "He walked in, listened to our album once, and said 'I know exactly how this looks.' The result was nothing short of iconic.",
    author: "Marcus Thorne, Label Founder"
  },
  {
    name: "Pan-African Arts Foundation",
    industry: "Cultural Heritage & Fine Art",
    scope: "Exhibition Poster Art & Digital Archive",
    year: "2024",
    quote: "An extraordinary bridge between ancestral storytelling and contemporary design. A visionary creator.",
    author: "Dr. Amara Kouassi, Chief Curator"
  }
];

export const CV_DATA: CVData = {
  name: "Anthony Kimani",
  title: "Multi-disciplinary Software Engineer & Creative",
  location: "Nairobi, Kenya",
  summary: "Multi-disciplinary Software Engineer and Web Management Specialist with 3+ years of experience delivering scalable web solutions and managing digital platforms across technology, tourism, and community-based organizations. Skilled in full-stack development, AI-powered workflows, and system integrations, with a strong creative background in photography, videography, and graphic design. Experienced in training and mentoring youth in digital and AI skills, and driven by using technology and creativity to build practical, high-impact solutions.",
  experience: [
    {
      period: "Present",
      role: "Freelance Software Engineer, Web Developer, and Creative Consultant",
      company: "Independent / Nairobi",
      description: [
        "Design, develop and manage responsive websites and software solutions for clients in tourism, media, SME, and community organizations.",
        "Build booking systems, CRM, dashboards, and online platforms with secure payment integrations.",
        "Website management, data backups, and system optimization services.",
        "Delivering photography, videography, graphic design, and digital media solutions alongside technical development.",
        "Integrate AI tools to automate workflows, content creation, and client solutions."
      ]
    },
    {
      period: "June 2022 — Present",
      role: "Founder and Lead Designer",
      company: "Happy Hearts Initiative, Nairobi",
      description: [
        "Capturing, editing, and producing high-quality photos and videos for programs, events, and campaigns.",
        "Support the communications team by creating visual content that enhances storytelling and engagement.",
        "Lead branding, website development, and social media strategy to promote youth-led innovations.",
        "Organize community outreach programs, charity events and youth empowerment programs.",
        "Deliver creative direction across designs, photography, videography, and digital media.",
        "Support youth empowerment and skills development through technology and innovation."
      ]
    },
    {
      period: "Present",
      role: "Volunteer, Communications Department",
      company: "Polycom Girls, Nairobi",
      description: [
        "Digital branding, multimedia production, and website design.",
        "Experience in youth mentorship in technology and creativity.",
        "Support youth empowerment and skills development."
      ]
    },
    {
      period: "2019 — January 2025",
      role: "Lead Designer and Digital Officer",
      company: "Spread A Smile Organization, Nairobi",
      description: [
        "Led digital branding, website development, and multimedia campaigns to increase visibility and engagement.",
        "Created photography, videography, and graphic design content for the organization for awareness initiatives.",
        "Managed digital platforms, online campaigns, and visual storytelling strategies aligned with organization goals.",
        "Collaborated with cross-functional teams to deliver impactful digital resources."
      ]
    },
    {
      period: "Ongoing",
      role: "Software Developer",
      company: "Tourism Website Project, Nairobi",
      description: [
        "Developing a dynamic tourism website to promote destinations and manage tour listings.",
        "Implementing booking systems, online payments and content management tools.",
        "Built using multiple programing languages to enhance user experience and platform performance."
      ]
    }
  ],
  education: [
    {
      year: "Feb - Aug 2025",
      degree: "Software Engineering (Full-Stack) & AI Integration",
      institution: "Power Learn Project (PLP) Academy, Nairobi"
    },
    {
      year: "June 2024 - March 2025",
      degree: "SHIELD Program (Web, App Dev & Design Thinking)",
      institution: "SocialHub for Innovation, Entrepreneurship, Leadership, and Design Thinking, Nairobi"
    },
    {
      year: "Jan - July 2023",
      degree: "Graphic Design, Web Development & Digital Media",
      institution: "Tunapanda Institute, Nairobi"
    },
    {
      year: "March 2019 - March 2021",
      degree: "Kenya Certificate Of Secondary Education",
      institution: "Raila Educational Centre, Nairobi"
    }
  ],
  disciplines: [
    "Graphic Design & Branding",
    "Photography & Videography",
    "Full-Stack Web Development",
    "Mobile & Cross-Platform Dev (Dart, Flutter)",
    "CRM & Booking Systems Integration",
    "AI-Assisted Workflows & Automation"
  ],
  technicalToolkit: [
    "JavaScript, Python, Django",
    "Dart, Flutter",
    "HTML, CSS, React",
    "M-Pesa, PayPal, Visa APIs",
    "Adobe Creative Suite",
    "Video & Audio Editing Tools",
    "AI Content & Design Workshops"
  ]
};
