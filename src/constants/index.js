const navLinks = [
   {
      id: 1,
      name: "Projects",
      type: "finder",
   },
   {
      id: 3,
      name: "Contact",
      type: "contact",
   },
   {
      id: 4,
      name: "Resume",
      type: "resume",
   },
];

const navIcons = [
   {
      id: 1,
      img: "/icons/wifi.svg",
   },
   {
      id: 2,
      img: "/icons/search.svg",
   },
   {
      id: 3,
      img: "/icons/user.svg",
   },
   {
      id: 4,
      img: "/icons/mode.svg",
   },
];

const dockApps = [
  {
    id: "finder",
    name: "Portfolio", // was "Finder"
    icon: "finder.png",
    canOpen: true,
  },
  {
    id: "safari",
    name: "Articles", // was "Safari"
    icon: "safari.png",
    canOpen: true,
  },
  {
    id: "photos",
    name: "Gallery", // was "Photos"
    icon: "photos.png",
    canOpen: true,
  },
  {
    id: "contact",
    name: "Contact", // or "Get in touch"
    icon: "contact.png",
    canOpen: true,
  },
  {
    id: "terminal",
    name: "Skills", // was "Terminal"
    icon: "terminal.png",
    canOpen: true,
  },
  {
    id: "trash",
    name: "Archive", // was "Trash"
    icon: "trash.png",
    canOpen: false,
  },
];

const blogPosts = [
  {
    id: 1,
    date: "Nov 8, 2025",
    title: "OWASP Top 10 2025: The List That Keeps Security Folks Awake",
    image: "/images/blog-owasp.webp",
    category: "Web Security",
    link: "https://www.linkedin.com/posts/djili-mohamed-amine-5017b01a0_owasp-cybersecurity-infosec-activity-7392982372570382336-IrtZ?utm_source=share&utm_medium=member_desktop&rcm=ACoAAC8akdEBjeeIxBIVUPFmDSX-vuqma8NEWoI",
  },
  {
    id: 2,
    date: "March 15, 2024",
    title: "Protection Against Social Engineering: A Real-World Case Study",
    image: "/images/blog-phishing.png",
    category: "Social Engineering",
    link: "https://www.linkedin.com/posts/djili-mohamed-amine-5017b01a0_exemple-ding%C3%A9nierie-sociale-activity-7179213652846084099--Ejh?utm_source=share&utm_medium=member_desktop&rcm=ACoAAC8akdEBjeeIxBIVUPFmDSX-vuqma8NEWoI",
  },
  {
    id: 3,
    date: "Feb 15, 2024",
    title: "Does HTTPS Mean Secure? Debunking Common Web Security Myths",
    image: "/images/blog-https.png",
    category: "Web Security",
    link: "https://www.linkedin.com/posts/djili-mohamed-amine-5017b01a0_cybersecurity-networking-security-activity-7161774264512196608-vnSl?utm_source=share&utm_medium=member_desktop&rcm=ACoAAC8akdEBjeeIxBIVUPFmDSX-vuqma8NEWoI",
  },
];

const techStack = [
  {
    category: "CyberSecurity",
    items: ["Wazuh (SIEM)", "Splunk", "MITRE ATT&CK"],
  },
  {
    category: "Sys & Net",
    items: ["Linux Hardening", "VPN IPsec", "Docker", "GNS3"],
  },
  {
    category: "App Sec",
    items: ["OWASP Top 10", "CIS Benchmarks", "JWT & Auth"],
  },
  {
    category: "Frontend",
    items: ["React.js", "TypeScript", "Tailwind CSS"],
  },
  {
    category: "Backend",
    items: ["Java Spring", "Microservices", "Python FastAPI"],
  },
  {
    category: "AI & Chain",
    items: ["Machine & Deep Learning", "Blockchain"],
  },
];

const socials = [
  {
    id: 1,
    text: "Github",
    icon: "/icons/github.svg",
    bg: "#f4656b",
    link: "https://github.com/SieGer05",
  },
  {
    id: 2,
    text: "Let's Defend",
    icon: "/icons/letsdefend.svg",
    bg: "#0d1535",
    link: "https://app.letsdefend.io/user/p1r4m1d",
  },
  {
    id: 3,
    text: "Twitter/X",
    icon: "/icons/twitter.svg",
    bg: "#ff866b",
    link: "https://x.com/SieGer45540303",
  },
  {
    id: 4,
    text: "LinkedIn",
    icon: "/icons/linkedin.svg",
    bg: "#05b6f6",
    link: "https://www.linkedin.com/in/djili-mohamed-amine-5017b01a0/",
  },
];

const photosLinks = [
  {
    id: 1,
    icon: "/icons/gicon1.svg",
    title: "Library",
  },
  {
    id: 2,
    icon: "/icons/gicon2.svg",
    title: "Memories",
  },
  {
    id: 3,
    icon: "/icons/file.svg",
    title: "Places",
  },
  {
    id: 4,
    icon: "/icons/gicon4.svg",
    title: "People",
  },
  {
    id: 5,
    icon: "/icons/gicon5.svg",
    title: "Favorites",
  },
];

const gallery = [
  {
    id: 1,
    img: "/images/gal1.png",
  },
  {
    id: 2,
    img: "/images/gal2.png",
  },
  {
    id: 3,
    img: "/images/gal3.png",
  },
  {
    id: 4,
    img: "/images/gal4.png",
  },
];

export {
  navLinks,
  navIcons,
  dockApps,
  blogPosts,
  techStack,
  socials,
  photosLinks,
  gallery,
};

const WORK_LOCATION = {
  id: 1,
  type: "work",
  name: "Work",
  icon: "/icons/work.svg",
  kind: "folder",
  children: [
    // ▶ Project 1
    {
      id: 5,
      name: "Fennec - AI Security Audit Platform",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-5",
      windowPosition: "top-[5vh] left-5", 
      children: [
        {
          id: 1,
          name: "Executive_Summary.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "Fennec is an enterprise-grade automated security auditing platform designed to bridge the gap between complex compliance standards and actionable insights.",
            "Core Architecture: Leverages a decoupled React.js frontend and Python FastAPI backend to orchestrate secure, agent-based server audits via SSH tunneling.",
            "AI Integration: Incorporates Meta Llama 4 (Maverick) to analyze audit failures against CIS Benchmarks and DGSSI standards, generating context-aware remediation steps.",
            "Impact: Reduces manual server hardening time by automating vulnerability detection and providing instant, natural language explanations for security flaws.",
          ],
        },
        {
          id: 2,
          name: "github.com/fennec",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://github.com/SieGer05/Fennec",
          position: "top-10 right-20",
        },
        {
          id: 3,
          name: "fennec.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          imageUrl: "/images/fennec-logo.png",
        },
        {
          id: 4,
          name: "System Architecture.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-60 right-20",
          imageUrl: "/images/System_Architecture.png",
        },
      ],
    },

    // ▶ Project 2
    {
      id: 6,
      name: "LogementCert - Blockchain Housing",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-52 right-80",
      windowPosition: "top-[20vh] left-7",
      children: [
        {
          id: 5,
          name: "Technical_Whitepaper.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 right-10",
          description: [
            "LogementCert is a decentralized property validation platform engineered for the 2030 World Cup in Morocco to eliminate rental fraud.",
            "Consensus Mechanism: Implements a custom Proof-of-Authority (PoA) blockchain to ensure immutable transaction history and trusted validation by authorized nodes.",
            "Security Architecture: Utilizes RSA 2048-bit encryption for digital notarization and SHA-256 hashing for data integrity across the distributed ledger.",
            "Stack: Developed with a pure Python blockchain core, FastAPI for RESTful node communication, and a responsive frontend for property owners and government authorities.",
          ],
        },
        {
          id: 6,
          name: "github.com/LogementCert",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://github.com/SieGer05/LogementCert",
          position: "top-20 left-20",
        },
        {
          id: 7,
          name: "Block_Explorer_View.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 left-80",
          imageUrl: "/images/Block_Explorer_View.jpg",
        },
      ],
    },

    // ▶ Project 3
    {
      id: 7,
      name: "SecureVault - Military Grade Encryption",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-80",
      windowPosition: "top-[33vh] left-7",
      children: [
        {
          id: 8,
          name: "Security_Architecture.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "SecureVault is a Python-based cybersecurity utility providing military-grade encryption for sensitive directory protection.",
            "Cryptographic Standards: Implements AES-256 in CBC mode via Fernet, utilizing PBKDF2HMAC-SHA256 with 600,000 iterations for key derivation to prevent brute-force attacks.",
            "Stealth Architecture: Features dual-layer obfuscation that encrypts both file contents and filenames, preventing metadata leakage and directory enumeration.",
            "Integrity Assurance: Built-in tamper detection using HMAC signature verification to automatically flag corruption or unauthorized modification attempts.",
          ],
        },
        {
          id: 9,
          name: "github.com/Secure-Vault",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://github.com/SieGer05/Secure-Vault",
          position: "top-10 right-20",
        },
        {
          id: 10,
          name: "CLI_Demo_Screenshot.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          imageUrl: "/images/secure-vault.png",
        },
      ],
    },
  ],
};

const ABOUT_LOCATION = {
  id: 2,
  type: "about",
  name: "About me",
  icon: "/icons/info.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "me.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-5",
      imageUrl: "/images/sieger-3.jpg",
    },
    {
      id: 2,
      name: "casual-me.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-28 right-72",
      imageUrl: "/images/sieger-2.jpg",
    },
    {
      id: 3,
      name: "enset-ambassador.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-52 left-80",
      imageUrl: "/images/sieger-4.jpg",
    },
    {
      id: 4,
      name: "about-me.txt",
      icon: "/images/txt.png",
      kind: "file",
      fileType: "txt",
      position: "top-60 left-5",
      subtitle: "Securing Systems & Building Tools",
      image: "/images/sieger.jpg",
      description: [
        "Hey! I’m Mohamed Amine 👋, a future Cybersecurity Engineer passionate about Blue Team operations, SOC analysis, and Threat Intelligence.",
        "I have a unique edge: I combine advanced security knowledge with strong Full-Stack skills, building secure tools and architectures using Spring Boot, React, and Python.",
        "I’m big on integrating AI into security—leveraging Machine Learning and LLMs to automate vulnerability audits and enhance intrusion detection systems.",
        "Currently, I’m looking for a PFE internship where I can apply my expertise in SIEM deployment, DevSecOps, and AI-driven defense to solve complex security challenges.",
      ],
    },
  ],
};

const RESUME_LOCATION = {
  id: 3,
  type: "resume",
  name: "Resume",
  icon: "/icons/file.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "Resume.pdf",
      icon: "/images/pdf.png",
      kind: "file",
      fileType: "pdf",
    },
  ],
};

const TRASH_LOCATION = {
  id: 4,
  type: "trash",
  name: "Trash",
  icon: "/icons/trash.svg",
  kind: "folder",
  children: [
    {
      id: "trash-passwords",
      name: "passwords.txt",
      icon: "/images/txt.png",
      kind: "file",
      fileType: "txt",
      position: "top-10 left-10",
      subtitle: "Top Secret Credentials",
      image: null,
      description: [
        "admin / admin",
        "root / 123456",
        "user / password",
        "",
        "... Just kidding!",
        "I take security seriously. All my actual secrets are encrypted with RSA and stored in a secure vault.",
        "Check out my 'About Me' to see how I actually handle security audits and SOC operations!",
      ],
    },
    {
      id: "trash-beach",
      name: "literal_sandbox.png", 
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",             
      position: "top-20 right-20",
      imageUrl: "/images/me-anyrun-beach.jpg", 
    },
    {
      id: "dexter-meme",
      name: "tonights_the_night.txt",
      icon: "/images/txt.png",
      kind: "file",
      fileType: "txt",
      position: "top-60 left-40",
      subtitle: "I see you, and I know you're interested in me.",
      image: "/images/dexter-stare.jpg", 
      description: [
        "Tonight's the night.",
        "I watched you scroll. I watched you click.",
        "You think you're analyzing my portfolio, but I'm analyzing your needs.",
        "",
        "The Code says: Don't get caught.",
        "But for this position? I'm willing to turn myself in.",
        "",
        "(Hire me before my Dark Passenger takes over.)"
      ],
    },
  ],
};

export const locations = {
  work: WORK_LOCATION,
  about: ABOUT_LOCATION,
  resume: RESUME_LOCATION,
  trash: TRASH_LOCATION,
};

const INITIAL_Z_INDEX = 1000;

const WINDOW_CONFIG = {
  finder: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null, isMinimized: false, isMaximized: false },
  contact: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null, isMinimized: false, isMaximized: false },
  resume: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null, isMinimized: false, isMaximized: false },
  safari: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null, isMinimized: false, isMaximized: false },
  photos: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null, isMinimized: false, isMaximized: false },
  terminal: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null, isMinimized: false, isMaximized: false },
  txtfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null, isMinimized: false, isMaximized: false },
  imgfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null, isMinimized: false, isMaximized: false },
};

export { INITIAL_Z_INDEX, WINDOW_CONFIG };