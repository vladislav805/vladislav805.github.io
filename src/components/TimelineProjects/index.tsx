import * as React from 'react';
import './style.scss';
import { IProject } from '../../types/project';
import { Timeline, TimelineEntry } from '../Timeline';
import TechList from '../TechList';

type ITimelineProjectsProps = {
    items: IProject[];
};

export default class TimelineProjects extends React.Component<ITimelineProjectsProps> {

    private renderDate = (project: IProject) => {
        const months = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'];
        return [project.status.since, project.status.until]
            .filter(Boolean)
            .map(date => {
                const [year, month, day] = date.split('/').map(Number);

                return [day, months[month - 1], year].filter(Boolean).join(' ');
            })
            .concat(['now'])
            .slice(0, 2)
            .join(' — ');
    };

    render() {
        return (
            <div className="timeline-projects">
                <h2>Timeline: work and projects</h2>
                <Timeline animate={true}>
                    {this.props.items.map(entry => (
                        <TimelineEntry
                            key={entry.id}
                            title={entry.title}
                            date={this.renderDate(entry)}
                            logo={entry.logo}
                            link={entry.view}
                            dateColor={entry.dateColor}>
                            {entry.description.map((desc, i) => <p key={i}>{desc}</p>)}
                            <TechList items={entry.used} />
                        </TimelineEntry>
                    ))}
                </Timeline>
            </div>
        );
    }
}
