import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from '../components/Navbar';

import styles from './Layout.module.css'

export function Layout() {
    return (
        <>
            <Navbar />
            <Outlet />
        </>
    );
}