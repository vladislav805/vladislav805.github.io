import * as React from 'react';
import * as classNames from 'classnames';
import VisibilitySensor from 'react-visibility-sensor';
import './TimelineEntry.scss';

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
    state = {
        visible: false,
    };

    private onVisibilitySensorChange = (isVisible: boolean) => {
        if (isVisible) {
            this.setState({ visible: true });
        }
    };

    render() {
        const { visible } = this.state;
        const { children, date, title, dateColor, logo, link } = this.props;

        const clsVisibility = visible ? 'timeline-entry__show' : 'timeline-entry__hidden';
        return (
            <div className="timeline-entry">
                <VisibilitySensor
                    partialVisibility={true}
                    offset={{ bottom: 50 }}
                    onChange={this.onVisibilitySensorChange}>
                    <React.Fragment>
                        <div className={classNames('timeline-entry-date-wrap', clsVisibility)}>
                            <time
                                className="timeline-entry-date"
                                style={{background: dateColor}}
                                title={date}>
                                {date}
                            </time>
                        </div>
                        <div className={classNames('timeline-entry-content', clsVisibility)}>
                            {logo ? (
                                <div className="timeline-entry-image">
                                    <img {...logo} alt="" />
                                </div>
                            ) : (
                                <h2>{title}</h2>
                            )}
                            <div className="timeline-entry-body">
                                {children}
                                {link && <a href={link.href} target="_blank" rel="noopener noreferrer" className="timeline-entry-link">{link.label}</a>}
                            </div>
                        </div>
                    </React.Fragment>
                </VisibilitySensor>
            </div>
        );
    }
}
