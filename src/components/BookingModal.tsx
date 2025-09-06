import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format } from "date-fns";
import { ru } from "date-fns/locale";
import { CalendarIcon, X } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  onPrivacyClick: () => void;
}

const BookingModal = ({ isOpen, onClose, onPrivacyClick }: BookingModalProps) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    barber: "",
    date: undefined as Date | undefined,
    time: "",
    comment: "",
    agreement: false
  });

  const { toast } = useToast();

  const services = [
    "Мужская стрижка",
    "Стрижка машинкой", 
    "Королевское бритье",
    "Камуфляж седины",
    "Комплекс «Уход»",
    "VIP-обслуживание"
  ];

  const barbers = [
    "Алексей Морозов",
    "Анна Степанова"
  ];

  const timeSlots = [
    "09:00", "09:30", "10:00", "10:30", "11:00", "11:30",
    "12:00", "12:30", "13:00", "13:30", "14:00", "14:30",
    "15:00", "15:30", "16:00", "16:30", "17:00", "17:30",
    "18:00", "18:30", "19:00", "19:30", "20:00", "20:30"
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.phone || !formData.service || !formData.barber || !formData.date || !formData.time || !formData.agreement) {
      toast({
        title: "Ошибка",
        description: "Пожалуйста, заполните все обязательные поля и согласитесь с обработкой данных",
        variant: "destructive"
      });
      return;
    }

    // Simulate form submission
    toast({
      title: "Спасибо!",
      description: "Ваша заявка принята. Наш менеджер свяжется с вами для подтверждения в течение 15 минут.",
      duration: 5000
    });

    // Reset form and close modal
    setFormData({
      name: "",
      phone: "",
      service: "",
      barber: "",
      date: undefined,
      time: "",
      comment: "",
      agreement: false
    });
    onClose();
  };

  const formatPhoneNumber = (value: string) => {
    const phoneNumber = value.replace(/[^\d]/g, '');
    const phoneNumberLength = phoneNumber.length;
    
    if (phoneNumberLength < 4) return phoneNumber;
    if (phoneNumberLength < 7) {
      return `+7 (${phoneNumber.slice(1, 4)}) ${phoneNumber.slice(4)}`;
    }
    if (phoneNumberLength < 9) {
      return `+7 (${phoneNumber.slice(1, 4)}) ${phoneNumber.slice(4, 7)}-${phoneNumber.slice(7)}`;
    }
    return `+7 (${phoneNumber.slice(1, 4)}) ${phoneNumber.slice(4, 7)}-${phoneNumber.slice(7, 9)}-${phoneNumber.slice(9, 11)}`;
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formattedPhone = formatPhoneNumber(e.target.value);
    setFormData(prev => ({ ...prev, phone: formattedPhone }));
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto bg-card/95 backdrop-blur-md border-border">
        <DialogHeader>
          <DialogTitle className="text-2xl font-playfair text-center mb-2">
            <span className="text-gradient">Записаться на услугу</span>
          </DialogTitle>
          <p className="text-muted-foreground text-center">
            Заполните форму и мы свяжемся с вами для подтверждения
          </p>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6 mt-6">
          {/* Name and Phone */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-foreground">Имя *</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                placeholder="Ваше имя"
                className="bg-input/50"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone" className="text-foreground">Телефон *</Label>
              <Input
                id="phone"
                value={formData.phone}
                onChange={handlePhoneChange}
                placeholder="+7 (999) 123-45-67"
                className="bg-input/50"
              />
            </div>
          </div>

          {/* Service and Barber */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label className="text-foreground">Услуга *</Label>
              <Select value={formData.service} onValueChange={(value) => setFormData(prev => ({ ...prev, service: value }))}>
                <SelectTrigger className="bg-input/50">
                  <SelectValue placeholder="Выберите услугу" />
                </SelectTrigger>
                <SelectContent>
                  {services.map((service) => (
                    <SelectItem key={service} value={service}>
                      {service}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label className="text-foreground">Барбер *</Label>
              <Select value={formData.barber} onValueChange={(value) => setFormData(prev => ({ ...prev, barber: value }))}>
                <SelectTrigger className="bg-input/50">
                  <SelectValue placeholder="Выберите мастера" />
                </SelectTrigger>
                <SelectContent>
                  {barbers.map((barber) => (
                    <SelectItem key={barber} value={barber}>
                      {barber}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Date and Time */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label className="text-foreground">Дата *</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className="w-full justify-start text-left font-normal bg-input/50"
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {formData.date ? format(formData.date, "d MMMM yyyy", { locale: ru }) : "Выберите дату"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={formData.date}
                    onSelect={(date) => setFormData(prev => ({ ...prev, date }))}
                    disabled={(date) => date < new Date() || date.getDay() === 0}
                    initialFocus
                    className="pointer-events-auto"
                  />
                </PopoverContent>
              </Popover>
            </div>
            <div className="space-y-2">
              <Label className="text-foreground">Время *</Label>
              <Select value={formData.time} onValueChange={(value) => setFormData(prev => ({ ...prev, time: value }))}>
                <SelectTrigger className="bg-input/50">
                  <SelectValue placeholder="Выберите время" />
                </SelectTrigger>
                <SelectContent className="max-h-48">
                  {timeSlots.map((time) => (
                    <SelectItem key={time} value={time}>
                      {time}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Comment */}
          <div className="space-y-2">
            <Label htmlFor="comment" className="text-foreground">Комментарий</Label>
            <Textarea
              id="comment"
              value={formData.comment}
              onChange={(e) => setFormData(prev => ({ ...prev, comment: e.target.value }))}
              placeholder="Дополнительные пожелания или комментарии"
              className="bg-input/50"
              rows={3}
            />
          </div>

          {/* Agreement */}
          <div className="flex items-start space-x-2">
            <Checkbox
              id="agreement"
              checked={formData.agreement}
              onCheckedChange={(checked) => setFormData(prev => ({ ...prev, agreement: Boolean(checked) }))}
            />
            <Label htmlFor="agreement" className="text-sm text-muted-foreground leading-relaxed">
              Я согласен с{" "}
              <button
                type="button"
                onClick={onPrivacyClick}
                className="text-primary hover:underline"
              >
                условиями обработки персональных данных
              </button>{" "}
              *
            </Label>
          </div>

          {/* Submit Button */}
          <Button 
            type="submit" 
            variant="hero" 
            size="lg" 
            className="w-full"
            disabled={!formData.agreement}
          >
            Подтвердить запись
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default BookingModal;