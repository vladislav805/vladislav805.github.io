import React from 'react';

import { TechList } from '@components/TechList';
import { Tech } from '@typings';

import type { IAboutProps } from './About.typings';

import './About.scss';

const skillsItems: Tech[] = [
    Tech.HTML5,
    Tech.CSS3,
    Tech.SCSS,
    Tech.JS,
    Tech.TS,
    Tech.REACT,
    Tech.ESLINT,
    Tech.WEBPACK,
    Tech.PHP,
    Tech.VSC,
    Tech.ANDROID,
    Tech.VK,
    Tech.TELEGRAM,
];

export const About: React.FC<IAboutProps> = ({ locale: { about } }) => (
    <div className="About">
        <h2>{about.header}</h2>
        <p>{about.whereIAm}</p>
        <p>{about.webDevShort}</p>

        <p>{about.androidDevShort}</p>
        <h2>{about.skills}</h2>
        <TechList
            isAll
            items={skillsItems}
        />
    </div>
);
