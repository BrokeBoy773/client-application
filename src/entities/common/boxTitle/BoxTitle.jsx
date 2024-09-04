import React from 'react';
import Classes from './BoxTitle.module.css';
import { CreateSquareAccentButton } from '../../../shared/ui/buttons/squareAccentButton/createSquareAccentButton';


export const BoxTitle = ({ title, counter, callback }) => {

    return (
        <div className={Classes.container}>
            <div>
                {title} ({counter})
            </div>

            <CreateSquareAccentButton onClick={callback} />
        </div>
    );
}
