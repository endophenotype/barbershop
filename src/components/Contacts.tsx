import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Clock, Instagram, Send, MessageSquare } from "lucide-react";

interface ContactsProps {
  onBookingClick: () => void;
}

const Contacts = ({ onBookingClick }: ContactsProps) => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Адрес",
      content: "г. Барнаул, ул. Балтийская 7а",
      subtitle: "Бизнес-центр Титул",
      action: () => window.open('https://yandex.ru/maps/-/CCUBvClOxC', '_blank')
    },
    {
      icon: Phone,
      title: "Телефон",
      content: "+7 (999) 123-45-67",
      subtitle: "Звонить с 9:00 до 21:00",
      action: () => window.open('tel:+79991234567', '_self')
    },
    {
      icon: Clock,
      title: "Время работы",
      content: "Пн-Пт: 9:00 - 21:00",
      subtitle: "Сб-Вс: 10:00 - 20:00"
    }
  ];

  const socialLinks = [
    {
      icon: Instagram,
      name: "Instagram",
      handle: "@marick_barbershop",
      url: "https://instagram.com/marick_barbershop"
    },
    {
      icon: Send,
      name: "Telegram",
      handle: "@marick_barber",
      url: "https://t.me/marick_barber"
    },
    {
      icon: MessageSquare,
      name: "VKontakte",
      handle: "marick.barbershop",
      url: "https://vk.com/marick.barbershop"
    }
  ];

  return (
    <section id="contacts" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 lg:px-6">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-20">
          <h2 className="text-4xl lg:text-6xl font-playfair font-bold mb-6">
            <span className="text-gradient">Контакты</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Приходите к нам или свяжитесь для записи
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Cards */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <Card
                    key={info.title}
                    className={`group transition-premium bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/30 animate-fade-in ${
                      info.action ? "cursor-pointer hover:shadow-gold" : ""
                    }`}
                    style={{ animationDelay: `${index * 100}ms` }}
                    onClick={info.action}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-premium">
                          <IconComponent className="w-6 h-6 text-primary" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-playfair font-bold text-foreground mb-1">
                            {info.title}
                          </h3>
                          <p className="text-lg text-foreground mb-1">
                            {info.content}
                          </p>
                          {info.subtitle && (
                            <p className="text-sm text-muted-foreground">
                              {info.subtitle}
                            </p>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Social Links */}
            <div className="space-y-4">
              <h3 className="text-xl font-playfair font-bold text-foreground">
                Мы в социальных сетях
              </h3>
              <div className="flex flex-wrap gap-4">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <Card
                      key={social.name}
                      className="group cursor-pointer hover:shadow-gold transition-premium bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/30 animate-fade-in"
                      style={{ animationDelay: `${(index + 3) * 100}ms` }}
                      onClick={() => window.open(social.url, "_blank")}
                    >
                      <CardContent className="p-4">
                        <div className="flex items-center space-x-3">
                          <IconComponent className="w-5 h-5 text-primary" />
                          <div>
                            <p className="font-medium text-foreground">
                              {social.name}
                            </p>
                            <p className="text-sm text-muted-foreground">
                              {social.handle}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>

            {/* CTA */}
            <div className="pt-8">
              <Button
                onClick={onBookingClick}
                variant="hero"
                size="xl"
                className="w-full lg:w-auto"
              >
                Записаться онлайн
              </Button>
            </div>
          </div>

          {/* Map */}
          <div className="space-y-6">
            <div className="aspect-square lg:aspect-[4/3] rounded-lg overflow-hidden bg-muted animate-fade-in">
              <iframe
                src="https://yandex.ru/map-widget/v1/?um=constructor%3A7b2c5a5f5f8c4c4c4c4c4c4c4c4c4c4c&amp;source=constructor"
                width="100%"
                height="100%"
                frameBorder="0"
                className="border-0"
                title="Карта с местоположением барбершопа Marick"
                loading="lazy"
              />
            </div>

            {/* Map Info */}
            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardContent className="p-6">
                <h3 className="font-playfair font-bold text-foreground mb-3">
                  Как до нас добраться
                </h3>
                <div className="space-y-2 text-muted-foreground">
                  <p>• От остановки "Малахова" - 2 минуты пешком</p>
                  <p>• Парковка рядом с бизнес-центром</p>
                  <p>• Удобный вход с ул. Балтийская</p>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  className="mt-4"
                  onClick={() =>
                    window.open("https://yandex.ru/maps/-/CCUBvClOxC", "_blank")
                  }
                >
                  Построить маршрут
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;