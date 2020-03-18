import * as React from 'react';
import Icon from '@mdi/react';
import { mdiLanguageHtml5, mdiLanguageCss3, mdiLanguageJavascript, mdiLanguageTypescript, mdiSass, mdiReact, mdiWebpack, mdiLanguagePhp, mdiMicrosoftVisualStudioCode, mdiAndroid } from '@mdi/js';
import { Tech } from '../../types/tech';

type ISkillsProps = {
    items: Tech[];
};

const icons: Record<Tech, string> = {
    [Tech.HTML5]: mdiLanguageHtml5,
    [Tech.CSS3]: mdiLanguageCss3,
    [Tech.JS]: mdiLanguageJavascript,
    [Tech.TS]: mdiLanguageTypescript,
    [Tech.SCSS]: mdiSass,
    [Tech.REACT]: mdiReact,
    [Tech.WEBPACK]: mdiWebpack,
    [Tech.PHP]: mdiLanguagePhp,
    [Tech.VSC]: mdiMicrosoftVisualStudioCode,
    [Tech.ANDROID]: mdiAndroid
};

const TechList = ({ items }: ISkillsProps) => (
    <>
        {items.map((icon, i) => (
            <Icon
                key={i}
                color="#555555"
                path={icons[icon]}
                size={2} />
        ))}
    </>
);

export default TechList;
