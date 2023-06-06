import React from 'react';
import VisibilitySensor from 'react-visibility-sensor';

import { TechList } from '@components/TechList';

import { cnTimeline } from '../Timeline.const';
import { renderProjectDates } from '../Timeline.utils/renderProjectDates';
import type { ITimelineEntryProps } from './Timeline-Entry.typings';

import './Timeline-Entry.scss';

const visibilityOffset = { bottom: 50 };

export const TimelineEntry: React.FC<ITimelineEntryProps> = ({
    project,
    title,
    description,
    locale,
    link,
}) => {
    const [visible, setVisible] = React.useState(false);

    const date = React.useMemo(() => renderProjectDates(project, locale), [project, locale]);

    const onVisibilitySensorChange = React.useCallback((isVisible: boolean) => {
        if (isVisible) {
            setVisible(true);
        }
    }, [visible]);

    const cls = cnTimeline('Entry', { visible });

    return (
        <div className={cls}>
            <VisibilitySensor
                partialVisibility
                offset={visibilityOffset}
                onChange={onVisibilitySensorChange}
            >
                <>
                    <div className="Timeline-EntryDate">
                        <time
                            className="Timeline-EntryDateTime"
                            style={{ background: project.dateColor }}
                            title={date}
                        >
                            {date}
                        </time>
                    </div>
                    <div className="Timeline-EntryContent">
                        {project.logo ? (
                            <div className="Timeline-EntryLogo">
                                <img {...project.logo} alt="" />
                            </div>
                        ) : (
                            <h3>{title}</h3>
                        )}
                        <div className="Timeline-EntryBody">
                            {description?.map((desc, i) => <p key={i}>{desc}</p>)}
                            <TechList items={project.used} />
                            {link && (
                                <a
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="Timeline-EntryLink"
                                >
                                    {link.label}
                                </a>
                            )}
                        </div>
                    </div>
                </>
            </VisibilitySensor>
        </div>
    );
};
