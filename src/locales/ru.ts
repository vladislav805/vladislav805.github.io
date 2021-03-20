import { ILocale } from './types';

export default {
    header: {
        photoAlt: 'Photo',
        name: 'Велюга Владислав',
        position: 'Веб-разработчик',
        location: 'Санкт-Петербург',
    },
    about: {
        header: 'Кто я?',
        whereIAm: 'Я веб-разработчик из Санкт-Петербурга. Студент второго курса магистратуры СПб ГУАП.',
        webDevShort: 'Я занимаюсь разработкой на JavaScript/PHP с 2012 года. С 2019 года активно использую TypeScript.',
        androidDevShort: 'Помимо веб-разработки я интересуюсь и немного разрабатываю на Java на Android.',
        skills: 'Skills и tools',
    },
    contacts: {
        header: 'Связаться со мной',
    },
    timeline: {
        header: 'Timeline: работа и проекты',
        monthsShort: ['янв', 'фев', 'март', 'апр', 'май', 'июнь', 'июль', 'авг', 'сен', 'окт', 'ноя', 'дек'],
        now: 'сейчас',
        items: {
            yandex: {
                title: 'Яндекс',
                description: [
                    'Стажёр-разработчик поисковых интерфейсов.',
                    'Разрабатывал внутренние сервисы для SERP и получил первый колоссальный опыт работы над продуктом в команде.',
                ],
            },
            sights: {
                title: 'Sights map',
                description: [
                    'Сайт с множеством данных о неформальных достопримечательностях.',
                    'Полностью личная разработка.',
                    'Изначальный контент был собран также лично мной. На данный момент имеется информация о неформалках '
                    + 'в Санкт-Петербурге, Ленобласти, Ростове-на-Дону, Краснодаре, Великом Новгороде и не только.',
                    '',
                    'В 2021 году проект был полностью переписан на TypeScript, с отказом от PHP.',
                ],
                view: 'Открыть сайт',
            },
            rfm: {
                title: 'RFM radio',
                description: [
                    'Android приложение для использования hardware радиомодуля на смартфонах с процессорами Qualcomm.',
                ],
                view: 'Открыть сайт',
            },
            suai: {
                title: 'Telegram бот: SUAI Private Account',
                description: [
                    'Неофициальный бот-клиент для работы личным кабинетом студентов ГУАП.',
                ],
                view: 'Открыть в Telegram',
            },
            shortMeter: {
                title: 'Telegram бот: #КороткийМетр',
                description: [
                    'Путеводитель и советник по короткометражкам из канала #КороткоеКино.',
                    'Автор — Надя Иванова; реализация — я.',
                ],
                view: 'Открыть в Telegram',
            },
            nadia: {
                title: 'Сайт Нади Ивановой',
                description: [
                    'Сайт-визитка для режиссера.',
                ],
                view: 'Открыть',
            },
            onlineRadio: {
                title: 'Сборник онлайн-радио',
                description: [
                    'Простой, легкий, удобный и функциональный плеер онлайн-вещательных радиостанций. Можно выбрать '
                    + 'качество, на некоторых узнать текущий трек. Умеет примерно считать трафик.',
                    'Работает как на ПК, так и на мобильных.',
                ],
                view: 'Открыть',
            },
            apidog: {
                title: 'Клиент для VK – APIdog',
                description: [
                    'Альтернативный многофункциональный веб-клиент для социальной сети ВКонтакте, работающий на API и '
                    + 'написанный почти полностью на Vanilla JavaScript.',
                    'Позволял использовать функционал ВКонтакте, оставаясь при этом офлайн. Также сайт имеет небольшие '
                    + 'приятные «плюшки».',
                    'Сайт разрабатывался примерно до 2017 года. В 2020 году был почти полностью переписан на ES6 с '
                    + 'использованием webpack+babel и SCSS, затем, через пару месяцев на TypeScript.',
                ],
                view: 'Открыть',
            },
        },
    },
} as unknown as ILocale;
