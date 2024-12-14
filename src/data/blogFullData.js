import Blog1 from '../assets/blog/blog-01.jpg'
import Blog2 from '../assets/blog//blog-02.jpg'
import Blog3 from '../assets/blog/blog-03.jpg'
import Blog4 from '../assets/blog/blog-04.jpg'
import Blog5 from '../assets/blog/blog-05.jpg'
import Blog6 from '../assets/blog/blog-06.jpg'
export const blogData = [
    {
        id: 1,
        image: Blog1,
        tag: "Technology",
        tags: ["AI", "Machine Learning", "Future Tech"],
        date: "01 Oct, 2024",
        title: "The Evolution of Artificial Intelligence in 2024",
        description: "Explore the groundbreaking developments in AI and their impact on various industries...",
        readTime: "5 min read",
        estimatedReadTime: 5,
        readingProgress: 0,
        views: 234,
        shareCount: 423,
        featured: true,
        publishedAt: "2024-10-01T09:00:00Z",
        updatedAt: "2024-10-02T15:30:00Z",
        category: "Artificial Intelligence",
        author: [
            {
                name: "Dr. Rajesh Kumar",
                bio: "Leading AI researcher with 15+ years of experience in machine learning and neural networks. Former lead scientist at DeepMind.",
                avatar: "https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes.png",
                position: "AI Research Director",
                expertise: ["Artificial Intelligence", "Neural Networks", "Deep Learning"],
                publications: 45,
                citations: 1200,
                socialLinks: [
                    { name: "Twitter", link: "https://twitter.com/rajeshkumar", followers: 25000 },
                    { name: "LinkedIn", link: "https://www.linkedin.com/in/rajeshkumar", connections: 15000 },
                    { name: "GitHub", link: "https://github.com/rajeshkumar", repositories: 75 },
                    { name: "YouTube", link: "https://youtube.com/rajeshkumar", subscribers: 12000 },
                    { name: "Instagram", link: "https://instagram.com/rajeshkumar", followers: 18000 },
                    { name: "Facebook", link: "https://facebook.com/rajeshkumar", followers: 20000 },
                    { name: "Reddit", link: "https://reddit.com/user/rajeshkumar", karma: 1200 },
                    { name: "Stack Overflow", link: "https://stackoverflow.com/users/rajeshkumar", reputation: 1500 },
                    { name: "Quora", link: "https://quora.com/profile/rajeshkumar", followers: 10000 },
                    { name: "Medium", link: "https://medium.com/@rajeshkumar", followers: 8000 },
                ]
            }
        ],
        fullContent: [
            { type: "paragraph", paragraph: "The landscape of artificial intelligence has undergone remarkable transformations in 2024..." },
            { type: "quote", paragraph: "AI is not just about automation; it's about augmenting human capabilities..." },
            { type: "paragraph", paragraph: "Recent breakthroughs in natural language processing have enabled AI systems to..." },
            { type: "highlight", paragraph: "Key developments include quantum computing integration, enhanced neural networks..." }
        ],
        comments: [
            {
                id: 1,
                author: { name: "John Doe", avatar: "https://example.com/avatar-john.png", profession: "Software Engineer" },
                date: "2 days ago",
                content: "Fascinating insights into the future of AI! The quantum computing integration aspect particularly caught my attention.",
                likes: 156,
                replies: [
                    {
                        id: 11,
                        author: { name: "Dr. Rajesh Kumar", avatar: "https://example.com/avatar-rajesh.png" },
                        content: "Thank you! Quantum computing indeed opens up exciting possibilities in AI optimization.",
                        date: "1 day ago",
                        likes: 45
                    }
                ]
            }
        ],
        relatedTopics: ["Machine Learning", "Deep Learning", "Neural Networks", "Quantum Computing"],
        resources: [
            { type: "PDF", title: "Complete AI Research Paper", link: "https://example.com/ai-research.pdf" },
            { type: "Video", title: "AI Demo Walkthrough", link: "https://example.com/ai-demo" }
        ]
    },
    // Add more enhanced blog entries following similar structure
    // Continue with more sophisticated entries...

    {
        id: 2,
        image: Blog2,
        tag: "Career & AI",
        tags: ["AI", "Job Market", "Careers"],
        date: "05 Oct, 2024",
        title: "The Impact of AI on the Job Market",
        description: "Explore how AI is influencing employment trends and creating new opportunities...",
        readTime: "6 min read",
        estimatedReadTime: 6,
        readingProgress: 0,
        views: 874,
        shareCount: 231,
        featured: false,
        publishedAt: "2024-10-05T09:00:00Z",
        updatedAt: "2024-10-06T10:45:00Z",
        category: "Artificial Intelligence",
        author: [
            {
                name: "Priya Sharma",
                bio: "Career consultant specializing in the tech industry. Helps professionals navigate the evolving job market with AI-driven insights.",
                avatar: "https://example.com/avatar-priya.png",
                position: "Career Consultant",
                expertise: ["Career Counseling", "AI in Careers", "Future of Work"],
                publications: 20,
                citations: 500,
                socialLinks: [
                    { name: "Twitter", link: "https://twitter.com/priyasharma", followers: 12000 },
                    { name: "LinkedIn", link: "https://www.linkedin.com/in/priyasharma", connections: 9000 },
                    { name: "GitHub", link: "https://github.com/priyasharma", repositories: 35 },
                    { name: "YouTube", link: "https://youtube.com/priyasharma", subscribers: 8000 },
                    { name: "Instagram", link: "https://instagram.com/priyasharma", followers: 15000 },
                    { name: "Facebook", link: "https://facebook.com/priyasharma", followers: 18000 },
                    { name: "Reddit", link: "https://reddit.com/user/priyasharma", karma: 800 },
                    { name: "Stack Overflow", link: "https://stackoverflow.com/users/priyasharma", reputation: 1000 },
                    { name: "Quora", link: "https://quora.com/profile/priyasharma", followers: 7000 },
                ]
            }
        ],
        fullContent: [
            { type: "paragraph", paragraph: "The increasing adoption of AI technologies is reshaping the job market. While some fear job loss, many see opportunities for growth as businesses adapt to AI-driven workflows." },
            { type: "paragraph", paragraph: "AI-driven automation is taking over routine tasks, leading to job displacement in some areas. However, this shift also provides a chance to focus human effort on more creative and strategic work." },
            { type: "quote", paragraph: "AI is not just about replacing jobs; it’s about augmenting human potential and creating entirely new industries and opportunities." },
            { type: "paragraph", paragraph: "AI is also creating demand for new skills, including expertise in data science, AI ethics, and machine learning development. Upskilling and reskilling initiatives are becoming essential for employees to stay relevant." }
        ],
        comments: [
            {
                id: 2,
                author: {
                    name: "Alex Smith",
                    avatar: "/avatars/alex.jpg",
                    profession: "HR Manager"
                },
                date: "3 days ago",
                content: "AI will definitely change the job market, for better or worse.",
                likes: 12,
                replies: []
            },
            {
                id: 3,
                author: {
                    name: "Emily Johnson",
                    avatar: "/avatars/emily.jpg",
                    profession: "Data Scientist"
                },
                date: "2 days ago",
                content: "It’s fascinating to see how companies are leveraging AI to streamline operations. The need for AI ethics experts is also growing!",
                likes: 35,
                replies: [
                    {
                        id: 21,
                        author: {
                            name: "Priya Sharma",
                            avatar: "https://example.com/avatar-priya.png"
                        },
                        content: "Absolutely! AI ethics is a critical area as we shape the future of work.",
                        date: "1 day ago",
                        likes: 15
                    }
                ]
            }
        ],
        relatedTopics: ["AI Ethics", "Future of Work", "Automation", "Upskilling"],
        resources: [
            { type: "PDF", title: "AI and Careers: Opportunities & Challenges", link: "https://example.com/ai-careers.pdf" },
            { type: "Video", title: "Navigating AI-Driven Workflows", link: "https://example.com/ai-workflows" }
        ]
    },
    {
        id: 3,
        image: Blog3,
        tag: "Data Science",
        tags: ["Python", "R", "Data Visualization"],
        date: "10 Oct, 2024",
        title: "Top Data Science Tools You Should Know",
        description: "A look at the most popular tools used in data science today...",
        readTime: "4 min read",
        estimatedReadTime: 4,
        readingProgress: 0,
        views: 432,
        shareCount: 125,
        featured: false,
        publishedAt: "2024-10-10T09:00:00Z",
        updatedAt: "2024-10-11T14:00:00Z",
        category: "Data Science",
        author: [
            {
                name: "Neha Gupta",
                bio: "Data scientist with a passion for data visualization and predictive modeling. Mentor to aspiring data professionals.",
                avatar: "https://example.com/avatar-neha.png",
                position: "Senior Data Scientist",
                expertise: ["Data Science", "Visualization", "Python & R"],
                publications: 30,
                citations: 600,
                socialLinks: [
                    { name: "LinkedIn", link: "https://linkedin.com/in/nehagupta", connections: 7000 },
                    { name: "GitHub", link: "https://github.com/nehagupta", repositories: 50 },
                    { name: "Twitter", link: "https://twitter.com/nehagupta", followers: 2500 }
                ]
            }
        ],
        fullContent: [
            { type: "paragraph", paragraph: "Data science relies on a variety of tools that help analyze, visualize, and make predictions." },
            { type: "highlight", paragraph: "Python and R are foundational for data science, offering libraries for data analysis and machine learning." },
            { type: "paragraph", paragraph: "Tools like Tableau and Power BI are essential for presenting data insights to stakeholders effectively." }
        ],
        comments: [
            {
                id: 3,
                author: { name: "Sandra Lee", avatar: "/avatars/sandra.jpg", profession: "Data Analyst" },
                date: "1 day ago",
                content: "Love these tools! Tableau has changed the way I present data.",
                likes: 18,
                replies: []
            }
        ],
        relatedTopics: ["Python", "R", "Data Visualization", "AI in Data Science"],
        resources: [
            { type: "PDF", title: "Top Data Science Tools in 2024", link: "https://example.com/data-tools.pdf" },
            { type: "Video", title: "Data Visualization Best Practices", link: "https://example.com/visualization-video" }
        ],
        
    },

    {
        id: 4,
        image: Blog4,
        tag: "Business",
        tags: ["Digital Tools", "Small Business", "Technology"],
        date: "15 Oct, 2024",
        title: "Digital Transformation in Small Businesses",
        description: "Explore how digital transformation is essential for small businesses to thrive...",
        readTime: "7 min read",
        estimatedReadTime: 7,
        readingProgress: 0,
        views: 543,
        shareCount: 210,
        featured: false,
        publishedAt: "2024-10-15T09:00:00Z",
        updatedAt: "2024-10-16T13:00:00Z",
        category: "Digital Transformation",
        author: [
            {
                name: "Amit Patel",
                bio: "Business strategist helping small enterprises adopt digital technologies for competitive advantage.",
                avatar: "https://example.com/avatar-amit.png",
                position: "Business Consultant",
                expertise: ["Small Business Strategy", "Digital Transformation", "Technology"],
                publications: 15,
                citations: 300,
                socialLinks: [
                    { name: "LinkedIn", link: "https://linkedin.com/in/amitpatel", connections: 8000 },
                    { name: "Twitter", link: "https://twitter.com/amitpatel", followers: 5000 },
                    { name: "GitHub", link: "https://github.com/amitpatel", repositories: 30 },
                    { name: "YouTube", link: "https://youtube.com/amitpatel", subscribers: 1000 },
                    { name: "Instagram", link: "https://instagram.com/amitpatel", followers: 3000 },
                    { name: "Facebook", link: "https://facebook.com/amitpatel", followers: 2000 },
                    { name: "Pinterest", link: "https://pinterest.com/amitpatel", followers: 1500 },
                ]
            }
        ],
        fullContent: [
            { type: "paragraph", paragraph: "Small businesses can leverage digital tools to compete with larger corporations and streamline operations." },
            { type: "highlight", paragraph: "From CRMs to marketing automation, digital tools improve customer engagement and efficiency." },
            { type: "paragraph", paragraph: "However, many small businesses face barriers like cost constraints and a lack of skilled staff." }
        ],
        comments: [
            {
                id: 4,
                author: { name: "Michael Brown", avatar: "/avatars/michael.jpg", profession: "Small Business Owner" },
                date: "5 days ago",
                content: "Digital transformation has been a game-changer for my business.",
                likes: 20,
                replies: []
            }
        ],
        relatedTopics: ["Digital Tools", "Small Business Growth", "Technology Trends"],
        resources: [
            { type: "PDF", title: "Digital Transformation Guide for Small Businesses", link: "https://example.com/digital-guide.pdf" },
            { type: "Video", title: "CRMs Explained for Small Businesses", link: "https://example.com/crm-video" }
        ]
    },
    {
        id: 5,
        image: Blog5,
        tag: "Security",
        tags: ["Cybersecurity", "Data Protection", "Threats"],
        date: "20 Oct, 2024",
        title: "Cybersecurity Essentials for 2024",
        description: "Learn the key practices to protect your business from cyber threats in 2024...",
        readTime: "9 min read",
        estimatedReadTime: 9,
        readingProgress: 0,
        views: 675,
        shareCount: 300,
        featured: true,
        publishedAt: "2024-10-20T09:00:00Z",
        updatedAt: "2024-10-21T12:00:00Z",
        author: [
            {
                name: "Vikram Singh",
                bio: "Cybersecurity expert with a decade of experience in protecting businesses from evolving cyber threats.",
                avatar: "https://example.com/avatar-vikram.png",
                position: "Cybersecurity Consultant",
                expertise: ["Threat Detection", "Data Protection", "Cybersecurity Strategy"],
                publications: 50,
                citations: 1200,
                socialLinks: [
                    { name: "LinkedIn", link: "https://linkedin.com/in/vikramsingh", connections: 10000 },
                    { name: "Twitter", link: "https://twitter.com/vikramsingh", followers: 15000 }
                ]
            }
        ],
        category: "Cybersecurity",
        fullContent: [
            { type: "paragraph", paragraph: "Cybersecurity is more critical than ever as cyber threats evolve and become more sophisticated." },
            { type: "paragraph", paragraph: "Phishing, ransomware, and DDoS attacks are on the rise, impacting businesses and individuals alike." },
            { type: "highlight", paragraph: "Implementing multi-factor authentication and data encryption can significantly enhance security measures." }
        ],
        comments: [
            {
                id: 5,
                author: { name: "Lucy Harper", avatar: "/avatars/lucy.jpg", profession: "IT Manager" },
                date: "6 days ago",
                content: "Cybersecurity is a must in today's digital world!",
                likes: 22,
                replies: []
            }
        ],
        relatedTopics: ["Cyber Threats", "Data Protection", "Phishing"],
        resources: [
            { type: "PDF", title: "2024 Cybersecurity Essentials", link: "https://example.com/cybersecurity-essentials.pdf" },
            { type: "Video", title: "Preventing Ransomware Attacks", link: "https://example.com/ransomware-video" }
        ]
    },

    {
        id: 6,
        image: Blog6,
        tag: "Cloud Computing",
        tags: ["Cloud Technology", "Trends", "Edge Computing"],
        date: "25 Oct, 2024",
        title: "Cloud Computing Trends for 2025",
        description: "A deep dive into upcoming trends in cloud technology and how businesses can prepare...",
        readTime: "10 min read",
        estimatedReadTime: 10,
        readingProgress: 0,
        views: 894,
        shareCount: 400,
        featured: true,
        publishedAt: "2024-10-25T09:00:00Z",
        updatedAt: "2024-10-26T14:00:00Z",
        author: [
            {
                name: "Dr. Sarah Johnson",
                bio: "Renowned cloud computing expert helping businesses innovate with cutting-edge technology.",
                avatar: "https://example.com/avatar-sarah.png",
                position: "Cloud Technology Evangelist",
                expertise: ["Cloud Computing", "Edge Computing", "Hybrid Clouds"],
                publications: 80,
                citations: 3000,
                socialLinks: [
                    { name: "LinkedIn", link: "https://linkedin.com/in/sarahjohnson", connections: 15000 },
                    { name: "Twitter", link: "https://twitter.com/sarahjohnson", followers: 20000 }
                ]
            }
        ],
        category: "Cloud Technology",
        fullContent: [
            { type: "paragraph", paragraph: "Cloud computing is continuously evolving, with new trends like hybrid and multi-cloud gaining traction." },
            { type: "highlight", paragraph: "Edge computing is becoming more prominent, reducing latency by bringing computation closer to data sources." },
            { type: "paragraph", paragraph: "Many businesses are adopting hybrid clouds for flexibility and cost-efficiency." }
        ],
        comments: [
            {
                id: 6,
                author: { name: "Brian Lee", avatar: "/avatars/brian.jpg", profession: "Cloud Engineer" },
                date: "1 week ago",
                content: "Cloud computing is the future!",
                likes: 25,
                replies: [
                    {
                        id: 61,
                        author: { name: "Dr. Sarah Johnson", avatar: "https://example.com/avatar-sarah.png" },
                        content: "Absolutely! Edge computing will lead the way in reducing latency and improving system performance.",
                        date: "5 days ago",
                        likes: 15
                    }
                ]
            }
        ],
        relatedTopics: ["Edge Computing", "Hybrid Cloud", "Multi-Cloud Strategies"],
        resources: [
            { type: "PDF", title: "Cloud Trends 2025 Guide", link: "https://example.com/cloud-trends-guide.pdf" },
            { type: "Video", title: "Understanding Edge Computing", link: "https://example.com/edge-computing-video" }
        ]
    },
    {
        id: 7,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRO5_j5_g94I1HbuT3XahzB3jTQQzvE3fijRQ&s",
        tag: "Software Development",
        date: "28 Oct, 2024",
        title: "Microservices Architecture: Pros and Cons",
        description: "Examine the benefits and challenges of adopting a microservices architecture...",
        readTime: "7 min read",
        author: "Priya Sharma",
        estimatedReadTime: 7,
        readingProgress: 0,
        views: 1200,
        shareCount: 500,
        featured: true,
        publishedAt: "2024-10-28T10:00:00Z",
        updatedAt: "2024-10-28T14:00:00Z",
        category: "Software Development",
        tags: ["Microservices", "Architecture", "Software Development"],
        author: [
            {
                name: "Priya Sharma",
                bio: "Software Engineer with a passion for building scalable and efficient systems.",
                avatar: "https://example.com/avatar-priya.png",
                position: "Senior Software Engineer",
                expertise: ["Microservices", "Software Architecture", "Full-Stack Development"],
                publications: 50,
                citations: 1500,
                socialLinks: [
                    { name: "LinkedIn", link: "https://linkedin.com/in/priyasharma", connections: 10000 },
                    { name: "Twitter", link: "https://twitter.com/priyasharma", followers: 15000 }
                ]
            }
        ],
        fullContent: [
            { paragraph: "Microservices architecture has gained popularity for its scalability and ability to handle complex, distributed systems effectively." },
            { paragraph: "Flexibility and easier deployment are some of the primary advantages of adopting microservices. They allow teams to work independently on smaller, self-contained units, leading to faster development and updates." },
            { paragraph: "However, microservices come with challenges like increased complexity, difficulty in managing distributed data, and the need for robust monitoring and debugging tools." }
        ],
        comments: [
            {
                id: 7,
                author: { name: "Emma Watson", avatar: "/avatars/emma.jpg" },
                date: "3 days ago",
                content: "A balanced view on microservices, thanks!",
                likes: 10
            }
        ],
        relatedTopics: ["Microservices", "Software Architecture", "Distributed Systems"],
        resources: [
            { type: "PDF", title: "Microservices Best Practices", link: "https://example.com/microservices-best-practices.pdf" },
            { type: "Video", title: "Microservices Architecture Explained", link: "https://example.com/microservices-architecture-video" }
        ],
        relatedArticles: [
            {
                id: 71,
                title: "Microservices vs Monoliths: Pros and Cons",
                description: "Compare the advantages and disadvantages of microservices and monolithic architectures.",
                image: "https://example.com/microservices-vs-monoliths.jpg",
                tag: "Software Development",
                date: "2024-10-29T10:00:00Z",
                readTime: "3 min read",
                author: "John Doe",
                category: "Software Development",
                estimatedReadTime: 3,
                readingProgress: 0,
                views: 800,
                shareCount: 200,
                featured: false,
                publishedAt: "2024-10-29T10:00:00Z",
                updatedAt: "2024-10-29T14:00:00Z",
                category: "Software Development",
                tags: ["Microservices", "Monolithic Architecture", "Software Development"],
                author: [
                    {
                        name: "John Doe",
                        bio: "Software Engineer with a passion for building scalable and efficient systems.",
                        avatar: "https://example.com/avatar-john.png",
                        position: "Senior Software Engineer",
                        expertise: ["Microservices", "Software Architecture", "Full-Stack Development"],
                        publications: 50,
                        citations: 1500,
                        socialLinks: [
                            { name: "LinkedIn", link: "https://linkedin.com/in/johndoe", connections: 10000 },
                            { name: "Twitter", link: "https://twitter.com/johndoe", followers: 15000 }
                        ]
                    }
                ]
            },],
    },

    {
        id: 8,
        image: "https://community.nasscom.in/sites/default/files/styles/960_x_600/public/media/images/0x0%20%281%29.jpg?itok=PEVCtsx2",
        tag: "Tech Careers",
        date: "30 Oct, 2024",
        title: "Becoming a Full-Stack Developer in 2024",
        description: "An in-depth guide on the skills needed to succeed as a full-stack developer...",
        readTime: "5 min read",
        author: "Neha Gupta",
        category: "Career Development",
        estimatedReadTime: 5,
        readingProgress: 0,
        views: 1000,
        shareCount: 400,
        featured: true,
        publishedAt: "2024-10-30T10:00:00Z",
        updatedAt: "2024-10-30T14:00:00Z",
        tags: ["Full-Stack Development", "Tech Careers", "Software Development"],
        author: [
            {
                name: "Neha Gupta",
                bio: "Full-stack developer with a passion for creating seamless user experiences.",
                avatar: "https://example.com/avatar-neha.png",
                position: "Full-Stack Developer",
                expertise: ["Full-Stack Development", "Front-End Development", "Back-End Development"],
                publications: 30,
                citations: 800,
                socialLinks: [
                    { name: "LinkedIn", link: "https://linkedin.com/in/nehagupta", connections: 8000 },
                    { name: "Twitter", link: "https://twitter.com/nehagupta", followers: 12000 }
                ]
            },
        ],
        fullContent: [
            { paragraph: "Full-stack development involves working on both front-end and back-end technologies, providing a comprehensive understanding of the entire application workflow." },
            { paragraph: "Core skills for full-stack development include mastering front-end technologies such as HTML, CSS, and JavaScript, which are essential for building user interfaces." },
            { paragraph: "On the back-end, knowledge of frameworks and languages like Node.js, Python, or Java is crucial for handling server-side logic and database interactions." }
        ],
        comments: [
            {
                id: 8,
                author: { name: "David Lee", avatar: "/avatars/david.jpg" },
                date: "2 days ago",
                content: "Very helpful tips for those starting out!",
                likes: 17
            }
        ],
        relatedTopics: ["Full-Stack Development", "Software Development", "Web Development"],
        resources: [
            { type: "PDF", title: "Full-Stack Development Guide", link: "https://example.com/full-stack-guide.pdf" },
            { type: "Video", title: "Full-Stack Development Tutorial", link: "https://example.com/full-stack-tutorial" }
        ]

    },
    {
        id: 9,
        image: "https://example.com/images/ai-digital-marketing.jpg", // Placeholder image added
        tag: "Marketing",
        date: "01 Nov, 2024",
        title: "How AI is Revolutionizing Digital Marketing",
        description: "Explore how AI is shaping digital marketing strategies and customer engagement...",
        readTime: "6 min read",
        author: "Vikram Singh",
        category: "Digital Marketing",
        estimatedReadTime: 6,
        readingProgress: 0,
        views: 1200,
        shareCount: 500,
        featured: true,
        publishedAt: "2024-11-01T10:00:00Z",
        updatedAt: "2024-11-01T14:00:00Z",
        tags: ["AI", "Digital Marketing", "Marketing"],
        author: [
            {
                name: "Vikram Singh",
                bio: "Digital marketing expert with a passion for harnessing the power of AI in marketing campaigns.",
                avatar: "https://example.com/avatar-vikram.png",
                position: "Digital Marketing Specialist",
                expertise: ["Digital Marketing", "AI Marketing", "Marketing Strategy"],
                publications: 25,
                citations: 700,
                socialLinks: [
                    { name: "LinkedIn", link: "https://linkedin.com/in/vikramsingh", connections: 7000 },
                    { name: "Twitter", link: "https://twitter.com/vikramsingh", followers: 11000 }
                ]
            },
        ],
        fullContent: [
            { paragraph: "AI tools are now a key component of successful digital marketing strategies. They empower marketers to deliver personalized experiences to customers." },
            { heading: "Personalized Marketing", paragraph: "AI enables personalized marketing by analyzing customer behavior and preferences, tailoring content to individual needs and enhancing user engagement." }
        ],
        comments: [
            {
                id: 9,
                author: { name: "Sophia Wang", avatar: "/avatars/sophia.jpg" },
                date: "1 day ago",
                content: "AI is truly transforming marketing. Great read!",
                likes: 14
            }
        ],
        relatedTopics: ["Artificial Intelligence", "Digital Marketing", "Customer Engagement"],
        resources: [
            { type: "PDF", title: "AI in Digital Marketing", link: "https://example.com/ai-digital-marketing.pdf" },
            { type: "Video", title: "AI in Marketing", link: "https://example.com/ai-marketing-video" }
        ]

    },

    {
        id: 10,
        image: "https://fastercapital.co/i/The-Top-Startups-to-Watch-in--The-Top-Startups-to-Watch-in-2024.webp",
        tag: "Innovation",
        date: "05 Nov, 2024",
        title: "5G: The Future of Connectivity",
        description: "Dive into the world of 5G technology and what it means for the future...",
        readTime: "8 min read",
        author: "Amit Patel",
        category: "Telecommunications",
        estimatedReadTime: 8,
        readingProgress: 0,
        views: 1500,
        shareCount: 600,
        featured: true,
        publishedAt: "2024-11-05T10:00:00Z",
        updatedAt: "2024-11-05T14:00:00Z",
        tags: ["5G", "Telecommunications", "Connectivity"],
        author: [
            {
                name: "Amit Patel",
                bio: "Telecommunications expert with a focus on the future of telecommunications.",
                avatar: "https://example.com/avatar-amit.png",
                position: "Telecommunications Engineer",
                expertise: ["5G Technology", "Telecommunications Infrastructure", "Network Optimization"],
                publications: 30,
                citations:
                    800,
                socialLinks: [
                    { name: "LinkedIn", link: "https://linkedin.com/in/amitpatel", connections: 8000 },
                    { name: "Twitter", link: "https://twitter.com/amitpatel", followers: 12000 }
                ]
            },
        ],
        fullContent: [
            { paragraph: "The rollout of 5G is set to bring faster connectivity and better network reliability, enabling a host of new technologies and services." },
            { heading: "Advantages of 5G", paragraph: "Faster speeds, lower latency, and enhanced device connectivity are among the many benefits of 5G, paving the way for innovations like IoT and smart cities." }
        ],
        comments: [
            {
                id: 10,
                author: { name: "Liam Turner", avatar: "/avatars/liam.jpg" },
                date: "4 days ago",
                content: "Excited to see how 5G changes our devices!",
                likes: 19
            }
        ],
        relatedTopics: ["5G Technology", "Telecommunications", "Connectivity"],
        resources: [
            { type: "PDF", title: "5G Technology", link: "https://example.com/5g-technology.pdf" },
            { type: "Video", title: "5G Infrastructure", link: "https://example.com/5g-infrastructure-video" }
        ]

    },
    {
        id: 11,
        image: "https://artificialpaintings.com/wp-content/uploads/2024/06/1732_IoT_in_the_Smart_Home_Future_Trends_and_Innovations.webp",
        tag: "Programming",
        date: "10 Nov, 2024",
        title: "Top 10 JavaScript Frameworks for 2024",
        description: "Find out the most popular JavaScript frameworks and libraries to use...",
        readTime: "7 min read",
        author: "Dr. Sarah Johnson",
        category: "Web Development",
        estimatedReadTime: 7,
        readingProgress: 0,
        views: 1800,
        shareCount: 700,
        featured: true,
        publishedAt: "2024-11-10T10:00:00Z",
        updatedAt: "2024-11-10T14:00:00Z",
        tags: ["JavaScript", "Web Development", "Frontend Development"],
        author: [
            {
                name: "Dr. Sarah Johnson",
                bio: "JavaScript expert with a focus on frontend development.",
                avatar: "https://example.com/avatar-sarah.png",
                position: "Frontend Engineer",
                expertise: ["JavaScript", "Frontend Development", "UI/UX Design"],
                publications: 35,
                citations: 900,
                socialLinks: [
                    { name: "LinkedIn", link: "https://linkedin.com/in/sarahjohnson", connections: 9000 },
                    { name: "Twitter", link: "https://twitter.com/sarahjohnson", followers: 15000 }
                ]
            }],
        fullContent: [
            { paragraph: "JavaScript is the backbone of modern web development, and the frameworks and libraries listed here are some of the most popular and widely used." },
            { heading: "Top 10 JavaScript Frameworks", paragraph: "From React and Angular to Vue and Svelte, each has its own strengths and use cases." }
        ],
        relatedTopics: ["JavaScript", "Web Development", "Frontend Development"],
        resources: [
            { type: "PDF", title: "JavaScript Frameworks", link: "https://example.com/javascript-frameworks.pdf" },
            {
                type:
                    "Video", title: "JavaScript Frameworks", link: "https://example.com/javascript-frameworks-video"
            }
        ],
        comments: [
            {
                id: 11,
                author: { name: "Emily Davis", avatar: "/avatars/emily.jpg" },
                date: "5 days ago",
                content: "I'm a big fan of React!",
                likes: 25
            }
        ],
    },

    {
        id: 12,
        image: "https://media.licdn.com/dms/image/D4D03AQHJzYJrJ9QZjQ/article-cover_image-shrink_720_1280/0/1691662028934?e=1736985600&v=beta&t=KDDIKw3taUKCANzDrvv3XTan-vojL2lCGi-zUibIogE",
        tag: "Machine Learning",
        date: "15 Nov, 2024",
        title: "Machine Learning in Predictive Analytics",
        description: "An overview of how machine learning is applied in predictive analytics...",
        readTime: "8 min read",
        author: "Neha Gupta",
        category: "Machine Learning",
        estimatedReadTime: 8,
        readingProgress: 0,
        views: 1800,
        shareCount: 700,
        publishedAt: "2024-11-15T10:00:00Z",
        updatedAt: "2024-11-15T14:00:00Z",
        tags: ["Machine Learning", "Data Science", "Analytics"],
        fullContent: [
            { paragraph: "Machine learning is a powerful tool for predictive analytics, enabling organizations to make informed decisions based on data-driven insights." },
            { heading: "Applications of Predictive Analytics", paragraph: "Used widely in finance, healthcare, and marketing for informed decisions and strategic planning." }
        ],
        author: [
            {
                name: "Neha Gupta",
                bio: "Machine learning enthusiast with a focus on predictive analytics.",
                avatar: "https://example.com/avatar-neha.png",
                position: "Data Scientist",
                expertise: ["Machine Learning", "Predictive Analytics", "Data Science"],
                publications: 25,
                citations: 700,
                socialLinks: [
                    { name: "LinkedIn", link: "https://linkedin.com/in/nehagupta", connections: 7000 },
                    { name: "Twitter", link: "https://twitter.com/nehagupta", followers: 12000 }
                ]
            }],
        relatedTopics: ["Machine Learning", "Data Science", "Analytics"],
        resources: [
            { type: "PDF", title: "Machine Learning in Predictive Analytics", link: "https://example.com/machine-learning-predictive-analytics.pdf" },
            { type: "Video", title: "Machine Learning in Predictive Analytics", link: "https://example.com/machine-learning-predictive-analytics-video" }
        ],
        comments: [
            {
                id: 12,
                author: { name: "Liam Turner", avatar: "/avatars/liam.jpg" },
                date: "3 days ago",
                content: "Great article!",
                likes: 15
            },
        ]
    },

    {
        id: 13,
        image: "https://media.licdn.com/dms/image/D4D03AQHJzYJrJ9QZjQ/article-cover_image-shrink_720_1280/0/1691662028934?e=1736985600&v=beta&t=KDDIKw3taUKCANzDrvv3XTan-vojL2lCGi-zUibIogE",
        tag: "Data Science",
        date: "18 Nov, 2024",
        title: "Data Science in Healthcare",
        description: "An exploration of how data science is transforming healthcare...",
        readTime: "9 min read",
        category: "Data Science",
        estimatedReadTime: 9,
        readingProgress: 0,
        views: 1500,
        shareCount: 500,
        publishedAt: "2024-11-18T10:00:00Z",
        updatedAt: "2024-11-18T14:00:00Z",
        tags: ["Data Science", "Healthcare", "Analytics"],
        author: [
            {
                name: "Vikram Singh",
                bio: "Data science enthusiast with a focus on healthcare analytics.",
                avatar: "https://example.com/avatar-vikram.png",
                position: "Data Scientist",
                expertise: ["Data Science", "Healthcare Analytics", "Machine Learning"],
                publications: 20,
                citations: 500,
                socialLinks: [
                    { name: "LinkedIn", link: "https://linkedin.com/in/vikramsingh", connections: 5000 },
                    { name: "Twitter", link: "https://twitter.com/vikramsingh", followers: 10000 }
                ]
            }],

        fullContent: [
            { paragraph: "Data science is transforming healthcare, enabling personalized care, early detection of diseases, and improved patient outcomes." },
            { heading: "Applications of Data Science in Healthcare", paragraph: "Used to diagnose diseases, predict risk factors, and optimize treatment plans." }
        ],
        relatedTopics: ["Data Science", "Healthcare", "Analytics"],
        resources: [
            { type: "PDF", title: "Data Science in Healthcare", link: "https://example.com/data-science-healthcare.pdf" },
            { type: "Video", title: "Data Science in Healthcare", link: "https://example.com/data-science-healthcare-video" }
        ],
        comments: [
            {
                id: 13,
                author: { name: "Sophia Patel", avatar: "/avatars/sophia.jpg" },
                date: "2 days ago",
                content: "Great article!",
                likes: 12
            },
        ]
    },



    {
        id: 14,
        image: "https://d1hah6ww96mip9.cloudfront.net/layout/banners/promotions/BLOG_METADATA_COVER_IMAGES/IMG_1685420999769_a28d722aee8641eaa165b9b41cdf7d4d-1p872-w1396p0-h746p0-en_v1.jpg",

        tag: "Cloud Computing",
        date: "20 Nov, 2024",
        title: "Hybrid Cloud Solutions for Businesses",
        description: "Exploring the benefits of a hybrid cloud approach for enterprises...",
        readTime: "7 min read",
        author: "Vikram Singh",
        category: "Cloud Technology",
        fullContent: `
            <p>Hybrid cloud offers flexibility and scalability for companies of all sizes...</p>
            <h2>Benefits of Hybrid Cloud</h2>
            <p>Organizations can use private and public clouds for cost savings...</p>
          `,
        comments: [
            {
                id: 14,
                author: { name: "Tom Hill", avatar: "/avatars/tom.jpg" },
                date: "6 days ago",
                content: "Hybrid cloud has been a great option for our team.",
                likes: 24
            }
        ]
    },
    {
        id: 15,
        image: "https://media.licdn.com/dms/image/v2/D5612AQEoYlNaXZN27g/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1709821633261?e=1736985600&v=beta&t=0DbrYlSIauU-McSRc_BknctbkqDX9545dfv55lAYzNY",

        tag: "Blockchain",
        date: "22 Nov, 2024",
        title: "Blockchain Beyond Cryptocurrency",
        description: "Discover how blockchain is being used in industries beyond finance, like healthcare and supply chain.",
        readTime: "6 min read",
        author: "Amit Patel",
        category: "Blockchain Technology",
        fullContent: `
        <p>Blockchain technology is becoming a cornerstone for transparent and decentralized solutions...</p>
        <h2>Supply Chain Transparency</h2>
        <p>Using blockchain, companies can trace product journeys, ensuring quality and authenticity...</p>
        <h2>Healthcare Record Management</h2>
        <p>Secure and immutable records provide a seamless experience in patient data handling...</p>
      `,
        comments: [
            {
                id: 15,
                author: { name: "Olivia Adams", avatar: "/avatars/olivia.jpg" },
                date: "3 days ago",
                content: "Interesting applications beyond just finance!",
                likes: 12
            }
        ]
    },
    {
        id: 16,
        image: "https://media.licdn.com/dms/image/D4E12AQH3-6lkwjJspw/article-cover_image-shrink_600_2000/0/1709816925133?e=2147483647&v=beta&t=LlcqqDRCmSfyFgzmMv0XJrHGRlgHAt5Mfmtx5_0xjLc",

        tag: "Sustainability",
        date: "25 Nov, 2024",
        title: "Green Tech Innovations for a Sustainable Future",
        description: "Explore cutting-edge green technologies and how they are contributing to sustainability.",
        readTime: "7 min read",
        author: "Dr. Rajesh Kumar",
        category: "Environmental Technology",
        fullContent: `
        <p>With climate change at the forefront, technology is driving solutions for a sustainable future...</p>
        <h2>Renewable Energy Advances</h2>
        <p>Technologies in solar, wind, and hydroelectric are becoming more efficient...</p>
        <h2>Smart Cities</h2>
        <p>Smart grids, waste management, and water conservation are creating sustainable urban solutions...</p>
      `,
        comments: [
            {
                id: 16,
                author: { name: "Henry Baker", avatar: "/avatars/henry.jpg" },
                date: "4 days ago",
                content: "Great insight into how tech is helping the environment!",
                likes: 21
            }
        ]
    },
    {
        id: 17,
        image: "https://www.goodnet.org/photos/281x197/33464_hd.jpg",

        tag: "Education",
        date: "28 Nov, 2024",
        title: "E-Learning Trends in 2024",
        description: "From VR to AI-driven personalization, explore the latest trends in online education.",
        readTime: "5 min read",
        author: "Priya Sharma",
        category: "Education Technology",
        fullContent: `
        <p>The world of education is undergoing a digital transformation, enabling remote and personalized learning...</p>
        <h2>AI-Driven Personalization</h2>
        <p>Adaptive learning technologies tailor content to individual learning styles...</p>
        <h2>Virtual Reality in Classrooms</h2>
        <p>VR provides immersive experiences, enhancing learning engagement...</p>
      `,
        comments: [
            {
                id: 17,
                author: { name: "Isabella Chen", avatar: "/avatars/isabella.jpg" },
                date: "2 days ago",
                content: "E-learning has really come a long way!",
                likes: 18
            }
        ]
    },
    {
        id: 18,
        image: "https://media.licdn.com/dms/image/D4E12AQGOq8UkEd-iCQ/article-cover_image-shrink_720_1280/0/1699628089782?e=2147483647&v=beta&t=tfupFW3fy9LQcJmCYez6fVPJDO8UE382aQPA9Qj0apI",

        tag: "Fintech",
        date: "01 Dec, 2024",
        title: "Digital Wallets and the Future of Payments",
        description: "How digital wallets are transforming the way we handle money and transactions.",
        readTime: "6 min read",
        author: "Neha Gupta",
        category: "Financial Technology",
        fullContent: `
        <p>Digital wallets offer convenience and security, rapidly replacing traditional payment methods...</p>
        <h2>Popular Digital Wallets</h2>
        <p>Wallets like Apple Pay, Google Wallet, and Samsung Pay are leading the charge...</p>
        <h2>Security Features</h2>
        <p>Biometrics and encryption ensure user data and funds remain secure...</p>
      `,
        comments: [
            {
                id: 18,
                author: { name: "Lily Roberts", avatar: "/avatars/lily.jpg" },
                date: "3 days ago",
                content: "Excited to see how these tools evolve further!",
                likes: 20
            }
        ]
    },
    {
        id: 19,
        image: "https://cms.recordedfuture.com/uploads/Emerging_Threats_Social_Image_a7f31a8286.webp",

        tag: "Health Tech",
        date: "05 Dec, 2024",
        title: "The Role of AI in Diagnostics",
        description: "Learn how AI is aiding healthcare professionals in diagnosing diseases accurately and efficiently.",
        readTime: "7 min read",
        author: "Dr. Sarah Johnson",
        category: "Healthcare Innovation",
        fullContent: `
        <p>AI is revolutionizing diagnostics by identifying patterns in medical imaging and data...</p>
        <h2>Machine Learning in Radiology</h2>
        <p>AI assists radiologists by highlighting potential areas of concern in scans...</p>
        <h2>Predictive Analytics in Patient Care</h2>
        <p>Advanced algorithms can predict patient outcomes and help in preventative care...</p>
      `,
        comments: [
            {
                id: 19,
                author: { name: "Ethan Carter", avatar: "/avatars/ethan.jpg" },
                date: "1 day ago",
                content: "The future of AI in medicine is very promising!",
                likes: 30
            }
        ]
    },
    {
        id: 20,
        image: "https://media.licdn.com/dms/image/D4D12AQEYoNtJcCWZwA/article-cover_image-shrink_720_1280/0/1687263010036?e=2147483647&v=beta&t=tOCqw2AVV5SnXTVBuHLV1grjZRIA_aQ4wqfNTpuZS80",

        tag: "Remote Work",
        date: "10 Dec, 2024",
        title: "Remote Work Technology for 2024",
        description: "A guide to the latest tools and technologies enabling remote work and collaboration.",
        readTime: "6 min read",
        author: "Vikram Singh",
        category: "Workplace Technology",
        fullContent: `
        <p>Remote work is here to stay, and new technologies are enhancing collaboration and productivity...</p>
        <h2>Virtual Meeting Platforms</h2>
        <p>Zoom, Microsoft Teams, and new contenders are reshaping virtual meetings...</p>
        <h2>Project Management Tools</h2>
        <p>Trello, Asana, and Monday.com streamline remote project tracking...</p>
      `,
        comments: [
            {
                id: 20,
                author: { name: "Chloe Morgan", avatar: "/avatars/chloe.jpg" },
                date: "4 days ago",
                content: "Remote work has become so much easier with these tools!",
                likes: 22
            }
        ]
    }

    // Add additional entries up to 20
];
