import * as React from 'react';
import { IProject } from '../../types/project';
import Header from '../Header';
import Contacts from '../Contacts';
import About from '../About';
// import ProjectsSlider from '../ProjectsSlider';
import TimelineProjects from '../TimelineProjects';
import Footer from '../Footer';

import projects from '../../projects';


type IAppProps = {};

export interface IAppState {
    projects?: IProject[];
}

export default class App extends React.Component<IAppProps, IAppState> {
    state: IAppState = {
        projects: []
    };

    componentDidMount() {
        this.setState({ projects: projects as IProject[] });
    }

    render() {
        console.log(this.state.projects);
        return (
            <>
                <Header />
                <Contacts />
                <About />
                <TimelineProjects items={this.state.projects} />
                { /* <ProjectsSlider items={this.state.projects} /> */ }
                <Footer />
            </>
        );
    }
}
