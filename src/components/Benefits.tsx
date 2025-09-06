import { Trophy, Sparkles, Coffee, MapPin, Clock, Shield } from "lucide-react";

const Benefits = () => {
  const benefits = [
    {
      icon: Trophy,
      title: "Мастера с опытом от 5 лет",
      description: "Только сертифицированные специалисты с профильным образованием"
    },
    {
      icon: Sparkles,
      title: "Премиальная косметика",
      description: "American Crew, Suavecito, Reuzel и другие проверенные бренды"
    },
    {
      icon: Coffee,
      title: "Комфортная атмосфера",
      description: "Бесплатный кофе, удобные кресла и дружелюбная обстановка"
    },
    {
      icon: MapPin,
      title: "Удобное расположение",
      description: "В центре Барнаула, легко добраться на любом транспорте"
    },
    {
      icon: Clock,
      title: "Гибкий график",
      description: "Работаем до 21:00, запись онлайн в удобное время"
    },
    {
      icon: Shield,
      title: "Гарантия качества",
      description: "Используем только стерильные инструменты, соблюдаем все стандарты"
    }
  ];

  return (
    <section className="py-20 lg:py-32">
      <div className="container mx-auto px-4 lg:px-6">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-20">
          <h2 className="text-4xl lg:text-6xl font-playfair font-bold mb-6">
            <span className="text-gradient">Почему выбирают нас?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Наши преимущества, которые ценят клиенты
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <div 
                key={benefit.title}
                className="group text-center animate-fade-in hover:transform hover:scale-105 transition-premium"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Icon */}
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-premium">
                  <IconComponent className="w-10 h-10 text-primary" />
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-playfair font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                  {benefit.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom decoration */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-4">
            <div className="w-12 h-px bg-primary"></div>
            <Sparkles className="w-6 h-6 text-primary" />
            <div className="w-12 h-px bg-primary"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;