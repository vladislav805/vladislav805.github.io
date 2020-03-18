import * as React from 'react';
import './style.scss';
import TechList from '../TechList';
import { Tech } from '../../types/tech';

type IAboutProps = {};
type IAboutState = {};


export default class About extends React.Component<IAboutProps, IAboutState> {
    render() {
        return (
            <div className="about">
                <h2 className="">Кто я такой?</h2>
                <p></p>
                <h2 className="">Что я умею?</h2>
                <TechList items={[Tech.HTML5, Tech.CSS3, Tech.SCSS, Tech.JS, Tech.TS, Tech.REACT, Tech.WEBPACK, Tech.PHP, Tech.ANDROID]} />
            </div>
        );
    }
}
