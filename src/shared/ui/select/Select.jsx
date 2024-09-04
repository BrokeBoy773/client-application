import React from 'react';
import Classes from './Select.module.css';

export const Select = ({ children, ...props }) => {
    return (
        <select className={Classes.select} {...props}>
            {children}
        </select>
    );
}