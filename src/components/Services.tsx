import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Scissors, User, Sparkles, Palette, Crown, Coffee } from "lucide-react";

interface ServicesProps {
  onBookingClick: () => void;
}

const Services = ({ onBookingClick }: ServicesProps) => {
  const services = [
    {
      icon: Scissors,
      title: "Мужская стрижка",
      description: "С мытьем головы и укладкой",
      price: "1 500 ₽",
      features: ["Консультация стилиста", "Мытье и укладка", "Стайлинг"],
    },
    {
      icon: Crown,
      title: "Стрижка машинкой",
      description: "Классическая мужская стрижка",
      price: "1000 ₽",
      features: ["Быстро и качественно", "Точные линии", "Идеальная форма"],
    },
    {
      icon: User,
      title: "Королевское бритье",
      description: "Опасной бритвой с паром",
      price: "2 000 ₽",
      features: ["Горячие полотенца", "Премиум косметика", "Массаж лица"],
    },
    {
      icon: Palette,
      title: "Камуфляж седины",
      description: "Естественное окрашивание",
      price: "1 200 ₽",
      features: [
        "Натуральный результат",
        "Стойкость до 6 недель",
        "Без аммиака",
      ],
    },
    {
      icon: Sparkles,
      title: "Комплекс «Уход»",
      description: "Стрижка + бритье + уход",
      price: "3 000 ₽",
      features: ["Полный уход", "Экономия времени", "Максимальный комфорт"],
    },
    {
      icon: Coffee,
      title: "VIP-обслуживание",
      description: "Премиальный сервис",
      price: "4 500 ₽",
      features: [
        "Индивидуальный подход",
        "Напитки и закуски",
        "Приватная зона",
      ],
    },
  ];

  return (
    <section id="services" className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-6">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-20">
          <h2 className="text-4xl lg:text-6xl font-playfair font-bold mb-6">
            <span className="text-gradient">Наши услуги</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Профессиональные услуги барбершопа с использованием премиальной косметики
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={service.title}
                className="group hover:shadow-gold transition-premium bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/30 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-premium">
                    <IconComponent className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl font-playfair text-foreground mb-2">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="pb-4">
                  <div className="text-center mb-4">
                    <span className="text-3xl font-bold text-gradient">{service.price}</span>
                  </div>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
                
                <CardFooter>
                  <Button 
                    onClick={onBookingClick}
                    variant="outline" 
                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground"
                  >
                    Записаться
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <Button onClick={onBookingClick} variant="hero" size="xl">
            Записаться на услугу
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;