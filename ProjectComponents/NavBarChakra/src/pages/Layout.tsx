import { Flex } from '@chakra-ui/react';
import React from 'react';
import { Outlet } from 'react-router-dom';
import { Sidebar } from '../components/Sidebar';


export function Layout() {
    return (
        <>
            <Flex>
                <Sidebar />
            </Flex>
            <Outlet />
        </>
    );
}