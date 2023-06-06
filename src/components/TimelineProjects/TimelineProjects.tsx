import React from 'react';

import { Timeline } from '@components/Timeline';

import type { ITimelineProjectsProps } from './TimelineProjects.typings';

import './TimelineProjects.scss';

export const TimelineProjects: React.FC<ITimelineProjectsProps> = ({ locale, projects }) => (
    <div className="TimelineProjects">
        <h2>{locale.timeline.header}</h2>
        <Timeline projects={projects} locale={locale.timeline} />
    </div>
);
