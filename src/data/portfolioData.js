import { video } from "framer-motion/client";

export const personalData = {
  name: "Rabijith K R",
  title: "Electronics & Communication Engineer",
  subtitle: "IoT Developer | Web Development Enthusiast",
  tagline: "Building intelligent solutions through embedded systems, IoT innovation, and modern web technologies.",
  location: "Palakkad, Kerala, India",
  email: "rabijithkr002@gmail.com",
  phone: "+91 7559938874",
  linkedin: "https://linkedin.com/in/rabijith-k-r",
  github: "https://github.com/Rabijith-KR",
  about: "I am an Electronics and Communication Engineering graduate passionate about developing innovative solutions that bridge hardware and software. With hands-on experience in IoT systems, embedded technologies, and frontend development, I enjoy transforming ideas into practical applications that solve real-world problems.",
  cgpa: "7.55",
};

export const skills = {
  programming: [
    { name: "Python", icon: "SiPython" },
    { name: "C", icon: "SiC" },
    { name: "JavaScript", icon: "SiJavascript" },
    { name: "SQL", icon: "SiMysql" },
  ],
  web: [
    { name: "HTML5", icon: "SiHtml5" },
    { name: "CSS3", icon: "FaCss3Alt" },
    { name: "JavaScript", icon: "SiJavascript" },
    { name: "React", icon: "SiReact" },
    { name: "Tailwind CSS", icon: "SiTailwindcss" },
  ],
  embedded: [
    { name: "Arduino", icon: "SiArduino" },
    { name: "ESP32", icon: "SiEspressif" },
    { name: "RFID", icon: "FaMicrochip" },
    { name: "Sensors", icon: "MdSensors" },
  ],
  tools: [
    { name: "Git", icon: "SiGit" },
    { name: "GitHub", icon: "SiGithub" },
    { name: "VS Code", icon: "VscVscode" },
    { name: "Arduino IDE", icon: "SiArduino" },
  ],
  concepts: [
    "Embedded Systems",
    "IoT Systems",
    "Responsive Web Design",
    "Sensor Integration",
  ]
};

export const projects = [
  {
    id: "responsive-website",
    title: "Responsive Interactive Celebration Website",
    description:  "A responsive and interactive celebration web application designed to create personalized digital experiences for special occasions. The reusable architecture allows the website to be customized for birthdays, anniversaries, weddings, friendships, and other memorable events through simple modifications to content, media, and themes.",
    technologies: ["HTML5", "CSS3", "JavaScript", "GitHub Pages"],
    features: [
      "Animations and Music integration",
      "Galleries and Quizzes",
      "Timelines and Countdown timers",
      "Customizable content",
      "Reusable celebration templates",
      "Typing effects and Confetti animations"
    ],
    github: "https://github.com/Rabijith-KR/Birthday-surprise-website", 
    demo: "https://rabijith-kr.github.io/Birthday-surprise-website/",
    images: ["/assets/projects/web1.jpg", "/assets/projects/web2.jpg" , "/assets/projects/web3.jpg"] // Placeholders
  },
  {
    id: "voting-system",
    title: "Authenticated Voting System",
    description: "The Authenticated Voting System (AVM) is a secure electronic voting system developed to improve the transparency and reliability of the election process. It uses dual authentication through RFID cards and R307 fingerprint recognition to ensure that only registered voters can cast their votes. The system incorporates three master cards for secure voter registration, controlled voting sessions, and restricted result access. Voting data is stored in EEPROM to retain information during power interruptions. By automating voter verification and access control, the system minimizes unauthorized voting and enhances election integrity."
,
    technologies: ["Arduino", "RFID Module", "Fingerprint Sensor", "C++"],
    features: [
      "Dual authentication (RFID + Fingerprint)",
      "Duplicate vote prevention",
      "Hardware interfacing",
      "Secure electronic voting",
      "Restricted Result Access",
      "Controlled Voting Access",
    ],
    github: "#", 
    demo: "",
    images: ["/assets/projects/vote-1.jpg","/assets/projects/vote-2.jpg"] ,
    video : ["https://drive.google.com/file/d/11d7lmusxFMWScru8NwxZH0jSHAwMNmDY/view?usp=sharing"]
  },
  {
    id: "sip-puff",
    title: "Sip-and-Puff Assistive Interface",
    description: "This project provides a low-latency, non-invasive assistive technology solution for individuals with severe motor impairments, enabling them to control digital devices using breath-based inputs. By utilizing a high-precision BMP280 pressure sensor to detect 'SIP' (negative pressure) and 'PUFF' (positive pressure) patterns, an ESP32 microcontroller processes these fluctuations in real-time and converts them into HID commands, such as mouse clicks or keyboard strokes. The system is designed for portability and ease of use, featuring a hygienic, food-grade mouthpiece and visual feedback via LED indicators to ensure a reliable and seamless user experience",
    technologies: ["ESP32", "BMP280 Sensor", "IoT"],
    features: [
      "Real-time Processing: Uses the dual-core ESP32 to ensure low-latency conversion of breath inputs into digital commands.",
      "High-Precision Sensing: Employs the BMP280 sensor via the I2C protocol for accurate, noise-free pressure detection.",
      "Wireless Connectivity: Integrates built-in Bluetooth and Wi-Fi to provide seamless wireless control",
      "Human-Centric Design: Incorporates a food-grade mouthpiece and visual LED feedback to prioritize user safety and ease of use."
    ],
    github: "#",
    demo: "",
    images: ["/assets/projects/sip-1.jpg"]
  },
  {
    id: "smart-medicine",
    title: "Smart Medicine Storage Dispenser",
    description: "The Solar-Powered Portable Smart Medicine Storage & Dispensing System was developed to address the challenges faced by healthcare workers, such as ASHA workers, in transporting temperature-sensitive medicines during field visits. The system provides secure and portable medicine storage with dual-temperature compartments for both refrigerated and room-temperature medicines. It features real-time temperature monitoring and RFID-based authentication for controlled access. Powered by AC supply with solar backup during power outages, the system ensures uninterrupted operation and reliable medicine preservation in remote areas.",
    technologies: ["ESP32", "RFID", "DS18B20", "LCD Display", "Peltier Module","Solar Panel with Battery Backup","Solar Charge Controller","Relay Module","C++"],
    features: [
      "Smart medicine storage with RFID authentication",
      "Real-time Temperature monitoring and control",
      "Dual-temperature compartments for cold and room-temperature medicines",
      "LCD interface for system status and medicine information",
      "Portable dispensing system",
      "Solar-powered operation with AC backup support"
    ],
    github: "#",
    demo: "",
    images: ["/assets/projects/med-1.jpg","/assets/projects/med-1.jpg"]
    
  }
];

export const experience = [
  {
    id: "tcs-intern",
    role: "Industry Study Intern",
    company: "TCS BFSI Digital Garage, Trivandrum",
    date: "January 2026 – February 2026",
    responsibilities: [
      "Assistive technology prototype development",
      "Testing and validation",
      "Industry workflows"
    ]
  },
  {
    id: "iot-intern",
    role: "IoT and Robotics Intern",
    company: "Regional Centre, Edappally, Kochi",
    date: "July 2024",
    responsibilities: [
      "Arduino projects",
      "Sensors and actuators integration",
      "LCD modules interfacing",
      "IoT automation"
    ]
  }
];

export const education = [
  {
    degree: "B.Tech in Electronics and Communication Engineering",
    institution: "College of Engineering Chengannur",
    period: "2022–2026",
    cgpa: "7.55"
  }
];

export const certifications = [
  {
    title: "Python Mastery",
    issuer: "Udemy",
    date: "23-10-2025",
    link: "https://www.udemy.com/certificate/UC-31625965-0a36-4f49-afa8-f8eb45c891d4/"
  }
];
