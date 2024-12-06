import CounsellingImg from '../assets/services/career-counselling.jpg'
import WebDevImg from '../assets/services/web-development.jpg'
import DigitalMarketingImg from '../assets/services/digital-marketing.jpg'
import SeoImg from '../assets/services/seo.jpg'
import GraphicDesignImg from '../assets/services/graphic-design.jpg'
import ContentWritingImg from '../assets/services/content-writing.jpg'

export const serviceImages = {
    counselling: CounsellingImg,
    webDev: WebDevImg,
    digitalMarketing: DigitalMarketingImg,
    seo: SeoImg,
    graphicDesign: GraphicDesignImg,
    contentWriting: ContentWritingImg,
}

export const servicesData = [
    {
        id: 1,
        title: "Career Counselling",
        description: "Expert guidance for your career journey, from skill development to career path with personalized counseling sessions",
        image: CounsellingImg,
        path: "/services/career-counselling",
        features: [
            "One-on-one counseling sessions",
            "Personality assessment",
            "Career path planning",
            "Industry insights"
        ]
    },
    {
        id: 2,
        title: "Web Development",
        description: "Custom web solutions for your business",
        image: WebDevImg,
        path: "/services/web-development"
    },
    {
        id: 3,
        title: "Digital Marketing",
        description: "Boost your online presence",
        image: DigitalMarketingImg,
        path: "/services/digital-marketing"
    },
    {
        id: 4,
        title: "Search Engine Optimization",
        description: "Improve your search rankings",
        image: SeoImg,
        path: "/services/search-engine-optimization"
    },
    {
        id: 5,
        title: "Graphic Designing",
        description: "Creative visual solutions",
        image: GraphicDesignImg,
        path: "/services/graphic-designing"
    },
    {
        id: 6,
        title: "Content Writing",
        description: "Engaging content for your audience",
        image: ContentWritingImg,
        path: "/services/content-writing"
    }
]

