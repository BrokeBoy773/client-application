import React, { useState } from 'react';
import { CategoryService } from '../../../api';
import { OneTextInputModal } from '../../../../../shared/ui/modal/oneTextInputModal';

export const CategoryUpdateModal = ({ visible, setVisible, id, fetchCategoryList }) => {
    const [updatedCategory, setUpdatedCategory] = useState({ name: '' });

    const headerText = 'Изменить категорию';
    const mainText = 'Название:';
    const placeholder = 'Введите название категории';
    const buttonText = 'Изменить';

    const updateCategory = async (event) => {
        event.preventDefault();
        await CategoryService.updateCategoryAsync(id, updatedCategory);
        fetchCategoryList();
        setUpdatedCategory({ name: '' });
        setVisible(false);
    }

    return (
        <OneTextInputModal
            visible={visible}
            setVisible={setVisible}
            item={updatedCategory}
            setItem={setUpdatedCategory}
            callback={updateCategory}
            headerText={headerText}
            mainText={mainText}
            placeholder={placeholder}
            buttonText={buttonText}
        />
    );
}
