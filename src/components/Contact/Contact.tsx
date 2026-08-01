import type { FC } from 'react';
import Icon from '@mdi/react';

import type { IContactProps } from './Contact.typings';

import './Contact.css';

export const Contact: FC<IContactProps> = ({ label, icon, link }) => (
    <a href={link} target="_blank" rel="noopener noreferrer" className="Contact">
        <Icon path={icon} size={2} />
        <span className="Contact-Label">{label}</span>
    </a>
);
