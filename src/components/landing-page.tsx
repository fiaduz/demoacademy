import { useState, useEffect } from 'react';

export default function HomeHero() {
  const images = [
    "https://cdn-jagbh.nitrocdn.com/TYVZHePxisufUuSiVWDElscksnaOxEbE/assets/images/source/rev-50b38d4/s39613.pcdn.co/wp-content/uploads/2025/04/iStock-925033026-2048x1352.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQZ95OZIqO4ZScZYOMh8UyWIhUx1mHyq8O9ZdY5Z5bdQ&s=10",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQZ95OZIqO4ZScZYOMh8UyWIhUx1mHyq8O9ZdY5Z5bdQ&s=10"
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-advance carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <section id="home" className="bg-white text-gray-900 py-24 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left Callout */}
        <div className="space-y-6">
          <span className="text-blue-600 font-semibold tracking-widest uppercase text-xs bg-blue-50 px-3 py-1.5 rounded-full">
            Admissions Open 2026 - 2027
          </span>
          <h1 className="text-5xl md:text-6xl font-serif font-bold leading-[1.1] tracking-tight">
            Nurturing Minds, <br />
            <span className="text-blue-600">Shaping Tomorrows</span>
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed max-w-md">
            At Elite Academy, we offer a world-class holistic curriculum that pairs academic excellence with comprehensive athletic, artistic, and social development.
          </p>
          <div className="flex gap-4 pt-2">
            <a href="#about" className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all shadow-lg shadow-blue-200">
              Explore Curriculum
            </a>
            <a href="#contact" className="border border-gray-200 hover:border-blue-600 hover:text-blue-600 px-8 py-3 rounded-lg font-semibold transition-all">
              Schedule Tour
            </a>
          </div>
        </div>

        {/* Right Carousel Frame */}
        <div className="relative">
          <div className="absolute -inset-4 bg-gradient-to-tr from-blue-100 to-indigo-50 rounded-3xl blur-2xl opacity-60"></div>
          
          <div className="relative bg-white border border-gray-100 p-2 rounded-3xl shadow-xl shadow-gray-200/50 overflow-hidden">
            <div className="relative w-full h-[400px]">
              {images.map((img, idx) => (
                <img 
                  key={idx}
                  src={img} 
                  alt={`Campus life ${idx + 1}`}
                  className={`absolute inset-0 w-full h-full object-cover rounded-2xl transition-opacity duration-1000 ease-in-out ${
                    idx === activeIndex ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              ))}
            </div>
            
            {/* Dots Indicator */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
              {images.map((_, idx) => (
                <button 
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    idx === activeIndex ? 'bg-white w-8' : 'bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}