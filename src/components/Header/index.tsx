import * as React from 'react';
import styles from './style.scss';
import photo from '../../images/photo-main.webp';
import { staticUrl } from '../../utils';
import { ILocale } from '../../locales';

type IHeaderProps = {
    locale: ILocale;
};

const Header: React.FC<IHeaderProps> = ({ locale: { header: { photoAlt, name, position, location } } }: IHeaderProps) => (
    <div className={styles.header}>
        <div className={styles['header-content']}>
            <div className={styles['header-photo']}>
                <img src={staticUrl(photo)} alt={photoAlt} />
            </div>
            <div className={styles['header-aside']}>
                <h1 className={styles['header-name']}>{name}</h1>
                <h2 className={styles['header-position']}>{position}</h2>
                <h3 className={styles['header-location']}>{location}</h3>
            </div>
        </div>
    </div>
);

export default Header;
