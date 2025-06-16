
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
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            O que você recebe no{' '}
            <span className="text-pink-600">Kit Empreendedora</span>
          </h2>
          <p className="text-xl text-gray-600">Tudo que você precisa para começar seu negócio hoje</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
            >
              <div className="text-5xl mb-6 text-center">{feature.icon}</div>
              <h4 className="text-xl font-bold text-gray-800 mb-4 text-center">
                {feature.title}
              </h4>
              <p className="text-gray-600 text-center leading-relaxed">
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
