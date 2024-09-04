import React from 'react';
import Classes from './Input.module.css'

export const Input = ({ ...props }) => {
    return (
        <input className={Classes.input} {...props} />
    );
}
