import React from 'react'
import { Link } from 'react-router-dom'
import { FaLinkedin, FaTwitter, FaInstagram, FaYoutube, FaFacebookF } from 'react-icons/fa'
import { IoLocationSharp, IoMail, IoCall } from 'react-icons/io5'
import logo from '../../assets/home/logo.png'
import { footerData } from '../../data/footer'

const Footer = () => {
    const { company, services, quickLinks, resources, contact, legal } = footerData

    return (
        <footer className="w-full shadow-md bg-black text-white">
            <div className="w-11/12 lg:w-10/12 mx-auto py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {/* Company Info */}
                    <div className="space-y-6">
                        <img
                            src={logo || '/fallback-logo.png'}
                            alt={company?.name || 'Company Logo'}
                            className="w-40 h-auto bg-white rounded-md"
                            loading="lazy"
                        />
                        <p className="text-white leading-relaxed">
                            {company.description}
                        </p>
                        <div className="flex gap-4">
                            {Object.entries(company.socialLinks).map(([platform, url]) => (
                                <a
                                    key={platform}
                                    href={url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 rounded-full bg-violet-600 text-green-50 flex items-center justify-center hover:bg-violet-700 transition-colors"
                                >
                                    {platform === 'linkedin' && <FaLinkedin size={20} />}
                                    {platform === 'twitter' && <FaTwitter size={20} />}
                                    {platform === 'instagram' && <FaInstagram size={20} />}
                                    {platform === 'facebook' && <FaFacebookF size={20} />}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-xl font-bold text-white mb-6">Our Services</h3>
                        <ul className="space-y-4">
                            {services.map((service) => (
                                <li key={service.id}>
                                    <Link
                                        to={service.path}
                                        className="text-white hover:text-green-600 transition-colors inline-flex items-center gap-2"

                                    >
                                        <span className="w-2 h-2 bg-violet-600 rounded-full"></span>
                                        {service.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-xl font-bold text-white mb-6">Quick Links</h3>
                        <ul className="space-y-4">
                            {quickLinks.map((link) => (
                                <li key={link.id}>
                                    <Link
                                        to={link.path}
                                        className="text-white hover:text-green-600 transition-colors inline-flex items-center gap-2"
                                    >
                                        <span className="w-2 h-2 bg-violet-600 rounded-full hover:bg-green-600"></span>
                                        <span>{link.title}</span>
                                    </Link>
                                    {link.subLinks && (
                                        <ul className="ml-6 mt-2 space-y-2">
                                            {link.subLinks.map((subLink, index) => (
                                                <li key={index}>
                                                    <Link
                                                        to={subLink.path}
                                                        className="text-white hover:text-green-600 transition-colors text-sm"
                                                    >
                                                        <li> {subLink.title}</li>
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-xl font-bold text-white mb-6">Contact Us</h3>
                        <div className="space-y-4">
                            <div className="flex items-start gap-3 text-white">
                                <IoLocationSharp className="text-violet-600 text-xl mt-1" />
                                <p>{contact.address}</p>
                            </div>
                            <a href={`mailto:${contact.email}`} className="flex items-center gap-3 text-white hover:text-violet-600">
                                <IoMail className="text-violet-600 text-xl" />
                                {contact.email}
                            </a>
                            <a href={`tel:${contact.phone}`} className="flex items-center gap-3 text-white hover:text-violet-600">
                                <IoCall className="text-violet-600 text-xl" />
                                {contact.phone}
                            </a>
                            <p className="text-white mt-4">
                                {contact.supportHours}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="mt-12 pt-8 border-t border-gray-200">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-white">© 2024 {company.name}. All rights reserved.</p>
                        <div className="flex flex-wrap justify-center gap-6">
                            {legal.map((item) => (
                                <Link
                                    key={item.id}
                                    to={item.path}
                                    className="text-white hover:text-violet-600 transition-colors"
                                >
                                    {item.title}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer