// components/ServicesSection.js
import Image from 'next/image';
import img1 from '../../assets/images/flight_booking_1.png';
import img2 from '../../assets/images/aadharcard.png';
import img3 from '../../assets/images/Money-Transfer-p.png';
import img4 from '../../assets/images/postpaid.png';

const ServicesSection = () => {
  return (
    <section className="py-10 px-10" id="services">
      <div className="container mx-auto">
        {/* Heading */}
        <div className="flex justify-center mb-12">
          <div className="text-center">
            <span className="text-lg text-gray-500">Services</span>
            <h2 className="text-3xl font-bold">
              What We <span className="text-indigo-600">Offer</span>
            </h2>
            <div className="w-16 h-1 bg-indigo-600 mx-auto mt-4"></div>
          </div>
        </div>

        {/* Service 1 - Flight Booking */}
        <div className="flex flex-wrap items-center justify-center lg:flex-row-reverse mb-20">
          <div className="w-full lg:w-1/2">
            <Image
              src={img1}
              alt="Flight Ticket Booking"
              width={500}
              height={300}
              className="w-full"
            />
          </div>
          <div className="w-full lg:w-1/2">
            <h3 className="text-2xl font-bold mb-4">Flight Ticket Booking</h3>
            <p className="mb-4">
              Seamless search experience, lower fares compared to the market, and simple booking process makes our portal demanding among distributors and agents.
            </p>
            <p className="mb-4">
              Planning a trip? Look no further than our convenient flight ticket booking service...
            </p>
            <ul className="list-disc ml-5">
              <li>Single Journey</li>
              <li>Round Trip Journey</li>
              <li>Connecting Flights</li>
            </ul>
          </div>
        </div>

        {/* Service 2 - AEPS */}
        <div className="flex flex-wrap items-center justify-center mb-20">
        <div className="w-full lg:w-1/2">
            <Image
              src={img2}
              alt="Aadhar Enabled Payment System"
              width={500}
              height={300}
              className="w-full"
            />
          </div>
          <div className="w-full lg:w-1/2">
            <h3 className="text-2xl font-bold mb-4">Aadhar Enabled Payment System (AEPS)</h3>
            <p className="mb-4">
              Using this service, you can offer the facility of banking using just the customer`s fingerprint.
            </p>
            <p className="mb-4">
              AEPS revolutionizes banking accessibility by allowing individuals to carry out financial transactions using only their Aadhaar number and biometric authentication.
            </p>
            <ul className="list-disc ml-5">
              <li>Cash Withdrawal</li>
              <li>Balance Inquiry</li>
              <li>Mini Statement</li>
            </ul>
          </div>
         
        </div>

        {/* Service 3 - Direct Money Transfer */}
        <div className="flex flex-wrap items-center justify-center lg:flex-row-reverse mb-20">
          <div className="w-full lg:w-1/2">
            <Image
              src={img3}
              alt="Direct Money Transfer"
              width={500}
              height={300}
              className="w-full"
            />
          </div>
          <div className="w-full lg:w-1/2">
            <h3 className="text-2xl font-bold mb-4">Direct Money Transfer</h3>
            <p className="mb-4">
              Send money anywhere in India using the Direct Money Transfer facility with just the bank account number and IFSC code.
            </p>
            <p className="mb-4">
              Direct money transfer refers to the process of electronically transferring funds from one account to another without the need for physical currency or checks.
            </p>
          </div>
        </div>

        {/* Service 4 - Recharge */}
        <div className="flex flex-wrap items-center justify-center mb-20">
        <div className="w-full lg:w-1/2">
            <Image
              src={img4}
              alt="Recharge"
              width={500}
              height={300}
              className="w-full"
            />
          </div>
          <div className="w-full lg:w-1/2">
            <h3 className="text-2xl font-bold mb-4">Recharge (Prepaid and Postpaid)</h3>
            <p className="mb-4">
              Recharge or pay bills of postpaid mobile phones with attractive discounts in your wallet.
            </p>
            <p className="mb-4">
              Recharging prepaid and postpaid accounts has never been easier with our convenient services.
            </p>
            <ul className="list-disc ml-5">
              <li>Prepaid Recharge</li>
              <li>Postpaid Bill Payments</li>
            </ul>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
