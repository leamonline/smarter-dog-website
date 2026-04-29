import React, { useState } from 'react';
import { colors } from '../constants/colors';

import Navigation from './sections/Navigation';
import HeroSection from './sections/HeroSection';
import TrustSection from './sections/TrustSection';
import ServicesSection from './sections/ServicesSection';
import AftercareGuidesSection from './sections/AftercareGuidesSection';
import GallerySection from './sections/GallerySection';
import TestimonialsSection from './sections/TestimonialsSection';
import CTASection from './sections/CTASection';
import LocationCredibilitySection from './sections/LocationCredibilitySection';
import FooterSection from './sections/FooterSection';
import HoundslySection from './sections/HoundslySection';
import SectionDivider from './SectionDivider';

import BookingModal from './BookingModal';
import ScrollToTop from './ScrollToTop';
import MobileQuickActions from './MobileQuickActions';
import LandingPopup from './LandingPopup';

import { trackEvent } from '../utils/analytics';

const SmarterDogHomepage = () => {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [bookingPrefill, setBookingPrefill] = useState(null);
  const [bookingPrefillSummary, setBookingPrefillSummary] = useState('');

  const handleBookClick = (source = 'General', options = {}) => {
    trackEvent('Engagement', 'Click Request Appointment', source);
    setBookingPrefill(options.prefill || null);
    setBookingPrefillSummary(options.prefillSummary || '');
    setIsBookingModalOpen(true);
  };
  const handleCloseModal = () => {
    setIsBookingModalOpen(false);
    setBookingPrefill(null);
    setBookingPrefillSummary('');
  };

  return (
    <div
      className="min-h-screen pb-24 md:pb-0"
      style={{
        backgroundColor: colors.offWhite,
        fontFamily: "'Montserrat', sans-serif"
      }}
    >
      <Navigation isLoaded onBookClick={handleBookClick} />
      <main id="main-content">
        <HeroSection isLoaded onBookClick={handleBookClick} />
        <TrustSection />
        <ServicesSection />
        <AftercareGuidesSection onBookClick={handleBookClick} />
        <GallerySection />
        <SectionDivider type="grass" color={colors.mutedGreen} backgroundColor={colors.yellow} height="100px" />
        <HoundslySection />
        <TestimonialsSection />
        <LocationCredibilitySection />
        <CTASection onBookClick={handleBookClick} />
      </main>
      <FooterSection />
      <MobileQuickActions onBookClick={handleBookClick} />

      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={handleCloseModal}
        initialFormData={bookingPrefill}
        prefillSummary={bookingPrefillSummary}
      />
      <ScrollToTop />
      <LandingPopup onBookClick={handleBookClick} />
    </div>
  );
};

export default SmarterDogHomepage;
