import Image from 'next/image';
import React from 'react';
import about from '../../assets/images/about.png'

function Intro() {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-between p-6">
     <div className="w-full sm:w-1/2 mb-4 sm:mb-0" data-aos="fade-up">
  <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
    All Your Financial Needs, Wrapped Up in One Easy Platform!
  </h1>
  <p className="pt-10">Better Services Provide by Marwarpay is world`s best leading online service provider in India. We at Marwarpay provide Aadhaar Enabled Payment System (AEPS), Domestic Money Transfer, Recharge (Mobile, Dth, Data Card), Bill Payment System (Electricity, Landline, Mobile Bill Payment) of all leading service provider at unbel ievably lowest price. Now you don’t have to stand in queue for all Recharge, Bill Payment, Aeps and Money Transfer, You Can pay easily all these payments with Marwarpay store services in India. You can transfer money from any place to any bank account at any time in India using Marwarpay Store domestic money transfer service.</p>
</div>

      <div className="w-full sm:w-1/2 pl-20" data-aos="fade-down">
        {/* <img 
          src="/images/about.png" 
          alt="Financial Platform" 
          className=" rounded-lg" style={{width:'70%'}} 
        /> */}
         <Image 
  src={about} 
  alt="Financial Platform" 

  width={500}  
  height={300}  
  className=" rounded-lg" style={{width:'70%'}} 
  data-aos="flip-left" 
/>

      </div>
    </div>
  );
}

export default Intro;
