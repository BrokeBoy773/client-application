import React, { useState } from 'react';
import Classes from './BrandBoxTitle.module.css';
import { BoxTitle } from '../../../common/boxTitle';
import { BrandCreateModal } from '../brandModals/brandCreateModal';


export const BrandBoxTitle = ({ counter, fetchBrandList }) => {
    const brandBoxTitle = 'Бренды'

    const [visibleBrandCreateModal, setVisibleBrandCreateModal] = useState(false);

    return (
        <div className={Classes.container}>
            <BoxTitle title={brandBoxTitle} counter={counter} callback={() => setVisibleBrandCreateModal(true)} />
            <BrandCreateModal visible={visibleBrandCreateModal} setVisible={setVisibleBrandCreateModal} fetchBrandList={fetchBrandList} />
        </div>
    );
}
