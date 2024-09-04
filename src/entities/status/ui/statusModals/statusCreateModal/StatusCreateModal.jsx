import React, { useState } from 'react';
import { StatusService } from '../../../api';
import { OneTextInputModal } from '../../../../../shared/ui/modal/oneTextInputModal';

export const StatusCreateModal = ({ visible, setVisible, fetchStatusList }) => {
    const [status, setStatus] = useState({ name: '' });

    const headerText = 'Создать статус';
    const mainText = 'Название:';
    const placeholder = 'Введите название статуса';
    const buttonText = 'Добавить';

    const createStatus = async (event) => {
        event.preventDefault();
        await StatusService.createStatusAsync(status);
        fetchStatusList();
        setStatus({ name: '' });
        setVisible(false);
    }

    return (
        <OneTextInputModal
            visible={visible}
            setVisible={setVisible}
            item={status}
            setItem={setStatus}
            callback={createStatus}
            headerText={headerText}
            mainText={mainText}
            placeholder={placeholder}
            buttonText={buttonText}
        />
    );
}
