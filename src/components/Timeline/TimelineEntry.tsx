import * as React from 'react';
import * as classNames from 'classnames';
import VisibilitySensor from 'react-visibility-sensor';
import './TimelineEntry.scss';

type ITimelineEntryProps = {
    date: string;
    label: string;
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
        const { children, date, label } = this.props;
        const { visible } = this.state;
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
                                style={{background: '#76bb7f'}}
                                title={date}>
                                {date}
                            </time>
                        </div>
                        <div className="timeline-entry-content">
                            <div className={classNames('timeline-entry-body', clsVisibility)}>
                                {children}
                            </div>
                        </div>
                    </React.Fragment>
                </VisibilitySensor>
            </div>
        );
    }
}
