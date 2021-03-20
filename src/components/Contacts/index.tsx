import * as React from 'react';
import Icon from '@mdi/react';
import { mdiTelegram, mdiEmailOutline, mdiGithub } from '@mdi/js';
import styles from './Contacts.scss';
import { ILocale } from '../../locales';

type IContactItemProps = {
    label: string;
    icon: string;
    link: string;
};

const ContactItem: React.FC<IContactItemProps> = ({ label, icon, link }: IContactItemProps) => (
    <a href={link} target="_blank" rel="noopener noreferrer" className={styles['contact-item']}>
        <Icon path={icon} size={2} />
        <span className={styles['contact-item-label']}>{label}</span>
    </a>
);

type IContactsProps = {
    locale: ILocale;
};

const Contacts: React.FC<IContactsProps> = ({ locale }: IContactsProps) => (
    <div className={styles.contact}>
        <h2>{locale.contacts.header}</h2>
        <div className={styles['contact-list']}>
            <ContactItem icon={mdiTelegram} label="@vladislav805" link="tg://resolve?domain=vladislav805" />
            <ContactItem icon={mdiEmailOutline} label="vlad@velu.ga" link="mailto:vlad@velu.ga" />
            <ContactItem icon={mdiGithub} label="vladislav805" link="https://github.com/vladislav805" />
        </div>
    </div>
);

export default Contacts;
