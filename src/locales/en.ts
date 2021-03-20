import { ILocale } from './types';

export default {
    header: {
        photoAlt: 'Photo',
        name: 'Vladislav Veluga',
        position: 'Web-developer',
        location: 'Russia, Saint-Petersburg',
    },
    about: {
        header: 'Who am I?',
        whereIAm: 'I am a web developer from Saint-Petersburg. Second-year student of SPb SUAI magistracy.',
        webDevShort: 'I have been developing on JavaScript/PHP since 2012. Since 2019 I have been actively using TypeScript.',
        androidDevShort: "In addition to web development, I'm interested in and learning to write on Java for Android.",
        skills: 'Skills and tools',
    },
    contacts: {
        header: 'Contact me via',
    },
    timeline: {
        header: 'Timeline: work and projects',
        monthsShort: ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'],
        now: 'now',

        items: {
            yandex: {
                title: 'Yandex',
                description: [
                    'Frontend trainee-developer at Yandex',
                    'Developed internal products for Yandex SERP and received the first colossal experience in the team '
                    + 'work on the product',
                ],
            },
            sights: {
                title: 'Sights map',
                description: [
                    'A site with a lot of data on informal sights of St. Petersburg, Leningrad region, Rostov-on-Don, '
                    + 'Krasnodar, Veliky Novgorod and not only',
                    '',
                    'In 2021, the project was completely rewritten in TypeScript.',
                ],
                view: 'Link',
            },
            rfm: {
                title: 'RFM radio app',
                description: [
                    'Android application to use hardware radio on smartphones with QualComm processors.',
                ],
                view: 'Link',
            },
            suai: {
                title: 'Chat-bot for Telegram: SUAI Private Account',
                description: [
                    'An unofficial client-bot that works with the personal accounts of students of SUAI.',
                ],
                view: 'Open in Telegram',
            },
            shortMeter: {
                title: 'Bot for Telegram: #КороткийМетр',
                description: [
                    'Guide and adviser on shortfilms for the Telegram channel #КороткоеКино.',
                    'Author of an idea — Nadia Ivanova; developed by — me.',
                ],
                view: 'Open in Telegram',
            },
            nadia: {
                title: 'Site for Nadia Ivanova',
                description: [
                    'Site-card for the film director.',
                ],
                view: 'Link',
            },
            onlineRadio: {
                title: 'Online Radio Collection',
                description: [
                    'Simple, easy, comfortable and functional player of online radio stations. You can choose the quality, '
                    + 'some know the current track. Able to count traffic usage approximately.',
                    'Works on both PC and mobile.',
                ],
                view: 'Link',
            },
            apidog: {
                title: 'APIdog',
                description: [
                    'APIdog — web client for VK.com',
                    'An alternative multifunctional web client for the VK social network, using API and written almost '
                    + 'entirely in Vanilla JavaScript.',
                    'Site developed discontinued around 2017. In 2020, it was almost completely rewritten to ES6 using '
                    + 'webpack + babel and SCSS, after a couple of months - to TypeScript.',
                ],
                view: 'Link',
            },
        },
    },
} as unknown as ILocale;
