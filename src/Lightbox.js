import React, { useState, useEffect, useRef } from "react";

function useMediaQuery(query) {
  const [matches, setMatches] = useState(() => window.matchMedia(query).matches);

  useEffect(() => {
    const mediaQueryList = window.matchMedia(query);
    const listener = (e) => setMatches(e.matches);
    mediaQueryList.addEventListener("change", listener);
    return () => mediaQueryList.removeEventListener("change", listener);
  }, [query]);

  return matches;
}

function Lightbox({ items, index, onClose, onNext, onPrev, hideButtonsOnMobile }) {
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);
  const touchStartY = useRef(null);
  const touchEndY = useRef(null);
  const minSwipeDistance = 50;
  const isMobile = useMediaQuery("(max-width: 767px)");
  const onTouchStart = (e) => {
    touchStartX.current = e.changedTouches[0].screenX;
    touchStartY.current = e.changedTouches[0].screenY;
  };

  const onTouchEnd = (e) => {
    touchEndX.current = e.changedTouches[0].screenX;
    touchEndY.current = e.changedTouches[0].screenY;
    handleSwipeGesture();
  };

  const handleSwipeGesture = () => {
    const dx = touchStartX.current - touchEndX.current;
    const dy = touchStartY.current - touchEndY.current;

    if (Math.abs(dx) > Math.abs(dy)) {
      if (Math.abs(dx) > minSwipeDistance) {
        dx > 0 ? onNext() : onPrev();
      }
    } else {
      if (Math.abs(dy) > minSwipeDistance) {
        if (dy < 0) {
          onClose();
        }
      }
    }

    touchStartX.current = null;
    touchEndX.current = null;
    touchStartY.current = null;
    touchEndY.current = null;
  };

  if (index === null) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-80 flex flex-col items-center justify-center z-50 p-4"
      onClick={onClose}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      <div className="flex flex-col gap-4 mb-4 w-full max-w-5xl items-center">
        <div className="flex flex-col sm:flex-row gap-4 w-full">
          <div className="relative w-full sm:w-1/2 max-h-[80vh]">
            <img
              src={items[index].before}
              alt="Before"
              className="w-full h-full object-contain border-4 border-white rounded-lg"
            />
            <span className="absolute top-2 left-2 bg-red-700 text-white text-xs px-2 py-1 rounded">
              Before
            </span>
          </div>

          <div className="relative w-full sm:w-1/2 max-h-[80vh]">
            <img
              src={items[index].after}
              alt="After"
              className="w-full h-full object-contain border-4 border-white rounded-lg"
            />
            <span className="absolute top-2 left-2 bg-green-700 text-white text-xs px-2 py-1 rounded">
              After
            </span>
          </div>
        </div>

        <div className={`mt-6 flex gap-4 ${hideButtonsOnMobile && isMobile ? "hidden" : ""}`}>
          <button onClick={(e) => { e.stopPropagation(); onPrev(); }} className="bg-white text-black px-6 py-2 rounded">
            Previous
          </button>
          <button onClick={(e) => { e.stopPropagation(); onNext(); }} className="bg-white text-black px-6 py-2 rounded">
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default Lightbox;