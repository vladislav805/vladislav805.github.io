/* eslint-disable react/no-array-index-key */
import * as React from 'react';
import styles from './style.scss';
import { IProject } from '../../types/project';
import { Timeline, TimelineEntry } from '../Timeline';
import TechList from '../TechList';
import { ILocale } from '../../locales';

type ITimelineProjectsProps = {
    locale: ILocale;
    projects: IProject[];
};

const TimelineProjects: React.FC<ITimelineProjectsProps> = ({ locale: { timeline }, projects }: ITimelineProjectsProps) => {
    const { header, monthsShort, now, items } = timeline;

    const renderDate = (project: IProject) => {
        const months = monthsShort;
        return [project.status.since, project.status.until]
            .filter(Boolean)
            .map(date => {
                const [year, month, day] = date.split('/').map(Number);

                return [day, months[month - 1], year].filter(Boolean).join(' ');
            })
            .concat([now])
            .slice(0, 2)
            .join(' — ');
    };

    return (
        <div className={styles['timeline-projects']}>
            <h2>{header}</h2>
            <Timeline>
                {projects.map(entry => {
                    const { title, description, view } = items[entry.name];
                    return (
                        <TimelineEntry
                            key={entry.id}
                            title={title}
                            date={renderDate(entry)}
                            logo={entry.logo}
                            link={entry.view && { href: entry.view.href, label: view }}
                            dateColor={entry.dateColor}>
                            {description.map((desc, i) => <p key={i}>{desc}</p>)}
                            <TechList items={entry.used} />
                        </TimelineEntry>
                    );
                })}
            </Timeline>
        </div>
    );
};

export default TimelineProjects;
