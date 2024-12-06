import React from 'react';
import { FaTags, FaRegClock } from 'react-icons/fa';

const BlogSidebar = ({ popularPosts, categories, tags }) => {
    return (
        <div className="space-y-8">
            {/* Popular Posts */}
            <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-bold mb-4">Popular Posts</h3>
                <div className="space-y-4">
                    {popularPosts.map(post => (
                        <div key={post.id} className="flex gap-4">
                            <img
                                src={post.image}
                                alt={post.title}
                                className="w-20 h-20 rounded-lg object-cover"
                            />
                            <div>
                                <h4 className="font-semibold hover:text-blue-600 transition-colors">
                                    {post.title}
                                </h4>
                                <div className="flex items-center gap-2 text-sm text-gray-600 mt-2">
                                    <FaRegClock />
                                    <span>{post.date}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Categories */}
            <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-bold mb-4">Categories</h3>
                <ul className="space-y-2">
                    {categories.map(category => (
                        <li key={category.name}>
                            <a
                                href={`#${category.slug}`}
                                className="flex justify-between items-center hover:text-green-200 transition-colors"
                            >
                                {category.name}
                                <span className="bg-gray-100 px-2 py-1 rounded-full text-sm hover:bg-green-400 transition-colors">
                                    {category.count}
                                </span>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Tags */}
            <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-bold mb-4">Popular Tags</h3>
                <div className="flex flex-wrap gap-2">
                    {tags.map(tag => (
                        <a
                            key={tag}
                            href={`#${tag}`}
                            className="px-3 py-1 bg-gray-100 rounded-full text-sm hover:text-green-400 transition-colors"
                        >
                            {tag}
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BlogSidebar;
