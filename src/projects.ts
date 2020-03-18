import { IProject } from './types/project';
import { Tech } from './types/tech';

export default [
    {
        "id": 20,
        "title": "Yandex",
        "description": [
            "Frontend trainee-developer at Yandex",
            "Developed internal products for Yandex SERP and received the first colossal experience in the team on the product"
        ],
        "status": {
            "active": false,
            "since": "2019/08/07",
            "until": "2019/11/27"
        },
        "logo": {
            "src": "/images/yandex.svg",
            "width": 129,
            "height": 50
        },
        "dateColor": "#ee252c",
        "used": [Tech.HTML5, Tech.SCSS, Tech.TS, Tech.REACT, Tech.WEBPACK]
    },
    {
        "id": 25,
        "title": "Sights map",
        "description": [
            "A site with a lot of data on informal sights of St. Petersburg, Leningrad region, Rostow-on-Don, Krasnodar, Veliky Novgorod and not only"
        ],
        "view": {
            "href": "https://sights.vlad805.ru/",
            "label": "Open"
        },
        "status": {
            "active": true,
            "since": "2015/06"
        },
        "dateColor": "#009688",
        "used": [Tech.HTML5, Tech.CSS3, Tech.JS, Tech.PHP]
    },
    {
        "id": 27,
        "title": "Chat-bot for Telegram: SUAI Private Account",
        "description": [
            "An unofficial client-bot for working with the personal account of students of my university - SUAI."
        ],
        "view": {
            "href": "tg://resolve?domain=SUAIPrivateRobot",
            "label": "Open"
        },
        "status": {
            "active": false,
            "since": "2017/12",
            "until": "2019"
        },
        "dateColor": "linear-gradient(to right, #005aaa, #ab3a8d)",
        "used": [Tech.PHP]
    },
    {
        "id": 30,
        "title": "Online Radio Collection",
        "description": [
            "Simple, easy, convenient and functional player of online radio stations. You can choose the quality, some know the current track. Able to count traffic approximately.",
            "Works on both PC and mobile."
        ],
        "view": {
            "href": "https://radio.vlad805.ru/",
            "label": "Open"
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
            "APIdog — web client for VK",
            "An alternative multifunctional web client for the VK social network, using API and written almost entirely in Vanilla JavaScript."
        ],
        "view": {
            "href": "https://apidog.ru/",
            "label": "Open"
        },
        "status": {
            "active": false,
            "since": "2012/08/07"
        },
        "logo": {
            "src": "/images/apidog.svg",
            "width": 248,
            "height": 62
        },
        "dateColor": "#567ca4",
        "used": [Tech.HTML5, Tech.CSS3, Tech.JS, Tech.PHP]
    },
] as IProject[];
