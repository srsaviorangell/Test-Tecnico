import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const TrocaDeIdioma = () => {
  const { i18n } = useTranslation();
  const [isEnglish, setIsEnglish] = useState(i18n.language.startsWith('en'));

  useEffect(() => {
    // Listener do i18next pra detectar mudança de idioma
    const handleLanguageChange = (lng: string) => {
      setIsEnglish(lng.startsWith('en'));
    };

    i18n.on('languageChanged', handleLanguageChange);

    // Remove o listener ao desmontar o componente
    return () => {
      i18n.off('languageChanged', handleLanguageChange);
    };
  }, [i18n]);

  const onToggle = () => {
    const newLanguage = isEnglish ? 'pt' : 'en';
    i18n.changeLanguage(newLanguage);
  };

  const activeColor = 'bg-blue-600';
  const inactiveColor = 'bg-green-600';

  return (
    <label
      className='flex cursor-pointer select-none items-center shadow-xl hover:shadow-2xl rounded-full transition-all duration-300'
      role='switch'
      aria-checked={isEnglish}
    >
      <div className='relative flex items-center p-1 bg-gray-300 rounded-full w-40 h-14'>
        <span
          className={`z-10 w-1/2 text-center text-sm font-extrabold transition-colors duration-300
            ${!isEnglish ? 'text-white' : 'text-gray-700'}`}
        >
          PT
        </span>

        <span
          className={`z-10 w-1/2 text-center text-sm font-extrabold transition-colors duration-300
            ${isEnglish ? 'text-white' : 'text-gray-700'}`}
        >
          EN
        </span>

        <input
          type='checkbox'
          checked={isEnglish}
          onChange={onToggle}
          className='sr-only'
        />

        <div
          className={`absolute left-1 top-1 w-[calc(50%-4px)] h-12 rounded-full transition-all duration-300 ease-in-out shadow-lg
            ${
              isEnglish
                ? `translate-x-[calc(100%+8px)] ${activeColor}`
                : `${inactiveColor}`
            }`}
        ></div>
      </div>
    </label>
  );
};

export default TrocaDeIdioma;
