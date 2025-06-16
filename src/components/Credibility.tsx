
import React, { useState, useEffect } from 'react';

const Credibility = () => {
  const [timeLeft, setTimeLeft] = useState(600); // 10 minutos em segundos

  useEffect(() => {
    if (timeLeft <= 0) return;

    const timer = setInterval(() => {
      setTimeLeft(prev => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  return (
    <section className="bg-gray-50 py-12 sm:py-16">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center">
          {/* Cronômetro de Urgência */}
          <div className="mb-8 sm:mb-12">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800 mb-4 leading-tight">
              Essa oferta acaba em:
            </h2>
            
            <div className="inline-flex items-center justify-center bg-gradient-to-r from-red-500 to-orange-500 text-white px-6 sm:px-8 py-4 sm:py-6 rounded-2xl shadow-2xl animate-pulse">
              <div className="text-center">
                <div className="text-4xl sm:text-5xl lg:text-6xl font-bold font-mono tracking-wider">
                  {timeLeft > 0 ? formatTime(timeLeft) : '00:00'}
                </div>
                <div className="text-xs sm:text-sm opacity-90 mt-1 uppercase tracking-wide">
                  {timeLeft > 0 ? 'Minutos : Segundos' : 'Oferta Encerrada'}
                </div>
              </div>
            </div>
            
            {timeLeft > 0 && (
              <p className="text-sm sm:text-base text-red-600 font-semibold mt-3 animate-pulse">
                ⚠️ Aproveite enquanto há tempo!
              </p>
            )}
          </div>
          
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
