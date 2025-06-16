

import React from 'react';

const Features = () => {
  const features = [
    {
      icon: '👕',
      title: '15 T-Shirts prontas para revenda',
      description: 'Peças com estampas exclusivas e tecido premium'
    },
    {
      icon: '🛍️',
      title: '10 sacolas personalizadas',
      description: 'Agregue valor à sua entrega'
    },
    {
      icon: '✨',
      title: 'Essência exclusiva',
      description: 'Impressione seus clientes com aroma diferenciado'
    },
    {
      icon: '📒',
      title: 'Bloco de pedidos personalizado',
      description: 'Registre suas vendas com organização'
    },
    {
      icon: '📘',
      title: 'E-books com estratégias de venda',
      description: 'Aprenda a faturar no Instagram'
    },
    {
      icon: '🤝',
      title: 'Suporte via WhatsApp',
      description: 'Acompanhamento direto com nossa equipe'
    }
  ];

  return (
    <section className="py-8 sm:py-12 lg:py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-800 mb-2 sm:mb-3 leading-tight">
            O que você recebe no{' '}
            <span className="text-pink-600">Kit Empreendedora</span>
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-600">Tudo que você precisa para começar seu negócio hoje</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 relative"
            >
              {/* Badge numerado com fundo branco */}
              <div className="absolute -top-3 -right-3 bg-white border-2 border-pink-500 text-pink-600 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center text-sm sm:text-base font-bold shadow-md">
                {index + 1}
              </div>
              
              <div className="text-2xl sm:text-3xl lg:text-4xl mb-3 sm:mb-4 text-center">{feature.icon}</div>
              <h4 className="text-base sm:text-lg font-bold text-gray-800 mb-2 sm:mb-3 text-center leading-tight">
                {feature.title}
              </h4>
              <p className="text-gray-600 text-center leading-relaxed text-xs sm:text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

