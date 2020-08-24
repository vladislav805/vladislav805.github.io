import * as React from 'react';
import styles from './style.scss';
import { ILocale } from '../../locales';

type IFooterProps = {
    onChangeLocale: (newLang: string) => void;
    locale: ILocale;
};

const assoc: Record<string, string> = {
    'en': 'ru',
    'ru': 'en',
};

const Footer: React.FC<IFooterProps> = ({ onChangeLocale, locale }: IFooterProps) => {
    const onChange = () => onChangeLocale(assoc[locale.getLanguage()]);

    return (
        <div className={styles['footer']}>
            <div className={styles['footer-left']}>Vladislav Veluga &copy; 2010&ndash;{new Date().getFullYear()}</div>
            <div className={styles['footer-right']}>
                <span className={styles['footer-lang']} onClick={onChange}>{locale.getLanguage().toUpperCase()}</span>
            </div>
        </div>
    );
}

export default Footer;
