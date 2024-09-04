import React, { useState } from 'react';
import Classes from './SizeBoxTitle.module.css';
import { BoxTitle } from '../../../common/boxTitle';
import { SizeCreateModal } from '../sizeModals/sizeCreateModal';

export const SizeBoxTitle = ({ counter, fetchSizeList }) => {
    const sizeBoxTitle = 'Размеры'

    const [visibleSizeCreateModal, setVisibleSizeCreateModal] = useState(false);

    return (
        <div className={Classes.container}>
            <BoxTitle title={sizeBoxTitle} counter={counter} callback={() => setVisibleSizeCreateModal(true)} />
            <SizeCreateModal visible={visibleSizeCreateModal} setVisible={setVisibleSizeCreateModal} fetchSizeList={fetchSizeList} />
        </div>
    );
}