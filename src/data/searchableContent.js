// Central file containing all searchable content
import { blogData } from "./blog";
export const searchableContent = {
    // Education Content
    education: [
        {
            title: "Course Degrees",
            path: "/education/courses-degrees",
            content: "Explore comprehensive degree programs including B.Tech, MBA, Medical courses",
            type: "education"
        },
        {
            title: "Study Abroad",
            path: "/education/study-abroad",
            content: "International education opportunities in USA, UK, Canada, Australia",
            type: "education"
        },
        {
            title: "Entrance Exams",
            path: "/education/entrance-exams",
            content: "Information about JEE, NEET, CAT, GATE and other entrance exams",
            type: "education"
        }
    ],

    // Services Content
    services: [
        {
            title: "Career Counselling",
            path: "/services/career-counselling",
            content: "Expert guidance for career planning and development",
            type: "service"
        },
        {
            title: "Web Development",
            path: "/services/web-development",
            content: "Professional web development services and training",
            type: "service"
        }
    ],

    // Blog Content
    blogs: blogData.map(blog => ({
        ...blog,
        path: `/blogs/${blog.id}`,
        type: "blog"
    })),

    // About Content
    about: [
        {
            title: "About Company",
            path: "/about/about-company",
            content: "Learn about our mission, vision, and values",
            type: "about"
        }
    ]
};