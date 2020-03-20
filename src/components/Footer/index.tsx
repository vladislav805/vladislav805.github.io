import * as React from 'react';
import './style.scss';
import { ILocale } from '../../locales';

type IFooterProps = {
    onChangeLocale: (newLang: string) => void;
    locale: ILocale;
};

const assoc: Record<string, string> = {
    'en': 'ru',
    'ru': 'en',
};

const Footer = ({ onChangeLocale, locale }: IFooterProps) => {
    const onChange = () => onChangeLocale(assoc[locale.getLanguage()]);

    return (
        <div className="footer">
            <div className="footer-left">Vladislav Veluga &copy; 2010&ndash;{new Date().getFullYear()}</div>
            <div className="footer-right">
                <span className="footer-lang" onClick={onChange}>{locale.getLanguage().toUpperCase()}</span>
            </div>
        </div>
    );
}

export default Footer;
