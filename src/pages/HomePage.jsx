import React from 'react';
import Header from '../components/layout/Header';
import HeroSection from '../components/homePage/sections/HeroSection';
import HowWeWork from '../components/homePage/sections/HowWeWork';
import AboutUs from '../components/homePage/sections/AboutSection';
import TestimonialSection from '../components/homePage/sections/TestimonialSection';
import FeatureSection from '../components/homePage/sections/FeatureSection';
import ServicePlanSection from '../components/homePage/sections/ServicePlanSection';
import CoachingPlanSection from '../components/homePage/sections/CoachingPlanSection';
import ContactUsSection from '../components/homePage/sections/ContactUsSection';
import Footer from '../components/layout/Footer';

const HomePage = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <HowWeWork />
      <AboutUs />
      <TestimonialSection />
      <FeatureSection />
      <ServicePlanSection />
      <CoachingPlanSection />
      <ContactUsSection />
      <Footer />
    </>
  );
};

export default HomePage;
