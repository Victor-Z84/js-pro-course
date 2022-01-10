import { useEffect, useState } from "react";
import { enTranslation } from "../components/resources/translations/translations.en";
import { ruTranslation } from "../components/resources/translations/translations.ru";

const location = {
    "en": enTranslation,
    "ru": ruTranslation,
}

const subscriptions = [];

let globalLanguage = "en";

const setGlobalLanguage = (lang) => {
    if (globalLanguage === lang) return;

    globalLanguage = lang;
    subscriptions.forEach(subscription => subscription(globalLanguage))
};

const translate = (textId) => location[globalLanguage][textId] || textId;


export const withTranslator = (Component) => (props) => {

    const [language, setLanguare] = useState(globalLanguage);
    
    useEffect(() => {
        const f = (lang) => setLanguare(lang);
        subscriptions.push(f);

        return () => {
            const i = subscriptions.findIndex(f);
            subscriptions.splice(i, 1);
        }
    }, [])

    return (
        <Component
            translate={translate}
            language={language}
            setLanguage={setGlobalLanguage}
            {...props}
        />
    );
}