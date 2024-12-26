import React from "react";
import carouselInner from "../assets/inners/carousel-inner.png";

export default function ProductCard() {
  return (
    <div
      className="bg-cover bg-center h-[753px] w-[414px]"
      style={{
        backgroundImage: `url(${carouselInner})`,
      }}
    >
      
    </div>
  );
}