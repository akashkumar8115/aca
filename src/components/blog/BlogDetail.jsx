import React from 'react';
import { motion } from 'framer-motion';
import { FaCalendar, FaUser, FaClock, FaTag } from 'react-icons/fa';
import BlogAuthor from './BlogAuthor';
import BlogComments from './BlogComments';
import BlogShareButtons from './BlogShareButtons';
import BlogRelated from './BlogRelated';

const BlogDetail = ({ post }) => {
    return (
        <div className="max-w-4xl mx-auto py-12">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
            >
                <div className="mb-8">
                    <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
                    <div className="flex flex-wrap gap-4 text-gray-600">
                        <span className="flex items-center gap-2">
                            <FaCalendar /> {post.date}
                        </span>
                        <span className="flex items-center gap-2">
                            <FaUser /> {post.author.name}
                        </span>
                        <span className="flex items-center gap-2">
                            <FaClock /> {post.readTime}
                        </span>
                        <span className="flex items-center gap-2">
                            <FaTag /> {post.category}
                        </span>
                    </div>
                </div>

                <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-[400px] object-cover rounded-xl mb-8"
                />

                <div className="prose prose-lg max-w-none">
                    {post.content}
                </div>

                <div className="border-t border-b py-6 my-8">
                    <BlogShareButtons url={window.location.href} title={post.title} />
                </div>

                <BlogAuthor author={post.author} />
                <BlogComments comments={post.comments} />
                <BlogRelated posts={post.relatedPosts} />
            </motion.div>
        </div>
    );
};

export default BlogDetail;
