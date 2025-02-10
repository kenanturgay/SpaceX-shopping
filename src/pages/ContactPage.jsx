import React from "react";
import { contactData } from "../data/contactData";
import Button from "../components/Button";
import PageContent from "../layout/PageContent";

const ContactPage = () => {
  return (
    <PageContent>
    <div className="relative w-full min-h-screen font-montserrat flex flex-col ">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${contactData.backgroundImage})` }}
      />

      {/* Content Container */}
      <div className="mx-auto">
        <div className="relative container mx-auto lg:py-24 flex flex-col lg:flex-row items-center gap-44 ">
          {/* Left Section: Contact Info */}
          <div className="max-w-md w-full text-center lg:text-left lg:w-1/3">
            <h2 className="text-4xl font-bold text-white">
              {contactData.title}
            </h2>
            <p className="mt-4 text-lg text-white">{contactData.subtitle}</p>
            <Button className="mt-6 bg-primary_color hover:bg-opacity-90 text-white font-bold py-3 px-6 rounded transition duration-300">
              {contactData.buttonText}
            </Button>
          </div>

          {/* Right Section: Locations */}
          <div className="grid grid-cols-1 text-left sm:grid-cols-2 lg:grid-cols-2 gap-10 w-full lg:w-2/5">
            {contactData.locations.map((location, index) => (
              <div key={index} className="ml-6">
                <h3 className="text-xl font-semibold text-white">
                  {location.city}
                </h3>
                <p className="mt-2 text-white">{location.address}</p>
                <div className="my-2 w-12 border-b-2 border-primary_color"></div>
                <p className="text-white">{location.postalCode}</p>
                <p className="text-white mt-2">Phone: {location.phone}</p>
                <p className="text-white">Fax: {location.fax}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    </PageContent>
  );
};

export default ContactPage;
