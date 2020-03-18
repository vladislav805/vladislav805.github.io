import * as React from 'react';
import './style.scss';
import { IProject } from '../../types/project';
import { Timeline, TimelineEntry } from '../Timeline';

type ITimelineProjectsProps = {
    items: IProject[];
};

export default class TimelineProjects extends React.Component<ITimelineProjectsProps> {
    render() {
        //const [ project ] = this.props.items;

        return (
            <div className="timeline-projects">
                <Timeline animate={true}>
                    <TimelineEntry date="01.01.2020" label="Test">
                        <h3>Header</h3>
                        <p>escription</p>
                    </TimelineEntry>
                    <TimelineEntry date="01.01.2020" label="Test">
                        <h3>Header</h3>
                        <p>escription</p>
                    </TimelineEntry>
                    <TimelineEntry date="01.01.2020" label="Test">
                        <h3>Header</h3>
                        <p>escription</p>
                    </TimelineEntry>
                    <TimelineEntry date="01.01.2020" label="Test">
                        <h3>Header</h3>
                        <p>escription</p>
                    </TimelineEntry>
                </Timeline>
            </div>
        );


        /*return (
            <div className="timeline">
                <div className="timeline-entry">
                    <div className="timeline-logo">
                        <img src={project.image.url} width={project.image.width} height={project.image.height} />
                    </div>
                    <div className="timeline-line">
                        <div className="timeline-date">{project.status.until || project.status.since}</div>
                    </div>
                    <div className="timeline-content">
                        <h2>{project.title}</h2>
                        <p>{project.description}</p>
                    </div>
                </div>
            </div>
        );*/
    }
}