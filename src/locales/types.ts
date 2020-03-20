import { LocalizedStringsMethods } from 'localized-strings';

export interface ILocaleTimelineEntry {
    title: string;
    description: string[];
    view?: string;
}

export interface ILocale extends LocalizedStringsMethods {
    header: {
        photoAlt: string;
        name: string;
        position: string;
        location: string;
    };
    about: {
        header: string;
        whereIAm: string;
        webDevShort: string;
        androidDevShort: string;
        skills: string;
    };
    contacts: {
        header: string;
    };
    timeline: {
        header: string;
        monthsShort: string[];
        now: string;

        items: {
            [key: string]: ILocaleTimelineEntry;
        };
    };
}
