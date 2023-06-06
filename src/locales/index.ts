import LocalizedStrings from 'localized-strings';
import type { ILocale } from '../typings/ILocale';
import en from './en';
import ru from './ru';

export const fromHash = (): string | undefined => /lang=([a-z]{2})/i.exec(window.location.hash)?.[1];
export const fromNavigator = (): string | undefined => /([a-z]{2})/i.exec(navigator.language)?.[1];

const locale: ILocale = new LocalizedStrings({ en, ru });
export default locale;

export * from '../typings/ILocale';
