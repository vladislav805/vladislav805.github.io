import React from 'react';

import { TimelineEntry } from './-Entry';
import type { ITimelineProps } from './Timeline.typings';
import { timelineCn, timelineInnerCn } from './Timeline.const';

import './Timeline.scss';

export const Timeline: React.FC<ITimelineProps> = ({ primaryColor, projects, locale }) => (
    <div className={timelineCn}>
        <div className={timelineInnerCn} style={{ color: primaryColor }}>
            {projects.map(project => {
                const { title, description, view } = locale.items[project.name];
                return (
                    <TimelineEntry
                        key={project.id}
                        project={project}
                        locale={locale}
                        link={view ? { href: project.view.href, label: view } : undefined}
                        title={title}
                        description={description}
                    />
                );
            })}
        </div>
    </div>
);
