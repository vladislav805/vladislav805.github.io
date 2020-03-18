import * as React from 'react';
import './style.scss';

type IFooterProps = {};
type IFooterState = {};

export default class Footer extends React.Component<IFooterProps, IFooterState> {
    render() {
        return (
            <div className="footer">
                <div className="footer-left">Vladislav Veluga &copy; 2010&ndash;2020</div>
                <div className="footer-right"></div>
            </div>
        );
    }
}
