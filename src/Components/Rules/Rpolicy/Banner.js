import Image from 'next/image';
import banner from '../../../assets/images/6.jpg';
export default function Banner() {
  return (
    <div className="relative h-80">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={banner} 
          alt="Background"
          fill
          style={{ objectFit: 'cover' }}
          quality={100}
        />
      </div>

      {/* Centered Text */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <h1 className="text-5xl font-bold text-black pt-20">Refund & Cancellation</h1>
      </div>
    </div>
  );
}
