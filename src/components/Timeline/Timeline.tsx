import * as React from 'react';
import * as classNames from 'classnames';
import styles from './Timeline.scss';

type ITimelineProps = {
    primaryColor?: string;
};

export class Timeline extends React.Component<ITimelineProps> {

    public render(): JSX.Element {
        const { primaryColor, children } = this.props;
        return (
            <div className={classNames(styles['timeline--wrapper'])}>
                <div className={styles['timeline']} style={{ color: primaryColor }}>
                    {children}
                </div>
            </div>
        );
    }
}
