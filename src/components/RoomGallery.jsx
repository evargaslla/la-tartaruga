import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { X } from 'lucide-react';

export default function RoomGallery() {
  const { t } = useLanguage();
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    "/img/PHOTO-2026-06-10-13-24-17.jpg",
    "/img/PHOTO-2026-06-10-13-24-17%202.jpg",
    "/img/PHOTO-2026-06-10-13-24-18.jpg",
    "/img/PHOTO-2026-06-10-13-24-18%204.jpg",
    "/img/PHOTO-2026-06-10-13-24-18%207.jpg",
    "/img/PHOTO-2026-06-10-13-24-18%208.jpg",
    "/img/PHOTO-2026-06-10-13-24-19.jpg",
    "/img/PHOTO-2026-06-10-13-24-19%202.jpg",
    "/img/PHOTO-2026-06-10-13-24-19%205.jpg",
  ];

  return (
    <section id="gallery" className="py-24 px-8 md:px-16 bg-cream animate-on-scroll">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-sans font-bold text-4xl md:text-5xl text-charcoal mb-4">
            {t('gallery', 'title')}
          </h2>
          <p className="font-serif text-2xl text-charcoal/70">
            {t('gallery', 'subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-[250px]">
          {images.map((src, idx) => {
            // Make some images span multiple rows/cols for a masonry look
            let spanClass = "col-span-1 row-span-1";
            if (idx === 0) spanClass = "md:col-span-2 md:row-span-2";
            if (idx === 3) spanClass = "md:row-span-2";
            if (idx === 6) spanClass = "md:col-span-2";

            return (
              <div 
                key={idx} 
                className={`relative overflow-hidden rounded-3xl group ${spanClass}`}
              >
                <div className="absolute inset-0 bg-clay/20 group-hover:bg-transparent transition-colors duration-500 z-10 mix-blend-multiply pointer-events-none"></div>
                <img 
                  src={src} 
                  alt={`Habitación ${idx + 1}`} 
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 cursor-pointer"
                  onClick={() => setSelectedImage(src)}
                />
              </div>
            );
          })}
        </div>
      </div>

      {selectedImage && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4" 
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-6 right-6 text-white hover:text-clay transition-colors" 
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-10 h-10" />
          </button>
          <img 
            src={selectedImage} 
            alt="Zoomed Room" 
            className="max-w-full max-h-[90vh] object-contain rounded-lg drop-shadow-2xl" 
            onClick={(e) => e.stopPropagation()} 
          />
        </div>
      )}
    </section>
  );
}
