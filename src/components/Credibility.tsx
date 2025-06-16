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
  return <section className="bg-gray-50 py-12 sm:py-[50px]">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center">
          {/* Cronômetro de Urgência */}
          
          
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
    </section>;
};
export default Credibility;