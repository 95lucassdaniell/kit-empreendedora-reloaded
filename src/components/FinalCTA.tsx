
import React from 'react';
import { Button } from '@/components/ui/button';

const FinalCTA = () => {
  const scrollToPricing = () => {
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="bg-gradient-to-br from-pink-500 via-rose-500 to-purple-600 text-white py-20">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
          🔥 Comece a ganhar até R$1.000 por mês com um negócio simples, lucrativo e só seu.
        </h2>
        
        <div className="space-y-4 mb-12 text-xl">
          <p>📦 Kit completo por apenas <strong>R$359,96</strong> ou <strong>3x de R$119,99</strong> sem juros</p>
          <p>🎯 Estoque + Estratégia + Suporte em uma única compra</p>
        </div>
        
        <Button
          onClick={scrollToPricing}
          className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 text-2xl px-16 py-8 rounded-full font-bold shadow-2xl hover:shadow-yellow-400/50 transition-all duration-300 hover:scale-105"
        >
          👉 Garantir meu kit agora
        </Button>
        
        <div className="mt-8 text-yellow-200">
          ⚡ Últimas unidades disponíveis
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
