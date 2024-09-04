import React from 'react';
import Classes from './SelectButton.module.css';

export const SelectButton = ({ title, value, selected, ...props }) => {
    return (
        <label className={`${selected === value ? Classes.selectedContainer : Classes.notSelectedContainer}`}>
            <input
                className={Classes.input}
                value={value}
                {...props}
            />
            <div className={`${selected === value ? Classes.selectedTitle : Classes.notSelectedTitle}`}>
                {title}
            </div>
        </label>
    );
}
