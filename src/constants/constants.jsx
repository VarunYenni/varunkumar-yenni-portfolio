import NITTLogo from '../assets/journeyLogos/NITT_logo.webp';
import AMEXLogo from '../assets/journeyLogos/AMEX.webp';
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
    year: "2022 - Present",
    description: "Software Engineer 2 at American Express",
    image: AMEXLogo
    },
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
    "technologies": <p>Varun works with <b style={{color: 'yellow'}}>React, JavaScript, Node, HTML5, CSS3</b>, and modern frontend frameworks. He's passionate about creating seamless user experiences and scalable applications. Currently exploring Next.js, Java, AWS and AI Tech!</p>,
    "experience": <p>Varun is a <b style={{color: 'yellow'}}>Software Engineer 2 at American Express (2022-Present)</b> with a B.Tech in Electronics and Communication from NIT Trichy (2018-2022). He combines technical expertise with creative problem-solving.</p>,
    "learning": "Right now, Varun is diving deep into advanced React patterns, exploring Full Stack Development, and learning about performance optimization. He's always excited about emerging frontend technologies!",
    "hobbies": "When not coding, Varun enjoys exploring space documentaries (hence the cosmic theme!), playing strategy games, reading tech blogs, and experimenting with creative coding projects. He believes creativity fuels better development.",
    "contact": "You can reach Varun through the contact form on his portfolio, connect on LinkedIn, or check out his projects on GitHub. He's always open to discussing new opportunities and collaborations!",
    "philosophy": "Varun believes in writing clean, maintainable code and putting users first. He thinks great development combines technical excellence with empathy - understanding what users really need and crafting experiences that feel effortless.",
    "projects": "Varun has worked on various frontend projects focusing on user experience and performance. He enjoys building interactive applications and is always working on something new. Check out his GitHub for the latest experiments!",
    "skills": "Frontend: React, JavaScript, HTML5, CSS3, responsive design. Tools: Git, modern build tools, performance optimization. Soft skills: problem-solving, user empathy, continuous learning mindset.",
    "future": "Varun is excited about exploring AI integration in web development, going deep dive into full stack development, advanced animation libraries, and contributing to open source projects. He's always looking for challenges that push the boundaries of what's possible on the web.",
    "okay": "Great! If you have any more questions about Varun's skills, experience, or interests, feel free to ask. I'm here to help! 😊",
    "resume": <button style={{background: "gray",color: 'white', borderRadius: "5px solid white"}} onClick={() => handleDownload()} aria-label="launch resume">Launch Resume</button>,
    "hire": "If you're interested in hiring Varun, you can reach out via the contact form on his portfolio or connect with him on LinkedIn. He's always open to new opportunities and collaborations!",
    'achievements': <p>Varun has been recognized for his contributions to projects at American Express and received <b style={{color: 'yellow'}}>Blue Rewards</b> for playing a key role in improving application performance and user experience. He also received <b style={{color: 'yellow'}}>Merit Awards</b> for his academic excellence from State Government of Andhra Pradesh and from Central Government of India</p>,
    "bye": "Goodbye! If you have more questions later, feel free to ask. Have a great day! 😊",
    "education": <p>Varun holds a B.Tech in Electronics and Communication Engineering from <b style={{color: 'yellow'}}>NIT Trichy (2018–2022)</b>, one of the top institutes of India. His education provided a strong foundation in problem-solving and technical skills, which he applies to his work as a software engineer.</p>
};

export const suggestedQuestions = [
    "What technologies does Varun work with?",
    "Tell me about Varun's experience",
    "What's Varun currently learning?",
    "What are Varun's hobbies?",
    "How can I contact Varun?",
    "What's Varun's development philosophy?"
];

export const categories = [
    { keywords: ['technology', 'technologies', 'stack', 'framework', 'frontend', 'backend'], response: responses.technologies },
    { keywords: ['experience', 'work', 'job', 'american express', 'company'], response: responses.experience },
    { keywords: ['education', 'study', 'school', 'college'], response: responses.education },
    { keywords: ['learn', 'studying', 'current'], response: responses.learning },
    { keywords: ['hobbies', 'interests', 'fun', 'free time'], response: responses.hobbies },
    { keywords: ['contact', 'reach', 'email', 'hire'], response: responses.contact },
    { keywords: ['philosophy', 'approach', 'believe', 'ethics', 'values', 'principles'], response: responses.philosophy },
    { keywords: ['project', 'build', 'portfolio'], response: responses.projects },
    { keywords: ['skill', 'good at', 'expert'], response: responses.skills },
    { keywords: ['future', 'next', 'goal', 'plan'], response: responses.future },
    { keywords: ['hire', 'recruit', 'job', 'work with'], response: responses.hire },
    { keywords: ['resume', 'cv', 'curriculum vitae'], response: responses.resume },
    { keywords: ['bye', 'goodbye', 'see you', 'Good Night'], response: responses.bye },
    { keywords: ['okay', 'alright', 'sounds good', 'got it', 'understood', 'sure', 'ok', 'Thanks', 'Thank you'], response: responses.okay },
    { keywords: ['achievements', 'awards', 'recognition', 'accomplishments'], response: responses.achievements },
    { keywords: ['hello', 'hi', 'hey', 'greetings', 'Good Morning', 'Good Evening'], response: "Hello! I'm here to tell you all about Varun. What would you like to know? 😊" }
];

export const defaultMessage = "Hi there! 👋 I'm Varun's chat bot. Ask me anything about his skills, experience, or interests!";
export const unAvailableCategory = "That's an interesting question! I can tell you about Varun's technologies, experience, current learning, hobbies, contact info, or development philosophy. What interests you most?";

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