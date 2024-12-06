
import React, { useState } from 'react'
import emailjs from '@emailjs/browser'

function ContactCTA() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    })
    
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitStatus, setSubmitStatus] = useState(null)
    const handleSubmit = (e) => {
        e.preventDefault()
        setIsSubmitting(true)

        emailjs.send(
            'YOUR_SERVICE_ID',
            'YOUR_TEMPLATE_ID',
            formData,
            'YOUR_PUBLIC_KEY'
        )
            .then((response) => {
                setSubmitStatus('success')
                setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    subject: '',
                    message: ''
                })
            })
            .catch((err) => {
                setSubmitStatus('error')
            })
            .finally(() => {
                setIsSubmitting(false)
                setTimeout(() => setSubmitStatus(null), 5000)
            })
    }

    return (
        <div>
            {/* Contact Form Section */}
            <div className="max-w-4xl mx-auto">
                <div className="bg-white rounded-xl shadow-lg p-8">
                    <h2 className="text-2xl font-semibold mb-6">Send Us a Message</h2>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <label className="block mb-2 font-medium">Name</label>
                                <input
                                    type="text"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-violet-50"
                                    required
                                    placeholder="Your name"
                                />
                            </div>
                            <div>
                                <label className="block mb-2 font-medium">Email</label>
                                <input
                                    type="email"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-violet-50"
                                    required
                                    placeholder="Your email"
                                />
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <label className="block mb-2 font-medium">Phone</label>
                                <input
                                    type="tel"
                                    value={formData.phone}
                                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                    className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-violet-50"
                                    placeholder="Your phone number"
                                />
                            </div>
                            <div>
                                <label className="block mb-2 font-medium">Subject</label>
                                <input
                                    type="text"
                                    value={formData.subject}
                                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                                    className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-violet-50"
                                    required
                                    placeholder="Message subject"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block mb-2 font-medium">Message</label>
                            <textarea
                                value={formData.message}
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                rows="5"
                                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-violet-50"
                                required
                                placeholder="Your message"
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className={`w-full bg-violet-50 text-white py-3 rounded-lg font-semibold
                                    ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:bg-violet-100'}
                                    transition-colors`}
                        >
                            {isSubmitting ? 'Sending...' : 'Send Message'}
                        </button>

                        {submitStatus === 'success' && (
                            <div className="text-green-600 text-center">
                                Message sent successfully!
                            </div>
                        )}

                        {submitStatus === 'error' && (
                            <div className="text-red-600 text-center">
                                Failed to send message. Please try again.
                            </div>
                        )}
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ContactCTA