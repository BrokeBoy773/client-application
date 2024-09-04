import React from 'react';
import Classes from './Main.module.css';
import { ApplicationRouter } from '../../app/routing';

export const Main = () => {
    return (
        <main className={Classes.main}>
            <ApplicationRouter />
        </main>
    );
};