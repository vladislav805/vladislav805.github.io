export interface IProject {
    id: number;
    title: string;
    description: string[];
    view: IProjectViewLink;
    status: IProjectStatus;
    logo: IProjectLogo;
    dateColor: string;
}

export interface IProjectViewLink {
    href: string;
    label: string;
}

export interface IProjectStatus {
    active: boolean;
    since: string;
    until?: string;
}

export interface IProjectLogo {
    src: string;
    width: number;
    height: number;
}

export interface IProjectBackground {
    url: string;
    color: string;
}
