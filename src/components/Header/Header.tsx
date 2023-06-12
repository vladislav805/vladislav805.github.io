import React from 'react';

import photo from '../../images/photo-main.webp';

import type { IHeaderProps } from './Header.typings';

import './Header.scss';

export const Header: React.FC<IHeaderProps> = ({ locale: { header } }) => (
    <div className="Header">
        <div className="Header-Content">
            <div className="Header-Photo">
                <img src={photo} alt={header.photoAlt} />
            </div>
            <div className="Header-Aside">
                <h1 className="Header-Name">{header.name}</h1>
                <h2 className="Header-Position">{header.position}</h2>
                <h3 className="Header-Location">{header.location}</h3>
            </div>
        </div>
    </div>
);
