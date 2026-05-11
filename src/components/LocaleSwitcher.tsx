'use client';

import { usePathname, useRouter } from '@/i18n/navigation';
import { useLocale } from 'next-intl';

export default function LocaleSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const toggleLocale = () => {
    const newLocale = locale === 'id' ? 'en' : 'id';
    router.replace(pathname, { locale: newLocale });
    router.refresh();
  };

  return (
    <div 
      onClick={toggleLocale}
      className="relative inline-flex items-center w-20 h-8 p-1 bg-slate-900 border border-gray-800 rounded-full cursor-pointer hover:border-blue-500 transition-all duration-300 group self-center"
    >
      {/* Label EN */}
      <span className={`flex-1 text-center text-[10px] font-bold z-10 transition-colors duration-300 ${locale === 'en' ? 'text-white' : 'text-gray-500'}`}>
        EN
      </span>
      {/* Label ID */}
      <span className={`flex-1 text-center text-[10px] font-bold z-10 transition-colors duration-300 ${locale === 'id' ? 'text-white' : 'text-gray-500'}`}>
        ID
      </span>
      
      {/* Slider Background */}
      <div 
        className={`absolute w-8.5 h-6 bg-blue-600 rounded-full shadow-lg shadow-blue-900/50 transition-all duration-300 ease-in-out ${
          locale === 'id' ? 'translate-x-9' : 'translate-x-0'
        }`}
      />
    </div>
  );
}