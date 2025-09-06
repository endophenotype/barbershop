import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight, Sparkles } from "lucide-react";

interface CTAProps {
  onBookingClick: () => void;
}

const CTA = ({ onBookingClick }: CTAProps) => {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-muted/50 to-muted/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-primary rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto px-4 lg:px-6 text-center relative z-10">
        {/* Icon */}
        <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-8 animate-glow-pulse">
          <Sparkles className="w-10 h-10 text-primary" />
        </div>
        
        {/* Content */}
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="text-4xl lg:text-6xl font-playfair font-bold leading-tight">
            <span className="text-gradient">Готовы изменить свой образ?</span>
          </h2>
          
          <p className="text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Запишитесь прямо сейчас и получите профессиональную стрижку от лучших барберов Барнаула
          </p>
          
          {/* Benefits */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto my-12">
            <div className="flex flex-col items-center text-center space-y-2">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <Calendar className="w-6 h-6 text-primary" />
              </div>
              <span className="text-sm font-medium text-foreground">Удобная запись онлайн</span>
            </div>
            <div className="flex flex-col items-center text-center space-y-2">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <span className="text-primary font-bold">5+</span>
              </div>
              <span className="text-sm font-medium text-foreground">Лет опыта мастеров</span>
            </div>
            <div className="flex flex-col items-center text-center space-y-2">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <span className="text-primary font-bold">100%</span>
              </div>
              <span className="text-sm font-medium text-foreground">Гарантия качества</span>
            </div>
          </div>
          
          {/* CTA Button */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              onClick={onBookingClick}
              variant="hero" 
              size="lg"
              className="group text-base sm:text-lg px-8 sm:px-12 py-4 sm:py-6 h-auto animate-glow-pulse"
            >
              <Calendar className="w-5 h-5 sm:w-6 sm:h-6" />
              Забронировать стрижку
              <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
          
          {/* Additional info */}
          <p className="text-sm text-muted-foreground">
            Подтверждение записи в течение 15 минут
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;