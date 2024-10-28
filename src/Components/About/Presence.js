import Image from 'next/image';
import img1 from '../../assets/images/map.png';

const OurPresence = () => {
  return (
    <div className="py-8 px-10">
      <div className="container mx-auto flex flex-wrap">
        <div className="w-full md:w-1/2 lg:w-2/5">
          <div className="mb-4">
          <Image 
  src={img1} 
  alt="Contact Us" 

  width={500}  
  height={300}  
  className="w-full h-auto" 
  data-aos="flip-left" 
/>
          </div>
        </div>
        <div className="w-full md:w-1/2 lg:w-3/5 md:pl-8">
          <h2 className="text-2xl font-bold mb-4">Our Presence</h2>
          <p className="mb-4">
            Marwarpay Info Solutions Private Limited offers its users the facility of Online Recharge, Money Transfer, Bus Booking, Flight Booking, Cab Booking, and Hotel Booking.
          </p>
          <p>
            Marwarpay Info Solutions Private Limited provides Business to Business services through its portal. Join us to earn additional benefits. We offer attractive margins for all prepaid/postpaid operators, including Airtel, Vodafone, Videocon, Aircel, Tata Docomo, Idea, BSNL, Reliance, MTS, and leading DTH operators such as Dish TV, TATA Sky, Sun Direct, Videocon D2h, Reliance Digital TV, Airtel Digital TV, and all other booking services.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurPresence;
