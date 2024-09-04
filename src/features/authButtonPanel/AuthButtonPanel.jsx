import React from 'react';
import Classes from './AuthButtonPanel.module.css';
import { RectangularAccentButton } from '../../shared/ui/buttons/rectangularAccentButton';

export const AuthButtonPanel = () => {
    return (
        <div className={Classes.authButtonPanel}>
            <RectangularAccentButton>
                Вход
            </RectangularAccentButton>

            <RectangularAccentButton>
                Регистрация
            </RectangularAccentButton>
        </div>
    );
}