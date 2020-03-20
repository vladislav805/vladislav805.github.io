import * as React from 'react';
import './Contacts.scss';
import Icon from '@mdi/react';
import { mdiTelegram, mdiEmailOutline, mdiGithub } from '@mdi/js';

import locales from '../../locales';

type IContactItemProps = {
    label: string;
    icon: string;
    link: string;
}

const { header } = locales.contacts;

const ContactItem = ({ label, icon, link }: IContactItemProps) => (
    <a href={link} target="_blank" rel="noopener noreferrer" className="contact-item">
        <Icon path={icon} size={2} />
        <span className="contact-item-label">{label}</span>
    </a>
);

const Contacts = () => (
    <div className="contact">
        <h2>{header}</h2>
        <div className="contact-list">
            <ContactItem icon={mdiTelegram} label={`@vladislav805`} link="tg://resolve?domain=vladislav805" />
            <ContactItem icon={mdiEmailOutline} label={`vlad@velu.ga`} link="mailto:vlad@velu.ga" />
            <ContactItem icon={mdiGithub} label={`vladislav805`} link="https://github.com/vladislav805" />
        </div>
    </div>
);

export default Contacts;
