import React from 'react';
import { FacebookIcon, InstagramIcon, TwitterIcon, TikTokIcon } from './components/Icons';
import { RoseGoldButton } from './components/RoseGoldButton';
import { WaveOverlay } from './components/WaveOverlay';

const App: React.FC = () => {

  const handleAction = (action: string) => {
    console.log(`User clicked: ${action}`);
  };

  return (
    // Main Container: Full width, full height, no side margins ("zonas donde no haya nada")
    <div className="w-full min-h-screen bg-[#f9f7f2] relative flex flex-col shadow-none overflow-x-hidden">
        
      {/* Top Section: Real Estate Image - Full Width */}
      <div className="relative w-full h-[35vh] min-h-[250px] z-0">
        <img 
          src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=1920&auto=format&fit=crop" 
          alt="Luxury modern home with pool by the sea" 
          className="w-full h-full object-cover"
        />
        {/* Subtle overlay gradient at the very bottom of the image to blend */}
        <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-[#bdcec0] to-transparent opacity-50"></div>
      </div>

      {/* Middle Section: SVG Waves & Profile */}
      {/* Positioned absolutely to bridge the header and content */}
      <div className="absolute top-[calc(35vh-50px)] left-0 w-full z-10 pointer-events-none">
          <div className="relative w-full h-[400px]">
             <WaveOverlay />
          </div>
      </div>

      {/* Profile Picture Section */}
      {/* Uses negative margin to pull it up into the wave/header area */}
      <div className="relative z-20 -mt-[75px] flex justify-center items-center">
          {/* The Ring Container */}
          <div className="p-[4px] rounded-full bg-gradient-to-br from-[#d4af9c] via-[#fdf2ec] to-[#d4af9c] shadow-lg">
              <div className="w-[150px] h-[150px] rounded-full overflow-hidden border-4 border-white bg-white">
                    <img 
                      src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop" 
                      alt="Laura Sánchez" 
                      className="w-full h-full object-cover"
                  />
              </div>
          </div>
      </div>

      {/* Content Section */}
      {/* Centered column for readability, but background flows full width */}
      <div className="flex-1 flex flex-col items-center px-4 pt-4 pb-8 z-20 relative w-full max-w-lg mx-auto">
        
        {/* Name & Title */}
        <div className="text-center mb-8">
          <h1 className="text-[28px] font-medium text-[#1a1a1a] tracking-tight uppercase leading-none mb-2">
            Laura Sánchez
          </h1>
          <p className="text-[#3a3a3a] text-lg font-normal">
            Agente Inmobiliaria
          </p>
        </div>

        {/* Buttons */}
        <div className="w-full max-w-[300px] space-y-4">
          <RoseGoldButton text="WhatsApp" onClick={() => handleAction('WhatsApp')} />
          <RoseGoldButton text="Ver Propiedades" onClick={() => handleAction('Properties')} />
          <RoseGoldButton text="Reseñas" onClick={() => handleAction('Reviews')} />
        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 mt-10 mb-8">
          <button 
              onClick={() => handleAction('Facebook')}
              className="w-10 h-10 rounded-full flex items-center justify-center bg-[#cba597] text-white shadow-sm hover:opacity-90 transition-opacity"
          >
              <FacebookIcon className="w-5 h-5" />
          </button>
          <button 
              onClick={() => handleAction('Instagram')}
              className="w-10 h-10 rounded-full flex items-center justify-center bg-[#cba597] text-white shadow-sm hover:opacity-90 transition-opacity"
          >
              <InstagramIcon className="w-5 h-5" />
          </button>
          <button 
              onClick={() => handleAction('Twitter')}
              className="w-10 h-10 rounded-full flex items-center justify-center bg-[#cba597] text-white shadow-sm hover:opacity-90 transition-opacity"
          >
              <TwitterIcon className="w-5 h-5" />
          </button>
          <button 
              onClick={() => handleAction('TikTok')}
              className="w-10 h-10 rounded-full flex items-center justify-center bg-[#cba597] text-white shadow-sm hover:opacity-90 transition-opacity"
          >
              <TikTokIcon className="w-5 h-5" />
          </button>
        </div>

        {/* Save Contact */}
        <div className="mt-auto pb-4">
          <button 
              onClick={() => handleAction('Save Contact')}
              className="text-[#9c786c] uppercase tracking-widest text-sm font-medium hover:text-[#7a5c52] transition-colors"
          >
            Guardar Contacto
          </button>
        </div>
        
      </div>
    </div>
  );
};

export default App;