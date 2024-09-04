import React from 'react';
import Classes from './RectangularAccentButton.module.css';

export const RectangularAccentButton = ({ children, ...props }) => {
    return (
        <button className={Classes.rectangularAccentButton} {...props}>
            {children}
        </button>
    );
}
