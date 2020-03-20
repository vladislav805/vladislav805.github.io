import * as React from 'react';
import './style.scss';
import TechList from '../TechList';
import { Tech } from '../../types/tech';
import locales from '../../locales';

type IAboutProps = {};
type IAboutState = {};

const { header, whereIAm, webDevShort, androidDevShort, skills } = locales.about;

export default class About extends React.Component<IAboutProps, IAboutState> {
    render() {
        return (
            <div className="about">
                <h2>{header}</h2>
                <p>{whereIAm}</p>
                <p>{webDevShort}</p>

                <p>{androidDevShort}</p>
                <h2>{skills}</h2>
                <TechList
                    items={[Tech.HTML5, Tech.CSS3, Tech.SCSS, Tech.JS, Tech.TS, Tech.REACT, Tech.ESLINT, Tech.WEBPACK, Tech.PHP, Tech.VSC, Tech.ANDROID, Tech.VK, Tech.TELEGRAM]} />
            </div>
        );
    }
}
