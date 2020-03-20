import { IProject } from './types/project';
import { Tech } from './types/tech';

export default [
    {
        "id": 20,
        "title": "Yandex",
        "description": [
            "Frontend trainee-developer at Yandex",
            "Developed internal products for Yandex SERP and received the first colossal experience in the team work on the product"
        ],
        "status": {
            "active": false,
            "since": "2019/08/07",
            "until": "2019/11/27"
        },
        "logo": {
            "src": "static/images/yandex.svg",
            "width": 129,
            "height": 50
        },
        "dateColor": "#ee252c",
        "used": [Tech.HTML5, Tech.SCSS, Tech.TS, Tech.REACT, Tech.WEBPACK, Tech.ESLINT]
    },
    {
        "id": 25,
        "title": "Sights map",
        "description": [
            "A site with a lot of data on informal sights of St. Petersburg, Leningrad region, Rostov-on-Don, Krasnodar, Veliky Novgorod and not only",
            "",
            "The code is currently being rewritten using newer technologies."
        ],
        "view": {
            "href": "https://sights.vlad805.ru/",
            "label": "Link"
        },
        "status": {
            "active": true,
            "since": "2015/06"
        },
        "dateColor": "#009688",
        "used": [Tech.HTML5, Tech.CSS3, Tech.JS, Tech.PHP, Tech.TELEGRAM]
    },
    {
        "id": 30,
        "title": "RFM radio app",
        "description": [
            "Android application to use hardware radio on smartphones with QualComm processors."
        ],
        "view": {
            "href": "http://rfm.velu.ga/",
            "label": "Link"
        },
        "status": {
            "active": true,
            "since": "2019/07"
        },
        "dateColor": "#2978fd",
        "used": [Tech.ANDROID]
    },
    {
        "id": 27,
        "title": "Chat-bot for Telegram: SUAI Private Account",
        "description": [
            "An unofficial client-bot that works with the personal accounts of students of SUAI."
        ],
        "view": {
            "href": "tg://resolve?domain=SUAIPrivateRobot",
            "label": "Open in Telegram"
        },
        "status": {
            "active": false,
            "since": "2017/12",
            "until": "2019"
        },
        "dateColor": "linear-gradient(to right, #005aaa, #ab3a8d)",
        "used": [Tech.PHP, Tech.TELEGRAM]
    },
    {
        "id": 14,
        "title": "Bot for Telegram: #КороткийМетр",
        "description": [
            "Guide and adviser on shortfilms for the Telegram channel #КороткоеКино.",
            "Author of an idea — Nadia Ivanova; developed by — me."
        ],
        "view": {
            "href": "tg://resolve?domain=FilmShortBot",
            "label": "Open in Telegram"
        },
        "status": {
            "active": false,
            "since": "2017/06",
            "until": "2017/06"
        },
        "dateColor": "#0000ff",
        "used": [Tech.PHP, Tech.TELEGRAM]
    },
    {
        "id": 11,
        "title": "Site for Nadia Ivanova",
        "description": [
            "Site-card for the film director."
        ],
        "view": {
            "href": "http://nadiaivanova.ru/",
            "label": "Link"
        },
        "status": {
            "active": false,
            "since": "2017/06",
            "until": "2017/06"
        },
        "dateColor": "#c74c69",
        "used": [Tech.HTML5, Tech.CSS3, Tech.PHP]
    },
    {
        "id": 30,
        "title": "Online Radio Collection",
        "description": [
            "Simple, easy, comfortable and functional player of online radio stations. You can choose the quality, some know the current track. Able to count traffic usage approximately.",
            "Works on both PC and mobile."
        ],
        "view": {
            "href": "https://radio.vlad805.ru/",
            "label": "Link"
        },
        "status": {
            "active": true,
            "since": "2013"
        },
        "dateColor": "#303030",
        "used": [Tech.HTML5, Tech.CSS3, Tech.JS, Tech.PHP]
    },
    {
        "id": 10,
        "title": "APIdog",
        "description": [
            "APIdog — web client for VK.com",
            "An alternative multifunctional web client for the VK social network, using API and written almost entirely in Vanilla JavaScript.",
            "Site developed discontinued around 2017. Site is still available."
        ],
        "view": {
            "href": "https://apidog.ru/",
            "label": "Link"
        },
        "status": {
            "active": false,
            "since": "2012/08/07"
        },
        "logo": {
            "src": "static/images/apidog.svg",
            "width": 248,
            "height": 62
        },
        "dateColor": "#567ca4",
        "used": [Tech.HTML5, Tech.CSS3, Tech.JS, Tech.PHP, Tech.VK]
    },
] as IProject[];
