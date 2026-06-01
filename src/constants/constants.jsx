import NITTLogo from '../assets/journeyLogos/NITT_logo.webp';
import AMEXLogo from '../assets/journeyLogos/AMEX.webp';
import CISCOlogo from '../assets/journeyLogos/cisco.webp'
import {
    awsLogo,
    cssLogo,
    gitLogo,
    htmlLogo,
    javascriptLogo,
    nodeJsLogo,
    npmLogo,
    reactLogo,
    reduxLogo,
    typescriptLogo
} from '../assets/techLogos'
import {handleDownload} from "../common/utils.js";
import React from "react";

export const journeyItems = [
    {
    title: "NIT Trichy",
    year: "2018 - 2022",
    description: "Bachelor of Technology in Electronics and Communication Engineering",
    image: NITTLogo
   },
    {
        title: "American Express",
    year: "2022 - 2026",
    description: "Software Engineer 2 at American Express",
    image: AMEXLogo
    },
    {
        title: "Cisco",
        year: "2026 - present",
        description: "Software Engineer 3 at Cisco",
        image: CISCOlogo
    }
];

export const skillSet = [
    {
        name: "HTML",
        description: "Markup language for creating web pages.",
        logo: htmlLogo
    },
    {
        name: "CSS",
        description: "Style sheet language for designing web pages.",
        logo: cssLogo
    },
    {
        name: "JavaScript",
        description: "Programming language for web development.",
        logo: javascriptLogo
    },
    {
        name: "TypeScript",
        description: "Superset of JavaScript with static typing.",
        logo: typescriptLogo
    },
    {
        name: "React",
        description: "JavaScript library for building user interfaces.",
        logo: reactLogo
    },
    {
        name: "Redux",
        description: "State management library for JavaScript apps.",
        logo: reduxLogo
    },
    {
        name: "Node.js",
        description: "JavaScript runtime for server-side development.",
        logo: nodeJsLogo
    },
    {
        name: "AWS",
        description: "Cloud computing platform by Amazon.",
        logo: awsLogo
    },
    {
        name: "Git",
        description: "Version control system for tracking changes in code.",
        logo: gitLogo
    },
    {
        name: "npm",
        description: "Package manager for JavaScript.",
        logo: npmLogo
    }
];

export const responses = {
    "technologies": <p>Varun works with <b style={{color: 'yellow'}}>React, JavaScript, TypeScript, Node.js, HTML5, CSS3, Redux, Git, npm, and AWS</b>. He enjoys building polished interfaces, resilient frontend systems, and scalable web applications.</p>,
    "experience": <p>Varun is a <b style={{color: 'yellow'}}>Software Engineer 3 at Cisco (2026-Present)</b>. Before Cisco, he worked at <b style={{color: 'yellow'}}>American Express from 2022-2026</b>, building user-focused web experiences and improving application performance.</p>,
    "learning": "Right now, Varun is going deeper into full stack development, advanced React patterns, Java, AWS, AI-powered product experiences, and performance optimization.",
    "hobbies": "When not coding, Varun enjoys exploring space documentaries (hence the cosmic theme!), playing strategy games, reading tech blogs, and experimenting with creative coding projects. He believes creativity fuels better development.",
    "contact": <p>You can reach Varun through the contact form, email him at <a href="mailto:varunsagaryenni@gmail.com">varunsagaryenni@gmail.com</a>, connect on <a href="https://linkedin.com/in/varunkumaryenni" target="_blank" rel="noopener noreferrer">LinkedIn</a>, or view his code on <a href="https://github.com/VarunYenni" target="_blank" rel="noopener noreferrer">GitHub</a>.</p>,
    "philosophy": "Varun believes in writing clean, maintainable code and putting users first. He thinks great development combines technical excellence with empathy - understanding what users really need and crafting experiences that feel effortless.",
    "projects": <p>Varun's highlighted projects include this space-themed portfolio and <b style={{color: 'yellow'}}>GK Daily Insights Hub</b>, an AI-powered current affairs app with daily insights, quizzes, and weekly digests. His GitHub has the latest experiments.</p>,
    "portfolioProject": <p>This portfolio is a space-themed React app showcasing Varun's skills, journey, projects, resume, and contact flow. It is built with React, CSS, JavaScript, animations, and a custom chatbot experience.</p>,
    "gkProject": <p><b style={{color: 'yellow'}}>GK Daily Insights Hub</b> is an AI-powered web app for daily current-affairs insights, quizzes, and weekly digests. Live app: <a href="https://gk-daily.vercel.app/" target="_blank" rel="noopener noreferrer">gk-daily.vercel.app</a>.</p>,
    "skills": "Frontend: React, JavaScript, TypeScript, HTML5, CSS3, Redux, responsive design, animations, and performance optimization. Backend/cloud interests: Node.js, Java, AWS, and full stack architecture. Soft skills: ownership, communication, problem-solving, and user empathy.",
    "future": "Varun is excited about exploring AI integration in web development, going deep dive into full stack development, advanced animation libraries, and contributing to open source projects. He's always looking for challenges that push the boundaries of what's possible on the web.",
    "okay": "Great! If you have any more questions about Varun's skills, experience, or interests, feel free to ask. I'm here to help! 😊",
    "resume": <p>You can download Varun's resume here: <button className="chatbot-inline-button" onClick={() => handleDownload()} aria-label="launch resume">Launch Resume</button></p>,
    "hire": "If you're interested in hiring or collaborating with Varun, the best path is the contact form or LinkedIn. He is especially interested in full stack, frontend platform, React, performance, and AI-enabled product work.",
    'achievements': <p>Varun has been recognized for his contributions to projects at American Express and received <b style={{color: 'yellow'}}>Blue Rewards</b> for playing a key role in improving application performance and user experience. He also received <b style={{color: 'yellow'}}>Merit Awards</b> for his academic excellence from State Government of Andhra Pradesh and from Central Government of India</p>,
    "bye": "Goodbye! If you have more questions later, feel free to ask. Have a great day! 😊",
    "education": <p>Varun holds a B.Tech in Electronics and Communication Engineering from <b style={{color: 'yellow'}}>NIT Trichy (2018-2022)</b>. His education gave him a strong foundation in problem-solving, engineering thinking, and technical fundamentals.</p>,
    "location": "Varun is based in Bangalore, India.",
    "name": "Varun's full name is Varunkumar Yenni. He also uses Varun Yenni and Varun Kumar Yenni online.",
    "role": "Varun is a Fullstack Developer with strong frontend depth in React, JavaScript, TypeScript, UI engineering, animations, and performance-focused web development.",
    "strengths": "Varun's strengths are building polished user experiences, debugging complex UI behavior, improving performance, learning quickly, and balancing product empathy with engineering quality.",
    "availability": "For opportunities or collaborations, please reach out through LinkedIn, email, or the portfolio contact form. The chatbot cannot confirm real-time availability, but it can point you to the best contact channels.",
    "github": <p>Varun's GitHub is <a href="https://github.com/VarunYenni" target="_blank" rel="noopener noreferrer">github.com/VarunYenni</a>.</p>,
    "linkedin": <p>Varun's LinkedIn is <a href="https://linkedin.com/in/varunkumaryenni" target="_blank" rel="noopener noreferrer">linkedin.com/in/varunkumaryenni</a>.</p>
};

export const suggestedQuestions = [
    "What is Varun's current role?",
    "Tell me about Varun's experience",
    "What projects has Varun built?",
    "What technologies does Varun work with?",
    "How can I contact Varun?",
    "Download Varun's resume",
    "Where is Varun based?",
    "What are Varun's strengths?",
    "Tell me about GK Daily Insights Hub",
    "What is Varun currently learning?"
];

export const categories = [
    { keywords: ['current role', 'role', 'designation', 'title', 'fullstack', 'full stack', 'frontend developer', 'software engineer'], response: responses.role },
    { keywords: ['technology', 'technologies', 'tech stack', 'stack', 'framework', 'frontend', 'backend', 'react', 'javascript', 'typescript', 'node', 'node.js', 'aws', 'redux', 'html', 'css'], response: responses.technologies },
    { keywords: ['experience', 'work experience', 'career', 'professional', 'cisco', 'american express', 'amex', 'company', 'previous company'], response: responses.experience },
    { keywords: ['education', 'study', 'school', 'college', 'degree', 'b tech', 'btech', 'nit', 'nit trichy'], response: responses.education },
    { keywords: ['learn', 'learning', 'studying', 'currently learning', 'current learning', 'upskilling'], response: responses.learning },
    { keywords: ['hobbies', 'interests', 'fun', 'free time', 'outside work'], response: responses.hobbies },
    { keywords: ['contact', 'reach', 'email', 'mail', 'phone', 'connect', 'message'], response: responses.contact },
    { keywords: ['philosophy', 'approach', 'believe', 'ethics', 'values', 'principles'], response: responses.philosophy },
    { keywords: ['gk daily', 'daily insights', 'quiz', 'quizzes', 'current affairs', 'digest'], response: responses.gkProject },
    { keywords: ['portfolio project', 'this portfolio', 'portfolio website', 'space themed portfolio'], response: responses.portfolioProject },
    { keywords: ['project', 'projects', 'build', 'built', 'github projects', 'side project'], response: responses.projects },
    { keywords: ['skill', 'skills', 'good at', 'expert'], response: responses.skills },
    { keywords: ['strength', 'strengths', 'why hire', 'best at', 'stand out'], response: responses.strengths },
    { keywords: ['future', 'next', 'goal', 'goals', 'plan', 'plans'], response: responses.future },
    { keywords: ['available', 'availability', 'open to work', 'open for work'], response: responses.availability },
    { keywords: ['hire', 'recruit', 'job opportunity', 'opportunity', 'collaborate', 'work with'], response: responses.hire },
    { keywords: ['resume', 'cv', 'curriculum vitae', 'download resume'], response: responses.resume },
    { keywords: ['location', 'where', 'based', 'city', 'bangalore', 'bengaluru'], response: responses.location },
    { keywords: ['full name', 'name', 'varunkumar', 'varun kumar', 'varun yenni'], response: responses.name },
    { keywords: ['github', 'code', 'repository', 'repo'], response: responses.github },
    { keywords: ['linkedin', 'linked in', 'profile'], response: responses.linkedin },
    { keywords: ['bye', 'goodbye', 'see you', 'good night'], response: responses.bye },
    { keywords: ['okay', 'alright', 'sounds good', 'got it', 'understood', 'sure', 'ok', 'thanks', 'thank you'], response: responses.okay },
    { keywords: ['achievements', 'awards', 'recognition', 'accomplishments'], response: responses.achievements },
    { keywords: ['hello', 'hi', 'hey', 'greetings', 'good morning', 'good evening'], response: "Hello! I'm here to tell you all about Varun. You can ask about his role, experience, skills, projects, resume, education, or contact details. 😊" }
];

export const defaultMessage = "Hi there! 👋 I'm Varun's chat bot. Ask me about his role, experience, skills, projects, resume, education, or contact details.";
export const unAvailableCategory = "I do not know that one yet. Try asking about Varun's role, Cisco or American Express experience, projects, skills, resume, education, location, GitHub, LinkedIn, or contact details.";

export const projects = [
    {
        title: "Portfolio",
        description: "Space themed portfolio showcasing Varun's skills, projects, and experience. Built with React, CSS, JavaScript and features a cosmic design",
        image: "../portfolio.webp",
        gitLink: "https://github.com/VarunYenni/varunkumar-yenni-portfolio",
        live: "https://varunyenni.vercel.app/"
    },
    {
        title: "Gk Daily Insights Hub",
        description: "An AI powered web application providing daily insights, quizzes and weekly digests on current affairs, designed to enhance general knowledge.",
        image: "../gkDaily.webp",
        gitLink: "https://github.com/VarunYenni/gk-daily-insight-hub",
        live: "https://gk-daily.vercel.app/"
    },
]
