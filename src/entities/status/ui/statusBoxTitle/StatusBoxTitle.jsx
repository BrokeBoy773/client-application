import React, { useState } from 'react';
import Classes from './StatusBoxTitle.module.css';
import { BoxTitle } from '../../../common/boxTitle';
import { StatusCreateModal } from '../statusModals/statusCreateModal';

export const StatusBoxTitle = ({ counter, fetchStatusList }) => {
    const statusBoxTitle = 'Статусы'

    const [visibleStatusCreateModal, setVisibleStatusCreateModal] = useState(false);

    return (
        <div className={Classes.container}>
            <BoxTitle title={statusBoxTitle} counter={counter} callback={() => setVisibleStatusCreateModal(true)} />
            <StatusCreateModal visible={visibleStatusCreateModal} setVisible={setVisibleStatusCreateModal} fetchStatusList={fetchStatusList} />
        </div>
    );
}
