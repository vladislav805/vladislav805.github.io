import * as React from 'react';
import './style.scss';
import photo from '../../images/photo-main.jpg';

type IHeaderProps = {};
type IHeaderState = {};

export default class Header extends React.Component<IHeaderProps, IHeaderState> {
    render() {
        return (
            <div className="header">
                <div className="header-content">
                    <div className="header-photo">
                        <img src={photo} alt="Photo" />
                    </div>
                    <div className="header-aside">
                        <h1 className="header-name">Vladislav Veluga</h1>
                        <h2 className="header-position">Web-developer</h2>
                        <h3 className="header-location">Russia, Saint-Petersburg</h3>
                    </div>
                </div>
            </div>
        );
    }
}
