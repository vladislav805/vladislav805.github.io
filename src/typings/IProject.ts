import type { IProjectLogo } from './IProjectLogo';
import type { IProjectStatus } from './IProjectStatus';
import type { IProjectViewLink } from './IProjectViewLink';
import type { Tech } from './Tech';

export interface IProject {
    id: number;
    name: string;
    view: IProjectViewLink;
    status: IProjectStatus;
    logo: IProjectLogo;
    dateColor: string;
    used: Tech[];
}
