
import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import VideoPlayer from './VideoPlayer';

const Testimonials = () => {
  const videoTestimonials = [
    {
      videoId: "66f2f35dc98d09000a0f7ed6",
      thumbnailUrl: "https://images.converteai.net/cb1e1f48-1c32-4d83-8a9a-9156f7d23bbc/players/66f2f35dc98d09000a0f7ed6/thumbnail.jpg",
      title: "Depoimento sobre sucesso com o kit",
      author: "Juliana Ramos",
      location: "Recife/PE"
    },
    {
      videoId: "66f2f35215cb24000b17481d",
      thumbnailUrl: "https://images.converteai.net/cb1e1f48-1c32-4d83-8a9a-9156f7d23bbc/players/66f2f35215cb24000b17481d/thumbnail.jpg",
      title: "Como superei o medo de vender",
      author: "Vanessa Nunes",
      location: "Goiânia/GO"
    },
    {
      videoId: "66f2f34bbfbd51000b848435",
      thumbnailUrl: "https://images.converteai.net/cb1e1f48-1c32-4d83-8a9a-9156f7d23bbc/players/66f2f34bbfbd51000b848435/thumbnail.jpg",
      title: "Minha jornada empreendedora",
      author: "Maria Silva",
      location: "São Paulo/SP"
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
        
        <div className="max-w-6xl mx-auto">
          <Carousel 
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {videoTestimonials.map((video, index) => (
                <CarouselItem 
                  key={index} 
                  className="pl-4 basis-full md:basis-1/2 lg:basis-1/2"
                >
                  <VideoPlayer
                    videoId={video.videoId}
                    thumbnailUrl={video.thumbnailUrl}
                    title={video.title}
                    author={video.author}
                    location={video.location}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-12" />
            <CarouselNext className="hidden md:flex -right-12" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
