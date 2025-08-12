
import React from 'react';
import { Button } from '@/components/ui/button';
import WhatsAppButton from '@/components/WhatsAppButton';

const FinalCTA = () => {
  const scrollToPricing = () => {
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="bg-gradient-to-br from-pink-500 via-rose-500 to-purple-600 text-white py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-6 sm:mb-8 leading-tight">
          🔥 Comece a ganhar até R$1.000 por mês com um negócio simples, lucrativo e só seu.
        </h2>
        
        <div className="space-y-3 sm:space-y-4 mb-8 sm:mb-12 text-base sm:text-lg lg:text-xl">
          <p>📦 Kit completo por apenas <strong>R$359,96</strong> ou <strong>3x de R$119,99</strong> sem juros</p>
          <p>🎯 Estoque + Estratégia + Suporte em uma única compra</p>
        </div>
        
        <div className="space-y-4 sm:space-y-6">
          <Button
            onClick={scrollToPricing}
            className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 text-lg sm:text-xl lg:text-2xl px-8 sm:px-12 lg:px-16 py-4 sm:py-6 lg:py-8 rounded-full font-bold shadow-2xl hover:shadow-yellow-400/50 transition-all duration-300 hover:scale-105 min-h-[48px] sm:min-h-[56px] w-full sm:w-auto max-w-md sm:max-w-none mx-auto"
          >
            👉 Garantir meu kit agora
          </Button>
          
          <div className="max-w-md mx-auto">
            <WhatsAppButton 
              message="🔥 Estou interessada no kit completo por R$ 359,96! Ainda tem disponível?"
              variant="inline"
              size="lg"
              className="w-full bg-white hover:bg-gray-100 text-green-600 border-2 border-green-500"
            />
          </div>
        </div>
        
        <div className="mt-6 sm:mt-8 text-yellow-200 text-sm sm:text-base">
          ⚡ Últimas unidades disponíveis
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
