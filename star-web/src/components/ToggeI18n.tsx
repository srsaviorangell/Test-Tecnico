import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const TrocaDeIdioma = () => {
  const { i18n } = useTranslation();
  const [isEnglish, setIsEnglish] = useState(i18n.language === 'en');

  const onToggle = () => {
    const newLanguage = isEnglish ? 'pt' : 'en';
    
    // Muda o idioma no i18n
    i18n.changeLanguage(newLanguage)
      .then(() => {
        console.log(`Idioma alterado para: ${newLanguage}`);
        setIsEnglish(!isEnglish);
      })
      .catch(err => {
        console.error('Erro ao mudar idioma:', err);
      });
  };

  // Cores para os estados
  const activeColor = 'bg-blue-600';
  const inactiveColor = 'bg-green-600';

  return (
    <>
     <label 
      className='flex cursor-pointer select-none items-center shadow-xl hover:shadow-2xl rounded-full transition-all duration-300'
      role="switch" 
      aria-checked={isEnglish}
    >
      {/* O Container principal do Switch (Track) */}
      <div className='relative flex items-center p-1 bg-gray-300 rounded-full w-40 h-14'>
        
        {/* Rótulo PT */}
        <span className={`z-10 w-1/2 text-center text-sm font-extrabold transition-colors duration-300 select-none
                         ${!isEnglish ? 'text-white' : 'text-gray-700'}`}>
            PT
        </span>

        {/* Rótulo EN */}
        <span className={`z-10 w-1/2 text-center text-sm font-extrabold transition-colors duration-300 select-none
                         ${isEnglish ? 'text-white' : 'text-gray-700'}`}>
            EN
        </span>
        
        {/* Input Checkbox (Escondido) */}
        <input
          type='checkbox'
          checked={isEnglish}
          onChange={onToggle}
          className='sr-only'
        />
        
        {/* O Botão/Thumb Deslizante (Slider) */}
        <div
          className={`absolute left-1 top-1 w-[calc(50%-4px)] h-12 rounded-full transition-all duration-300 ease-in-out shadow-lg 
                      ${isEnglish ? `translate-x-[calc(100%+8px)] ${activeColor}` : `${inactiveColor}`}
                    `}
        ></div>
      </div>
    </label>
    </>
  );
};

export default TrocaDeIdioma;