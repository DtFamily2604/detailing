import React, { useState, useEffect, useRef } from "react";
import ContactForm from "./ContacnForm";
import { images } from "./assets";

function App() {
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const [currentReview, setCurrentReview] = useState(0);

  const portfolioItems = [
    {
      id: 1,
      before: images.car1.before,
      after: images.car1.after,
    },
    {
      id: 2,
      before: images.car2.before,
      after: images.car2.after,
    },
    {
      id: 3,
      before: images.car3.before,
      after: images.car3.after,
    },
    {
      id: 4,
      before: images.car4.before,
      after: images.car4.after,
    },
    {
      id: 5,
      before: images.car5.before,
      after: images.car5.after,
    },
    {
      id: 6,
      before: images.car6.before,
      after: images.car6.after,
    },
  ];

  const reviews = [
    { name: "Samantha R.", review: "David is doing great job! Friendly, on-time and professional." },
    { name: "Carlos M.", review: "Incredible service. The attention to detail was beyond expectations. Highly recommend!" },
    { name: "Emily T.", review: "Pet hair and coffee stains—gone. My car smells and looks amazing again!" },
    { name: "Jake L.", review: "It’s like magic. Haven’t seen my car this clean since I bought it." },
    { name: "Nina K.", review: "Convenient mobile service with great results!" },
    { name: "Alex K.", review: "Professional work and fair pricing. Booked my wife's detailing before he left." }
  ];

  // Detect if viewport is mobile (<768px)
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  useEffect(() => {
    function onResize() {
      setIsMobile(window.innerWidth < 768);
    }
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Navigation handlers
  const handlePrev = (e) => {
    e?.stopPropagation();
    setLightboxIndex((prev) => (prev === 0 ? portfolioItems.length - 1 : prev - 1));
  };

  const handleNext = (e) => {
    e?.stopPropagation();
    setLightboxIndex((prev) => (prev === portfolioItems.length - 1 ? 0 : prev + 1));
  };

  // Swipe support
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);
  const minSwipeDistance = 50; // px

  const onTouchStart = (e) => {
    touchStartX.current = e.changedTouches[0].screenX;
  };

  const onTouchEnd = (e) => {
    touchEndX.current = e.changedTouches[0].screenX;
    if (touchStartX.current === null || touchEndX.current === null) return;

    const distance = touchStartX.current - touchEndX.current;
    if (Math.abs(distance) > minSwipeDistance) {
      if (distance > 0) {
        setLightboxIndex((prev) => (prev === portfolioItems.length - 1 ? 0 : prev + 1));
      } else {
        setLightboxIndex((prev) => (prev === 0 ? portfolioItems.length - 1 : prev - 1));
      }
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  // Close lightbox on outside click
  const closeLightbox = () => setLightboxIndex(null);

  // Smooth scroll for anchors (keep your existing code)
  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href"))?.scrollIntoView({ behavior: "smooth" });
      });
    });
  }, []);


  return (
    <div className="bg-gray-100 text-gray-900">
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>

      {/* Header */}
      <header className="relative text-white text-center py-20 px-6 sm:px-8 md:px-12 lg:px-20 overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('https://lh3.googleusercontent.com/d/1yMhQAuyaDNmcGQ9YWW9s246CD1-xjkF3=w1600')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "blur(1.5px)",
            transform: "scale(1.03)",
          }}
        />
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-black/30 via-black/10 to-black/40" />
        <div className="relative z-10 max-w-3xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-wide mb-3">DAVID’S DETAILING</h1>
          <p className="text-base sm:text-lg font-light">SERVICE DONE RIGHT</p>
          <p className="mt-2 text-sm sm:text-base">Top-tier mobile vehicle detailing service</p>
          <a href="tel:+14405509558" className="fixed bottom-20 right-4 z-50 bg-red-700 hover:bg-red-800 text-white px-5 py-3 rounded-full shadow-lg flex items-center gap-2 transition">
            📞 Call Now
          </a>
        </div>
      </header>

      {/* Services */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">What We Offer</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            { title: "Deep Cleaning / Prep", desc: "Thorough vacuuming, mat cleaning, steam cleaning and special treatment for interior surfaces." },
            { title: "Upholstery Cleaning", desc: "Steam or foam-based cleaning for seats, carpets, and headliners." },
            { title: "Restoration / Seal", desc: "Plastic, vinyl, and leather restoration with protective sealants." },
            { title: "Final Touch-Up", desc: "Fine detailing to complete the clean." },
            { title: "Add-On’s", desc: "Pet hair removal, odor treatment, window/mirror cleaning, fabric protection, leather conditioning." },
          ].map((service, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-xl font-semibold text-red-700 mb-2">{service.title}</h3>
              <p>{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-50 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
          <p className="text-lg leading-relaxed text-gray-800">
            Your time matters, and so does the cleanliness of your car. We’re here to deliver results, that you can see and feel — because your vehicle deserves to look its best!
          </p>
          <p className="mt-4 text-gray-600">
            With premium-grade products, expert techniques and a passion for perfection, we treat every vehicle as a reflection
            of our brand — and of yours.
          </p>
        </div>
      </section>

      {/* Portfolio */}
      <section className="py-16 px-4 bg-white">
        <h2 className="text-3xl font-bold text-center mb-6">Portfolio</h2>

        <div className="grid gap-6 max-w-6xl mx-auto">
          {portfolioItems.map((item, index) => (
            <div
              key={item.id}
              className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer"
              onClick={() => setLightboxIndex(index)}
            >
              <div className="flex flex-col sm:flex-row">
                {/* Before Image */}
                <div className="relative w-full sm:w-1/2 h-48 sm:h-64">
                  <img
                    src={item.before}
                    alt={`Before ${item.id}`}
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute top-2 left-2 bg-red-700 text-white text-xs px-2 py-1 rounded">
                    Before
                  </span>
                </div>

                {/* After Image */}
                <div className="relative w-full sm:w-1/2 h-48 sm:h-64">
                  <img
                    src={item.after}
                    alt={`After ${item.id}`}
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute top-2 left-2 bg-green-700 text-white text-xs px-2 py-1 rounded">
                    After
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {lightboxIndex !== null && (
          <div
            className="fixed inset-0 bg-black bg-opacity-90 flex flex-col items-center justify-center z-50 p-4"
            onClick={closeLightbox}
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
          >
            <div
              className="flex flex-col sm:flex-row gap-4 w-full max-w-5xl items-center"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Show both before and after images side-by-side on all devices */}
              <div className="relative w-full sm:w-1/2 max-h-[80vh]">
                <img
                  src={portfolioItems[lightboxIndex].before}
                  alt="Before"
                  className="w-full h-full object-contain border-4 border-white rounded-lg"
                  draggable={false}
                />
                <span className="absolute top-2 left-2 bg-red-700 text-white text-xs px-2 py-1 rounded">
                  Before
                </span>
              </div>

              <div className="relative w-full sm:w-1/2 max-h-[80vh]">
                <img
                  src={portfolioItems[lightboxIndex].after}
                  alt="After"
                  className="w-full h-full object-contain border-4 border-white rounded-lg"
                  draggable={false}
                />
                <span className="absolute top-2 left-2 bg-green-700 text-white text-xs px-2 py-1 rounded">
                  After
                </span>
              </div>
            </div>

            {/* Buttons on tablet/desktop */}
            {!isMobile && (
              <div className="mt-6 flex gap-4">
                <button
                  onClick={handlePrev}
                  className="bg-white text-black px-6 py-2 rounded hover:bg-gray-200 transition"
                >
                  Previous
                </button>
                <button
                  onClick={handleNext}
                  className="bg-white text-black px-6 py-2 rounded hover:bg-gray-200 transition"
                >
                  Next
                </button>
              </div>
            )}
          </div>
        )}

      </section>

      {/* Review Carousel */}
      <section className="py-16 px-4 bg-gray-50 text-center">
        <h2 className="text-3xl font-bold mb-10">What Our Clients Say</h2>
        <div className="max-w-xl mx-auto bg-white p-6 rounded-xl shadow-md">
          <p className="italic text-gray-700 mb-4">“{reviews[currentReview].review}”</p>
          <p className="font-semibold text-red-700 mb-4">— {reviews[currentReview].name}</p>
          <div className="flex justify-center gap-4">
            <button onClick={() => setCurrentReview((prev) => (prev === 0 ? reviews.length - 1 : prev - 1))} className="bg-red-700 text-white px-4 py-2 rounded">
              Prev
            </button>
            <button onClick={() => setCurrentReview((prev) => (prev === reviews.length - 1 ? 0 : prev + 1))} className="bg-red-700 text-white px-4 py-2 rounded">
              Next
            </button>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="py-16 px-4 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold mb-4">Request a Quote</h2>
        <p className="mb-6">Get in touch and we’ll respond within 24 hours.</p>
        <ContactForm />
        </section>
      {/* Footer */}
      <footer className="bg-black text-white text-center py-6 mt-10">
        <p>© {new Date().getFullYear()} David’s Detailing. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
