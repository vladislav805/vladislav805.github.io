import type { ILocale, IProject } from '@typings';

export interface ITimelineProps {
    primaryColor?: string;
    projects: IProject[];
    locale: ILocale['timeline'];
}
