import React from 'react';

import styles from './Header.module.css';

import igniteLogo from '../assets/ignite-logo.svg';
import { MenuL } from './MenuL';

export function Header() {
    return (
        <>
            <header className={styles.header}>
                <img src={igniteLogo} alt="Logotipo do ignite" />
                <MenuL />
            </header>
        </>
    );
}