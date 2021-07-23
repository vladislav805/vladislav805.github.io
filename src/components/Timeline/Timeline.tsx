import * as React from 'react';
import classNames from 'classnames';
import styles from './Timeline.scss';

type ITimelineProps = React.PropsWithChildren<{
    primaryColor?: string;
}>;

export const Timeline: React.FC<ITimelineProps> = ({ primaryColor, children }: ITimelineProps) => (
    <div className={classNames(styles['timeline--wrapper'])}>
        <div className={styles.timeline} style={{ color: primaryColor }}>
            {children}
        </div>
    </div>
);
