import React from 'react';

import type { IFooterProps } from './Footer.typings';

import './Footer.scss';

const assoc: Record<string, string> = {
    en: 'ru',
    ru: 'en',
};

export const Footer: React.FC<IFooterProps> = ({ onChangeLocale, locale }) => {
    const onChange = React.useCallback<React.MouseEventHandler<HTMLElement>>(event => {
        event.preventDefault();

        onChangeLocale(assoc[locale.getLanguage()]);
    }, [onChangeLocale, locale]);

    return (
        <div className="Footer">
            <div className="Footer-Left">Vladislav Veluga &copy; 2010&ndash;{new Date().getFullYear()}</div>
            <div className="Footer-Right">
                <a
                    href="#"
                    className="Footer-Language"
                    onClick={onChange}
                >
                    {locale.getLanguage().toUpperCase()}
                </a>
            </div>
        </div>
    );
};
