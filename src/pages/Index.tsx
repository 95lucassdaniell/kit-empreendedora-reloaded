
import React from 'react';
import Hero from '@/components/Hero';
import Credibility from '@/components/Credibility';
import ProblemSolution from '@/components/ProblemSolution';
import VideoDemo from '@/components/VideoDemo';
import Features from '@/components/Features';
import UseCases from '@/components/UseCases';
import Testimonials from '@/components/Testimonials';
import Comparison from '@/components/Comparison';
import Pricing from '@/components/Pricing';
import FAQ from '@/components/FAQ';
import FinalCTA from '@/components/FinalCTA';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Credibility />
      <ProblemSolution />
      <VideoDemo />
      <Features />
      <UseCases />
      <Testimonials />
      <Comparison />
      <Pricing />
      <FAQ />
      <FinalCTA />
      <FloatingWhatsApp />
    </div>
  );
};

export default Index;
