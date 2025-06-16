
import React from 'react';

const Credibility = () => {
  return (
    <section className="bg-gray-50 py-12 sm:py-16">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-6 sm:mb-8 leading-tight">
            Mais de{' '}
            <span className="text-pink-600 relative">
              52.200 mulheres
              <div className="absolute -bottom-0.5 sm:-bottom-1 left-0 right-0 h-0.5 bg-pink-600"></div>
            </span>{' '}
            já transformaram sua renda
          </h2>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 lg:gap-16 mt-8 sm:mt-12">
            <div className="flex items-center gap-2 sm:gap-3 bg-white px-4 sm:px-6 py-3 sm:py-4 rounded-full shadow-lg hover:shadow-xl transition-shadow w-full sm:w-auto max-w-xs sm:max-w-none">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-xl sm:text-2xl">✅</span>
              </div>
              <span className="font-semibold text-gray-700 text-sm sm:text-base">Negócio validado desde 2017</span>
            </div>
            
            <div className="flex items-center gap-2 sm:gap-3 bg-white px-4 sm:px-6 py-3 sm:py-4 rounded-full shadow-lg hover:shadow-xl transition-shadow w-full sm:w-auto max-w-xs sm:max-w-none">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-xl sm:text-2xl">🤝</span>
              </div>
              <span className="font-semibold text-gray-700 text-sm sm:text-base">Apoio 100% humanizado</span>
            </div>
            
            <div className="flex items-center gap-2 sm:gap-3 bg-white px-4 sm:px-6 py-3 sm:py-4 rounded-full shadow-lg hover:shadow-xl transition-shadow w-full sm:w-auto max-w-xs sm:max-w-none">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-xl sm:text-2xl">🛡️</span>
              </div>
              <span className="font-semibold text-gray-700 text-sm sm:text-base">Garantia de satisfação</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Credibility;
