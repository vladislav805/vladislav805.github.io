import * as React from 'react';

import type { ILocale } from '../../locales';

import styles from './Footer.scss';

type IFooterProps = {
    onChangeLocale: (newLang: string) => void;
    locale: ILocale;
};

const assoc: Record<string, string> = {
    en: 'ru',
    ru: 'en',
};

export const Footer: React.FC<IFooterProps> = ({ onChangeLocale, locale }) => {
    const onChange = () => onChangeLocale(assoc[locale.getLanguage()]);

    return (
        <div className={styles.footer}>
            <div className={styles['footer-left']}>Vladislav Veluga &copy; 2010&ndash;{new Date().getFullYear()}</div>
            <div className={styles['footer-right']}>
                <span className={styles['footer-lang']} onClick={onChange}>{locale.getLanguage().toUpperCase()}</span>
            </div>
        </div>
    );
};
