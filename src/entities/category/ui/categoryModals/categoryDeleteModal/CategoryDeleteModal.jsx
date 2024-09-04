import React from 'react';
import { CategoryService } from '../../../api';
import { ConfirmModal } from '../../../../../shared/ui/modal/confirmModal';

export const CategoryDeleteModal = ({ visible, setVisible, id, fetchCategoryList }) => {
    const headerText = 'Удалить категорию';
    const mainText = 'Вы уверены, что хотите удалить эту категорию?';
    const buttonText = 'Удалить';

    const deleteCategory = async () => {
        await CategoryService.deleteCategoryAsync(id);
        fetchCategoryList();
        setVisible(false);
    }

    return (
        <ConfirmModal
            visible={visible}
            setVisible={setVisible}
            callback={deleteCategory}
            headerText={headerText}
            mainText={mainText}
            buttonText={buttonText}
        />
    );
}
