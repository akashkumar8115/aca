import { image } from "framer-motion/client";
import ImageAmit from '../assets/successStories/amit.jpg'
import ImageRohit from '../assets/successStories/rohit.jpg'
import ImagePriya from '../assets/successStories/priya.jpg'
export const successStories = [
    {
        id: 1,
        name: 'Rohit Kumar',
        role: 'Software Engineer',
        image: ImageRohit,
        testimony: 'The career guidance and technical training helped me land my dream job at Google.',
        company: 'Tashi packers & movers',
        yearGraduated: 2023
    },
    {
        id: 2,
        name: 'Priya Singh',
        role: 'Data Scientist',
        image: ImagePriya,
        testimony: 'The mentorship program helped me transition into data science seamlessly.',
        company: 'web wallah',
        yearGraduated: 2023
    },
    {
        id: 3,
        name: 'Amit Patel',
        role: 'UX Designer',
        image: ImageAmit,
        testimony: 'The practical projects and industry connections made all the difference.',
        company: 'tweak media',
        yearGraduated: 2022
    }
]
