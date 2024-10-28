import Image from 'next/image';
import React from 'react';
import img1 from '../../assets/images/bbps.png';
import img2 from '../../assets/images/pan.png';
import img3 from '../../assets/images/recharge.png';
import img4 from '../../assets/images/money.png';
import img5 from '../../assets/images/aeps.png';



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
    content: 'Marwarpay currently provide Recharge facility to all Leading telecom operator mobile users Like BSNL, Reliance-Jio, Airtel, Vodafone, Idea, Telenor . . .',
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

const Service = () => {
  return (
    <div className=''>
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold text-center mb-6">Our B2B Services</h1>
        <hr className="w-16 mx-auto my-4 border-b-2 border-black" />
        <div className="grid grid-cols-1 gap-6">
          {servicesData.map((service, index) => (
            <div
              key={index}
              className="mt-10 flex flex-col sm:flex-row relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              {/* Image on the left */}
              <div className="w-full sm:w-1/2">
              <Image
             src={service.image}
             alt={service.title}
              width='auto'
              height='auto'
               className="h-full object-cover rounded-t-lg sm:rounded-none sm:rounded-l-lg"
            />
             
              </div>

              {/* Text on the right */}
              <div className="w-full sm:w-1/2 bg-white p-4 flex flex-col justify-center">
                <h2 className="text-xl font-semibold text-center sm:text-left">{service.title}</h2>
                <p className="mt-2 text-gray-600 text-center sm:text-left">{service.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;
