import React from 'react';
import Classes from './Header.module.css';
import { Logo } from '../../features/logo';
import { AuthButtonPanel } from '../../features/authButtonPanel';

export const Header = () => {
    return (
        <header className={Classes.header}>
            <Logo />
            <AuthButtonPanel />
        </header>
    );
};