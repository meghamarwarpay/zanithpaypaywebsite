import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import carousel styles

const testimonials = [
  {
    name: 'John Doe',
    feedback: 'MarwarPay has transformed the way I handle payments. Highly recommend!',
    designation: 'Business Owner',
  },
  {
    name: 'Jane Smith',
    feedback: 'Excellent service and support. I couldn’t ask for more!',
    designation: 'Freelancer',
  },
  {
    name: 'Robert Brown',
    feedback: 'Quick and easy integration with my existing systems!',
    designation: 'E-commerce Manager',
  },
];

const TestimonialsPage = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">What Our Clients Say</h1>
      <hr className="w-16 mx-auto my-4 border-b-2 border-black"></hr>
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        showArrows={true}
        interval={3000}
        transitionTime={500}
        emulateTouch={true}
        showIndicators={true}
      >
        {testimonials.map((testimonial, index) => (
          <div key={index} className="p-6 border border-gray-300 rounded-lg shadow-md mb-10">
            <h3 className="text-xl font-semibold">{testimonial.name}</h3>
            <p className="mt-2 italic">{testimonial.feedback}</p>
            <p className="mt-4 text-gray-600">{testimonial.designation}</p>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default TestimonialsPage;
