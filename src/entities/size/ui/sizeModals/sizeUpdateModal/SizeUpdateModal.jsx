import React, { useState } from 'react';
import { SizeService } from '../../../api';
import { OneTextInputModal } from '../../../../../shared/ui/modal/oneTextInputModal';

export const SizeUpdateModal = ({ visible, setVisible, id, fetchSizeList }) => {
    const [updatedSize, setUpdatedSize] = useState({ name: '' });

    const headerText = 'Изменить размер';
    const mainText = 'Значение:';
    const placeholder = 'Введите размер';
    const buttonText = 'Изменить';

    const updateSize = async (event) => {
        event.preventDefault();
        await SizeService.updateSizeAsync(id, updatedSize);
        fetchSizeList();
        setUpdatedSize({ name: '' });
        setVisible(false);
    }

    return (
        <OneTextInputModal
            visible={visible}
            setVisible={setVisible}
            item={updatedSize}
            setItem={setUpdatedSize}
            callback={updateSize}
            headerText={headerText}
            mainText={mainText}
            placeholder={placeholder}
            buttonText={buttonText}
        />
    );
}