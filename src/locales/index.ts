import LocalizedStrings from 'localized-strings';
import { ILocale } from './types';
import en from './en';
import ru from './ru';

const locale: ILocale = new LocalizedStrings({ en, ru });

const hashLanguage = /lang=([a-z]{2})/i.exec(window.location.hash)?.[1];

const userLanguage = /([a-z]{2})/i.exec(navigator.language)?.[1];

const lang = hashLanguage || userLanguage;

locale.setLanguage(lang);
console.log(lang);

export default locale;
