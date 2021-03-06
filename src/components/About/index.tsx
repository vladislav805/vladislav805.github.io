import * as React from 'react';
import styles from './style.scss';
import TechList from '../TechList';
import { Tech } from '../../types/tech';
import { ILocale } from '../../locales';

type IAboutProps = {
    locale: ILocale;
};

const About: React.FC<IAboutProps> = ({ locale: { about: { header, whereIAm, webDevShort, androidDevShort, skills } } }: IAboutProps) => (
    <div className={styles['about']}>
        <h2>{header}</h2>
        <p>{whereIAm}</p>
        <p>{webDevShort}</p>

        <p>{androidDevShort}</p>
        <h2>{skills}</h2>
        <TechList
            isAll={true}
            items={[Tech.HTML5, Tech.CSS3, Tech.SCSS, Tech.JS, Tech.TS, Tech.REACT, Tech.ESLINT, Tech.WEBPACK, Tech.PHP, Tech.VSC, Tech.ANDROID, Tech.VK, Tech.TELEGRAM]} />
    </div>
);

export default About;
