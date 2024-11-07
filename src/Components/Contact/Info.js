import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapLocationDot, faPhoneVolume, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import img1 from '../../assets/images/contact-us.png';
const Contact = () => {
  return (
    <div className="contact-area py-24 px-10">
      <div className="container mx-auto px-4">
        <div className="contact-content">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-6 bg-gray-100 rounded-lg shadow-md">
  {/* Office Address */}
  <div className="contact-info flex items-start p-4 bg-white rounded-lg shadow hover:shadow-lg transition-shadow duration-300 ease-in-out transform hover:scale-105">
    <div className="contact-info-icon text-4xl text-blue-600 mr-4">
      <FontAwesomeIcon icon={faMapLocationDot} />
    </div>
    <div className="contact-info-content">
      <h5 className="text-xl font-semibold mb-2 text-gray-800">Office Address</h5>
      <p className="text-gray-600">
        9 Dukan Kalwar Road, Jhotwara Jaipur, Rajasthan PIN: 302012
      </p>
    </div>
  </div>

  {/* Call Us */}
  <div className="contact-info flex items-start p-4 bg-white rounded-lg shadow hover:shadow-lg transition-shadow duration-300 ease-in-out transform hover:scale-105">
    <div className="contact-info-icon text-4xl text-blue-600 mr-4">
      <FontAwesomeIcon icon={faPhoneVolume} />
    </div>
    <div className="contact-info-content">
      <h5 className="text-xl font-semibold mb-2 text-gray-800">Call Us</h5>
      <p className="text-gray-600">+91-8619082889</p>
    </div>
  </div>

  {/* Email Us */}
  <div className="contact-info flex items-start p-4 bg-white rounded-lg shadow hover:shadow-lg transition-shadow duration-300 ease-in-out transform hover:scale-105">
    <div className="contact-info-icon text-4xl text-blue-600 mr-4">
      <FontAwesomeIcon icon={faEnvelope} />
    </div>
    <div className="contact-info-content">
      <h5 className="text-xl font-semibold mb-2 text-gray-800">Email Us</h5>
      <p className="text-gray-600">
        <a href="mailto:support@zanithpay.com" className="text-blue-600 hover:underline">
          support@zanithpay.com
        </a>
      </p>
    </div>
  </div>
</div>


        </div>

        <div className="contact-wrapper mt-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="contact-img">
          
              <Image 
  src={img1} 
  alt="Contact Us" 

  width={500}  
  height={300}  
  className="w-full h-auto" 
  data-aos="flip-left" 
/>
            </div>
            <div className="contact-form">
              <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
              <form method="post" action="" id="contact-form">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control w-full border border-gray-300 px-4 py-2"
                      name="name"
                      placeholder="Your Name"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control w-full border border-gray-300 px-4 py-2"
                      name="email"
                      placeholder="Your Email"
                      required
                    />
                  </div>
                </div>
                <div className="form-group mt-4">
                  <input
                    type="text"
                    className="form-control w-full border border-gray-300 px-4 py-2"
                    name="subject"
                    placeholder="Your Subject"
                    required
                  />
                </div>
                <div className="form-group mt-4">
                  <textarea
                    name="message"
                    cols="30"
                    rows="5"
                    className="form-control w-full border border-gray-300 px-4 py-2"
                    placeholder="Write Your Message"
                  ></textarea>
                </div>
                <button type="submit" className="theme-btn mt-6 bg-blue-600 text-white px-6 py-2 rounded-md">
                  Send Message <i className="far fa-paper-plane ml-2"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
