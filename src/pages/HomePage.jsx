import React from "react";
import Slider from "../components/Slider";
import PageContent from "../layout/PageContent";
import ProductCard from "../components/ProductCard";

export default function HomePage() {
  const firstSlides = [
    {
      id: 1,
      title: "SUMMER 2020",
      subtitle: "NEW COLLECTION",
      description:
        "We know how large objects will act, but things on a small scale.",
      buttonText: "SHOP NOW",
      image: "/images/slider1.jpg",
    },
    {
      id: 2,
      title: "WINTER SALE",
      subtitle: "HOT DEALS",
      description: "Discover our winter collection with amazing discounts.",
      buttonText: "SHOP NOW",
      image: "/images/slider1.jpg",
    },
  ];

  const secondSlides = [
    {
      id: 1,
      title: "SUMMER 2021",
      subtitle: "Vita Classic Product",
      description:
        "We know how large objects will act. We know how are objects will act.",
      buttonText: "ADD TO CART",
      price: "$16.48",
      image: "/images/slider2.jpg",
    },
    {
      id: 2,
      title: "WINTER SALE",
      subtitle: "Vita Classic Product",
      description: "Discover our winter collection with amazing discounts.",
      buttonText: "ADD TO CART",
      price: "$16.48",
      image: "/images/slider2.jpg",
    },
  ];

  return (
    <div className="container mx-auto px-0 lg:px-8">
      <PageContent>
        {/* Slider Section */}
        <div className="mb-8">
          <Slider slides={firstSlides} />
        </div>

        {/* Products Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {secondSlides.map((slide) => (
            <ProductCard
              key={slide.id}
              title={slide.title}
              subtitle={slide.subtitle}
              description={slide.description}
              price={slide.price}
              buttonText={slide.buttonText}
              image={slide.image}
            />
          ))}
        </div>
      </PageContent>
    </div>
  );
}
