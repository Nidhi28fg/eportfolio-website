import React from "react";

const Map = () => {
  return (
    <div className="my-8">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14129.28789744687!2d72.81132429502995!3d18.973374157374483!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ce6ea1b17137%3A0xfe198eb13bcbf5e3!2sMumbai%20Central%2C%20Mumbai%2C%20Maharashtra!5e1!3m2!1sen!2sin!4v1753195294248!5m2!1sen!2sin"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade" className="w-[100%] h-[700px]"
      ></iframe>
    </div>
  );
};

export default Map;
