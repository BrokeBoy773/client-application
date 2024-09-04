import React, { useState } from 'react';
import Classes from './StatusListItem.module.css';
import { UpdateSquareButton } from '../../../../../shared/ui/buttons/squareButton/updateSquareButton';
import { StatusUpdateModal } from '../../statusModals/statusUpdateModal';
import { DeleteSquareButton } from '../../../../../shared/ui/buttons/squareButton/deleteSquareButton';
import { StatusDeleteModal } from '../../statusModals/statusDeleteModal';

export const StatusListItem = ({ status, fetchStatusList }) => {
    const [visibleStatusUpdateModal, setVisibleStatusUpdateModal] = useState(false);
    const [visibleStatusDeleteModal, setVisibleStatusDeleteModal] = useState(false);

    return (
        <div className={Classes.listItem} key={status.id}>
            <div>{status.name}</div>

            <div className={Classes.buttonPanel}>
                <UpdateSquareButton onClick={() => setVisibleStatusUpdateModal(true)} />

                <StatusUpdateModal
                    visible={visibleStatusUpdateModal}
                    setVisible={setVisibleStatusUpdateModal}
                    id={status.id}
                    fetchStatusList={fetchStatusList}
                />

                <DeleteSquareButton onClick={() => setVisibleStatusDeleteModal(true)} />

                <StatusDeleteModal
                    visible={visibleStatusDeleteModal}
                    setVisible={setVisibleStatusDeleteModal}
                    id={status.id}
                    fetchStatusList={fetchStatusList}
                />
            </div>
        </div>
    );
}
