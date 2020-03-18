import * as React from 'react';
import * as classNames from 'classnames';
import './Timeline.scss';

type ITimelineProps = {
    animate?: boolean;
    primaryColor?: string;
};

export class Timeline extends React.Component<ITimelineProps> {

    public static defaultProps = {
        animate: false, // TODO
    };

    render() {
        const { animate, primaryColor, children } = this.props;
        return (
            <div className={classNames('timeline--wrapper', {
                'timeline__withAnimation': animate
            })}>
                <div className="timeline" style={{ color: primaryColor }}>
                    {children}
                </div>
            </div>
        );
    }
}
