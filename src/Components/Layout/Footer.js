import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';
import { faMapLocationDot, faEnvelope, faPhoneVolume } from '@fortawesome/free-solid-svg-icons'; // Importing the specified icons
import { faFacebookF, faTwitter, faLinkedinIn, faYoutube } from '@fortawesome/free-brands-svg-icons';
import Image from "next/image";
import img from '../../assets/images/logo.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer-area bg-blue-500 relative z-10 ">
      <div className="footer-widget px-10">
        <div className="container mx-auto">
          <div className="row footer-widget-wrapper pt-24 pb-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="col-md-6 col-lg-3">
              <div className="footer-widget-box about-us">
                <Link href="#" className="footer-logo">
          <Image
             src={img}
             alt='Logo'
             width={100} height={50}
                className="bg-white p-2 rounded-lg mb-2"
            />
         
            
                </Link>
                <p className="mb-3 text-white">
                  All the banking and digital services provided by us are fully
                  secured.
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-2">
              <div className="footer-widget-box list">
                <h4 className="footer-widget-title text-white mb-4">Quick Links</h4>
                <ul className="footer-list space-y-2">
                  <li>
                    <Link href="/" className="text-white">
                      <FontAwesomeIcon icon={faCaretRight} className="mr-2" /> Home
                    </Link>
                  </li>
                  <li>
                    <Link href="/about" className="text-white">
                      <FontAwesomeIcon icon={faCaretRight} className="mr-2" /> About Us
                    </Link>
                  </li>
                  <li>
                    <Link href="/services" className="text-white">
                      <FontAwesomeIcon icon={faCaretRight} className="mr-2" /> Our Services
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="footer-widget-box list">
                <h4 className="footer-widget-title text-white mb-4">Support Center</h4>
                <ul className="footer-list space-y-2">
                  <li>
                    <Link href="/contact" className="text-white">
                      <FontAwesomeIcon icon={faCaretRight} className="mr-2" /> Contact Us
                    </Link>
                  </li>
                  <li>
                    <Link href="/terms-conditions" className="text-white">
                      <FontAwesomeIcon icon={faCaretRight} className="mr-2" /> Terms Of Service
                    </Link>
                  </li>
                  <li>
                    <Link href="/privacy-policy" className="text-white">
                      <FontAwesomeIcon icon={faCaretRight} className="mr-2" /> Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link href="/refund_policy" className="text-white">
                      <FontAwesomeIcon icon={faCaretRight} className="mr-2" />Refund Cancellation Policy
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="footer-widget-box list">
                <h4 className="footer-widget-title text-white mb-4">Contact Us</h4>
                <ul className="footer-contact space-y-2">
                  <li>
                    <Link href="tel:+91-8619082889" className="text-white">
                      <FontAwesomeIcon icon={faPhoneVolume} className="mr-2" />+91-8619082889
                    </Link>
                  </li>
                  <li className="text-white">
                    <FontAwesomeIcon icon={faMapLocationDot} className="mr-2" />9 Dukan Kalwar Road,Jhotwara Jaipur,Rajasthan PIN: 302012
                  </li>
                  <li>
                    <Link href="mailto:support@zanithpay.com" className="text-white">
                      <FontAwesomeIcon icon={faEnvelope} className="mr-2" /> support@zanithpay.com
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright bg-blue-700 py-5 px-5">
        <div className="container mx-auto">
          <div className="row flex justify-between items-center">
            <div className="col-md-6 text-white">
            ZanithPay PRIVATE LIMITED © {currentYear}</div>
            <div className="col-md-6">
              <ul className="footer-social flex space-x-4 justify-end">
                <li>
                  <Link href="#" className="text-white">
                    <FontAwesomeIcon icon={faFacebookF} />
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-white">
                    <FontAwesomeIcon icon={faTwitter} />
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-white">
                    <FontAwesomeIcon icon={faLinkedinIn} />
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-white">
                    <FontAwesomeIcon icon={faYoutube} />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
