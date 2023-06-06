import { cn } from '@bem-react/classname';
import { siVk, siTelegram } from 'simple-icons';
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
} from '@mdi/js';

import { Tech } from '@typings';

export const cnTechList = cn('TechList');

export const techIcons: Record<Tech, string> = {
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
    [Tech.VK]: siVk.path,
    [Tech.TELEGRAM]: siTelegram.path,
};

export const techNames: Record<Tech, string> = {
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
