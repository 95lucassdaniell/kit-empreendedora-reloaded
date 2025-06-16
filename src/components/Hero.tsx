
import React from 'react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToPricing = () => {
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-pink-500 via-rose-500 to-purple-600 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 bg-white rounded-full blur-xl"></div>
        <div className="absolute top-40 right-32 w-24 h-24 bg-yellow-300 rounded-full blur-lg"></div>
        <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-white rounded-full blur-2xl"></div>
      </div>
      
      <div className="relative container mx-auto px-6 py-16 lg:py-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 animate-fade-in">
              Faça até{' '}
              <span className="text-yellow-300 relative">
                R$1.000
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-yellow-300 rounded-full animate-pulse"></div>
              </span>{' '}
              por mês revendendo T-Shirts
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-4xl mx-auto">
              Com apenas um kit, você começa seu próprio negócio hoje mesmo – 
              <strong className="text-yellow-300"> sem precisar de estoque, experiência ou loja física.</strong>
            </p>
            <Button
              onClick={scrollToPricing}
              className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 text-xl px-12 py-6 rounded-full font-bold shadow-2xl hover:shadow-yellow-400/50 transition-all duration-300 hover:scale-105 animate-bounce"
            >
              🚀 Quero começar agora com meu kit
            </Button>
          </div>
          
          <div className="mt-16 relative">
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20">
              <img
                src="/placeholder.svg?height=400&width=600"
                alt="Mulher empoderada segurando camisetas com elementos de lucro e independência"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
