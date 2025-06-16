import React from 'react';
const UseCases = () => {
  const useCases = [{
    icon: '👩‍👧‍👦',
    title: 'Mãe que quer renda em casa',
    description: 'Trabalhe no seu tempo, sem sair de casa'
  }, {
    icon: '💪',
    title: 'Mulher buscando independência',
    description: 'Conquiste sua liberdade financeira'
  }, {
    icon: '🎓',
    title: 'Estudante ou profissional iniciante',
    description: 'Comece no empreendedorismo sem complicação'
  }, {
    icon: '🚀',
    title: 'Quem quer começar um negócio',
    description: 'Modelo simples e validado para começar'
  }];
  return <section className="bg-gradient-to-br from-purple-50 to-pink-50 py-[50px]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Perfeito para você que é:
          </h2>
          <p className="text-xl text-gray-600">Encontre seu perfil e comece hoje mesmo</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {useCases.map((useCase, index) => <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-center">
              <div className="text-4xl mb-4">{useCase.icon}</div>
              <h4 className="text-lg font-bold text-gray-800 mb-3">
                {useCase.title}
              </h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                {useCase.description}
              </p>
            </div>)}
        </div>
      </div>
    </section>;
};
export default UseCases;