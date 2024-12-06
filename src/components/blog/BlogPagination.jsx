import React from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const BlogPagination = ({ currentPage, totalPages, onPageChange }) => {
    const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

    return (
        <div className="flex justify-center items-center gap-2 mt-12">
            <button
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="p-2 rounded-lg hover:bg-gray-100 disabled:opacity-50"
            >
                <FaChevronLeft />
            </button>

            {pages.map(page => (
                <button
                    key={page}
                    onClick={() => onPageChange(page)}
                    className={`w-10 h-10 rounded-lg ${currentPage === page
                        ? 'bg-blue-600 text-black'
                        : 'hover:bg-gray-100'
                        }`}
                >
                    {page}
                </button>
            ))}

            <button
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="p-2 rounded-lg hover:bg-green-100 disabled:opacity-50"
            >
                <FaChevronRight />
            </button>
        </div>
    );
};

export default BlogPagination;
