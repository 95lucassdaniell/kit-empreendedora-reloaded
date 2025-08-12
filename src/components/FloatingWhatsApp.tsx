import React from 'react';
import WhatsAppButton from '@/components/WhatsAppButton';

const FloatingWhatsApp = () => {
  return (
    <WhatsAppButton 
      message="Olá! Estou interessada no kit de camisetas e gostaria de mais informações!"
      variant="floating"
      size="lg"
    />
  );
};

export default FloatingWhatsApp;