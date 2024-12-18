import type { IProject } from '@typings';
import { Tech } from '@typings';

import imageYaLogo from './images/yandex.svg';
import imageAPIdogLogo from './images/apidog.svg';

export default [
    {
        id: 9,
        name: 'yandex_2021',
        status: {
            active: true,
            since: '2021/07/21',
        },
        logo: {
            src: imageYaLogo,
            width: 129,
            height: 50,
        },
        dateColor: '#ee252c',
        used: [Tech.HTML5, Tech.SCSS, Tech.TS, Tech.REACT, Tech.WEBPACK, Tech.ESLINT],
    },
    {
        id: 8,
        name: 'yandex_2019',
        status: {
            active: false,
            since: '2019/08/07',
            until: '2019/11/27',
        },
        logo: {
            src: imageYaLogo,
            width: 129,
            height: 50,
        },
        dateColor: '#ee252c',
        used: [Tech.HTML5, Tech.SCSS, Tech.TS, Tech.REACT, Tech.WEBPACK, Tech.ESLINT],
    },
    {
        id: 7,
        name: 'sights',
        view: {
            href: 'https://sights.velu.ga/',
            label: 'Link',
        },
        status: {
            active: true,
            since: '2015/06',
        },
        dateColor: '#009688',
        used: [Tech.HTML5, Tech.SCSS, Tech.TS, Tech.REACT, Tech.WEBPACK, Tech.ESLINT, Tech.TELEGRAM],
    },
    {
        id: 6,
        name: 'rfm',
        view: {
            href: 'https://rfm.velu.ga/',
            label: 'Link',
        },
        status: {
            active: true,
            since: '2019/07',
        },
        dateColor: '#2978fd',
        used: [Tech.ANDROID],
    },
    {
        id: 5,
        name: 'suai',
        view: {
            href: 'tg://resolve?domain=SUAIPrivateRobot',
            label: '',
        },
        status: {
            active: false,
            since: '2017/12',
            until: '2019',
        },
        dateColor: 'linear-gradient(to right, #005aaa, #ab3a8d)',
        used: [Tech.PHP, Tech.TELEGRAM],
    },
    {
        id: 4,
        name: 'shortMeter',
        view: {
            href: 'tg://resolve?domain=FilmShortBot',
            label: '',
        },
        status: {
            active: false,
            since: '2017/06',
            until: '2017/06',
        },
        dateColor: '#0000ff',
        used: [Tech.PHP, Tech.TELEGRAM],
    },
    {
        id: 3,
        name: 'nadia',
        view: {
            href: 'http://nadiaivanova.ru/',
            label: 'Link',
        },
        status: {
            active: false,
            since: '2017/06',
            until: '2017/06',
        },
        dateColor: '#c74c69',
        used: [Tech.HTML5, Tech.CSS3],
    },
    {
        id: 2,
        name: 'onlineRadio',
        view: {
            href: 'https://radio.veluga.dev/',
            label: 'Link',
        },
        status: {
            active: true,
            since: '2013',
        },
        dateColor: '#303030',
        used: [Tech.HTML5, Tech.CSS3, Tech.TS, Tech.WEBPACK, Tech.SCSS],
    },
    {
        id: 1,
        name: 'apidog',
        view: {
            href: 'https://apidog.ru/',
            label: 'Link',
        },
        status: {
            active: false,
            since: '2012/08/07',
            until: '2024/12',
        },
        logo: {
            src: imageAPIdogLogo,
            width: 248,
            height: 62,
        },
        dateColor: '#567ca4',
        used: [Tech.HTML5, Tech.TS, Tech.PHP, Tech.VK, Tech.WEBPACK, Tech.ESLINT, Tech.SCSS],
    },
] as IProject[];
