import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faIdCard, faMoneyBillTransfer } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import img1 from '../../assets/images/1.png';
const Agent = () => {
  return (
    <section className="app-area py-8 px-10">
      <div className="container mx-auto">
        <div className="app-wrapper flex flex-wrap items-center">
          <div className="w-full sm:w-full md:w-1/2 lg:w-1/2">
            <div className="sec-heading">
              <h2 className="sec__title text-3xl font-bold">Are You Ready?</h2>
              <h5 className="sec-title text-xl mt-2">Become an Agent Today</h5>

              <div className="w-full">
                {/* Stepline with circular icons and connecting line */}
                <div className="stepline mb-6 mt-10">
                  <div className="relative flex flex-col">
                    <div className="absolute h-52 border-l-2 border-blue-500 left-8"></div>
                    
                    <div className="agent-column flex items-center relative z-10 mb-10">
                      <div className="w-16 h-16 flex items-center justify-center bg-blue-500 rounded-full text-white">
                        <FontAwesomeIcon icon={faDownload} className="text-2xl" />
                      </div>
                      <div className="ml-4">
                        <h4 className="text-lg font-semibold">Download Marwarpay App</h4>
                        <p className="text-sm text-gray-600">Download &amp; Install Marwarpay App from Google Play Store</p>
                      </div>
                    </div>

                    <div className="agent-column flex items-center relative z-10 mb-10">
                      <div className="w-16 h-16 flex items-center justify-center bg-green-500 rounded-full text-white">
                        <FontAwesomeIcon icon={faIdCard} className="text-2xl" />
                      </div>
                      <div className="ml-4">
                        <h4 className="text-lg font-semibold">Update Your KYC</h4>
                        <p className="text-sm text-gray-600">
                          Register and Upload KYC (you can do e-KYC for instant activation – biometric device required)
                        </p>
                      </div>
                    </div>

                    <div className="agent-column flex items-center relative z-10 mb-10">
                      <div className="w-16 h-16 flex items-center justify-center bg-purple-500 rounded-full text-white">
                        <FontAwesomeIcon icon={faMoneyBillTransfer} className="text-2xl" />
                      </div>
                      <div className="ml-4">
                        <h4 className="text-lg font-semibold">Start Transacting</h4>
                        <p className="text-sm text-gray-600">Start Earning</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="download-btn"></div>
            </div>
          </div>

          <div className="w-full sm:w-full md:w-1/2 lg:w-1/2 ml-auto">
            <div className="mobile-overview">
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
        </div>
      </div>
    </section>
  );
};

export default Agent;
