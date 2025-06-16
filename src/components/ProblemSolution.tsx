
import React from 'react';

const ProblemSolution = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            Por que tantas mulheres desistem de empreender?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Descobrimos os 3 principais obstáculos e criamos a solução perfeita
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Problema */}
          <div className="bg-red-50 p-8 rounded-2xl border-l-4 border-red-500">
            <h3 className="text-2xl font-bold text-red-700 mb-6 flex items-center">
              ❌ Os Problemas Mais Comuns
            </h3>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start">
                <span className="text-red-500 mr-3">•</span>
                <span>Não sabem por onde começar nem o que vender</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-3">•</span>
                <span>Falta de capital inicial para investir em estoque</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-3">•</span>
                <span>Medo de não conseguir vender e perder dinheiro</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-3">•</span>
                <span>Não conhecem estratégias de vendas eficazes</span>
              </li>
            </ul>
          </div>
          
          {/* Solução */}
          <div className="bg-green-50 p-8 rounded-2xl border-l-4 border-green-500">
            <h3 className="text-2xl font-bold text-green-700 mb-6 flex items-center">
              ✅ Nossa Solução Completa
            </h3>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start">
                <span className="text-green-500 mr-3">•</span>
                <span>Kit completo com produtos prontos para revenda</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-3">•</span>
                <span>Investimento baixo com retorno garantido</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-3">•</span>
                <span>Produtos testados e aprovados pelo mercado</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-3">•</span>
                <span>Estratégias e suporte para vender com segurança</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <div className="bg-pink-100 p-6 rounded-2xl max-w-2xl mx-auto">
            <h4 className="text-2xl font-bold text-pink-700 mb-3">
              🎯 Resultado Garantido
            </h4>
            <p className="text-gray-700 text-lg">
              Com nosso kit, você elimina todos esses obstáculos e começa a faturar desde o primeiro dia!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;
