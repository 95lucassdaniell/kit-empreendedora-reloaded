import React from 'react';
import { Button } from '@/components/ui/button';

interface WhatsAppButtonProps {
  message?: string;
  variant?: 'default' | 'floating' | 'inline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({
  message = "Olá! Tenho interesse no kit de camisetas. Pode me ajudar?",
  variant = 'default',
  size = 'md',
  className = ''
}) => {
  // Replace with your WhatsApp number (with country code, no + or spaces)
  const phoneNumber = "5511999999999"; // Update this with your actual WhatsApp number
  
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  const handleClick = () => {
    window.open(whatsappUrl, '_blank');
  };

  const getVariantStyles = () => {
    switch (variant) {
      case 'floating':
        return "fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-2xl hover:shadow-green-500/50 transition-all duration-300 hover:scale-110 animate-pulse";
      case 'inline':
        return "bg-green-500 hover:bg-green-600 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105";
      default:
        return "bg-green-500 hover:bg-green-600 text-white font-bold shadow-xl hover:shadow-green-500/50 transition-all duration-300 hover:scale-105";
    }
  };

  const getSizeStyles = () => {
    switch (size) {
      case 'sm':
        return variant === 'floating' ? "w-12 h-12 p-3" : "px-4 py-2 text-sm min-h-[40px]";
      case 'lg':
        return variant === 'floating' ? "w-16 h-16 p-4" : "px-8 py-4 text-lg lg:text-xl min-h-[56px]";
      default:
        return variant === 'floating' ? "w-14 h-14 p-3" : "px-6 py-3 text-base min-h-[48px]";
    }
  };

  return (
    <Button
      onClick={handleClick}
      className={`${getVariantStyles()} ${getSizeStyles()} ${className}`}
    >
      <span className="mr-2">📱</span>
      {variant === 'floating' ? '' : 'Falar no WhatsApp'}
    </Button>
  );
};

export default WhatsAppButton;