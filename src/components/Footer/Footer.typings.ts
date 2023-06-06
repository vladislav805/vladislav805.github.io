import type { ILocale } from '@typings';

export interface IFooterProps {
    onChangeLocale: (newLang: string) => void;
    locale: ILocale;
}
