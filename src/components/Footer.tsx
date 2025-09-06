import { Instagram, Send, MessageSquare, Phone, MapPin, Clock } from "lucide-react";

interface FooterProps {
  onPrivacyClick: () => void;
  onTermsClick: () => void;
}

const Footer = ({ onPrivacyClick, onTermsClick }: FooterProps) => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-muted/50 border-t border-border">
      <div className="container mx-auto px-4 lg:px-6 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-playfair font-bold text-gradient">
              Marick
            </h3>
            <p className="text-muted-foreground">
              Премиальный барбершоп в Барнауле для тех, кто ценит качество и стиль.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              <a 
                href="https://instagram.com/marick_barbershop" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-premium"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://t.me/marick_barber" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-premium"
              >
                <Send className="w-5 h-5" />
              </a>
              <a 
                href="https://vk.com/marick.barbershop" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-premium"
              >
                <MessageSquare className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h4 className="font-playfair font-bold text-foreground">Навигация</h4>
            <nav className="space-y-2">
              {[
                { label: "Услуги", href: "#services" },
                { label: "Галерея", href: "#portfolio" },
                { label: "Команда", href: "#team" },
                { label: "Отзывы", href: "#testimonials" },
                { label: "Контакты", href: "#contacts" }
              ].map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  className="block text-muted-foreground hover:text-primary transition-colors"
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-playfair font-bold text-foreground">Контакты</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-foreground text-sm">г. Барнаул, ул. Балтийская 7а</p>
                  <p className="text-muted-foreground text-xs">Бизнес-центр Титул</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                <a 
                  href="tel:+79991234567" 
                  className="text-foreground text-sm hover:text-primary transition-colors"
                >
                  +7 (999) 123-45-67
                </a>
              </div>
              
              <div className="flex items-start space-x-2">
                <Clock className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-foreground text-sm">Пн-Пт: 9:00 - 21:00</p>
                  <p className="text-foreground text-sm">Сб-Вс: 10:00 - 20:00</p>
                </div>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="font-playfair font-bold text-foreground">Услуги</h4>
            <div className="space-y-2 text-sm">
              <p className="text-muted-foreground">Мужская стрижка</p>
              <p className="text-muted-foreground">Королевское бритье</p>
              <p className="text-muted-foreground">Камуфляж седины</p>
              <p className="text-muted-foreground">VIP-обслуживание</p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-muted-foreground text-sm">
              © 2024 Marick Barbershop. Все права защищены.
            </p>
            
            <div className="flex space-x-6">
              <button
                onClick={onPrivacyClick}
                className="text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                Политика конфиденциальности
              </button>
              <button
                onClick={onTermsClick}
                className="text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                Условия использования
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;