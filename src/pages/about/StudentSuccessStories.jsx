import React from 'react';
import '../../styles/StudentSuccessStories.css';
const StudentSuccessStories = () => {
    const successStories = [
        {
            id: 1,
            name: "Sarah Johnson",
            image: "https://images.unsplash.com/photo-1725028748767-93b571f54da7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cmFuZG9tJTIwcGVyc29ufGVufDB8fDB8fHww",
            story: "After completing the program, I landed my dream job at a top tech company. The skills I learned were invaluable.",
            company: "Google",
            role: "Software Engineer"
        },
        {
            id: 2,
            name: "Michael Chen",
            image: "data:image/jpeg;base64,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",
            story: "The mentorship and practical projects helped me transition from a non-tech background to a successful developer.",
            company: "Microsoft",
            role: "Full Stack Developer"
        },
        {
            id: 3,
            name: "Emma Williams",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzMF7Dx7vtKEyiTeIvBSTOvG4H2IjVmwKiVP8VJlJzRWEQQckK1f72jlnIJVW3numizS0&usqp=CAU",
            story: "The collaborative environment and industry-focused curriculum gave me the confidence to start my own tech startup.",
            company: "TechStartup",
            role: "Founder & CTO"
        }
    ];

    return (
        <div className="min-h-screen pt-24">
            <div className="bg-gray-100 py-16 text-center">
                <h1 className="text-4xl font-bold mb-4">Student Success Stories</h1>
                <p className="text-xl text-gray-600">Discover how our students transformed their careers and achieved their dreams</p>
            </div>

            <div className="container mx-auto px-4 my-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {successStories.map((story) => (
                        <div key={story.id} className="bg-white rounded-lg shadow-lg overflow-hidden h-full">
                            <div className="aspect-w-1 aspect-h-1">
                                <img className="w-full h-half object-cover object-center" src={story.image} alt={story.name} />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-semibold mb-2">{story.name}</h3>
                                <p className="text-gray-600 mb-4">{story.role} at {story.company}</p>
                                <p className="text-gray-700">{story.story}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center my-20">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="p-6">
                            <h2 className="text-4xl font-bold text-blue-600">95%</h2>
                            <p className="text-gray-600 mt-2">Employment Rate</p>
                        </div>
                        <div className="p-6">
                            <h2 className="text-4xl font-bold text-blue-600">$85K</h2>
                            <p className="text-gray-600 mt-2">Average Starting Salary</p>
                        </div>
                        <div className="p-6">
                            <h2 className="text-4xl font-bold text-blue-600">500+</h2>
                            <p className="text-gray-600 mt-2">Success Stories</p>
                        </div>
                    </div>
                </div>

                <div className="text-center bg-gray-50 rounded-xl p-12">
                    <h2 className="text-3xl font-bold mb-4">Ready to Write Your Success Story?</h2>
                    <p className="text-xl text-gray-600 mb-8">Join our community of successful graduates and transform your career</p>
                    <button className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors">
                        Apply Now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default StudentSuccessStories;
