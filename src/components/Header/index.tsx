import * as React from 'react';
import './style.scss';
import photo from '../../images/photo-main.webp';
import { staticUrl } from '../../utils';
import locales from '../../locales';

const { photoAlt, name, position, location } = locales.header;

type IHeaderProps = {};
type IHeaderState = {};

export default class Header extends React.Component<IHeaderProps, IHeaderState> {
    render() {
        return (
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
    }
}
