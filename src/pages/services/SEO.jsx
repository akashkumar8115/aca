import React from 'react'

const SEO = () => {
    return (
        <div className="pt-24 min-h-screen bg-gradient-to-b from-white to-green-shade-50 mt-28 pb-12">
            <div className="w-11/12 lg:w-10/12 mx-auto">
                <h1 className="text-4xl font-bold text-center mb-8">Search Engine Optimization</h1>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <h2 className="text-2xl font-semibold mb-4">Technical SEO</h2>
                        <ul className="space-y-2 text-black-600">
                            <li>• Site Structure Optimization</li>
                            <li>• Mobile Responsiveness</li>
                            <li>• Page Speed Optimization</li>
                            <li>• XML Sitemap Creation</li>
                            <li>• Robots.txt Configuration</li>
                        </ul>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <h2 className="text-2xl font-semibold mb-4">On-Page SEO</h2>
                        <ul className="space-y-2 text-black-600">
                            <li>• Keyword Research & Analysis</li>
                            <li>• Meta Tags Optimization</li>
                            <li>• Content Optimization</li>
                            <li>• Internal Linking Strategy</li>
                            <li>• Image Optimization</li>
                        </ul>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <h2 className="text-2xl font-semibold mb-4">Off-Page SEO</h2>
                        <ul className="space-y-2 text-black-600">
                            <li>• Link Building</li>
                            <li>• Social Signals</li>
                            <li>• Brand Mentions</li>
                            <li>• Local SEO</li>
                            <li>• Competitor Analysis</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SEO
