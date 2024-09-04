import React from 'react';
import Classes from './ConfirmModal.module.css';
import { Modal } from '../Modal';
import { CloseSquareButton } from '../../buttons/squareButton/closeSquareButton';
import { RectangularAccentButton } from '../../buttons/rectangularAccentButton';


export const ConfirmModal = ({visible, setVisible, callback, headerText, mainText, buttonText}) => {
    return (
        <Modal visible={visible} setVisible={setVisible}>
            <div className={Classes.container}>
                <div className={Classes.header}>
                    <div className={Classes.headerText}>
                        {headerText}
                    </div>

                    <CloseSquareButton onClick={() => setVisible(false)} />
                </div>

                <div className={Classes.main}>
                    <div className={Classes.mainText}>
                        {mainText}
                    </div>
                </div>

                <div className={Classes.footer}>
                    <RectangularAccentButton onClick={callback}>
                        {buttonText}
                    </RectangularAccentButton>
                </div>
            </div>
        </Modal>
    );
}
