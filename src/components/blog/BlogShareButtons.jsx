import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';

const BlogShareButtons = ({ url, title }) => {
    const shareButtons = [
        {
            icon: <FaFacebookF />,
            color: 'bg-[#3b5998]',
            href: `https://www.facebook.com/sharer/sharer.php?u=${url}`
        },
        {
            icon: <FaTwitter />,
            color: 'bg-[#1da1f2]',
            href: `https://twitter.com/intent/tweet?url=${url}&text=${title}`
        },
        {
            icon: <FaLinkedinIn />,
            color: 'bg-[#0077b5]',
            href: `https://www.linkedin.com/shareArticle?mini=true&url=${url}&title=${title}`
        },
        {
            icon: <FaWhatsapp />,
            color: 'bg-[#25d366]',
            href: `https://wa.me/?text=${title} ${url}`
        }
    ];

    return (
        <div className="flex items-center gap-3">
            <span className="text-gray-600 font-medium">Share:</span>
            {shareButtons.map((button, index) => (
                <a
                    key={index}
                    href={button.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${button.color} text-white w-8 h-8 rounded-full flex items-center justify-center hover:opacity-80 transition-opacity`}
                >
                    {button.icon}
                </a>
            ))}
        </div>
    );
};

export default BlogShareButtons;
