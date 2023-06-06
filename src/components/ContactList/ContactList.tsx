import React from 'react';
import { siTelegram } from 'simple-icons/icons';
import { mdiEmailOutline, mdiGithub } from '@mdi/js';

import { Contact } from '@components/Contact';

import type { IContactListProps } from './ContactList.typings';

import './ContactList.scss';

export const ContactList: React.FC<IContactListProps> = ({ locale }) => (
    <div className="ContactList">
        <h2>{locale.contacts.header}</h2>
        <div className="ContactList-Items">
            <Contact
                icon={siTelegram.path}
                label="@vladislav805"
                link="tg://resolve?domain=vladislav805"
            />
            <Contact
                icon={mdiEmailOutline}
                label="vladislav805@yandex.com"
                link="mailto:vladislav805@yandex.com"
            />
            <Contact
                icon={mdiGithub}
                label="vladislav805"
                link="https://github.com/vladislav805"
            />
        </div>
    </div>
);
