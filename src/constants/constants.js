import NITTLogo from '../assets/journeyLogos/NITT_logo.png';
import AMEXLogo from '../assets/journeyLogos/AMEX.png';
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
    }];

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
]