import React from 'react';
const VideoDemo = () => {
  return <section className="bg-gray-50 py-[50px]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Veja o que vem no Kit e como ele funciona
          </h2>
          <p className="text-xl text-gray-600">Demonstração completa do seu futuro negócio</p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-800 rounded-2xl p-16 text-center text-white mb-12 shadow-2xl hover:shadow-3xl transition-shadow">
            <div className="text-6xl mb-4">📹</div>
            <h3 className="text-2xl font-bold mb-2">Vídeo: Demonstração do Kit Completo</h3>
            <p className="text-gray-300">Veja todos os produtos e materiais que você receberá</p>
          </div>
          
          
        </div>
      </div>
    </section>;
};
export default VideoDemo;