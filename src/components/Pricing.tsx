
import React from 'react';
import { Button } from '@/components/ui/button';
const Pricing = () => {
  return <section id="pricing" className="py-12 sm:py-16 bg-white lg:py-[50px]">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-800 mb-3 sm:mb-4">
            Investimento
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600">Valor que transforma seu futuro</p>
        </div>
        
        <div className="max-w-2xl mx-auto">
          <div className="bg-gradient-to-br from-pink-500 to-purple-600 p-1 rounded-2xl sm:rounded-3xl shadow-2xl">
            <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 text-center">
              <div className="mb-6 sm:mb-8">
                <div className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-pink-600 mb-3 sm:mb-4">
                  R$ 359,96
                </div>
                <div className="text-base sm:text-lg lg:text-xl text-gray-600 mb-4 sm:mb-6">
                  💳 Parcele em até <strong className="text-green-600">3x de R$119,99</strong> sem juros no cartão
                </div>
              </div>
              
              <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                <div className="flex items-center gap-3 text-left">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-green-600 text-xs sm:text-sm">✓</span>
                  </div>
                  <span className="text-gray-700 text-sm sm:text-base"><strong>FRETE GRÁTIS</strong></span>
                </div>
                {['Envio imediato com código de rastreio', 'E-books liberados na hora da compra via QR Code', 'Tudo que você precisa para começar a vender HOJE com lucro real'].map((feature, index) => <div key={index} className="flex items-center gap-3 text-left">
                    <div className="w-5 h-5 sm:w-6 sm:h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-green-600 text-xs sm:text-sm">✓</span>
                    </div>
                    <span className="text-gray-700 text-sm sm:text-base">{feature}</span>
                  </div>)}
              </div>
              
              <Button className="w-full bg-yellow-400 hover:bg-yellow-500 text-gray-900 text-base sm:text-lg lg:text-xl py-4 sm:py-5 lg:py-6 rounded-xl sm:rounded-2xl font-bold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 min-h-[48px] sm:min-h-[56px]">
                🛒 Garantir meu kit agora
              </Button>
              
              <div className="mt-4 sm:mt-6 text-xs sm:text-sm text-gray-500">
                ⚡ Promoção por tempo limitado
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Pricing;
