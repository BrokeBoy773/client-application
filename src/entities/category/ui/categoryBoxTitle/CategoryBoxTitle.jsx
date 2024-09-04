import React, { useState } from 'react';
import Classes from './CategoryBoxTitle.module.css';
import { BoxTitle } from '../../../common/boxTitle';
import { CategoryCreateModal } from '../categoryModals/categoryCreateModal';

export const CategoryBoxTitle = ({ counter, fetchCategoryList }) => {
    const categoryBoxTitle = 'Категории'

    const [visibleCategoryCreateModal, setVisibleCategoryCreateModal] = useState(false);

    return (
        <div className={Classes.container}>
            <BoxTitle title={categoryBoxTitle} counter={counter} callback={() => setVisibleCategoryCreateModal(true)} />
            <CategoryCreateModal visible={visibleCategoryCreateModal} setVisible={setVisibleCategoryCreateModal} fetchCategoryList={fetchCategoryList} />
        </div>
    );
}
