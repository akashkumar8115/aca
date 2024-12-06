import React from 'react'

const GraphicDesign = () => {
    return (
        <div className="pt-24 min-h-screen bg-gradient-to-b from-white to-violet-100 mt-28 pb-12">
            <div className="w-11/12 lg:w-10/12 mx-auto">
                <h1 className="text-4xl font-bold text-center mb-8">Graphic Design Services</h1>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <h2 className="text-2xl font-semibold mb-4">Brand Identity</h2>
                        <ul className="space-y-2 text-black-600">
                            <li>• Logo Design</li>
                            <li>• Brand Guidelines</li>
                            <li>• Color Palette Selection</li>
                            <li>• Typography Selection</li>
                            <li>• Brand Assets Creation</li>
                        </ul>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <h2 className="text-2xl font-semibold mb-4">Marketing Materials</h2>
                        <ul className="space-y-2 text-black-600">
                            <li>• Social Media Graphics</li>
                            <li>• Brochures & Flyers</li>
                            <li>• Business Cards</li>
                            <li>• Banners & Posters</li>
                            <li>• Email Templates</li>
                        </ul>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <h2 className="text-2xl font-semibold mb-4">Digital Design</h2>
                        <ul className="space-y-2 text-black-600">
                            <li>• UI/UX Design</li>
                            <li>• Web Graphics</li>
                            <li>• App Interface Design</li>
                            <li>• Infographics</li>
                            <li>• Digital Illustrations</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GraphicDesign
