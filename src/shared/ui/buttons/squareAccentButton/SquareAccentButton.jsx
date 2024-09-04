import React from 'react';
import Classes from './SquareAccentButton.module.css';

export const SquareAccentButton = ({ children, ...props }) => {
    return (
        <button className={Classes.squareAccentButton} {...props}>
            {children}
        </button>
    );
}
