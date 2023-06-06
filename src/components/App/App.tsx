import React from 'react';

import { Header } from '@components/Header';
import { ContactList } from '@components/ContactList';
import { About } from '@components/About';
import { TimelineProjects } from '@components/TimelineProjects';
import { Footer } from '@components/Footer';

import { fromHash, fromNavigator } from '../../locales';

import type { IAppProps } from './App.typings';

const getFromAddress = () => {
    return fromHash() || fromNavigator();
};

export const App: React.FC<IAppProps> = ({ projects, locale }) => {
    const [localeName, setLocaleName] = React.useState<string | undefined>(undefined);

    React.useEffect(() => {
        let currentLocaleName = locale.getLanguage();

        if (localeName !== currentLocaleName) {
            const fromAddress = getFromAddress();

            if (fromAddress) {
                currentLocaleName = fromAddress;
            }

            setLocaleName(currentLocaleName);
        }
        console.log('effect', localeName);
        locale.setLanguage(currentLocaleName);
    }, [locale, localeName]);

    const onChangeLocale = React.useCallback((localeName: string): void => {
        locale.setLanguage(localeName);
        setLocaleName(localeName);
    }, [locale]);

    return (
        <>
            <Header locale={locale} />
            <About locale={locale} />
            <ContactList locale={locale} />
            <TimelineProjects locale={locale} projects={projects} />
            <ContactList locale={locale} />
            <Footer locale={locale} onChangeLocale={onChangeLocale} />
        </>
    );
};
