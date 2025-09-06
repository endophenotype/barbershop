import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";

interface TermsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const TermsModal = ({ isOpen, onClose }: TermsModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] bg-card/95 backdrop-blur-md border-border">
        <DialogHeader>
          <DialogTitle className="text-2xl font-playfair text-center">
            <span className="text-gradient">Условия использования</span>
          </DialogTitle>
        </DialogHeader>

        <ScrollArea className="h-[60vh] w-full p-4 hide-scrollbar">
          <div className="prose prose-sm max-w-none text-foreground space-y-6">
            <section>
              <h3 className="text-lg font-playfair font-bold text-primary mb-3">1. Общие условия</h3>
              <p className="text-muted-foreground leading-relaxed">
                Настоящие Условия использования (далее - "Условия") регулируют использование веб-сайта 
                барбершопа "Marick" (далее - "Сайт") и получение услуг барбершопа (далее - "Услуги"). 
                Используя Сайт и/или получая Услуги, вы соглашаетесь с настоящими Условиями.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-playfair font-bold text-primary mb-3">2. Услуги барбершопа</h3>
              <div className="space-y-3">
                <p className="text-muted-foreground leading-relaxed">
                  Барбершоп "Marick" предоставляет следующие услуги:
                </p>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                  <li>Мужские стрижки различной сложности</li>
                  <li>Классическое и королевское бритье</li>
                  <li>Уход за бородой и усами</li>
                  <li>Камуфляж седины</li>
                  <li>Комплексные услуги по уходу</li>
                  <li>VIP-обслуживание</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed">
                  Полный перечень услуг и их стоимость указаны на Сайте и могут быть изменены 
                  без предварительного уведомления.
                </p>
              </div>
            </section>

            <section>
              <h3 className="text-lg font-playfair font-bold text-primary mb-3">3. Запись на услуги</h3>
              <div className="space-y-3">
                <p className="text-muted-foreground leading-relaxed">
                  Запись на услуги осуществляется:
                </p>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                  <li>Через форму записи на Сайте</li>
                  <li>По телефону +7 (999) 123-45-67</li>
                  <li>Через социальные сети</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed">
                  Запись считается подтвержденной после получения уведомления от администратора барбершопа. 
                  Мы оставляем за собой право отказать в обслуживании без объяснения причин.
                </p>
              </div>
            </section>

            <section>
              <h3 className="text-lg font-playfair font-bold text-primary mb-3">4. Отмена и перенос записи</h3>
              <div className="space-y-3">
                <p className="text-muted-foreground leading-relaxed">
                  Правила отмены и переноса записи:
                </p>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                  <li>Отмена записи должна быть произведена не менее чем за 2 часа до назначенного времени</li>
                  <li>Перенос записи возможен при наличии свободного времени у выбранного мастера</li>
                  <li>При опоздании более чем на 15 минут запись может быть отменена</li>
                  <li>За неявку без предупреждения может взиматься штраф в размере 50% от стоимости услуги</li>
                </ul>
              </div>
            </section>

            <section>
              <h3 className="text-lg font-playfair font-bold text-primary mb-3">5. Оплата услуг</h3>
              <div className="space-y-3">
                <p className="text-muted-foreground leading-relaxed">
                  Условия оплаты:
                </p>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                  <li>Оплата производится после оказания услуги</li>
                  <li>Принимаются наличные и банковские карты</li>
                  <li>Возможна предварительная оплата для VIP-услуг</li>
                  <li>Цены на услуги могут изменяться без предварительного уведомления</li>
                </ul>
              </div>
            </section>

            <section>
              <h3 className="text-lg font-playfair font-bold text-primary mb-3">6. Качество услуг и гарантии</h3>
              <p className="text-muted-foreground leading-relaxed mb-3">
                Мы гарантируем:
              </p>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground mb-3">
                <li>Использование профессионального оборудования и качественных материалов</li>
                <li>Соблюдение санитарно-гигиенических норм</li>
                <li>Работу квалифицированных мастеров</li>
                <li>Индивидуальный подход к каждому клиенту</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed">
                В случае неудовлетворенности качеством услуги, клиент может обратиться к администратору 
                для решения вопроса в течение 24 часов после оказания услуги.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-playfair font-bold text-primary mb-3">7. Правила поведения</h3>
              <div className="space-y-3">
                <p className="text-muted-foreground leading-relaxed">
                  Клиенты обязуются:
                </p>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                  <li>Соблюдать вежливость и уважение к персоналу и другим клиентам</li>
                  <li>Не находиться в барбершопе в состоянии алкогольного или наркотического опьянения</li>
                  <li>Соблюдать тишину во время работы мастеров</li>
                  <li>Бережно относиться к имуществу барбершопа</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed">
                  За нарушение правил поведения администрация вправе отказать в обслуживании.
                </p>
              </div>
            </section>

            <section>
              <h3 className="text-lg font-playfair font-bold text-primary mb-3">8. Ответственность</h3>
              <p className="text-muted-foreground leading-relaxed">
                Барбершоп не несет ответственности за:
              </p>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground mb-3">
                <li>Индивидуальные аллергические реакции на используемые средства</li>
                <li>Результат, не соответствующий ожиданиям клиента при соблюдении технологии выполнения</li>
                <li>Утерю личных вещей клиента</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed">
                Клиент обязан сообщить о наличии аллергии на косметические средства до начала процедуры.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-playfair font-bold text-primary mb-3">9. Конфиденциальность</h3>
              <p className="text-muted-foreground leading-relaxed">
                Мы обязуемся обеспечивать конфиденциальность персональных данных клиентов в соответствии 
                с Политикой конфиденциальности. Обработка персональных данных осуществляется исключительно 
                в целях предоставления услуг и улучшения качества обслуживания.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-playfair font-bold text-primary mb-3">10. Изменения условий</h3>
              <p className="text-muted-foreground leading-relaxed">
                Барбершоп оставляет за собой право изменять настоящие Условия в любое время. 
                Актуальная версия Условий всегда доступна на нашем Сайте. Продолжение использования 
                услуг после внесения изменений означает согласие с новыми Условиями.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-playfair font-bold text-primary mb-3">11. Контактная информация</h3>
              <div className="space-y-2 text-muted-foreground">
                <p><strong>Адрес:</strong> г. Барнаул, ул. Балтийская 7а, Бизнес-центр Титул</p>
                <p><strong>Телефон:</strong> +7 (999) 123-45-67</p>
                <p><strong>Время работы:</strong> Пн-Пт: 9:00-21:00, Сб-Вс: 10:00-20:00</p>
                <p><strong>Email:</strong> info@marickbarbershop.ru</p>
              </div>
            </section>

            <section className="mt-8 pt-4 border-t border-border">
              <p className="text-sm text-muted-foreground">
                <strong>Дата последнего обновления:</strong> 5 сентября 2024 года
              </p>
            </section>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};

export default TermsModal;