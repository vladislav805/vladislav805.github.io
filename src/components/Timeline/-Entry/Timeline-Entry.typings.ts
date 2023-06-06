import type { ILocale, IProject } from '@typings';

export interface ITimelineEntryProps {
    project: IProject;
    title: string;
    description?: string[];
    link?: {
        href: string;
        label: string;
    };
    locale: ILocale['timeline'];
}
