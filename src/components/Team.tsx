import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Instagram, Award, Clock, Users } from "lucide-react";
import barber1 from "@/assets/barber-1.jpg";
import barber2 from "@/assets/barber-2.jpg";

const Team = () => {
  const teamMembers = [
    {
      name: "Алексей Морозов",
      role: "Главный барбер",
      experience: "8 лет опыта",
      specialty: "Эксперт по классическому бритью",
      image: barber1,
      instagram: "@alexey_barber",
      description: "Специализируется на классических мужских стрижках и королевском бритье опасной бритвой."
    },
    {
      name: "Анна Степанова",
      role: "Мастер-барбер",
      experience: "5 лет опыта",
      specialty: "Стилист по современным образам",
      image: barber2,
      instagram: "@anna_barberstyle",
      description: "Создает стильные современные образы и работает с камуфляжем седины."
    }
  ];

  const stats = [
    { icon: Award, label: "Сертифицированные мастера", value: "100%" },
    { icon: Clock, label: "Опыт работы", value: "5+ лет" },
    { icon: Users, label: "Довольных клиентов", value: "500+" }
  ];

  return (
    <section id="team" className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-6">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-20">
          <h2 className="text-4xl lg:text-6xl font-playfair font-bold mb-6">
            <span className="text-gradient">Наша команда</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Профессиональные барберы с многолетним опытом
          </p>
        </div>

        {/* Team Members */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-16">
          {teamMembers.map((member, index) => (
            <Card 
              key={member.name}
              className="group hover:shadow-gold transition-premium bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/30 animate-fade-in"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <CardHeader className="pb-4">
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Photo */}
                  <div className="flex-shrink-0">
                    <div className="w-32 h-40 mx-auto md:mx-0 rounded-lg overflow-hidden">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-premium"
                      />
                    </div>
                  </div>
                  
                  {/* Info */}
                  <div className="flex-1 text-center md:text-left">
                    <h3 className="text-2xl font-playfair font-bold text-foreground mb-2">
                      {member.name}
                    </h3>
                    <p className="text-primary font-medium mb-2">{member.role}</p>
                    <p className="text-muted-foreground text-sm mb-3">{member.experience}</p>
                    <p className="text-foreground font-medium mb-4">{member.specialty}</p>
                    
                    {/* Instagram */}
                    <div className="flex items-center justify-center md:justify-start gap-2 text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                      <Instagram className="w-4 h-4" />
                      <span className="text-sm">{member.instagram}</span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent>
                <p className="text-muted-foreground text-center md:text-left">
                  {member.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div 
                key={stat.label}
                className="text-center animate-fade-in"
                style={{ animationDelay: `${(index + 2) * 200}ms` }}
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <IconComponent className="w-8 h-8 text-primary" />
                </div>
                <div className="text-3xl lg:text-4xl font-bold text-gradient mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Team;