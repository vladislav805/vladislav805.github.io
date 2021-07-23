import * as React from 'react';
import classNames from 'classnames';
import VisibilitySensor from 'react-visibility-sensor';
import styles from './TimelineEntry.scss';

type ITimelineEntryProps = {
    date: string;
    title: string;
    logo?: {
        src: string;
        width: number;
        height: number;
    };
    link?: {
        href: string;
        label: string;
    };
    dateColor?: string;
};

type ITimelineEntryState = {
    visible: boolean;
};

export class TimelineEntry extends React.Component<ITimelineEntryProps, ITimelineEntryState> {
    public constructor(props: ITimelineEntryProps) {
        super(props);

        this.state = {
            visible: false,
        };
    }

    private onVisibilitySensorChange = (isVisible: boolean) => {
        if (isVisible) {
            this.setState({ visible: true });
        }
    };

    public render(): JSX.Element {
        const { visible } = this.state;
        const { children, date, title, dateColor, logo, link } = this.props;

        const clsVisibility = visible ? styles['timeline-entry__show'] : styles['timeline-entry__hidden'];
        return (
            <div className={styles['timeline-entry']} data-visible={String(visible)}>
                <VisibilitySensor
                    partialVisibility
                    offset={{ bottom: 50 }}
                    onChange={this.onVisibilitySensorChange}>
                    <>
                        <div className={classNames(styles['timeline-entry-date-wrap'], clsVisibility)}>
                            <time
                                className={styles['timeline-entry-date']}
                                style={{ background: dateColor }}
                                title={date}>
                                {date}
                            </time>
                        </div>
                        <div className={classNames(styles['timeline-entry-content'], clsVisibility)}>
                            {logo ? (
                                <div className={styles['timeline-entry-image']}>
                                    <img {...logo} alt="" />
                                </div>
                            ) : (
                                <h3>{title}</h3>
                            )}
                            <div className={styles['timeline-entry-body']}>
                                {children}
                                {link && (
                                    <a
                                        href={link.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={styles['timeline-entry-link']}>
                                        {link.label}
                                    </a>
                                )}
                            </div>
                        </div>
                    </>
                </VisibilitySensor>
            </div>
        );
    }
}
