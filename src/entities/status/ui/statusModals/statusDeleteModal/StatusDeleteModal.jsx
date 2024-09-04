import React from 'react';
import { StatusService } from '../../../api';
import { ConfirmModal } from '../../../../../shared/ui/modal/confirmModal';

export const StatusDeleteModal = ({ visible, setVisible, id, fetchStatusList }) => {
    const headerText = 'Удалить статус';
    const mainText = 'Вы уверены, что хотите удалить этот статус?';
    const buttonText = 'Удалить';

    const deleteStatus = async () => {
        await StatusService.deleteStatusAsync(id);
        fetchStatusList();
        setVisible(false);
    }

    return (
        <ConfirmModal
            visible={visible}
            setVisible={setVisible}
            callback={deleteStatus}
            headerText={headerText}
            mainText={mainText}
            buttonText={buttonText}
        />
    );
}
