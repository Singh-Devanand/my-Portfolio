import {
  FaCode,
  FaReact,
  FaServer,
  FaDatabase,
  FaLaptopCode,
  FaRobot,
  FaTools,
  FaNodeJs,
  FaCar,
  FaBlog,
  FaAward,
} from 'react-icons/fa';

import profileImg from '../assets/devanand.jpeg';
import projectImg1 from '../assets/interview.png';
import projectImg2 from '../assets/CarRental.png';
import projectImg3 from '../assets/Blogify.png';

export const assets = {
  profileImg,
};

// Personal Information
export const personalInfo = {
  name: 'Devanand Singh',
  title: 'Full Stack Developer | Java & DSA',
  email: 'devanandsingh61157@gmail.com',
  phone: '8090453628',
  location: 'Ghaziabad, Uttar Pradesh',
  linkedin: 'https://linkedin.com/in/devanand-singh-6576952a8/',
  github: 'https://github.com/Singh-Devanand',
  leetcode: 'https://leetcode.com/u/Devanand_Singh/',
  summary:
    'Information Technology undergraduate with hands-on experience in full-stack web development and problem-solving. Proficient in Java, React.js and Data Structures & Algorithms. Built scalable web applications using the MERN stack and solved 350+ coding problems across LeetCode and GeeksforGeeks. Seeking Software Development Engineer (SDE) and Full-Stack Development opportunities.',
};

// About Section
export const aboutInfo = [
  {
    icon: FaLaptopCode,
    title: 'Full Stack Development',
    description:
      'Building full-stack web applications using React.js, Node.js, Express.js and MongoDB.',
    color: 'text-purple',
  },
  {
    icon: FaRobot,
    title: 'AI Integration',
    description:
      'Integrating Google Gemini AI into web applications to generate interview questions, feedback and personalized preparation reports.',
    color: 'text-pink',
  },
  {
    icon: FaCode,
    title: 'Problem Solving',
    description:
      'Practicing Data Structures and Algorithms in Java with 350+ problems solved across LeetCode and GeeksforGeeks.',
    color: 'text-blue',
  },
];

// Technical Skills
export const skills = [
  {
    title: 'Programming Languages',
    icon: FaCode,
    description:
      'Writing programs and solving coding problems using Java and JavaScript.',
    tags: ['Java'],
  },
  {
    title: 'Frontend Development',
    icon: FaReact,
    description:
      'Building responsive and interactive user interfaces for web applications.',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'Tailwind CSS', 'React.js'],
  },
  {
    title: 'Backend Development',
    icon: FaServer,
    description:
      'Developing server-side applications and RESTful APIs.',
    tags: ['Node.js', 'Express.js', 'REST APIs'],
  },
  {
    title: 'Database Management',
    icon: FaDatabase,
    description:
      'Storing, retrieving and managing application data using databases.',
    tags: ['MongoDB', 'MySQL'],
  },
  {
    title: 'Core Computer Science',
    icon: FaLaptopCode,
    description:
      'Understanding fundamental computer science concepts for software development and technical interviews.',
    tags: [
      'DSA',
      'OOPs',
      'DBMS',
      'Operating Systems',
      'Computer Networks',
    ],
  },
  {
    title: 'Developer Tools',
    icon: FaTools,
    description:
      'Using development tools for coding, version control and collaboration.',
    tags: ['Git', 'GitHub', 'VS Code'],
  },
];

// Projects — aligned with the latest resume
export const projects = [
  {
    title: 'Interview AI',
    description:
      'An AI-powered interview preparation platform that generates interview questions and feedback. Integrated Google Gemini AI to analyze interview-related information and create personalized preparation reports. Developed REST APIs using Node.js and Express.js to store and retrieve interview reports from MongoDB.',
    image: projectImg1,
    tech: [
      'React',
      'Node.js',
      'Express.js',
      'MongoDB',
      'Gemini AI',
    ],
    icons: [FaRobot, FaReact, FaNodeJs, FaDatabase],
    demo: '#',
    code: 'https://github.com/Singh-Devanand/Interview_Ai_Project',
  },
  {
    title: 'Car Rental Website',
    description:
      'Developed a responsive full-stack car rental platform featuring vehicle search, filtering, booking and availability validation. Implemented JWT authentication, role-based access control and RESTful APIs. Built an Owner Dashboard with vehicle CRUD operations and booking management, using MongoDB for persistence with form validation and error handling.',
    image: projectImg2,
    tech: [
      'React.js',
      'Node.js',
      'Express.js',
      'MongoDB',
      'Tailwind CSS',
    ],
    icons: [FaCar, FaReact, FaNodeJs, FaDatabase],
    demo: '#',
    code: 'https://github.com/Singh-Devanand/Car-Rental',
  },
  {
    title: 'Blogify Website',
    description:
      'Developed a blog platform using Node.js, Express.js, EJS and MongoDB with server-rendered views for blog listing and creation. Implemented user signup/signin and cookie-based authentication middleware. Designed MongoDB-backed models for users, blogs and comments, with static asset and upload handling.',
    image: projectImg3,
    tech: ['Node.js', 'Express.js', 'MongoDB', 'EJS'],
    icons: [FaBlog, FaNodeJs, FaDatabase],
    demo: '#',
    code: 'https://github.com/Singh-Devanand/Blogify-website',
  },
];

// Academic Journey
export const workData = [
  {
    role: 'Bachelor of Technology — Information Technology',
    company: 'KIET Group of Institutions, Ghaziabad',
    duration: '2023 – 2027',
    description:
      'Currently pursuing B.Tech in Information Technology with a CGPA of 8.05/10. Developing skills in full-stack development, Java programming, Data Structures & Algorithms, and core computer science subjects.',
    color: 'purple',
  },
  {
    role: 'Higher Secondary — Class 12',
    company: 'Central Public Academy, Azamgarh',
    duration: '2021 – 2022',
    description:
      'Completed Higher Secondary education with 79.8%.',
    color: 'pink',
  },
  {
    role: 'High School — Class 10',
    company: 'Brio World Academy, Azamgarh',
    duration: '2019 – 2020',
    description:
      'Completed High School education with 79.2%.',
    color: 'blue',
  },
];

// Achievements
export const achievements = [
  {
    icon: FaCode,
    title: '350+ Coding Problems',
    description:
      'Solved 350+ coding problems across LeetCode and GeeksforGeeks.',
  },
  {
    icon: FaLaptopCode,
    title: 'Coding & Technical Events',
    description:
      'Participated in coding contests and technical events, demonstrating problem-solving and analytical skills.',
  },
];

// Certifications
export const certificates = [
  {
    title: 'AWS Certificate',
    issuer: 'Amazon Web Services',
    icon: FaAward,
  },
];