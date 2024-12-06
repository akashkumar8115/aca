import React from 'react';
import { useParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { blogData } from '../../data/blogFullData';
import BlogAuthor from '../../components/blog/BlogAuthor';
import BlogComments from '../../components/blog/BlogComments';
import BlogShareButtons from '../../components/blog/BlogShareButtons';
import BlogRelated from '../../components/blog/BlogRelated';
import { FaCalendar, FaUser, FaClock, FaTag } from 'react-icons/fa';

const BlogFullArticle = () => {
    const { id } = useParams();
    const blog = blogData.find(blog => blog.id === parseInt(id));
    const relatedPosts = blogData.filter(post => post.category === blog?.category && post.id !== blog?.id).slice(0, 3);

    console.log(relatedPosts,blog);
    

    if (!blog) return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex justify-center items-center h-screen"
        >
            Blog not found
        </motion.div>
    );

    return (
        <AnimatePresence>
            <div className="bg-gradient-to-br from-gray-50 to-white min-h-screen py-16 px-4 pt-24">
                <motion.article
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="max-w-4xl mx-auto bg-white rounded-xl shadow-xl overflow-hidden"
                >
                    <motion.img
                        initial={{ scale: 1.1 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.5 }}
                        src={blog.image}
                        alt={blog.title}
                        className="w-full h-[500px] object-cover transform hover:scale-105 transition-transform duration-500"
                    />

                    <div className="p-8">
                        <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="flex flex-wrap gap-4 text-sm text-gray-600 mb-4"
                        >
                            <span className="flex items-center gap-2 bg-gray-100 px-3 py-1 rounded-full">
                                <FaCalendar className="text-blue-500" /> {blog.date}
                            </span>
                            <span className="flex items-center gap-2 bg-gray-100 px-3 py-1 rounded-full">
                                <FaUser className="text-green-500" />
                                {Array.isArray(blog.author) ? blog.author[0].name : blog.author}
                            </span>
                            <span className="flex items-center gap-2 bg-gray-100 px-3 py-1 rounded-full">
                                <FaClock className="text-orange-500" /> {blog.readTime}
                            </span>
                            <span className="flex items-center gap-2 bg-gray-100 px-3 py-1 rounded-full">
                                <FaTag className="text-purple-500" /> {blog.category}
                            </span>



                        </motion.div>

                        <motion.h1
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.3 }}
                            className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600"
                        >
                            {blog.title}
                        </motion.h1>

                        <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.4 }}
                            className="prose prose-lg max-w-none mb-8"
                        >
                            {blog.fullContent.map((content, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.2 * index }}
                                    className="text-gray-800 mb-4 leading-relaxed"
                                >
                                    {content.paragraph}
                                </motion.div>
                            ))}
                        </motion.div>

                        <BlogShareButtons url={window.location.href} title={blog.title} />
                    </div>
                </motion.article>

                <div className="max-w-4xl mx-auto mt-12">
                    <BlogAuthor author={Array.isArray(blog.author) ? blog.author : [blog.author]} />
                    <BlogComments comments={blog.comments} />
                    <BlogRelated posts={relatedPosts} />
                </div>
            </div>
        </AnimatePresence>
    );
};

export default BlogFullArticle;
