import { useCallback, useMemo, useState } from 'react';
import type { FC } from 'react';
import VisibilitySensor from 'react-visibility-sensor';

import { TechList } from '@components/TechList';

import { cnTimeline } from '../Timeline.const';
import { renderProjectDates } from '../Timeline.utils/renderProjectDates';
import type { ITimelineEntryProps } from './Timeline-Entry.typings';

import './Timeline-Entry.css';

const visibilityOffset = { bottom: 50 };

export const TimelineEntry: FC<ITimelineEntryProps> = props => {
    const { project, title, description, locale, link } = props;

    const [visible, setVisible] = useState(false);

    const date = useMemo(() => renderProjectDates(project, locale), [project, locale]);

    const onVisibilitySensorChange = useCallback((isVisible: boolean) => {
        if (isVisible) {
            setVisible(true);
        }
    }, []);

    const cls = cnTimeline('Entry', { visible });

    return (
        <div className={cls}>
            <VisibilitySensor partialVisibility offset={visibilityOffset} onChange={onVisibilitySensorChange}>
                <>
                    <div className="Timeline-EntryDate">
                        <time className="Timeline-EntryDateTime" style={{ background: project.dateColor }} title={date}>
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
                            {description?.map((desc, i) => (
                                <p key={i}>{desc}</p>
                            ))}
                            <TechList items={project.used} />
                            {link && (
                                <a href={link.href} target="_blank" rel="noopener noreferrer" className="Timeline-EntryLink">
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
