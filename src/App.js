import React, { useState, useEffect } from "react";
import car1_before from "./assets/car1_before.jpg";
import car1_after from "./assets/car1_after.jpg";
function App() {
  const [showAfter, setShowAfter] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const [currentReview, setCurrentReview] = useState(0);
  const portfolioItems = [
    {
      id: 1,
      before: car1_before,
      after: car1_after,
    },
    {
      id: 2,
      before: "https://lh3.googleusercontent.com/d/1EKTQ1DihrVCjCDO_ROPjZQJeDrOzSXR_=w800",
      after: "https://lh3.googleusercontent.com/d/1jo4VjWWrUTo6kGI64FKHQhLE2NHd17xo=w800",
    },
    {
      id: 3,
      before: "https://lh3.googleusercontent.com/d/1EC86q97OP0nTOuHLXYHbKcBI9Z34apx0=w800",
      after: "https://lh3.googleusercontent.com/d/1SBLvq6OuIsl7UkeG9uKQ7sQAaEKnhUoU=w800",
    },
    {
      id: 4,
      before: "https://lh3.googleusercontent.com/d/1UDPlLgZcWYUykmhoPaQKKL11f1V3efQ5=w800",
      after: "https://lh3.googleusercontent.com/d/1U_qTJ0HewV_J3TdbZ8QJFP2Tz3B1S-YZ=w800",
    },
    {
      id: 5,
      before: "https://lh3.googleusercontent.com/d/1MQLLwsKOIEM8x6ylk1IjdWalQ95qneq2=w800",
      after: "https://lh3.googleusercontent.com/d/1l2lzUAwhKDJDlCAR47exDO0qHzUXMIVs=w800",
    },
    {
      id: 6,
      before: "https://lh3.googleusercontent.com/d/1rd2kygKS1BdWvOcuFjHfnfBnt-R0VB7K=w800",
      after: "https://lh3.googleusercontent.com/d/1mtQgKfbvQUGthryxJ2O1tAKoF3d0MMxd=w800",
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

  const currentImage =
    lightboxIndex !== null
      ? showAfter
        ? portfolioItems[lightboxIndex].after
        : portfolioItems[lightboxIndex].before
      : null;

  const handlePrev = (e) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev === 0 ? portfolioItems.length - 1 : prev - 1));
  };

  const handleNext = (e) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev === portfolioItems.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href"))?.scrollIntoView({ behavior: "smooth" });
      });
    });
  }, []);

  const handleSubmit = (e) => {
  e.preventDefault();

  const form = e.target;
  const formData = new FormData(form);
  const query = new URLSearchParams(formData).toString();

  const googleFormURL =
    "https://docs.google.com/forms/d/e/1FAIpQLScjqCEEHDxNU9IPH917hbC-quSHQzNB_PoNvF9GU4dw2N-WvA/viewform?usp=dialog";

  fetch(googleFormURL, {
    method: "POST",
    mode: "no-cors",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: query,
  })
    .then(() => {
      alert("Request submitted successfully!");
      form.reset();
    })
    .catch((err) => {
      console.error(err);
      alert("There was a problem submitting your request.");
    });
};

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
  {/* Blurred background image */}
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

  {/* Gradient overlay */}
  <div className="absolute inset-0 z-0 bg-gradient-to-b from-black/30 via-black/10 to-black/40" />

  {/* Foreground content */}
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
      className="fixed inset-0 bg-black bg-opacity-80 flex flex-col items-center justify-center z-50 p-4"
      onClick={() => setLightboxIndex(null)}
    >
      <div className="flex flex-col sm:flex-row gap-4 mb-4 w-full max-w-5xl">
        <div className="relative w-full sm:w-1/2 max-h-[80vh]">
          <img
            src={portfolioItems[lightboxIndex].before}
            alt="Before"
            className="w-full h-full object-contain border-4 border-white rounded-lg"
          />
          <span className="absolute top-2 left-2 bg-red-700 text-white text-xs px-2 py-1 rounded">Before</span>
        </div>
        <div className="relative w-full sm:w-1/2 max-h-[80vh]">
          <img
            src={portfolioItems[lightboxIndex].after}
            alt="After"
            className="w-full h-full object-contain border-4 border-white rounded-lg"
          />
          <span className="absolute top-2 left-2 bg-green-700 text-white text-xs px-2 py-1 rounded">After</span>
        </div>
      </div>

      <div className="flex gap-4">
        <button
          onClick={(e) => {
            e.stopPropagation();
            setLightboxIndex((prev) =>
              prev === 0 ? portfolioItems.length - 1 : prev - 1
            );
          }}
          className="bg-white text-black px-4 py-2 rounded"
        >
          Previous
        </button>
        <button
          onClick={(e) => {
            e.stopPropagation();
            setLightboxIndex((prev) =>
              prev === portfolioItems.length - 1 ? 0 : prev + 1
            );
          }}
          className="bg-white text-black px-4 py-2 rounded"
        >
          Next
        </button>
      </div>
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

        <form
          onSubmit={handleSubmit}
          className="max-w-xl mx-auto text-left bg-white p-8 rounded-xl shadow-md space-y-4"
        >
        <div>
          <label className="block mb-1 font-semibold">Name</label>
          <input
            name="entry.1598944169"
            type="text"
            required
            className="w-full border px-4 py-2 rounded"
          />
        </div>
        <div>
          <label className="block mb-1 font-semibold">Email</label>
          <input
            name="entry.827732641"
            type="email"
            required
            className="w-full border px-4 py-2 rounded"
          />
        </div>
        <div>
          <label className="block mb-1 font-semibold">Phone Number</label>
          <input
            name="entry.2144748218"
            type="tel"
            required
            className="w-full border px-4 py-2 rounded"
          />
        </div>

        {/* Quote Questions Framed Section */}
        <div className="border border-gray-300 p-4 rounded-xl mt-6 bg-gray-50">
          <h3 className="text-lg font-semibold mb-4 text-center">Quote Details</h3>
          <div>
            <label className="block mb-1 font-semibold">Vehicle Type</label>
            <input
              name="entry.1103378403"
              type="text"
              className="w-full border px-4 py-2 rounded"
            />
          </div>
          <div className="mt-4">
            <label className="block mb-1 font-semibold">Services Needed</label>
            <textarea
              name="entry.1623361423"
              className="w-full border px-4 py-2 rounded"
              rows="4"
            />
          </div>
          <div className="mt-4">
            <label className="block mb-1 font-semibold">
              Preferred Date or Time (Optional)
            </label>
            <input
              name="entry.1539398506"
              type="text"
              className="w-full border px-4 py-2 rounded"
            />
          </div>
        </div>

        <button
          type="submit"
          className="bg-red-700 text-white px-6 py-3 rounded font-bold w-full mt-6"
        >
          Send Request
        </button>
      </form>
    </section>

      {/* Footer */}
      <footer className="bg-black text-white text-center py-6 mt-10">
        <p>© {new Date().getFullYear()} David’s Detailing. All rights reserved.</p>
      </footer>
    </div> 
        )  
}
          export default App;
