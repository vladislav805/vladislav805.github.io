import * as React from 'react';
import photo from '../../images/photo-main.webp';
import type { ILocale } from '../../locales';

import styles from './Header.scss';

type IHeaderProps = {
    locale: ILocale;
};

export const Header: React.FC<IHeaderProps> = ({ locale: { header: { photoAlt, name, position, location } } }) => (
    <div className={styles.header}>
        <div className={styles['header-content']}>
            <div className={styles['header-photo']}>
                <img src={photo} alt={photoAlt} />
            </div>
            <div className={styles['header-aside']}>
                <h1 className={styles['header-name']}>{name}</h1>
                <h2 className={styles['header-position']}>{position}</h2>
                <h3 className={styles['header-location']}>{location}</h3>
            </div>
        </div>
    </div>
);
