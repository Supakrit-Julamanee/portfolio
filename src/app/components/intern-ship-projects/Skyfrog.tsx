"use client";

import React from "react";
import Image from "next/image";

const Skyfrog = () => {
  const links = [
    {
      href: "https://www.skyfrog.net/",
      src: "/skyfrog/skyfrog-webpage.png",
      alt: "Skyfrog",
      label: "Skyfrog Company - Web Developer (7 month)",
      description: (
        <>
          <p>
            <span className="font-bold text-teal-400">Responsibilities:</span>
            <br />- Developed web applications using Ext.js, C#, and .NET Framework for a Transport Management System (TMS).
            <br />- Created a module for calculating and determining transportation costs for individual work orders, improving cost management efficiency.
            <br />- Gained experience in teamwork and utilized project management tools such as Jira and Bitbucket, as well as communication tools like Microsoft Teams.
          </p>
        </>
      ),
    },
  ];

  const images = [
    { src: "/skyfrog/skyfrog-1.jpg", alt: "Skyfrog project image 1", caption: "" },
    { src: "/skyfrog/skyfrog-2.jpg", alt: "Skyfrog project image 2", caption: "" },
    { src: "/skyfrog/skyfrog-3.jpg", alt: "Skyfrog project image 4", caption: "" },
  ];

  return (
    <div className="bg-gray-900 min-h-screen py-10 px-4">

      <div className="text-2xl font-semibold text-white p-2 mb-8 max-w-7xl mx-auto bg-teal-500 rounded-lg">Cooperative Education Program</div>

      <div className="max-w-7xl mx-auto space-y-8">
        {/* Links Section */}
        {links.map(({ href, src, alt, label, description }) => (
          <div
            key={alt}
            className="flex flex-col md:flex-row items-center p-6 rounded shadow-md text-white bg-gray-800"
          >
            <div className="md:w-1/2 flex justify-center mb-4 md:mb-0">
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-105 transform transition duration-300"
              >
                <Image
                  src={src}
                  alt={alt}
                  width={400}
                  height={250}
                  className="rounded-lg shadow-lg"
                />
                <span className="text-xs" >Ref: https://www.skyfrog.net/home/</span>
              </a>
            </div>
            <div className="md:w-1/2 md:pl-6">
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl font-bold text-teal-400 hover:text-teal-300"
              >
                {label}
              </a>
              <div className="mt-4 text-gray-300">{description}</div>
            </div>
          </div>
        ))}

        {/* Images Section */}
        <div className="grid grid-cols-3 gap-6 justify-items-center items-center">
          {images.map(({ src, alt }) => (
            <div key={alt} className="text-center">
              <Image
                src={src}
                alt={alt}
                width={400}
                height={250}
                className="rounded-lg shadow-lg hover:scale-105 transform transition duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skyfrog;
