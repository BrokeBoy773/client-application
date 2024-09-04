import React from 'react';
import { SizeService } from '../../../api';
import { ConfirmModal } from '../../../../../shared/ui/modal/confirmModal';

export const SizeDeleteModal = ({ visible, setVisible, id, fetchSizeList }) => {
    const headerText = 'Удалить размер';
    const mainText = 'Вы уверены, что хотите удалить этот размер?';
    const buttonText = 'Удалить';

    const deleteSize = async () => {
        await SizeService.deleteSizeAsync(id);
        fetchSizeList();
        setVisible(false);
    }

    return (
        <ConfirmModal
            visible={visible}
            setVisible={setVisible}
            callback={deleteSize}
            headerText={headerText}
            mainText={mainText}
            buttonText={buttonText}
        />
    );
}
