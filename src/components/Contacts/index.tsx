import * as React from 'react';
import './Contacts.scss';
import Icon from '@mdi/react';
import { mdiTelegram, mdiEmailOutline, mdiGithub } from '@mdi/js';

type IContactsProps = {};
type IContactsState = {};

type IContactItemProps = {
    label: string;
    icon: string;
    link: string;
}

const ContactItem = ({ label, icon, link }: IContactItemProps) => (
    <a href={link} target="_blank" rel="noopener noreferrer" className="contact">
        <Icon path={icon} size={2} />
        <span className="contact-label">{label}</span>
    </a>
);


export default class Contacts extends React.Component<IContactsProps, IContactsState> {
    render() {
        return (
            <>
                <div className="contacts">
                    <ContactItem icon={mdiTelegram} label={`@vladislav805`} link="tg://resolve?domain=vladislav805" />
                    <ContactItem icon={mdiEmailOutline} label={`vlad@velu.ga`} link="mailto:vlad@velu.ga" />
                    <ContactItem icon={mdiGithub} label={`vladislav805`} link="https://github.com/vladislav805" />
                </div>
            </>
        );
    }
}
