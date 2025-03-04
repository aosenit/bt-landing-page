"use client";

import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const drinks = [
  {
    name: "VIRGIN MOJITO",
    type: "Cocktail - 0.8%",
    description:
      "A Mojito is a classic Cuban cocktail known for its refreshing, slightly sweet, and citrusy flavour, making it a popular summer drink. Its muddled ingredients release their flavours, creating a light and aromatic beverage.",
    ingredients: [
      "White rum, Fresh lime juice, Sugar",
      "Mint leaves, Soda water, and Ice. "
    ],
    method:
      "Muddle fresh mint leaves, lime wedges, and 1-2 tsp sugar in a glass to release the flavours. Fill the glass with ice, pour in 2 oz white rum (or sparkling water for alcohol-free twist), and stir well. Garnish with a mint sprig and a lime slice.",
    image: "/images/virgin.svg"
  },
  {
    name: "BACARDI",
    type: "Spirit - 80%",
    description:
      "Bacardi is a world-famous rum brand known for its smooth, light-bodied flavour. Originally founded in Cuba in 1862, it produces a variety of rums, including white, gold, and spiced.",
    ingredients: [
      "Sugarcane molasses, Yeast, Water",
      "Charcoal filtration, Oak barrel ageing"
    ],
    method:
      "Sugarcane molasses is mixed with water and yeast to create alcohol, then distilled in column stills to produce a high-proof spirit. The rum is filtered through charcoal for smoothness and aged in oak barrels for deeper flavours.",
    image: "/images/bacardi2.svg"
  },
  {
    name: "PIÑA COLADA",
    type: "Cocktails - 0.5%",
    description:
      "Piña Colada is a tropical cocktail with a creamy texture. Originating from Puerto Rico, it has a sweet, rich, and refreshing flavour, often garnished with a pineapple slice and a cherry.",
    ingredients: ["Rum, Coconut cream", "Pineapple juice,  Blended with ice "],
    method:
      "Blend 2 oz white rum, 3 oz pineapple juice, and 1 oz coconut cream with ice until smooth. Pour into a chilled glass and garnish with a pineapple slice and cherry.",
    image: "/images/pina.svg"
  }
];

export default function DrinkCarousel() {
  const [currentIndex, setCurrentIndex] = useState(1); 
  const [isAnimating, setIsAnimating] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);

  // Setup initial scroll position
  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft = carouselRef.current.offsetWidth;
    }
  }, []);

  // Auto-slide functionality
  useEffect(() => {
    const timer = setInterval(() => {
      if (!isAnimating) {
        handleSlide('next');
      }
    }, 5000);

    return () => clearInterval(timer);
  }, [isAnimating]);

  const handleSlide = (direction: 'prev' | 'next') => {
    if (isAnimating || !carouselRef.current) return;

    setIsAnimating(true);
    const container = carouselRef.current;
    const slideWidth = container.offsetWidth;
    const currentScroll = container.scrollLeft;
    const targetScroll = direction === 'next' 
      ? currentScroll + slideWidth 
      : currentScroll - slideWidth;

    container.scrollTo({
      left: targetScroll,
      behavior: 'smooth'
    });

    // Handle infinite scroll
    setTimeout(() => {
      setCurrentIndex(prev => {
        let newIndex;
        if (direction === 'next') {
          newIndex = prev === drinks.length ? 1 : prev + 1;
        } else {
          newIndex = prev === 1 ? drinks.length : prev - 1;
        }

        // If we're at the cloned slides, jump to the real slides without animation
        if (newIndex === 1 && direction === 'next') {
          container.style.scrollBehavior = 'auto';
          container.scrollLeft = slideWidth;
          container.style.scrollBehavior = 'smooth';
        } else if (newIndex === drinks.length && direction === 'prev') {
          container.style.scrollBehavior = 'auto';
          container.scrollLeft = slideWidth * drinks.length;
          container.style.scrollBehavior = 'smooth';
        }

        return newIndex;
      });
      setIsAnimating(false);
    }, 500);
  };

  const handleDotClick = (index: number) => {
    if (isAnimating || !carouselRef.current) return;
    
    setIsAnimating(true);
    const container = carouselRef.current;
    const slideWidth = container.offsetWidth;
    const targetScroll = slideWidth * (index + 1); // +1 for the cloned slide

    container.scrollTo({
      left: targetScroll,
      behavior: 'smooth'
    });

    setTimeout(() => {
      setCurrentIndex(index + 1);
      setIsAnimating(false);
    }, 500);
  };

  // Create array with cloned items for infinite scroll
  const extendedDrinks = [
    drinks[drinks.length - 1], // Clone last item
    ...drinks,
    drinks[0] // Clone first item
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-4 md:px-8 py-12">
      <div className="relative">
        {/* Previous Button */}
        <button 
          onClick={() => handleSlide('prev')} 
          className="absolute left-0 lg:top-1/2 top-[20%] lg:-translate-y-1/2 z-10 p-2 bg-[#F0AD12] rounded-full hover:bg-[#d89a10] transition-colors"
          aria-label="Previous slide"
          disabled={isAnimating}
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* Carousel Container */}
        <div 
          ref={carouselRef}
          className="overflow-hidden"
        >
          <div className="flex">
            {extendedDrinks.map((drink, index) => (
              <div 
                key={index}
                className="w-full flex-shrink-0 px-8 md:px-16 lg:px-20"
              >
                <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16">
                  {/* Image Section */}
                  <div className="w-full lg:w-1/2 flex justify-center relative">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-gray-300/30 rounded-full" />
                    <div className="">
                      <img
                        src={drink.image}
                        alt={drink.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="w-full lg:w-1/2 space-y-4">
                    <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold">
                      {drink.name}
                    </h2>
                    <p className="text-gray-600 text-lg">
                      {drink.type}
                    </p>
                    <p className="text-gray-700 text-base md:text-lg">
                      {drink.description}
                    </p>
                    
                    <div className="space-y-6">
                      <div>
                        <h3 className="font-semibold text-[#F0AD12] text-xl mb-2">
                          Ingredients:
                        </h3>
                        <ul className="text-gray-600 space-y-1">
                          {drink.ingredients.map((ingredient, i) => (
                            <li key={i} className="text-base md:text-lg">
                              {ingredient}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h3 className="font-semibold text-[#F0AD12] text-xl mb-2">
                          Method:
                        </h3>
                        <p className="text-gray-700 text-base md:text-lg">
                          {drink.method}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Next Button */}
        <button 
          onClick={() => handleSlide('next')} 
          className="absolute right-0 lg:top-1/2 top-[20%] lg:-translate-y-1/2 z-10 p-2 bg-[#F0AD12] rounded-full hover:bg-[#d89a10] transition-colors"
          aria-label="Next slide"
          disabled={isAnimating}
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Slide Indicators */}
      <div className="flex justify-center space-x-2 mt-8">
        {drinks.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              currentIndex === index + 1
                ? 'bg-[#F0AD12] w-4' 
                : 'bg-gray-300'
            }`}
            aria-label={`Go to slide ${index + 1}`}
            disabled={isAnimating}
          />
        ))}
      </div>
    </div>
  );
}
