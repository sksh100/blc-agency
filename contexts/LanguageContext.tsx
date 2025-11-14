'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

type Language = 'en' | 'fr' | 'ar' | 'it'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>('en')
  const [translations, setTranslations] = useState<Record<string, any>>({})

  useEffect(() => {
    // Load translations based on selected language
    const loadTranslations = async () => {
      try {
        let translations
        switch (language) {
          case 'fr':
            translations = await import('../locales/fr/common.json')
            break
          case 'ar':
            translations = await import('../locales/ar/common.json')
            break
          case 'it':
            translations = await import('../locales/it/common.json')
            break
          default:
            translations = await import('../locales/en/common.json')
        }
        setTranslations(translations.default)
      } catch (error) {
        // Fallback to English
        const fallback = await import('../locales/en/common.json')
        setTranslations(fallback.default)
      }
    }
    loadTranslations()
  }, [language])

  useEffect(() => {
    // Load saved language preference
    const savedLang = localStorage.getItem('language') as Language
    if (savedLang && ['en', 'fr', 'ar', 'it'].includes(savedLang)) {
      setLanguageState(savedLang)
      document.documentElement.lang = savedLang
      if (savedLang === 'ar') {
        document.documentElement.dir = 'rtl'
      } else {
        document.documentElement.dir = 'ltr'
      }
    }
  }, [])

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    localStorage.setItem('language', lang)
    // Update HTML lang attribute
    document.documentElement.lang = lang
    // Update dir for Arabic
    if (lang === 'ar') {
      document.documentElement.dir = 'rtl'
    } else {
      document.documentElement.dir = 'ltr'
    }
  }

  const t = (key: string): any => {
    if (!translations || Object.keys(translations).length === 0) {
      // Return key as fallback during initial load
      return key
    }
    const keys = key.split('.')
    let value: any = translations
    for (const k of keys) {
      value = value?.[k]
      if (value === undefined) {
        // Return key as fallback if translation not found
        return key
      }
    }
    // If value is an object, return it (for cases like portfolio.items.1)
    // Otherwise return the string/number value
    return typeof value === 'object' && value !== null ? value : (value || key)
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}

