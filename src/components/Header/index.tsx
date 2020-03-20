import * as React from 'react';
import './style.scss';
import photo from '../../images/photo-main.webp';
import { staticUrl } from '../../utils';
import { ILocale } from '../../locales';

type IHeaderProps = {
    locale: ILocale;
};

const Header = ({ locale: { header: { photoAlt, name, position, location } } }: IHeaderProps) => (
    <div className="header">
        <div className="header-content">
            <div className="header-photo">
                <img src={staticUrl(photo)} alt={photoAlt} />
            </div>
            <div className="header-aside">
                <h1 className="header-name">{name}</h1>
                <h2 className="header-position">{position}</h2>
                <h3 className="header-location">{location}</h3>
            </div>
        </div>
    </div>
);

export default Header;