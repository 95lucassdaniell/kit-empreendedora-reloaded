
import React from 'react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToPricing = () => {
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-pink-500 via-rose-500 to-purple-600 text-white overflow-hidden">
      {/* Background Pattern - Simplified for mobile */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-16 left-4 sm:top-20 sm:left-20 w-20 h-20 sm:w-32 sm:h-32 bg-white rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-32 right-4 sm:top-40 sm:right-32 w-16 h-16 sm:w-24 sm:h-24 bg-yellow-300 rounded-full blur-lg animate-pulse delay-75"></div>
        <div className="absolute bottom-20 left-8 sm:bottom-32 sm:left-1/4 w-24 h-24 sm:w-40 sm:h-40 bg-white rounded-full blur-2xl animate-pulse delay-150"></div>
      </div>
      
      <div className="relative container mx-auto px-4 sm:px-6 py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[80vh]">
            {/* Text Content - Always first on mobile */}
            <div className="text-center lg:text-left space-y-6 sm:space-y-8 order-1">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md rounded-full px-4 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm font-semibold border border-white/30">
                <span className="text-yellow-300">🔥</span>
                <span className="text-center sm:text-left">Mais de 52.200 mulheres já transformaram sua renda</span>
              </div>

              {/* Main Headline - Mobile optimized sizes */}
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
                Faça até{' '}
                <span className="relative inline-block">
                  <span className="text-yellow-300">R$1.000</span>
                  <div className="absolute -bottom-1 sm:-bottom-2 left-0 right-0 h-1 sm:h-2 bg-yellow-300/60 rounded-full animate-pulse"></div>
                </span>{' '}
                por mês revendendo{' '}
                <span className="text-yellow-300">T-Shirts</span>
              </h1>

              {/* Subtitle - Better mobile sizing */}
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl opacity-95 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Com apenas um kit, você começa seu próprio negócio hoje mesmo –{' '}
                <strong className="text-yellow-300">sem precisar de estoque, experiência ou loja física.</strong>
              </p>

              {/* Benefits List - Improved mobile layout */}
              <div className="space-y-2 sm:space-y-3 text-left max-w-md mx-auto lg:max-w-none lg:mx-0">
                {[
                  '✅ 15 camisetas + materiais de apoio',
                  '✅ E-books com estratégias de vendas',
                  '✅ Suporte direto via WhatsApp'
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center gap-2 sm:gap-3 text-sm sm:text-base lg:text-lg">
                    <span className="text-green-300 text-base sm:text-xl flex-shrink-0">{benefit.split(' ')[0]}</span>
                    <span className="opacity-90">{benefit.substring(2)}</span>
                  </div>
                ))}
              </div>

              {/* CTA Button - Mobile optimized */}
              <div className="pt-4 sm:pt-6">
                <Button
                  onClick={scrollToPricing}
                  className="bg-yellow-400 hover:bg-yellow-300 text-gray-900 text-base sm:text-lg lg:text-xl px-6 sm:px-8 lg:px-12 py-4 sm:py-5 lg:py-6 rounded-full font-bold shadow-2xl hover:shadow-yellow-400/50 transition-all duration-300 hover:scale-105 w-full sm:w-auto min-h-[48px] sm:min-h-[56px]"
                >
                  <span className="mr-2">🚀</span>
                  Quero começar agora com meu kit
                </Button>
                
                <p className="text-xs sm:text-sm opacity-75 mt-3 sm:mt-4">
                  <span className="text-yellow-300">⚡</span> Últimas unidades disponíveis • Envio imediato
                </p>
              </div>

              {/* Social Proof - Mobile friendly */}
              <div className="flex items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-3 sm:pt-4">
                <div className="flex -space-x-1 sm:-space-x-2">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div key={i} className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full border-2 border-white"></div>
                  ))}
                </div>
                <div className="text-xs sm:text-sm">
                  <div className="font-semibold">+52.200 empreendedoras</div>
                  <div className="opacity-75">já começaram seu negócio</div>
                </div>
              </div>
            </div>
            
            {/* Hero Image - Order 2 on mobile, better sizing */}
            <div className="relative order-2 w-full max-w-md sm:max-w-lg lg:max-w-none mx-auto">
              <div className="relative bg-white/10 backdrop-blur-md rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 border border-white/20 shadow-2xl">
                <img
                  src="/placeholder.svg?height=400&width=500"
                  alt="Mulher empoderada segurando camisetas com elementos de lucro e independência"
                  className="w-full h-auto rounded-xl sm:rounded-2xl shadow-xl"
                />
                
                {/* Floating Elements - Mobile positioned */}
                <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 bg-green-500 text-white px-2 py-1 sm:px-4 sm:py-2 rounded-full font-bold text-xs sm:text-sm shadow-lg animate-bounce">
                  💰 Lucro Real
                </div>
                <div className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 bg-yellow-400 text-gray-900 px-2 py-1 sm:px-4 sm:py-2 rounded-full font-bold text-xs sm:text-sm shadow-lg animate-bounce delay-75">
                  🏠 Trabalhe em Casa
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator - Hidden on small mobile */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden sm:block">
        <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-2 sm:h-3 bg-white/70 rounded-full mt-1 sm:mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
