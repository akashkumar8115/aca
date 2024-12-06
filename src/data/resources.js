import { FaBook, FaVideo, FaPodcast, FaTools, FaChartLine, FaBriefcase, FaGraduationCap, FaRocket } from 'react-icons/fa'

export const resources = [
    {
        id: 1,
        title: 'Career Guides',
        description: 'Comprehensive guides for different career paths',
        icon: <FaBook />,
        link: '/resources/guides'
    },
    {
        id: 2,
        title: 'Video Tutorials',
        description: 'Expert-led video courses on in-demand skills',
        icon: <FaVideo />,
        link: '/resources/tutorials'
    },
    {
        id: 3,
        title: 'Career Podcasts',
        description: 'Weekly insights from industry leaders',
        icon: <FaPodcast />,
        link: '/resources/podcasts'
    },
    {
        id: 4,
        title: 'Assessment Tools',
        description: 'Self-assessment tools for career planning',
        icon: <FaTools />,
        link: '/resources/tools'
    },
    {
        id: 5,
        title: 'Market Insights',
        description: 'Latest trends and industry analysis',
        icon: <FaChartLine />,
        link: '/resources/insights'
    },
    {
        id: 6,
        title: 'Job Board',
        description: 'Exclusive job opportunities from partners',
        icon: <FaBriefcase />,
        link: '/resources/jobs'
    },
    {
        id: 7,
        title: 'Learning Paths',
        description: 'Structured learning paths for different roles',
        icon: <FaGraduationCap />,
        link: '/resources/learning'
    },
    {
        id: 8,
        title: 'Success Stories',
        description: 'Real stories from our successful alumni',
        icon: <FaRocket />,
        link: '/resources/stories'
    }
]
