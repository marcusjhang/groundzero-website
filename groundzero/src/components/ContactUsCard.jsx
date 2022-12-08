import React from 'react';

const ContactUsCard = ({ icon, link }) => (
    <div className="flex justify-between flex-col px-10 py-12 rounded-[20px] max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 contactus-card">
    <img src={icon} className="w-[220px] h-[220px] object-contain" />
    <p className="font-poppins font-normal text-[18px] leading-[32px] text-white my-10">{link}</p>
    </div>
);

export default ContactUsCard;