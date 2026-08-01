import React from 'react';

import type { IFooterProps } from './Footer.typings';

import './Footer.css';

const assoc: Record<string, string> = {
    en: 'ru',
    ru: 'en',
};

export const Footer: React.FC<IFooterProps> = ({ onChangeLocale, locale }) => {
    const onChange = React.useCallback<React.MouseEventHandler<HTMLButtonElement>>(() => {
        onChangeLocale(assoc[locale.getLanguage()]);
    }, [onChangeLocale, locale]);

    return (
        <div className="Footer">
            <div className="Footer-Left">Vladislav Veluga &copy; 2010&ndash;{new Date().getFullYear()}</div>
            <div className="Footer-Right">
                <button type="button" className="Footer-Language" onClick={onChange}>
                    {locale.getLanguage().toUpperCase()}
                </button>
            </div>
        </div>
    );
};
