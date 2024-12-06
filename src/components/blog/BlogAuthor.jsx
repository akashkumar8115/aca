import React from 'react';
import { motion } from 'framer-motion';
import { FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';

const BlogAuthor = ({ author }) => {
    const [ref, inView] = useInView({
        threshold: 0.2,
        triggerOnce: true
    });

    if (!author || !Array.isArray(author)) return null;

    const cardVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    const socialIconVariants = {
        hover: {
            scale: 1.2,
            rotate: 360,
            transition: { duration: 0.3 }
        }
    };

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={cardVariants}
            className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-2xl p-8 my-8 backdrop-blur-sm relative overflow-hidden"
        >
            {author.map((auth, index) => (
                <motion.div
                    key={index}
                    className="flex flex-col md:flex-row items-center gap-8 relative z-10"
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.2 }}
                >
                    <div className="relative">
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            className="w-32 h-32 rounded-full overflow-hidden ring-4 ring-blue-400 shadow-xl"
                        >
                            <img
                                src={auth.avatar}
                                alt={auth.name}
                                className="w-full h-full object-cover"
                            />
                        </motion.div>
                        {auth.position && (
                            <motion.div
                                className="absolute -bottom-2 -right-2 bg-blue-500 text-white px-3 py-1 rounded-full text-sm"
                                whileHover={{ scale: 1.1 }}
                            >
                                {auth.position}
                            </motion.div>
                        )}
                    </div>

                    <div className="flex-1 space-y-4">
                        <motion.h3
                            className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600"
                            whileHover={{ scale: 1.02 }}
                        >
                            {auth.name || 'Anonymous'}
                        </motion.h3>

                        {auth.bio && (
                            <motion.p
                                className="text-gray-600 leading-relaxed"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.3 }}
                            >
                                {auth.bio}
                            </motion.p>
                        )}

                        {auth.socialLinks && (
                            <div className="flex gap-4 pt-4">
                                {auth.socialLinks.map((link, linkIndex) => (
                                    <motion.a
                                        key={linkIndex}
                                        href={link.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-2xl text-gray-600 hover:text-blue-500 transition-colors"
                                        variants={socialIconVariants}
                                        whileHover="hover"
                                    >
                                        {link.name === 'Twitter' && <FaTwitter />}
                                        {link.name === 'LinkedIn' && <FaLinkedin />}
                                        {link.name === 'GitHub' && <FaGithub />}
                                    </motion.a>
                                ))}
                            </div>
                        )}
                    </div>
                </motion.div>
            ))}
            
            {/* Background animation elements */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-50 via-white to-purple-50 opacity-50" />
            <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        </motion.div>
    );
};

export default BlogAuthor;