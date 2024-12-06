import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { blogData } from '../../data/blogData.js';
import BlogCard from '../../components/blog/BlogCard';
import BlogFilter from '../../components/blog/BlogFilter';
import BlogSearch from '../../components/blog/BlogSearch';
import BlogPagination from '../../components/blog/BlogPagination';
import BlogNewsletter from '../../components/blog/BlogNewsletter';
import BlogSidebar from '../../components/blog/BlogSidebar';

const Our_Blog = () => {
    const [filteredBlogs, setFilteredBlogs] = useState(blogData);
    const [currentPage, setCurrentPage] = useState(1);
    const blogsPerPage = 6;

    const filterBlogs = (category) => {
        if (category === "All") {
            setFilteredBlogs(blogData);
        } else {
            setFilteredBlogs(blogData.filter(blog => blog.category === category));
        }
        setCurrentPage(1);
    };

    const searchBlogs = (searchTerm) => {
        const filtered = blogData.filter(blog =>
            blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            blog.description.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredBlogs(filtered);
        setCurrentPage(1);
    };

    // Get current blogs
    const indexOfLastBlog = currentPage * blogsPerPage;
    const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
    const currentBlogs = filteredBlogs.slice(indexOfFirstBlog, indexOfLastBlog);

    return (
        <div className="bg-gray-50 min-h-screen pt-20">
            <div className="max-w-7xl mx-auto px-4 py-16">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-12"
                >
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Latest Insights & Articles</h1>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Stay updated with the latest trends in technology, career development, and industry insights
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-12 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-8">
                        <BlogSearch onSearch={searchBlogs} />
                        <BlogFilter onFilterChange={filterBlogs} />

                        <div className="grid md:grid-cols-2 gap-8">
                            <AnimatePresence>
                                {currentBlogs.map((blog, index) => (
                                    <BlogCard key={blog.id} blog={blog} index={index} />
                                ))}
                            </AnimatePresence>
                        </div>

                        {filteredBlogs.length > blogsPerPage && (
                            <BlogPagination
                                currentPage={currentPage}
                                totalPages={Math.ceil(filteredBlogs.length / blogsPerPage)}
                                onPageChange={setCurrentPage}
                            />
                        )}
                    </div>

                    {/* Sidebar */}
                    <div className="lg:col-span-4">
                        <BlogSidebar
                            popularPosts={blogData.slice(0, 3)}
                            categories={[
                                { name: 'Technology', count: 15, slug: 'technology' },
                                { name: 'Career Development', count: 12, slug: 'career-development' },
                                { name: 'Industry Insights', count: 8, slug: 'industry-insights' }
                            ]}
                            tags={['Technology', 'Career', 'Development', 'AI', 'Machine Learning']}
                        />
                    </div>
                </div>

                <BlogNewsletter />
            </div>
        </div>
    );
};

export default Our_Blog;
