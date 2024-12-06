import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaReply, FaThumbsUp } from 'react-icons/fa';

const BlogComments = ({ comments }) => {
    const [activeReply, setActiveReply] = useState(null);

    return (
        <div className="space-y-8 mt-12">
            <h3 className="text-2xl font-bold">Comments ({comments.length})</h3>

            {comments.map((comment) => (
                <motion.div
                    key={comment.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-white rounded-xl shadow-lg p-6"
                >
                    <div className="flex gap-4">
                        <img
                            src={comment.author.avatar}
                            alt={comment.author.name}
                            className="w-12 h-12 rounded-full"
                        />
                        <div className="flex-1">
                            <div className="flex justify-between items-start">
                                <div>
                                    <h4 className="font-bold">{comment.author.name}</h4>
                                    <span className="text-sm text-gray-600">{comment.date}</span>
                                </div>
                                <button className="flex items-center gap-2 text-gray-600 hover:text-blue-600">
                                    <FaThumbsUp /> {comment.likes}
                                </button>
                            </div>
                            <p className="mt-3 text-gray-700">{comment.content}</p>
                            <button
                                onClick={() => setActiveReply(activeReply === comment.id ? null : comment.id)}
                                className="mt-3 flex items-center gap-2 text-blue-600 hover:text-blue-700"
                            >
                                <FaReply /> Reply
                            </button>

                            {activeReply === comment.id && (
                                <div className="mt-4">
                                    <textarea
                                        placeholder="Write your reply..."
                                        className="w-full p-3 rounded-lg border focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600"
                                        rows="3"
                                    />
                                    <button className="mt-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                                        Post Reply
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </motion.div>
            ))}
        </div>
    );
};

export default BlogComments;
