import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      name: "Дмитрий Петров",
      date: "15 марта 2024",
      rating: 5,
      text: "Отличный барбершоп! Алексей - настоящий мастер своего дела. Королевское бритье - это что-то невероятное. Теперь хожу только сюда!",
      avatar: "ДП"
    },
    {
      name: "Андрей Козлов",
      date: "8 марта 2024",
      rating: 5,
      text: "Впервые попробовал камуфляж седины - результат превзошел все ожидания! Выглядит абсолютно естественно. Анна - профессионал высочайшего уровня.",
      avatar: "АК"
    },
    {
      name: "Михаил Сидоров",
      date: "1 марта 2024",
      rating: 5,
      text: "Премиальный сервис по доступной цене. Атмосфера расслабляющая, кофе вкусный, а стрижка - просто идеальная. Рекомендую всем!",
      avatar: "МС"
    },
    {
      name: "Владимир Иванов",
      date: "25 февраля 2024",
      rating: 5,
      text: "Хожу в Marick уже полгода. Всегда качественно, быстро и с душой. Мастера знают свое дело, а интерьер создает особую атмосферу.",
      avatar: "ВИ"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section id="testimonials" className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-6">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-20">
          <h2 className="text-4xl lg:text-6xl font-playfair font-bold mb-6">
            <span className="text-gradient">Отзывы клиентов</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Что говорят о нас наши клиенты
          </p>
        </div>

        {/* Testimonials Slider */}
        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <Card className="bg-card/50 backdrop-blur-sm border-border/50 shadow-premium">
                    <CardContent className="p-8 lg:p-12 text-center">
                      {/* Quote Icon */}
                      <Quote className="w-12 h-12 text-primary/30 mx-auto mb-6" />
                      
                      {/* Text */}
                      <p className="text-lg lg:text-xl text-foreground mb-8 leading-relaxed font-medium">
                        "{testimonial.text}"
                      </p>
                      
                      {/* Rating */}
                      <div className="flex justify-center space-x-1 mb-6">
                        {Array.from({ length: testimonial.rating }).map((_, starIndex) => (
                          <Star key={starIndex} className="w-5 h-5 fill-primary text-primary" />
                        ))}
                      </div>
                      
                      {/* Author */}
                      <div className="flex items-center justify-center space-x-4">
                        <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold">
                          {testimonial.avatar}
                        </div>
                        <div className="text-left">
                          <p className="font-playfair font-bold text-foreground">
                            {testimonial.name}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            {testimonial.date}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <Button
            variant="premium"
            size="icon"
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4"
            onClick={prevSlide}
          >
            <ChevronLeft className="w-5 h-5" />
          </Button>
          
          <Button
            variant="premium"
            size="icon"
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4"
            onClick={nextSlide}
          >
            <ChevronRight className="w-5 h-5" />
          </Button>

          {/* Dots */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentSlide ? 'bg-primary' : 'bg-muted-foreground/30'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;