"use client";

import React from "react";
import Image from "next/image";

const Aeki = () => {
  const links = [
    {
      href: "https://auth-be703.firebaseapp.com/",
      src: "/aeki/web-preview.png",
      alt: "Aeki Web Preview",
      label: "Aeki (Furniture Sales System)",
      description: (
        <>
          <p className="mb-2">
            <span className="font-bold">Tools:</span> React.js, Firebase (Firestore, Storage, Authentication)
          </p>
          <p>
            <span className="font-bold text-teal-400">Description:</span>
            <br />- A web application for selling furniture, named Aeki.
            <br />- Includes an administrator section and a general user section.
            <br />- Features: Login and Register, Shopping Cart, Purchase History, Product Management, Order List, and Documentation.
          </p>
        </>
      ),
    },
  ];

  const images = [
    { src: "/aeki/web-preview.png", alt: "Aeki Web Preview", caption: "Login Page" },
    { src: "/aeki/admin-stock.png", alt: "Admin Stock Management", caption: "Admin - Stock Management Page" },
    { src: "/aeki/user-bugket.png", alt: "User Shopping Cart", caption: "User - Shopping Cart Page" },
    { src: "/aeki/user-order.png", alt: "User Order Management", caption: "User - Order Management Page" },
  ];

  return (
    <div className="bg-gray-900 min-h-screen py-10 px-4">
      {/* Header */}
      <div className="text-2xl font-semibold text-white p-4 mb-8 max-w-7xl mx-auto bg-teal-500 rounded-lg">
        University Project / Aeki (Furniture Sales System)
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto space-y-10">
        {links.map(({ href, src, alt, label, description }) => (
          <div
            key={alt}
            className="flex flex-col md:flex-row items-center bg-gray-800 p-6 rounded shadow-md text-white"
          >
            {/* Image */}
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
              </a>
            </div>

            {/* Description */}
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

        {/* Gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 justify-items-center items-center">
          {images.map(({ src, alt, caption }) => (
            <div key={alt} className="text-center">
              <Image
                src={src}
                alt={alt}
                width={400}
                height={250}
                className="rounded-lg shadow-lg hover:scale-105 transform transition duration-300"
              />
              <p className="mt-2 text-gray-300">{caption}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Aeki;