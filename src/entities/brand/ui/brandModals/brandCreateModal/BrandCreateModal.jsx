import React, { useState } from 'react';
import { BrandService } from '../../../api';
import { OneTextInputModal } from '../../../../../shared/ui/modal/oneTextInputModal';

export const BrandCreateModal = ({ visible, setVisible, fetchBrandList }) => {
    const [brand, setBrand] = useState({ name: '' });

    const headerText = 'Создать бренд';
    const mainText = 'Название:';
    const placeholder = 'Введите название бренда';
    const buttonText = 'Добавить';

    const createBrand = async (event) => {
        event.preventDefault();
        await BrandService.createBrandAsync(brand);
        fetchBrandList();
        setBrand({ name: '' });
        setVisible(false);
    }

    return (
        <OneTextInputModal
            visible={visible}
            setVisible={setVisible}
            item={brand}
            setItem={setBrand}
            callback={createBrand}
            headerText={headerText}
            mainText={mainText}
            placeholder={placeholder}
            buttonText={buttonText}
        />
    );
}
