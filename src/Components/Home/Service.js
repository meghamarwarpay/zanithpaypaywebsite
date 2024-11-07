// pages/services.js

import React from 'react';
import img1 from '../../assets/images/bbps.png';
import img2 from '../../assets/images/pan.png';
import img3 from '../../assets/images/recharge.png';
import img4 from '../../assets/images/money.png';
import img5 from '../../assets/images/aeps.png';
import Image from 'next/image';

const servicesData = [
   {
    title: 'BBPS',
    content: 'The Bharat bill payment system is a Reserve Bank of India (RBI) conceptualised system driven by National Payments Corporation of India (NPCI).',
    image: img1, // Replace with your image path
  },
  {
    title: 'PAN Card',
    content: 'A PAN card is a document that no taxpayer can do without. Besides being compulsory in order to file your Income Tax returns.',
    image: img2, // Replace with your image path
  },
  {
    title: 'Recharge',
    content: 'ZanithPay currently provide Recharge facility to all Leading telecom operator mobile users Like BSNL, Reliance-Jio, Airtel, Vodafone, Idea, Telenor . . .',
    image: img3, // Replace with your image path
  },
  {
    title: 'Money Transfer',
    content: 'We offer high security instant money transfer API with free API integration. Use our API and transfer online money at any time from anywhere in India.',
    image: img4, // Replace with your image path
  },
  {
    title: 'AEPS',
    content: 'AEPS can send and receive payment from any where and any time using aadhaar number and thumb impression.',
    image: img5, // Replace with your image path
  },
];

const Services = () => {
  return (
    <div className='bgclrbc'>
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold text-center mb-6">Our B2B Services</h1>
      <hr className="w-16 mx-auto my-4 border-b-2 border-black" />
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {servicesData.map((service, index) => (
          <div key={index} className="mt-10 relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="bg-white rounded-lg h-full transform transition-transform duration-300 hover:scale-105">
              {/* <img src={service.image} alt={service.title} className="h-48 object-cover rounded-t-lg" style={{width: '100%'}} /> */}
              <Image
             src={service.image}
             alt={service.title}
              width={500}
              height={300}
               className="h-48 object-cover rounded-t-lg sm:rounded-none sm:rounded-l-lg"
            />
              <div className="p-4">
                <h2 className="text-xl font-semibold text-center">{service.title}</h2>
              </div>
              <div className="absolute inset-0 flex items-center justify-center bg-gray-800 text-white opacity-0 hover:opacity-100 transition-opacity duration-300 p-4 rounded-lg">
                <p className="text-center">{service.content}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Services;
