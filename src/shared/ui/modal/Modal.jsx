import React from 'react';
import Classes from './Modal.module.css';

export const Modal = ({ children, visible, setVisible }) => {
    const rootClasses = [Classes.modal]

    if (visible) {
        rootClasses.push(Classes.active);
    }

    return (
        <div className={rootClasses.join(' ')} onClick={() => setVisible(false)}>
            <div className={Classes.modalContent} onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
}
