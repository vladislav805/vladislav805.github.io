import * as React from 'react';
import { IProject } from '../../types/project';
import Header from '../Header';
import Contacts from '../Contacts';
import About from '../About';
import TimelineProjects from '../TimelineProjects';
import Footer from '../Footer';
import { fromHash, fromNavigator, ILocale } from '../../locales';
import projects from '../../projects';

type IAppProps = {
    locale: ILocale;
};

export interface IAppState {
    projects?: IProject[];
    locale: string;
}

export default class App extends React.Component<IAppProps, IAppState> {
    constructor(props: IAppProps) {
        super(props);

        this.state = {
            projects,
            locale: fromHash() || fromNavigator() || 'en',
        };

        this.props.locale.setLanguage(this.state.locale);
    }

    private onChangeLocale = (locale: string): void => {
        this.props.locale.setLanguage(locale);
        this.setState({ locale });
    };

    render(): JSX.Element {
        const locale = this.props.locale;
        return (
            <>
                <Header locale={locale} />
                <About locale={locale} />
                <Contacts locale={locale} />
                <TimelineProjects locale={locale} projects={this.state.projects} />
                <Contacts locale={locale} />
                <Footer locale={locale} onChangeLocale={this.onChangeLocale} />
            </>
        );
    }
}
