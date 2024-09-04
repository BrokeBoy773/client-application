import React, { useState } from 'react';
import { StatusService } from '../../../api';
import { OneTextInputModal } from '../../../../../shared/ui/modal/oneTextInputModal';

export const StatusUpdateModal = ({ visible, setVisible, id, fetchStatusList }) => {
    const [updatedStatus, setUpdatedStatus] = useState({ name: '' });

    const headerText = 'Изменить статус';
    const mainText = 'Название:';
    const placeholder = 'Введите название статуса';
    const buttonText = 'Изменить';

    const updateStatus = async (event) => {
        event.preventDefault();
        await StatusService.updateStatusAsync(id, updatedStatus);
        fetchStatusList();
        setUpdatedStatus({ name: '' });
        setVisible(false);
    }

    return (
        <OneTextInputModal
            visible={visible}
            setVisible={setVisible}
            item={updatedStatus}
            setItem={setUpdatedStatus}
            callback={updateStatus}
            headerText={headerText}
            mainText={mainText}
            placeholder={placeholder}
            buttonText={buttonText}
        />
    );
}
