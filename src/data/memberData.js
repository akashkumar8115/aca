import Shadab from '../assets/abouts/Shadab.jpg'
import Manish from '../assets/abouts/Manish.png'
import Manoj from '../assets/abouts/Manoj.jpg'
import Akash from '../assets/abouts/akash.jpg'
import Avinesh from '../assets/abouts/Avinesh.jpg'
import Deepti from '../assets/abouts/Deepti.jpg'
import Mushafiya from '../assets/abouts/Mush.jpg'

// import { FaLinkedin } from "react-icons/fa6";
// import { FaGithub } from "react-icons/fa6";
// import { FaYoutube } from "react-icons/fa";
// import { FaInstagram } from "react-icons/fa";
// import { FaLink } from "react-icons/fa6";
import { FaLinkedin, FaGithub, FaYoutube, FaInstagram, FaLink } from "react-icons/fa";
// import { GithubIcon, LinkedinIcon, YoutubeIcon, InstagramIcon } from './Icons';
// Icons.js
const Linkedinicon = FaLinkedin;
const Githubicon = FaGithub;
const Youtubeicon = FaYoutube;
const Instagramicon = FaInstagram;
// const FaLink = FaLink;


export const memberData = [
    {
        id: 1,
        name: "Mohd Shadab Ansari",
        role: "Founder of ACA Pvt. Ltd. ",
        bio: "Mohd Shadab Ansari is the ambitious founder of ACA Pvt. Ltd., a company he launched in 2021 during his first year of college to provide career-building opportunities for students and young professionals. Mohd is an Electronics Engineer passionate about creating innovative platforms to support skill development, job training, and career guidance. His goal is to create a system that drives real change in education and professional development.",
        skills: [
            "Electronics Engineering", "Content Creation", "Leadership & Project Management", "Platform Development", "Career Guidance and Mentorship", "Strategy & data analyst", "Writer", "Public speaker"
        ],
        education: "BTech in Electronics and Communication Engineering Panjab University, Chandigarh",
        socialLinks: [
            {
                id: 1,
                title: "linkedIn",
                url: "https://www.linkedin.com/in/mohd-shadab-ansari-952549226/",
                icon: Linkedinicon
            },
            {
                id: 2,
                title: "youtube",
                url: "https://youtube.com/@admincareeracademy99",
                icon: Youtubeicon,
            },
            {
                id: 3,
                title: "instagram",
                url: "https://www.instagram.com/__official.shadab_07/profilecard",
                icon: Instagramicon,
            },
        ],
        quote: "Building platforms that create opportunities and shape futures",
        photo: Shadab,
    },
    {
        id: 2,
        name: "Manish Yadav",
        role: "Co founder of ACA",
        bio: "During graduation I decided to become an entrepreneur. In my final year of college, I joined ACA Pvt. Ltd. Company with my college friend Where we started providing career guidance to students. During that I also started my own music label company which is currently running successfully. And at this time i am getting financial support from there. Now I am the Co Founder of ACA Pvt Ltd and am working on the vision of expanding it.",
        skills: [
            "Vision and Strategic Thinking", "Financial Acumen", "Product and Market Knowledge", "Adaptability and Problem Solving", "Operational Efficiency", "Networking and Relationship Building"
        ],
        education: "BE in Electronic and Communication Engineering Panjab University Chandigarh",
        socialLinks: [
            {
                id: "a",
                title: "linkedIn",
                url: "https://www.linkedin.com/in/manishyadav01",
                icon: Linkedinicon,
            },

        ],
        quote: "Building a business is about turning ideas into reality, learning from every challenge, and working together to create something meaningful.",
        photo: Manish,
    },
    // {
    //     id: 3,
    //     name: "Akash Kumar",
    //     role: "Full Stack Developer | Technical Head",
    //     bio: "I am a dedicated full-stack developer and currently the Technical Head for ACA Pvt.Ltd, where I lead a team on innovative tech projects. With expertise in React, Node.js, MongoDB, and Express.js, I specialize in creating dynamic, user-centered web applications. Currently, I am pursuing an integrated BTech + MTech degree in Electronics and Communication Engineering at NIT Hamirpur.",
    //     skills: [
    //         "Frontend - React.js", "Backend - Node.js , Express.js", "Database - MongoDB , MySQL", "C", "C++", "Javascript", "Python", "Leadership", "Team Management", "Project Coordination", "Technical Guidance"
    //     ],
    //     education: " Integrated BTech + MTech in Electronics and Communication Engineering National Institute of Technology (NIT) Hamirpur",
    //     socialLinks: [
    //         {
    //             id: "a",
    //             title: "linkedIn",
    //             url: "https://www.linkedin.com/in/akash-kumar-54073a209/",
    //             icon: Linkedinicon,
    //         },
    //         {
    //             id: "b",
    //             title: "github",
    //             url: "https://github.com/akashkumar8115",
    //             icon: Githubicon
    //         },
    //         {
    //             id: "c",
    //             title: "Portfolio",
    //             url: "https://akash8115.netlify.app/",
    //             icon: FaLink,
    //         },

    //     ],
    //     quote: "Lead by example, inspire through action.",
    //     photo: Akash,
    // },
    {
        id: 4,
        name: "Deepti Mishra",
        role: "HR",
        bio: "Dedicated and keen learner enhancing skills specifically in HR field and on board to grab new skills effectively",
        skills: [
            "Proficient communication skills", "creative mindset", "organizational skills and adaptability", "engaging ideas for favourable outputs ", "soft skills that industry demands",
        ],
        education: "Currently doing BBA from Kashi Institute of Management and Science  , varanasi ",
        socialLinks: [
            {
                id: "a",
                title: "linkedIn",
                url: "https://www.linkedin.com/in/deepti-mishra-5b9075293",
                icon: Linkedinicon,
            },


        ],
        quote: "Freedom isn’t about escaping the world; it’s about shaping it on your terms.",
        photo: Deepti,
    },

    {
        id: 5,
        name: "Avinesh Pratap Singh",
        role: "Senior Software Engineer",
        bio: "I'm a Software Engineer At Arista Networks with a B.Tech in Computer Science from IIT Dhanbad. I specialize in system design and performance optimization. I am currently enhancing load balancing for tunnelled packets at Arista Networks. My work has led to a 70% performance boost in MPLS/GTP load balancing.I’ve spearheaded impactful projects, such as an energy-efficient FANET protocol for UAVs and a scalable medicine label parser using AWS and Kubernetes. My blockchain-enabled loyalty system, FlipCoin, integrates Smart Contracts for e-commerce rewards.With a strong track record in competitive programming (Codeforces Expert, CodeChef 5★), I also mentor students in coding and interview prep. Let's connect for opportunities and collaborations!",
        skills: [
            "Core System software Development"
        ],
        education: "B.Tech in Computer Science and Engineering from IIT Dhanbad",
        socialLinks: [
            {
                id: "a",
                title: "linkedIn",
                url: "https://www.linkedin.com/in/pratapavinesh/",
                icon: Linkedinicon,
            },
        ],
        quote: "",
        photo: Avinesh,
    },

    {
        id: 6,
        name: "Manoj Mishra",
        role: "Project Manager",
        bio: "",
        skills: [
            "Business Developement", "Management", "Marketing Strategy", "Sales Management", "SMM", "Time Management", "Team Management", "Small Business Growth", "Brand Development", "New Business Development", "Startup Management", "Administrative Assistance"
        ],
        education: " Graduate ",
        socialLinks: [
            {
                id: "a",
                title: "linkedIn",
                url: "https://www.linkedin.com/in/manojsmm",
                icon: Linkedinicon,
            },


        ],
        quote: "",
        photo: Manoj
    },
    {
        id: 7,
        name: "Khan Mushafiya",
        role: "Web Developer",
        bio: "I am a passionate and self-motivated web developer with a strong foundation in frontend technologies like HTML, CSS, JavaScript, React.js and Tailwind css. Creating interactive, responsive, and visually appealing websites that provide seamless user experiences. Currently, I am expanding my skills into backend development, diving into technologies such as Node.js, Express.js, and databases, with the goal of becoming a full-stack developer.I believe in the power of clean, efficient code and constantly strive to push the boundaries of what's possible in web development.",
        skills: [
            "Frontend - React.js", "Backend - Node.js , Express.js", "Database - MongoDB", "Leadership", "Team Management"
        ],
        education: "Currently doing Bachelor in Computer Application (BCA) from Chandigarh University",
        socialLinks: [
            {
                id: "a",
                title: "linkedIn",
                url: "https://www.linkedin.com/in/khan-mushafiya-67b86b289/",
                icon: Linkedinicon,
            },
            {
                id: "b",
                title: "github",
                url: "https://github.com/kmushafiya003",
                icon: Githubicon,
            },

        ],
        quote: "The only way to do great work is to love what you do.",
        photo: Mushafiya,
    },
]