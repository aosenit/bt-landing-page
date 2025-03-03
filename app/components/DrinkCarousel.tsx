"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const drinks = [
  {
    name: "VIRGIN MOJITO",
    type: "Cocktail - 0.8%",
    description:
      "A Mojito is a classic Cuban cocktail known for its refreshing, slightly sweet, and citrusy flavour, making it a popular summer drink. Its muddled ingredients release their flavours, creating a light and aromatic beverage.",
    ingredients: [
      "White rum, Fresh lime juice, Sugar",
      "Mint leaves, Soda water, and Ice. ",
    ],
    method:
      "Muddle fresh mint leaves, lime wedges, and 1-2 tsp sugar in a glass to release the flavours. Fill the glass with ice, pour in 2 oz white rum (or sparkling water for alcohol-free twist), and stir well. Garnish with a mint sprig and a lime slice.",
    image: "/images/virgin.svg",
  },
  {
    name: "BACARDI",
    type: "Spirit - 80%",
    description:
      "Bacardi is a world-famous rum brand known for its smooth, light-bodied flavour. Originally founded in Cuba in 1862, it produces a variety of rums, including white, gold, and spiced.",
    ingredients: [
      "Sugarcane molasses, Yeast, Water",
      "Charcoal filtration, Oak barrel ageing",
    ],
    method:
      "Sugarcane molasses is mixed with water and yeast to create alcohol, then distilled in column stills to produce a high-proof spirit. The rum is filtered through charcoal for smoothness and aged in oak barrels for deeper flavours.",
    image: "/images/bacardi2.svg",
  },
  {
    name: "PIÑA COLADA",
    type: "Cocktails - 0.5%",
    description:
      "Piña Colada is a tropical cocktail with a creamy texture. Originating from Puerto Rico, it has a sweet, rich, and refreshing flavour, often garnished with a pineapple slice and a cherry.",
    ingredients: ["Rum, Coconut cream", "Pineapple juice,  Blended with ice "],
    method:
      "Blend 2 oz white rum, 3 oz pineapple juice, and 1 oz coconut cream with ice until smooth. Pour into a chilled glass and garnish with a pineapple slice and cherry.",
    image: "/images/pina.svg",
  },
];

export default function DrinkCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? drinks.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === drinks.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative w-full  mx-auto p-6">
      <div className="relative flex items-center justify-between">
        <button onClick={prevSlide} className="p-2 bg-[#F0AD12] rounded-full">
          <ChevronLeft />
        </button>
        <div className="text-start px-4 flex flex-col lg:flex-row items-center justify-center gap-10 lg:px-[10rem]">
          <img
            src={drinks[currentIndex].image}
            alt={drinks[currentIndex].name}
            className=""
          />
          <div className="text-[20px]">
            {" "}
            <h2 className="text-xl lg:text-[48px] font-bold mt-4">
              {drinks[currentIndex].name}
            </h2>
            <p className="text-gray-600">{drinks[currentIndex].type}</p>
            <p className="mt-2 text-sm lg:text-[20px] text-gray-700">
              {drinks[currentIndex].description}
            </p>
            <h3 className="font-semibold mt-4 text-[#F0AD12]">Ingredients:</h3>
            <ul className="text-sm text-gray-600">
              {drinks[currentIndex].ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
            <h3 className="font-semibold mt-4 text-[#F0AD12]">Method:</h3>
            <p className="text-sm text-gray-700">
              {drinks[currentIndex].method}
            </p>
          </div>
        </div>
        <button onClick={nextSlide} className="p-2 bg-[#F0AD12] rounded-full">
          <ChevronRight />
        </button>
      </div>
    </div>
  );
}
