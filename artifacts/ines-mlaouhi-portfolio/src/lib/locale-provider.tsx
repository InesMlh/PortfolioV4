import { type ReactNode, useEffect, useMemo, useState } from 'react';
import { translations, type Language } from '@/data/locales';
import { LocaleContext } from '@/lib/locale-context';

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(() => {
    if (typeof window === 'undefined') return 'en';
    const stored = window.localStorage.getItem('ines-language');
    return stored === 'fr' || stored === 'de' || stored === 'es' ? stored : 'en';
  });

  useEffect(() => {
    window.localStorage.setItem('ines-language', language);
    document.documentElement.lang = language;
  }, [language]);

  const value = useMemo(() => ({ language, setLanguage, copy: translations[language] }), [language]);
  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}