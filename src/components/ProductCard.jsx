import React from "react";
import { Link } from "react-router-dom";

export default function ProductCard({ id }) {
  return (
    <div
      className="border rounded-lg p-4 flex flex-col items-center"
      style={{
        backgroundImage: `url(${carouselInner})`,
      }}
    >
      <Link to={`/product/${id}`}>
        <img
          src="path/to/image.jpg"
          alt="Product"
          className="w-full h-48 object-cover mb-4"
        />
        <h2 className="text-lg md:text-xl font-semibold">Product Name</h2>
        <p className="text-sm md:text-base mt-2">$99.99</p>
      </Link>
      <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">
        Add to Cart
      </button>
    </div>
  );
}
