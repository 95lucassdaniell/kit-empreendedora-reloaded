
import React, { useEffect } from 'react';

interface VideoPlayerProps {
  videoId: string;
  thumbnailUrl: string;
  title: string;
  author: string;
  location: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ 
  videoId, 
  thumbnailUrl, 
  title, 
  author, 
  location 
}) => {
  useEffect(() => {
    // Carregar script do vídeo dinamicamente
    const script = document.createElement('script');
    script.src = `https://scripts.converteai.net/cb1e1f48-1c32-4d83-8a9a-9156f7d23bbc/players/${videoId}/player.js`;
    script.async = true;
    script.id = `scr_${videoId}`;
    
    // Verificar se o script já foi carregado
    if (!document.getElementById(`scr_${videoId}`)) {
      document.head.appendChild(script);
    }

    return () => {
      // Cleanup: remover script quando componente for desmontado
      const existingScript = document.getElementById(`scr_${videoId}`);
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, [videoId]);

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      {/* Container do vídeo 9:16 */}
      <div className="relative">
        <div 
          id={`vid_${videoId}`} 
          style={{ 
            position: 'relative', 
            width: '100%', 
            paddingTop: '177.78%' // 16:9 invertido = 9:16
          }}
        >
          <img 
            id={`thumb_${videoId}`}
            src={thumbnailUrl}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              display: 'block'
            }}
            alt="thumbnail"
          />
          <div 
            id={`backdrop_${videoId}`}
            style={{
              WebkitBackdropFilter: 'blur(5px)',
              backdropFilter: 'blur(5px)',
              position: 'absolute',
              top: 0,
              height: '100%',
              width: '100%'
            }}
          />
        </div>
      </div>
      
      {/* Informações da empreendedora */}
      <div className="p-6">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center">
            <span className="text-pink-600 font-bold text-lg">
              {author.charAt(0)}
            </span>
          </div>
          <div>
            <div className="font-bold text-pink-600">{author}</div>
            <div className="text-gray-500 text-sm">{location}</div>
          </div>
        </div>
        <p className="text-gray-600 text-sm mt-3">{title}</p>
      </div>
    </div>
  );
};

export default VideoPlayer;
