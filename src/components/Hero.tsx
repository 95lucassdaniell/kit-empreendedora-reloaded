
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
        <div className="absolute top-20 left-20 w-32 h-32 bg-white rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-32 w-24 h-24 bg-yellow-300 rounded-full blur-lg animate-pulse delay-75"></div>
        <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-white rounded-full blur-2xl animate-pulse delay-150"></div>
        <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-pink-300 rounded-full blur-md animate-pulse delay-300"></div>
      </div>
      
      <div className="relative container mx-auto px-6 py-16 lg:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
            {/* Left Column - Text Content */}
            <div className="text-center lg:text-left space-y-8">
              {/* Badge/Tag */}
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md rounded-full px-6 py-3 text-sm font-semibold border border-white/30">
                <span className="text-yellow-300">🔥</span>
                <span>Mais de 52.200 mulheres já transformaram sua renda</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Faça até{' '}
                <span className="relative inline-block">
                  <span className="text-yellow-300">R$1.000</span>
                  <div className="absolute -bottom-2 left-0 right-0 h-2 bg-yellow-300/60 rounded-full animate-pulse"></div>
                </span>{' '}
                por mês revendendo{' '}
                <span className="text-yellow-300">T-Shirts</span>
              </h1>

              {/* Subtitle */}
              <p className="text-xl md:text-2xl opacity-95 leading-relaxed max-w-2xl">
                Com apenas um kit, você começa seu próprio negócio hoje mesmo –{' '}
                <strong className="text-yellow-300">sem precisar de estoque, experiência ou loja física.</strong>
              </p>

              {/* Benefits List */}
              <div className="space-y-3 text-left">
                {[
                  '✅ 15 camisetas + materiais de apoio',
                  '✅ E-books com estratégias de vendas',
                  '✅ Suporte direto via WhatsApp'
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3 text-lg">
                    <span className="text-green-300 text-xl">{benefit.split(' ')[0]}</span>
                    <span className="opacity-90">{benefit.substring(2)}</span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <div className="pt-6">
                <Button
                  onClick={scrollToPricing}
                  className="bg-yellow-400 hover:bg-yellow-300 text-gray-900 text-xl px-12 py-6 rounded-full font-bold shadow-2xl hover:shadow-yellow-400/50 transition-all duration-300 hover:scale-105 w-full sm:w-auto"
                >
                  <span className="mr-2">🚀</span>
                  Quero começar agora com meu kit
                </Button>
                
                <p className="text-sm opacity-75 mt-4">
                  <span className="text-yellow-300">⚡</span> Últimas unidades disponíveis • Envio imediato
                </p>
              </div>

              {/* Social Proof */}
              <div className="flex items-center justify-center lg:justify-start gap-4 pt-4">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div key={i} className="w-10 h-10 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full border-2 border-white"></div>
                  ))}
                </div>
                <div className="text-sm">
                  <div className="font-semibold">+52.200 empreendedoras</div>
                  <div className="opacity-75">já começaram seu negócio</div>
                </div>
              </div>
            </div>
            
            {/* Right Column - Hero Image */}
            <div className="relative">
              <div className="relative bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 shadow-2xl">
                <img
                  src="/placeholder.svg?height=500&width=600"
                  alt="Mulher empoderada segurando camisetas com elementos de lucro e independência"
                  className="w-full h-auto rounded-2xl shadow-xl"
                />
                
                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 bg-green-500 text-white px-4 py-2 rounded-full font-bold text-sm shadow-lg animate-bounce">
                  💰 Lucro Real
                </div>
                <div className="absolute -bottom-4 -left-4 bg-yellow-400 text-gray-900 px-4 py-2 rounded-full font-bold text-sm shadow-lg animate-bounce delay-75">
                  🏠 Trabalhe em Casa
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
