
import React from 'react';

const ProblemSolution = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {/* Problema */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-800 mb-8">
              Você quer ganhar dinheiro extra, mas:
            </h3>
            <div className="space-y-4">
              {[
                'Não sabe o que vender?',
                'Tem medo de investir e não conseguir retorno?',
                'Acredita que empreender é caro e complicado?'
              ].map((problem, index) => (
                <div key={index} className="flex items-start gap-4 p-4 bg-red-50 border-l-4 border-red-400 rounded-r-lg hover:bg-red-100 transition-colors">
                  <span className="text-red-500 text-xl font-bold">❌</span>
                  <span className="text-gray-700 font-medium">{problem}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Solução */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-800 mb-8">
              Com o Kit Empreendedora, você:
            </h3>
            <div className="space-y-4">
              {[
                'Recebe produtos prontos para revenda com alta saída',
                'Aprende como vender e divulgar com nossos e-books',
                'Ganha suporte dedicado para tirar todas as dúvidas'
              ].map((solution, index) => (
                <div key={index} className="flex items-start gap-4 p-4 bg-green-50 border-l-4 border-green-400 rounded-r-lg hover:bg-green-100 transition-colors">
                  <span className="text-green-500 text-xl font-bold">✅</span>
                  <span className="text-gray-700 font-medium">{solution}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;
