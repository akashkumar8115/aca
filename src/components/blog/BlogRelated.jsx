import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

const BlogRelated = ({ posts }) => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const cardVariants = {
        hidden: { y: 50, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        },
        hover: {
            y: -10,
            transition: {
                duration: 0.3
            }
        }
    };
console.log(posts);

    return (
        <section className="py-12">
            <motion.h2 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-3xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600"
            >
                Related Articles
            </motion.h2>
            
            <motion.div 
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="grid md:grid-cols-3 gap-8"
            >
                {posts.map((post, index) => (
                    <motion.div
                        key={post.id}
                        variants={cardVariants}
                        whileHover="hover"
                        className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300"
                    >
                        <Link to={`/about/our-blog/${post.id}`}>
                            <div className="relative overflow-hidden">
                                <motion.img
                                    whileHover={{ scale: 1.1 }}
                                    transition={{ duration: 0.3 }}
                                    src={post.image}
                                    alt={post.title}
                                    className="w-full h-48 object-cover"
                                />
                                <div className="absolute top-4 right-4 bg-blue-500 text-white px-3 py-1 rounded-full text-sm">
                                    {post.category}
                                </div>
                            </div>
                            
                            <div className="p-6">
                                <div className="text-sm text-gray-500 mb-2">{post.date}</div>
                                <h3 className="text-xl font-semibold mb-2 line-clamp-2 hover:text-blue-600 transition-colors">
                                    {post.title}
                                </h3>
                                <p className="text-gray-600 mb-4 line-clamp-2">
                                    {post.description}
                                </p>
                                
                                <div className="flex items-center justify-between">
                                    <span className="text-sm text-gray-500">{post.readTime}</span>
                                    <motion.span 
                                        whileHover={{ x: 5 }}
                                        className="text-blue-500 flex items-center gap-2"
                                    >
                                        Read More <FaArrowRight />
                                    </motion.span>
                                </div>
                            </div>
                        </Link>
                    </motion.div>
                ))}
            </motion.div>
            
        </section>
    );
};

export default BlogRelated;
