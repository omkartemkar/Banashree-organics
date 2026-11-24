import React, { createContext, useContext, useState, useEffect } from "react";
import en from "../locales/en.json";
import kn from "../locales/kn.json";

// Type definitions for translations
type Translations = typeof en;
type LanguagePath = keyof Translations | string;

interface LanguageContextType {
    language: "en" | "kn";
    toggleLanguage: () => void;
    setLanguage: (lang: "en" | "kn") => void;
    t: (key: LanguagePath) => string;
}

const translations = {
    en,
    kn,
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [language, setLanguageState] = useState<"en" | "kn">("en");

    // Load saved language on mount
    useEffect(() => {
        const savedLang = localStorage.getItem("appLanguage") as "en" | "kn";
        if (savedLang && (savedLang === "en" || savedLang === "kn")) {
            setLanguage(savedLang);
        } else {
            // Fallback to English, but check browser language as bonus
            const browserLang = navigator.language.split("-")[0];
            if (browserLang === "kn") {
                setLanguage("kn");
            }
        }
    }, []);

    const setLanguage = (lang: "en" | "kn") => {
        setLanguageState(lang);
        localStorage.setItem("appLanguage", lang);
        document.documentElement.lang = lang; // Update HTML lang attribute for SEO
    };

    const toggleLanguage = () => {
        setLanguage(language === "en" ? "kn" : "en");
    };

    // Safe translation getter with dot-notation support (e.g. "hero.title")
    const t = (key: LanguagePath): string => {
        const keys = key.split(".");
        let current: Record<string, unknown> = translations[language] as Record<string, unknown>;

        for (const k of keys) {
            if (current[k] === undefined) {
                console.warn(`Missing translation key: ${key}`);
                // Fallback to English if missing in Kannada
                let fallback: Record<string, unknown> = translations["en"] as Record<string, unknown>;
                for (const fk of keys) {
                    if (fallback && typeof fallback === "object" && fallback[fk] !== undefined) {
                        fallback = fallback[fk] as Record<string, unknown>;
                    } else {
                        return key; // Return raw key if completely missing
                    }
                }
                return fallback as unknown as string;
            }
            current = current[k] as Record<string, unknown>;
        }
        return current as unknown as string;
    };

    return (
        <LanguageContext.Provider value={{ language, toggleLanguage, setLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error("useLanguage must be used within a LanguageProvider");
    }
    return context;
};
