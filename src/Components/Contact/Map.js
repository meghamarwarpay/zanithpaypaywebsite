import React from 'react';

function Map() {
  return (
    <div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3556.5476376101287!2d75.70834707544076!3d26.949551776625206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjbCsDU2JzU4LjQiTiA3NcKwNDInMzkuMyJF!5e0!3m2!1sen!2sin!4v1729924721114!5m2!1sen!2sin"
        width='100%'
        height="450"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}

export default Map;
