import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import partner from '../../assets/partner.jpg'
import {partnerData} from '../../data/partner'



const PartnerAndCollab = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill out all fields");
      return;
    }

    emailjs
      .send(
        "YOUR_SERVICE_ID", // Replace with your actual service ID
        "YOUR_TEMPLATE_ID", // Replace with your actual template ID
        formData,
        "YOUR_USER_ID" // Replace with your actual user ID
      )
      .then(
        (response) => {
          toast.success("Email sent successfully!");
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          toast.error("Failed to send email. Please try again.");
        }
      );
  };


  return (
    <section className="mt-24 py-24 bg-gray-100 ">

      {/* ----------- container ------------ */}

      <div className="lg:w-10/12 w-11/12 mx-auto flex flex-col gap-y-28">

        {/* ----------- upper part -------------- */}

        <div className="flex flex-col items-center w-full gap-x-8 gap-y-12  xmd:flex-row justify-between border border-black-400 bg-green-100 py-12 xmd:pl-8 pl-8 pr-8 xmd:pr-0 rounded-lg">
          
            {/* Left Section */}
            <div data-aos="fade-right" className="xmd:w-[55%] w-full">
              <h1 className="mb-4 text-3xl font-bold text-gray-800">Join the ACA Pvt Ld.</h1>
              <p className="mb-6 text-gray-600">
              Collaborating for a Better Future.
              </p>
              <form onSubmit={handleSubmit} className="p-1 space-y-4 text-black-900">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    minLength="3"
                    maxLength="50"
                    pattern="[A-Za-z\s]+"
                    title="Name should only contain letters and spaces, and be between 3 and 50 characters."
                    className="w-full px-4 py-2 rounded-md  focus:outline-none focus:ring-2 focus:ring-green-500 "
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email address"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                    title="Please enter a valid email address."
                    className="w-full px-4 py-2 rounded-md shadow-inner focus:outline-none focus:ring-2 focus:ring-green-500 shadow-gray-600"
                  />
                </div>
                <div>
                  <textarea
                    name="message"
                    placeholder="Enter about your company"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    minLength="10"
                    maxLength="500"
                    title="Message should be between 10 and 500 characters."
                    className="w-full px-4 py-2 rounded-md shadow-inner focus:outline-none focus:ring-2 focus:ring-green-500 shadow-gray-600"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full px-4 py-2 font-semibold transition-all duration-300 text-white bg-green-400 rounded-md text-white-100 hover:bg-green-700"
                >
                  Join now
                </button>
              </form>

              {/* Additional Text Below Form */}
              <div className="flex justify-between mt-6 text-gray-700">
                <Link to={"/"}>  <p className="text-left hover:underline">ACA Pvt Ltd.</p></Link>

                <h1 className="text-right">
                  <p className="text-lg font-bold">Mohd. Shadab Ansari</p>
                  <p>Founder of ACA</p>
                </h1>
              </div>
            </div>

            {/* Right Section */}
            <div data-aos="fade-left" className="xmd:w-[30%] w-[70%] ">

              <img src={partner} alt="partner" className="w-full h-full object-cover" />
           
            </div> 
          

          {/* Toastify Container */}
          <ToastContainer position="top-right" autoClose={3000} hideProgressBar />
        </div>

        {/* ------------- bottom part ------------ */}

        <div className="flex flex-col gap-y-12">

       <h1 className="xmd:text-4xl text-3xl text-center font-semibold">Our Partners & Collaborators</h1>

        <div className="grid xmd:grid-cols-3 sm:grid-cols-2 grid-cols-1 text-center">
          {partnerData.map((company, index) => (
            <div data-aos={company.id % 2 === 0 ? "fade-up" : "fade-down"} key={index} className="w-full p-2  ">
              <div className="flex flex-col  h-full px-4  py-6 gap-y-4 border border-black-200 rounded-lg ">
                <img src={company.image} alt={`${company.name} logo`} className="w-32 h-32 mx-auto  rounded-full" />
                <h2 className=" text-xl font-semibold text-gray-800">{company.name}</h2>
                <p className="font-semibold">{`Founded By ${company.ceo}`}</p>
                <p className="text-gray-600 xmd:text-base text-sm">{company.about}</p>
              </div>
            </div>
          ))}
        </div>

        </div>

     

      </div>



    </section>
  )
}

export default PartnerAndCollab