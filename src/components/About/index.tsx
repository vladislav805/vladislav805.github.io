import * as React from 'react';

import { TechList } from '../TechList';
import { Tech } from '../../types/tech';
import type { ILocale } from '../../locales';

import styles from './About.scss';

type IAboutProps = {
    locale: ILocale;
};

export const About: React.FC<IAboutProps> = ({ locale: { about: { header, whereIAm, webDevShort, androidDevShort, skills } } }) => (
    <div className={styles.about}>
        <h2>{header}</h2>
        <p>{whereIAm}</p>
        <p>{webDevShort}</p>

        <p>{androidDevShort}</p>
        <h2>{skills}</h2>
        <TechList
            isAll
            items={[
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
            ]} />
    </div>
);
