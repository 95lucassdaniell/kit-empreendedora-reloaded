
import React from 'react';

const Comparison = () => {
  const comparisons = [
    {
      without: 'Produtos genéricos',
      with: 'T-Shirts exclusivas e vendáveis'
    },
    {
      without: 'Nenhum suporte',
      with: 'Acompanhamento via WhatsApp'
    },
    {
      without: 'Alta chance de erro e prejuízo',
      with: 'Modelo testado por milhares'
    },
    {
      without: 'Sem material de venda',
      with: 'E-books e bloco de pedidos'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Veja a diferença
          </h2>
          <p className="text-xl text-gray-600">Compare e tome a melhor decisão</p>
        </div>
        
        {/* Layout para Desktop - mantém o layout atual */}
        <div className="hidden md:block max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden">
          <div className="grid md:grid-cols-2">
            <div className="bg-red-500 text-white p-6 text-center">
              <h3 className="text-2xl font-bold">Sem o Kit Empreendedora</h3>
            </div>
            <div className="bg-green-500 text-white p-6 text-center">
              <h3 className="text-2xl font-bold">Com o Kit Empreendedora</h3>
            </div>
          </div>
          
          {comparisons.map((comparison, index) => (
            <div key={index} className="grid md:grid-cols-2 border-b border-gray-100 last:border-b-0">
              <div className="p-6 bg-red-50 flex items-center gap-4">
                <span className="text-red-500 text-xl">❌</span>
                <span className="text-gray-700">{comparison.without}</span>
              </div>
              <div className="p-6 bg-green-50 flex items-center gap-4">
                <span className="text-green-500 text-xl">✅</span>
                <span className="text-gray-700">{comparison.with}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Layout para Mobile - seções separadas */}
        <div className="md:hidden space-y-8">
          {/* Seção "Sem o Kit" */}
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
            <div className="bg-red-500 text-white p-6 text-center">
              <h3 className="text-xl font-bold">Sem o Kit Empreendedora</h3>
            </div>
            {comparisons.map((comparison, index) => (
              <div key={`without-${index}`} className="p-6 bg-red-50 flex items-center gap-4 border-b border-gray-100 last:border-b-0">
                <span className="text-red-500 text-xl">❌</span>
                <span className="text-gray-700">{comparison.without}</span>
              </div>
            ))}
          </div>

          {/* Seção "Com o Kit" */}
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
            <div className="bg-green-500 text-white p-6 text-center">
              <h3 className="text-xl font-bold">Com o Kit Empreendedora</h3>
            </div>
            {comparisons.map((comparison, index) => (
              <div key={`with-${index}`} className="p-6 bg-green-50 flex items-center gap-4 border-b border-gray-100 last:border-b-0">
                <span className="text-green-500 text-xl">✅</span>
                <span className="text-gray-700">{comparison.with}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Comparison;
