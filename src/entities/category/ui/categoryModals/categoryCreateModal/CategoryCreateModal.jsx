import React, { useState } from 'react';
import { CategoryService } from '../../../api';
import { OneTextInputModal } from '../../../../../shared/ui/modal/oneTextInputModal';

export const CategoryCreateModal = ({ visible, setVisible, fetchCategoryList }) => {
    const [category, setCategory] = useState({ name: '' });

    const headerText = 'Создать категорию';
    const mainText = 'Название:';
    const placeholder = 'Введите название категории';
    const buttonText = 'Добавить';

    const createCategory = async (event) => {
        event.preventDefault();
        await CategoryService.createCategoryAsync(category);
        fetchCategoryList();
        setCategory({ name: '' });
        setVisible(false);
    }

    return (
        <OneTextInputModal
            visible={visible}
            setVisible={setVisible}
            item={category}
            setItem={setCategory}
            callback={createCategory}
            headerText={headerText}
            mainText={mainText}
            placeholder={placeholder}
            buttonText={buttonText}
        />
    );
}
