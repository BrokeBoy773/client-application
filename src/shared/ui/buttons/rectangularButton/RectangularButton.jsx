import React from 'react';
import Classes from './RectangularButton.module.css';

export const RectangularButton = ({ children, ...props }) => {
    return (
        <button className={Classes.rectangularButton} {...props}>
            {children}
        </button>
    );
}
