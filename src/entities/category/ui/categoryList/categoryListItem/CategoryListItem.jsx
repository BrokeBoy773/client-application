import React, { useState } from 'react';
import Classes from './CategoryListItem.module.css';
import { UpdateSquareButton } from '../../../../../shared/ui/buttons/squareButton/updateSquareButton';
import { CategoryUpdateModal } from '../../categoryModals/categoryUpdateModal';
import { DeleteSquareButton } from '../../../../../shared/ui/buttons/squareButton/deleteSquareButton';
import { CategoryDeleteModal } from '../../categoryModals/categoryDeleteModal';

export const CategoryListItem = ({ category, fetchCategoryList }) => {
    const [visibleCategoryUpdateModal, setVisibleCategoryUpdateModal] = useState(false);
    const [visibleCategoryDeleteModal, setVisibleCategoryDeleteModal] = useState(false);

    return (
        <div className={Classes.listItem} key={category.id}>
            <div>{category.name}</div>

            <div className={Classes.buttonPanel}>
                <UpdateSquareButton onClick={() => setVisibleCategoryUpdateModal(true)} />

                <CategoryUpdateModal
                    visible={visibleCategoryUpdateModal}
                    setVisible={setVisibleCategoryUpdateModal}
                    id={category.id}
                    fetchCategoryList={fetchCategoryList}
                />

                <DeleteSquareButton onClick={() => setVisibleCategoryDeleteModal(true)} />

                <CategoryDeleteModal
                    visible={visibleCategoryDeleteModal}
                    setVisible={setVisibleCategoryDeleteModal}
                    id={category.id}
                    fetchCategoryList={fetchCategoryList}
                />
            </div>
        </div>
    );
}
