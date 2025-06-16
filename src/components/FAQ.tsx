import React, { useState } from 'react';
const FAQ = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const faqs = [{
    question: 'Nunca vendi nada. Isso serve pra mim?',
    answer: 'Sim! É justamente para quem está começando. Você recebe produto, material e suporte.'
  }, {
    question: 'E se eu não conseguir vender?',
    answer: 'Você tem garantia de 7 dias. Além disso, os produtos são os mais vendidos e com alta aceitação.'
  }, {
    question: 'O envio é rápido?',
    answer: 'Sim. Enviamos em até 2 dias úteis e você recebe o rastreio por e-mail.'
  }, {
    question: 'Tem suporte mesmo?',
    answer: 'Sim! Nossa equipe atende via WhatsApp para tirar todas as suas dúvidas.'
  }];
  return <section className="py-12 sm:py-16 bg-gray-50 lg:py-[50px]">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-800 mb-3 sm:mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600">Tire suas dúvidas antes de começar</p>
        </div>
        
        <div className="max-w-3xl mx-auto space-y-3 sm:space-y-4">
          {faqs.map((faq, index) => <div key={index} className="bg-white rounded-xl sm:rounded-2xl shadow-lg overflow-hidden">
              <button className="w-full p-4 sm:p-6 text-left font-bold text-base sm:text-lg bg-pink-600 text-white hover:bg-pink-700 transition-colors flex justify-between items-center min-h-[56px]" onClick={() => setOpenFAQ(openFAQ === index ? null : index)}>
                <span className="pr-4">{faq.question}</span>
                <span className="text-xl sm:text-2xl flex-shrink-0">
                  {openFAQ === index ? '−' : '+'}
                </span>
              </button>
              {openFAQ === index && <div className="p-4 sm:p-6 text-gray-700 bg-gray-50 animate-fade-in text-sm sm:text-base leading-relaxed">
                  {faq.answer}
                </div>}
            </div>)}
        </div>
      </div>
    </section>;
};
export default FAQ;