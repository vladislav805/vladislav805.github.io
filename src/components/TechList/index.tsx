/* eslint-disable react/no-array-index-key */
import * as React from 'react';
import Icon from '@mdi/react';
import {
    mdiLanguageHtml5,
    mdiLanguageCss3,
    mdiLanguageJavascript,
    mdiLanguageTypescript,
    mdiSass,
    mdiReact,
    mdiWebpack,
    mdiEslint,
    mdiLanguagePhp,
    mdiMicrosoftVisualStudioCode,
    mdiAndroid,
    mdiVk,
    mdiTelegram,
} from '@mdi/js';
import * as classNames from 'classnames';
import { Tech } from '../../types/tech';
import styles from './TechList.scss';

type ISkillsProps = {
    items: Tech[];
    isAll?: boolean;
};

const icons: Record<Tech, string> = {
    [Tech.HTML5]: mdiLanguageHtml5,
    [Tech.CSS3]: mdiLanguageCss3,
    [Tech.JS]: mdiLanguageJavascript,
    [Tech.TS]: mdiLanguageTypescript,
    [Tech.SCSS]: mdiSass,
    [Tech.REACT]: mdiReact,
    [Tech.WEBPACK]: mdiWebpack,
    [Tech.ESLINT]: mdiEslint,
    [Tech.PHP]: mdiLanguagePhp,
    [Tech.VSC]: mdiMicrosoftVisualStudioCode,
    [Tech.ANDROID]: mdiAndroid,
    [Tech.VK]: mdiVk,
    [Tech.TELEGRAM]: mdiTelegram,
};

const names: Record<Tech, string> = {
    [Tech.HTML5]: 'HTML5',
    [Tech.CSS3]: 'CSS3',
    [Tech.JS]: 'JavaScript',
    [Tech.TS]: 'TypeScript',
    [Tech.SCSS]: 'SCSS',
    [Tech.REACT]: 'React',
    [Tech.WEBPACK]: 'webpack',
    [Tech.ESLINT]: 'ESLint',
    [Tech.PHP]: 'PHP',
    [Tech.VSC]: 'Visual Studio Code',
    [Tech.ANDROID]: 'Android',
    [Tech.VK]: 'VK API',
    [Tech.TELEGRAM]: 'Telegram Bot API',
};

const TechList: React.FC<ISkillsProps> = ({ items, isAll = false }: ISkillsProps) => (
    <div className={classNames(
        styles.tech,
        isAll && styles.tech__all,
    )}>
        {items.map((tech, i) => (
            <div key={i} className={styles['tech-item']}>
                <Icon
                    color="#555555"
                    path={icons[tech]}
                    size={2} />
                <div className={styles['tech-tooltip']}>{names[tech]}</div>
            </div>
        ))}
    </div>
);

export default TechList;
