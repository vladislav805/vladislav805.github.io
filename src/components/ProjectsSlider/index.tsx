import * as React from 'react';
import { IProject } from '../../types/project';
import SlideWrapper from '../SlideWrapper';
import './style.scss';

export interface IProjectSlideProps {
    project: IProject;
}

type IProjectSlideState = {};

export interface IProjectsSliderProps {
    items: IProject[];
}

type IProjectsSlider = {};

export class ProjectSlide extends React.Component<IProjectSlideProps, IProjectSlideState> {
    render() {
        const { project } = this.props;
        const { title, description = [], image, view } = project;
        return (
            <div className="project-slide">
                <SlideWrapper>
                    <h3>{title}</h3>
                    {description.map((row, i) => <p key={i}>{row}</p>)}
                    <img src={image.url} width={image.width} height={image.height} />
                    <a href={view.url} target="_blank" rel="noopener noreferrer">{view.label || 'View'}</a>
                </SlideWrapper>
            </div>
        );
    }
}

export default class ProjectsSlider extends React.Component<IProjectsSliderProps, IProjectsSlider> {
    render() {
        return (
            <div className="projects-slider">
                {this.props.items.map((project, i) => <ProjectSlide key={i} project={project} />)}
            </div>
        );
    }
}
