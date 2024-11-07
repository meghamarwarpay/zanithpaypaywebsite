import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapLocationDot, faEnvelope, faPhoneVolume } from '@fortawesome/free-solid-svg-icons';
import img2 from '../../assets/images/img2.png';

export default function Contact() {
  return (
    <section className="">
      <div className="container mx-auto px-10">
        <div className="flex flex-wrap items-center">
          {/* Left Side */}
          <div className="xl:w-1/2 lg:w-7/12 w-full mb-12 lg:mb-0 animate-fadeInLeft" data-wow-duration="2s" data-wow-delay="0.2s">
            <div className="section-head">
              <h4 className="text-lg text-primary bg-primary-light inline-block  font-bold">Contact Us</h4>
              <hr className="w-20  text-left  border-b-1 border-black mb-4" />
              <h2 className="text-4xl font-bold">We Love To Help</h2>
            </div>
            <div className="contact-info mt-8">
              <ul className="list-none space-y-4">
                <li className="flex items-center">
                  <FontAwesomeIcon icon={faMapLocationDot} className="text-xl text-red-500 mr-3" />
                  <p className="mb-0">
                    <b className="text-black">9 Dukan Kalwar Road,Jhotwara Jaipur,Rajasthan PIN: 302012 </b>
                  </p>
                </li>
                <li className="flex items-center">
                  <FontAwesomeIcon icon={faEnvelope} className="text-xl text-blue-500 mr-3" />
                  <a href="mailto:support@zanithpay.com" className="text-primary font-bold">support@zanithpay.com</a>
                </li>
                <li className="flex items-center">
                  <FontAwesomeIcon icon={faPhoneVolume} className="text-xl text-green-500 mr-3" />
                  <a href="tel:+91-8619082889" className="text-primary font-bold">+91-8619082889</a>
                </li>
              </ul>
            </div>
          </div>
          {/* Right Side */}
          <div className="xl:w-1/2 lg:w-5/12 w-full animate-fadeInRight" data-wow-duration="2s" data-wow-delay="0.4s">
            <div className="relative">
            <Image 
  src={img2} 
  alt="Contact Us" 

  width={500}  
  height={300}  
  className="w-full h-auto" 
  data-aos="flip-left" 
/>


            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
