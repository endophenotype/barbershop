import { useState } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { X } from "lucide-react";
import portfolio1 from "@/assets/portfolio-1.png";
import portfolio2 from "@/assets/portfolio-2.png";
import portfolio3 from "@/assets/portfolio-3.png";
import portfolio4 from "@/assets/portfolio-4.png";
import portfolio5 from "@/assets/portfolio-5.png";
import portfolio6 from "@/assets/portfolio-6.png";

const Portfolio = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const portfolioImages = [
    {
      src: portfolio1,
      alt: "Профессиональное бритье бороды",
      title: "Королевское бритье",
    },
    {
      src: portfolio2,
      alt: "Стильная мужская стрижка",
      title: "Мужская стрижка",
    },
    {
      src: portfolio3,
      alt: "Классическое бритье опасной бритвой",
      title: "Классическое бритье",
    },
    {
      src: portfolio4,
      alt: "Стрижка машинкой",
      title: "Стрижка машинкой",
    },
    {
      src: portfolio5,
      alt: "Уход за бородой",
      title: "Уход за бородой",
    },
    {
      src: portfolio6,
      alt: "Камуфляж седины",
      title: "Камуфляж седины",
    },
  ];

  return (
    <section id="portfolio" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 lg:px-6">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-20">
          <h2 className="text-4xl lg:text-6xl font-playfair font-bold mb-6">
            <span className="text-gradient">Галерея работ</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Примеры наших работ и довольные клиенты
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {portfolioImages.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg cursor-pointer animate-fade-in aspect-square"
              style={{ animationDelay: `${index * 100}ms` }}
              onClick={() => setSelectedImage(image.src)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-premium group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-premium flex items-center justify-center">
                <div className="text-center text-white">
                  <h3 className="font-playfair text-xl mb-2">{image.title}</h3>
                  <p className="text-sm text-white/80">
                    Нажмите для увеличения
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for enlarged image */}
        <Dialog
          open={selectedImage !== null}
          onOpenChange={() => setSelectedImage(null)}
        >
          <DialogContent className="max-w-4xl p-0 bg-transparent border-none">
            <DialogTitle className="sr-only">
              Увеличенное изображение работы
            </DialogTitle>
            {selectedImage && (
              <div className="relative">
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-4 right-4 w-5 h-5 z-10 p-2"
                ></button>
                <img
                  src={selectedImage}
                  alt="Увеличенное изображение работы"
                  className="w-full h-auto rounded-lg shadow-premium"
                />
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default Portfolio;