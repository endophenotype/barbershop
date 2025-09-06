import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";

interface PrivacyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const PrivacyModal = ({ isOpen, onClose }: PrivacyModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] bg-card/95 backdrop-blur-md border-border">
        <DialogHeader>
          <DialogTitle className="text-2xl font-playfair text-center">
            <span className="text-gradient">Политика конфиденциальности</span>
          </DialogTitle>
        </DialogHeader>

        <ScrollArea className="h-[60vh] w-full p-4 hide-scrollbar">
          <div className="prose prose-sm max-w-none text-foreground space-y-6">
            <section>
              <h3 className="text-lg font-playfair font-bold text-primary mb-3">1. Общие положения</h3>
              <p className="text-muted-foreground leading-relaxed">
                Настоящая Политика конфиденциальности персональных данных (далее – Политика конфиденциальности) 
                действует в отношении всей информации, которую барбершоп "Marick" может получить о Пользователе 
                во время использования сайта и оказания услуг.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-playfair font-bold text-primary mb-3">2. Предмет политики конфиденциальности</h3>
              <p className="text-muted-foreground leading-relaxed mb-3">
                Настоящая Политика конфиденциальности устанавливает обязательства Администрации по неразглашению 
                и обеспечению режима защиты конфиденциальности персональных данных, которые Пользователь предоставляет 
                по запросу Администрации при регистрации на сайте или при записи на услуги.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Персональные данные, разрешённые к обработке в рамках настоящей Политики конфиденциальности, 
                предоставляются Пользователем путём заполнения форм на сайте и включают в себя следующую информацию:
              </p>
              <ul className="list-disc list-inside mt-2 space-y-1 text-muted-foreground">
                <li>Имя Пользователя</li>
                <li>Номер телефона</li>
                <li>Адрес электронной почты (при указании)</li>
                <li>Предпочтения по услугам</li>
              </ul>
            </section>

            <section>
              <h3 className="text-lg font-playfair font-bold text-primary mb-3">3. Цели сбора персональной информации</h3>
              <p className="text-muted-foreground leading-relaxed mb-3">
                Персональные данные Пользователя Администрация может использовать в целях:
              </p>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                <li>Предоставления услуг барбершопа</li>
                <li>Связи с Пользователем для подтверждения записи</li>
                <li>Уведомления о новых услугах и акциях (при согласии)</li>
                <li>Улучшения качества обслуживания</li>
              </ul>
            </section>

            <section>
              <h3 className="text-lg font-playfair font-bold text-primary mb-3">4. Способы и сроки обработки персональной информации</h3>
              <p className="text-muted-foreground leading-relaxed mb-3">
                Обработка персональных данных Пользователя осуществляется без ограничения срока, любым законным способом, 
                в том числе в информационных системах персональных данных с использованием средств автоматизации или без 
                использования таких средств.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Пользователь соглашается с тем, что Администрация вправе передавать персональные данные третьим лицам, 
                в частности, курьерским службам, операторам связи, исключительно в целях выполнения заказа Пользователя.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-playfair font-bold text-primary mb-3">5. Обязательства сторон</h3>
              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Пользователь обязан:</h4>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                    <li>Предоставить информацию о персональных данных, необходимую для пользования сайтом</li>
                    <li>Обновить, дополнить предоставленную информацию о персональных данных в случае изменения данной информации</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Администрация обязана:</h4>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                    <li>Использовать полученную информацию исключительно для целей, указанных в настоящей Политике конфиденциальности</li>
                    <li>Обеспечить хранение конфиденциальной информации в тайне</li>
                    <li>Не разглашать персональные данные Пользователя без его письменного разрешения</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h3 className="text-lg font-playfair font-bold text-primary mb-3">6. Ответственность сторон</h3>
              <p className="text-muted-foreground leading-relaxed">
                Лица, виновные в нарушении требований к защите персональных данных, несут дисциплинарную, 
                административную, гражданско-правовую или уголовную ответственность в соответствии с федеральными законами.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-playfair font-bold text-primary mb-3">7. Разрешение споров</h3>
              <p className="text-muted-foreground leading-relaxed">
                До обращения в суд с иском по спорам, возникающим из отношений между Пользователем и Администрацией, 
                обязательным является предъявление претензии (письменного предложения о добровольном урегулировании спора).
              </p>
            </section>

            <section>
              <h3 className="text-lg font-playfair font-bold text-primary mb-3">8. Дополнительные условия</h3>
              <p className="text-muted-foreground leading-relaxed">
                Администрация вправе вносить изменения в настоящую Политику конфиденциальности без согласия Пользователя. 
                Новая Политика конфиденциальности вступает в силу с момента её размещения на Сайте, 
                если иное не предусмотрено новой редакцией Политики конфиденциальности.
              </p>
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

export default PrivacyModal;