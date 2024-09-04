import React from 'react';
import Classes from './OneTextInputModal.module.css';
import { Modal } from '../Modal';
import { CloseSquareButton } from '../../buttons/squareButton/closeSquareButton';
import { Input } from '../../input';
import { RectangularAccentButton } from '../../buttons/rectangularAccentButton';

export const OneTextInputModal = ({ visible, setVisible, item, setItem, callback, headerText, mainText, placeholder, buttonText }) => {
    return (
        <Modal visible={visible} setVisible={setVisible}>
            <div className={Classes.container}>
                <div className={Classes.header}>
                    <div className={Classes.headerText}>
                        {headerText}
                    </div>

                    <CloseSquareButton onClick={() => setVisible(false)} />
                </div>


                <form>
                    <div className={Classes.main}>
                        <div className={Classes.mainText}>
                            {mainText}
                        </div>

                        <Input
                            value={item.name}
                            onChange={x => setItem({ ...item, name: x.target.value })}
                            type='text'
                            placeholder={placeholder}
                        />
                    </div>

                    <div className={Classes.footer}>
                        <RectangularAccentButton onClick={callback} type='submit'>
                            {buttonText}
                        </RectangularAccentButton>
                    </div>
                </form>
            </div>
        </Modal>
    );
}
