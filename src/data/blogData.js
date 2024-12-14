import Blog1 from '../assets/blog/blog-01.jpg';
import Blog2 from '../assets/blog/blog-02.jpg';
import Blog3 from '../assets/blog/blog-03.jpg';
import Blog4 from '../assets/blog/blog-04.jpg';
import Blog5 from '../assets/blog/blog-05.jpg';
import Blog6 from '../assets/blog/blog-06.jpg';

export const blogData = [
    
    {
        id: 1,
        image: Blog1,
        tag: "Technology",
        date: "01 Oct, 2024",
        title: "How is technology working with new things?",
        description: "Discover how emerging technologies like AI, blockchain, and IoT are revolutionizing industries and creating new opportunities for innovation and growth.",
        readTime: "5 min read",
        author: "Dr. Rajesh Kumar",
        category: "Tech Trends"
    },
    {
        id: 2,
        image: Blog2,
        tag: "Technology",
        date: "02 Oct, 2024",
        title: "Top 10 important tips on IT services & design",
        description: "Learn essential strategies for delivering exceptional IT services and creating user-centric designs that drive business success and user satisfaction.",
        readTime: "8 min read",
        author: "Priya Sharma",
        category: "IT Services",
        isFeatured: true,
        readTime: "5 min read"
    },
    {
        id: 3,
        image: Blog3,
        tag: "Technology",
        date: "03 Oct, 2024",
        title: "How our company works in different ways",
        description: "Explore our innovative approaches to problem-solving, team collaboration, and project management that set us apart in the technology industry.",
        readTime: "6 min read",
        author: "Amit Patel",
        category: "Company Culture",
        readTime: "15 min read"
    },
    {
        id: 4,
        image: Blog4,
        tag: "Artificial Intelligence",
        date: "04 Oct, 2024",
        title: "The Future of AI in Business Operations",
        description: "Understand how artificial intelligence is transforming business operations and what companies need to do to stay competitive in an AI-driven world.",
        readTime: "7 min read",
        author: "Dr. Sarah Johnson",
        category: "Artificial Intelligence",
        readTime: "10 min read"
    },
    {
        id: 5,
        image: Blog5,
        tag: "Cybersecurity",
        date: "05 Oct, 2024",
        title: "Cybersecurity Best Practices for 2024",
        description: "Stay protected with the latest cybersecurity strategies and tools designed to safeguard your digital assets and maintain data privacy.",
        readTime: "10 min read",
        author: "Vikram Singh",
        category: "Cybersecurity",
        readTime: "12 min read"
    },
    {
        id: 6,
        image: Blog6,
        tag: "Digital Transformation",
        date: "06 Oct, 2024",
        title: "Digital Transformation Success Stories",
        description: "Learn from real-world examples of successful digital transformation initiatives and the key factors that contributed to their success.",
        readTime: "9 min read",
        author: "Neha Gupta",
        category: "Digital Transformation",
        readTime: "15 min read"
    },
    {
        id: 7,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRO5_j5_g94I1HbuT3XahzB3jTQQzvE3fijRQ&s",
        tag: "Blockchain",
        date: "07 Oct, 2024",
        title: "Blockchain Beyond Cryptocurrency",
        description: "Explore how blockchain technology is reshaping supply chains, healthcare, and other industries beyond its role in cryptocurrency.",
        readTime: "6 min read",
        author: "Suresh Mehta",
        category: "Blockchain",
        readTime: "12 min read"
    },
    {
        id: 8,
        image: "https://community.nasscom.in/sites/default/files/styles/960_x_600/public/media/images/0x0%20%281%29.jpg?itok=PEVCtsx2",
        tag: "Machine Learning",
        date: "08 Oct, 2024",
        title: "Machine Learning for Data Analytics",
        description: "Understand the role of machine learning in data analytics, from predictive modeling to customer insights.",
        readTime: "7 min read",
        author: "Radhika Kapoor",
        category: "Data Science",
        readTime: "10 min read"
    },
    {
        id: 9,
        image: "data:image/png;base64,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",
        tag: "Programming",
        date: "09 Oct, 2024",
        title: "Top 5 Coding Languages to Learn in 2024",
        description: "Discover the coding languages that will be most in-demand for job seekers and software developers in the coming years.",
        readTime: "5 min read",
        author: "Arjun Das",
        category: "Software Development",
        readTime: "35 min read"
    },
    {
        id: 10,
        image: "https://fastercapital.co/i/The-Top-Startups-to-Watch-in--The-Top-Startups-to-Watch-in-2024.webp",
        tag: "Innovation",
        date: "10 Oct, 2024",
        title: "Innovative Startups to Watch in 2024",
        description: "Meet the most promising tech startups that are set to disrupt industries and drive innovation forward.",
        readTime: "9 min read",
        author: "Meena Kaur",
        category: "Startups",
        readTime: "12 min read"
    },
    {
        id: 11,
        image: "https://artificialpaintings.com/wp-content/uploads/2024/06/1732_IoT_in_the_Smart_Home_Future_Trends_and_Innovations.webp",
        tag: "IoT",
        date: "11 Oct, 2024",
        title: "IoT and Smart Home Technology Trends",
        description: "Dive into the latest advancements in Internet of Things (IoT) for smart homes, including home automation and smart devices.",
        readTime: "8 min read",
        author: "Dr. Nitin Rao",
        category: "IoT",
        readTime: "5 min read"
    },
    {
        id: 12,
        image: "https://www.supplychainbrain.com/ext/resources/2024/02/06/HEALTHCARE-ARTIFICIAL-INTELLIGENCE-AI-iStock--FotografieLink--1517344698.jpg?t=1707282440&width=1080",
        tag: "Healthcare Technology",
        date: "12 Oct, 2024",
        title: "Healthcare Technology Transformations in 2024",
        description: "Explore the impact of technology on healthcare, from telemedicine to AI-assisted diagnostics.",
        readTime: "7 min read",
        author: "Dr. Alka Desai",
        category: "Health Tech",
        readTime: "10 min read"
    },
    {
        id: 13,
        image: "https://media.licdn.com/dms/image/v2/D5612AQG1NSJkx7WYKQ/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1691662028934?e=1736985600&v=beta&t=KDDIKw3taUKCANzDrvv3XTan-vojL2lCGi-zUibIogE",
        tag: "Cloud Computing",
        date: "13 Oct, 2024",
        title: "Best Practices for Cloud Security",
        description: "Learn about securing your cloud infrastructure and ensuring compliance in an increasingly digital world.",
        readTime: "6 min read",
        author: "Mahesh Jain",
        category: "Cloud Computing",
        readTime: "15 min read"
    },
    {
        id: 14,
        image: "https://d1hah6ww96mip9.cloudfront.net/layout/banners/promotions/BLOG_METADATA_COVER_IMAGES/IMG_1685420999769_a28d722aee8641eaa165b9b41cdf7d4d-1p872-w1396p0-h746p0-en_v1.jpg",
        tag: "Automation",
        date: "14 Oct, 2024",
        title: "How Automation is Shaping Manufacturing",
        description: "Discover the latest trends in automation and how it’s transforming the manufacturing industry.",
        readTime: "8 min read",
        author: "Divya Singh",
        category: "Manufacturing Tech",
        readTime: "13 min read"
    },
    {
        id: 15,
        image: "https://media.licdn.com/dms/image/v2/D5612AQEoYlNaXZN27g/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1709821633261?e=1736985600&v=beta&t=0DbrYlSIauU-McSRc_BknctbkqDX9545dfv55lAYzNY",
        tag: "Data Science",
        date: "15 Oct, 2024",
        title: "Data Science Applications in Marketing",
        description: "Understand how data science is used to analyze consumer data, personalize marketing, and improve ROI.",
        readTime: "10 min read",
        author: "Ananya Sharma",
        category: "Marketing Analytics",
        readTime: "12 min read"
    },
    {
        id: 16,
        image: "https://media.licdn.com/dms/image/D4E12AQH3-6lkwjJspw/article-cover_image-shrink_600_2000/0/1709816925133?e=2147483647&v=beta&t=LlcqqDRCmSfyFgzmMv0XJrHGRlgHAt5Mfmtx5_0xjLc",
        tag: "VR/AR",
        date: "16 Oct, 2024",
        title: "Virtual Reality and Augmented Reality in Education",
        description: "Explore how VR and AR are revolutionizing education by enhancing learning experiences and engagement.",
        readTime: "7 min read",
        author: "Rakesh Verma",
        category: "EdTech",
        readTime: "11 min read"
    },
    {
        id: 17,
        image: "https://www.goodnet.org/photos/281x197/33464_hd.jpg",
        tag: "Sustainability",
        date: "17 Oct, 2024",
        title: "Sustainable Technology Innovations",
        description: "Learn about new tech solutions that are contributing to sustainability, from renewable energy to eco-friendly materials.",
        readTime: "9 min read",
        author: "Pooja Nair",
        category: "Green Tech",
        readTime: "14 min read"
    },
    {
        id: 18,
        image: "https://media.licdn.com/dms/image/D4E12AQGOq8UkEd-iCQ/article-cover_image-shrink_720_1280/0/1699628089782?e=2147483647&v=beta&t=tfupFW3fy9LQcJmCYez6fVPJDO8UE382aQPA9Qj0apI",
        tag: "E-commerce",
        date: "18 Oct, 2024",
        title: "Top E-commerce Trends of 2024",
        description: "Get insights on e-commerce trends shaping the industry, including AI-powered personalization and social commerce.",
        readTime: "5 min read",
        author: "Anil Kapoor",
        category: "E-commerce",
        readTime: "12 min read"
    },
    {
        id: 19,
        image: "https://cms.recordedfuture.com/uploads/Emerging_Threats_Social_Image_a7f31a8286.webp",
        tag: "Cybersecurity",
        date: "19 Oct, 2024",
        title: "Emerging Threats in Cybersecurity",
        description: "Stay updated on the latest threats to cybersecurity, including ransomware, phishing, and data breaches.",
        readTime: "8 min read",
        author: "Sandeep Tiwari",
        category: "Cybersecurity",
        readTime: "11 min read"
    },
    {
        id: 20,
        image: "https://media.licdn.com/dms/image/D4D12AQEYoNtJcCWZwA/article-cover_image-shrink_720_1280/0/1687263010036?e=2147483647&v=beta&t=tOCqw2AVV5SnXTVBuHLV1grjZRIA_aQ4wqfNTpuZS80",
        tag: "Remote Work",
        date: "20 Oct, 2024",
        title: "Productivity Tips for Remote Workers",
        description: "Boost your productivity while working remotely with these expert tips and tools for maintaining focus.",
        readTime: "6 min read",
        author: "Nisha Rao",
        category: "Remote Work",
        readTime: "10 min read"
    },
    // Add more blog entries up to 25 here.
];
