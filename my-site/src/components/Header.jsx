import React from 'react';

import styles from './Header.module.css';

export function Header() {
    return (
        <header className={styles.header}>
            <a href="#" class="logo">Logo</a>

            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Work</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </header>
    );
}

