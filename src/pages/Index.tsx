import { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Team from "@/components/Team";
import Benefits from "@/components/Benefits";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Contacts from "@/components/Contacts";
import Footer from "@/components/Footer";
import BookingModal from "@/components/BookingModal";
import PrivacyModal from "@/components/PrivacyModal";
import TermsModal from "@/components/TermsModal";

const Index = () => {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false);
  const [isTermsModalOpen, setIsTermsModalOpen] = useState(false);

  const openBookingModal = () => setIsBookingModalOpen(true);
  const closeBookingModal = () => setIsBookingModalOpen(false);
  
  const openPrivacyModal = () => setIsPrivacyModalOpen(true);
  const closePrivacyModal = () => setIsPrivacyModalOpen(false);
  
  const openTermsModal = () => setIsTermsModalOpen(true);
  const closeTermsModal = () => setIsTermsModalOpen(false);

  const handlePrivacyFromBooking = () => {
    closeBookingModal();
    openPrivacyModal();
  };

  return (
    <div className="min-h-screen bg-background">
      <Header onBookingClick={openBookingModal} />
      
      <main>
        <Hero onBookingClick={openBookingModal} />
        <Services onBookingClick={openBookingModal} />
        <Portfolio />
        <Team />
        <Benefits />
        <Testimonials />
        <CTA onBookingClick={openBookingModal} />
        <Contacts onBookingClick={openBookingModal} />
      </main>

      <Footer 
        onPrivacyClick={openPrivacyModal}
        onTermsClick={openTermsModal}
      />

      {/* Modals */}
      <BookingModal 
        isOpen={isBookingModalOpen}
        onClose={closeBookingModal}
        onPrivacyClick={handlePrivacyFromBooking}
      />
      
      <PrivacyModal 
        isOpen={isPrivacyModalOpen}
        onClose={closePrivacyModal}
      />
      
      <TermsModal 
        isOpen={isTermsModalOpen}
        onClose={closeTermsModal}
      />
    </div>
  );
};

export default Index;
