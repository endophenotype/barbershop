import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar } from "lucide-react";
import heroImage from "@/assets/hero-barbershop.jpg";

interface HeroProps {
  onBookingClick: () => void;
}

const Hero = ({ onBookingClick }: HeroProps) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-hero-overlay" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-6 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in-up">
          {/* Subtitle */}
          <p className="text-primary text-lg lg:text-xl font-medium mb-4 tracking-wide">
            ПРЕМИАЛЬНЫЙ БАРБЕРШОП В БАРНАУЛЕ
          </p>

          {/* Main Heading */}
          <h1 className="text-4xl lg:text-7xl xl:text-8xl font-playfair font-bold mb-6 leading-tight">
            <span className="text-gradient">Не просто стрижка,</span>
            <br />
            <span className="text-foreground">а искусство образа</span>
          </h1>

          {/* Description */}
          <p className="text-xl lg:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            Для тех, кто ценит качество и стиль. Создаем образы, которые
            подчеркивают вашу индивидуальность.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 lg:gap-6 justify-center items-center">
            <Button
              onClick={onBookingClick}
              variant="hero"
              size="xl"
              className="group animate-glow-pulse"
            >
              <Calendar className="w-5 h-5" />
              Записаться онлайн
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>

            <Button
              variant="premium"
              size="xl"
              onClick={() =>
                document
                  .querySelector("#services")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Наши услуги
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8 m-12 sm:mt-16 lg:mt-20">
            <div className="text-center animate-fade-in">
              <div className="text-3xl lg:text-4xl font-bold text-gradient mb-2">
                500+
              </div>
              <div className="text-muted-foreground">довольных клиентов</div>
            </div>
            <div className="text-center animate-fade-in">
              <div className="text-3xl lg:text-4xl font-bold text-gradient mb-2">
                5+
              </div>
              <div className="text-muted-foreground">лет опыта</div>
            </div>
            <div className="text-center animate-fade-in">
              <div className="text-3xl lg:text-4xl font-bold text-gradient mb-2">
                100%
              </div>
              <div className="text-muted-foreground">качество</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden sm:block">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;