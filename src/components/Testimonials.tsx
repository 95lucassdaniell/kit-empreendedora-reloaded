
import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      text: "Meu primeiro mês com o kit me rendeu R$960 em lucro. Hoje é minha principal fonte de renda!",
      author: "Juliana Ramos",
      location: "Recife/PE"
    },
    {
      text: "Eu achava que não conseguiria vender, mas as dicas e suporte fizeram toda a diferença.",
      author: "Vanessa Nunes",
      location: "Goiânia/GO"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            O que nossas{' '}
            <span className="text-pink-600">empreendedoras</span> dizem
          </h2>
          <p className="text-xl text-gray-600">Histórias reais de sucesso</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-50 p-8 rounded-2xl border-l-4 border-pink-500 hover:shadow-lg transition-shadow"
            >
              <div className="text-6xl text-pink-200 mb-4">"</div>
              <p className="text-lg text-gray-700 italic mb-6 leading-relaxed">
                {testimonial.text}
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center">
                  <span className="text-pink-600 font-bold text-lg">
                    {testimonial.author.charAt(0)}
                  </span>
                </div>
                <div>
                  <div className="font-bold text-pink-600">{testimonial.author}</div>
                  <div className="text-gray-500 text-sm">{testimonial.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
