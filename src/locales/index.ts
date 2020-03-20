import LocalizedStrings from 'localized-strings';
import { ILocale } from './types';
import en from './en';
import ru from './ru';

export const fromHash = () => /lang=([a-z]{2})/i.exec(window.location.hash)?.[1];
export const fromNavigator = () => /([a-z]{2})/i.exec(navigator.language)?.[1];

const locale: ILocale = new LocalizedStrings({ en, ru });
export default locale;

export * from './types';
