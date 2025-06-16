
import React from 'react';

const Credibility = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
            Mais de{' '}
            <span className="text-pink-600 relative">
              52.200 mulheres
              <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-pink-600"></div>
            </span>{' '}
            já transformaram sua renda
          </h2>
          
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16 mt-12">
            <div className="flex items-center gap-3 bg-white px-6 py-4 rounded-full shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <span className="text-2xl">✅</span>
              </div>
              <span className="font-semibold text-gray-700">Negócio validado desde 2017</span>
            </div>
            
            <div className="flex items-center gap-3 bg-white px-6 py-4 rounded-full shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-2xl">🤝</span>
              </div>
              <span className="font-semibold text-gray-700">Apoio 100% humanizado</span>
            </div>
            
            <div className="flex items-center gap-3 bg-white px-6 py-4 rounded-full shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                <span className="text-2xl">🛡️</span>
              </div>
              <span className="font-semibold text-gray-700">Garantia de satisfação</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Credibility;
