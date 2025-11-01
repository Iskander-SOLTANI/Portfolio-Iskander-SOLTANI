import{FaUser, FaHome, FaFolderOpen, FaEnvelopeOpen} from 'react-icons/fa';

import { RiBriefcase4Fill, RiGraduationCapFill } from 'react-icons/ri';

import skillsImag1 from '../src/assets/skills-1.png';
import skillsImag2 from '../src/assets/skills-2.png';
import skillsImag3 from '../src/assets/skills-3.png';
import skillsImag4 from '../src/assets/skills-4.png';
import skillsImag5 from '../src/assets/skills-5.png';
import skillsImag6 from '../src/assets/skills-6.png';
import skillsImag7 from '../src/assets/skills-7.png';
import skillsImag8 from '../src/assets/skills-8.png';
import skillsImag9 from '../src/assets/skills-9.png';

import projectImg1 from '../src/assets/project-1.jpg';
import projectImg2 from '../src/assets/project-2.jpg';
import projectImg3 from '../src/assets/project-3.jpg';
import projectImg4 from '../src/assets/project-4.jpg';


export const links = [
    {
        name : "Home",
        icon : <FaHome className='nav-icon'/>,
        path : '/',
    },
    {
        name : "About",
        icon : <FaUser className='nav-icon'/>,
        path : '/about',
    },
    {
        name : "Portfolio",
        icon : <FaFolderOpen className='nav-icon'/>,
        path : '/portfolio',
    },
    {
        name : "Contact",
        icon : <FaEnvelopeOpen className='nav-icon'/>,
        path : '/contact', 
    }
];

export const PersonalInfo = [
    {
        title: "First Name :",
        description: "Iskander",
    },

    {
        title: "Last Name :",
        description: "SOLTANI",
    },

    {
        title: "Age :",
        description: "26 Years",
    },

    {
        title: "Nationality :",
        description: "Tunisian",
    },

    {
        title: "Address :",
        description: "Tunis, El Kef",
    },

    {
        title: "Phone :",
        description: "+21623 783 319",
    },

    {
        title: "Email :",
        description: "sol.iskander.dev@gmail.com",
    },

    {
        title: "Languages :",
        description: "French, English, native Arabic",
    }
];

export const StatsData = [
    {
        no:"1 ",
        title: "Year of Experience",
    },

    {
        no:"5+",
        title: "Completed <br /> projects",
    },

    {
        no:"10+ ",
        title: 'Happy <br /> customers',
    },

    {
        no:"15+ ",
        title: 'Awards <br /> won',
    },

];

export const skill =[
    {
        id : 1,
        image : skillsImag1,
        title : "HTML5",
        level : "Advanced",
        category: "frontend"
    },

        {
        id : 2,
        image : skillsImag2,
        title : "Css3",
        level : "Advanced",
        category: "frontend"
    },

    {
        id : 3,
        image : skillsImag3,
        title : "JavaScript",
        level : "Intermediate",
        category: "frontend"
    },

        {
        id : 4,
        image : skillsImag4,
        title : "React",
        level : "Intermediate",
        category: "frontend"
    },
       
    {
        id : 5,
        image : skillsImag5,
        title : "Angular",
        level : "Intermediate",
        category: "frontend"
    },

    {
        id : 6,
        image : skillsImag6,
        title : "Java",
        level : "Intermediate",
        category: "backend"
    },

    {
        id : 7,
        image : skillsImag7,
        title : "Spring boot",
        level : "Intermediate",
        category: "backend"
    },

    {
        id : 8,
        image : skillsImag8,
        title : "Python",
        level : "Intermediate",
        category: "backend"
    },

    {
        id : 9,
        image : skillsImag9,
        title : "Laravel",
        level : "Intermediate",
        category: "backend"
    },
]

export const resume =[
    {
        id: 1,
        category: "experience",
        icon: <RiBriefcase4Fill/>,
        year: "2022 - Present",
        title: "Frontend Developer",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
        id : 2,
        category: "experience",
        icon: <RiBriefcase4Fill/>,
        year: "2021 - 2022",
        title: "Backend Developer",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
      {
        id : 3,
        category: "education",
        icon: <RiGraduationCapFill/>,
        year: "2022 - 2024",
        title: "Master Degree in Intelelligent web applications",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
        id : 4,
        category: "education",
        icon: <RiGraduationCapFill/>,
        year: "2019 - 2022",
        title: "Bachelor's Degree in Computer Science",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }
]

export const portfolio = [
    {
        id: 1,
        image: projectImg1,
        title: "Leave request management application",
        desc: "A web application that allows employees to request leave and managers to approve or reject those requests.",
        skills: [skillsImag1, skillsImag2, skillsImag3],
        link: "#"
    },
        {
        id: 2,
        image: projectImg2,
        title: "E-commerce website",
        desc: "An online platform for buying and selling products with features like product listings, shopping cart, and payment gateway integration.",
        skills: [skillsImag1, skillsImag2, skillsImag3],
        link: "#"
    },
        {
        id: 3,
        image: projectImg3,
        title: "Book Social Network",
        desc: "A social networking site for book lovers to share reviews, recommendations, and connect with other readers.",
        skills: [skillsImag1, skillsImag2, skillsImag3],
        link: "#"
    },
        {
        id: 4,
        image: projectImg4,
        title: "Portfolio Website",
        desc: "A personal portfolio website to showcase projects, skills, and experience to potential employers or clients.",
        skills: [skillsImag1, skillsImag2, skillsImag3],
        link: "#"
    }
]