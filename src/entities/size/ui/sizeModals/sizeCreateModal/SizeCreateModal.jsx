import React, { useState } from 'react';
import { SizeService } from '../../../api';
import { OneTextInputModal } from '../../../../../shared/ui/modal/oneTextInputModal';

export const SizeCreateModal = ({ visible, setVisible, fetchSizeList }) => {
    const [size, setSize] = useState({ name: '' });

    const headerText = 'Создать размер';
    const mainText = 'Значение:';
    const placeholder = 'Введите размер';
    const buttonText = 'Добавить';

    const createSize = async (event) => {
        event.preventDefault();
        await SizeService.createSizeAsync(size);
        fetchSizeList();
        setSize({ name: '' });
        setVisible(false);
    }

    return (
        <OneTextInputModal
            visible={visible}
            setVisible={setVisible}
            item={size}
            setItem={setSize}
            callback={createSize}
            headerText={headerText}
            mainText={mainText}
            placeholder={placeholder}
            buttonText={buttonText}
        />
    );
}
