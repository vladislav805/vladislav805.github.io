export interface IProject {
    id: number;
    title: string;
    description: string[];
    view: IProjectViewLink;
    status: IProjectStatus;
    image: IProjectImage;
    background: IProjectBackground;
}

export interface IProjectViewLink {
    url: string;
    label: string;
}

export interface IProjectStatus {
    active: boolean;
    since: string;
    until?: string;
}

export interface IProjectImage {
    url: string;
    position: 'l' | 'r';
    width: number;
    height: number;
}

export interface IProjectBackground {
    url: string;
    color: string;
}
