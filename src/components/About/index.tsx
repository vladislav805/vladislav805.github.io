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
                <h2>Who am I?</h2>
                <p>I am a web developer from Saint-Petersburg. First-year student of magistracy SPb SUAI.</p>
                <p>I have been developing JavaScript/PHP since 2012. </p>

                <p>In addition to web development, I&apos;m interested in and learning to write Java for Android.</p>
                <h2>Skills</h2>
                <TechList
                    items={[Tech.HTML5, Tech.CSS3, Tech.SCSS, Tech.JS, Tech.TS, Tech.REACT, Tech.ESLINT, Tech.WEBPACK, Tech.PHP, Tech.VSC, Tech.ANDROID, Tech.VK, Tech.TELEGRAM]} />
            </div>
        );
    }
}
