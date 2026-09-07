import { createContext } from 'react';
import type { Language, Translation } from '@/data/locales';

export type LocaleContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
  copy: Translation;
};

export const LocaleContext = createContext<LocaleContextValue | null>(null);