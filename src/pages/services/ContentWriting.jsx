import React from 'react'

const ContentWriting = () => {
    return (
        <div className="pt-24 min-h-screen bg-gradient-to-b from-white to-violet-200 mt-28 pb-12">
            <div className="w-11/12 lg:w-10/12 mx-auto">
                <h1 className="text-4xl font-bold text-center mb-8">Content Writing Services</h1>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <h2 className="text-2xl font-semibold mb-4">Website Content</h2>
                        <ul className="space-y-2 text-black-600">
                            <li>• Homepage Copy</li>
                            <li>• Service Pages</li>
                            <li>• About Us Content</li>
                            <li>• Product Descriptions</li>
                            <li>• Landing Pages</li>
                        </ul>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <h2 className="text-2xl font-semibold mb-4">Blog Writing</h2>
                        <ul className="space-y-2 text-black-600">
                            <li>• SEO Blog Posts</li>
                            <li>• Industry News</li>
                            <li>• How-to Guides</li>
                            <li>• Case Studies</li>
                            <li>• Technical Articles</li>
                        </ul>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <h2 className="text-2xl font-semibold mb-4">Marketing Content</h2>
                        <ul className="space-y-2 text-black-600">
                            <li>• Email Newsletters</li>
                            <li>• Social Media Posts</li>
                            <li>• Press Releases</li>
                            <li>• White Papers</li>
                            <li>• Marketing Collateral</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContentWriting
