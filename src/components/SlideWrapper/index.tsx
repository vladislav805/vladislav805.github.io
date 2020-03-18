import * as React from 'react';
import './style.scss';

type ISliderWrapperProps = {};
type ISliderWrapperState = {};

export default class SlideWrapper extends React.Component<ISliderWrapperProps, ISliderWrapperState> {
    render() {
        return (
            <div className="slide">
                {this.props.children}
            </div>
        );
    }
}
