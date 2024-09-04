import React, { useState } from 'react';
import { BrandService } from '../../../api';
import { OneTextInputModal } from '../../../../../shared/ui/modal/oneTextInputModal';

export const BrandUpdateModal = ({ visible, setVisible, id, fetchBrandList }) => {
  const [updatedBrand, setUpdatedBrand] = useState({ name: '' });

  const headerText = 'Изменить бренд';
  const mainText = 'Название:';
  const placeholder = 'Введите название бренда';
  const buttonText = 'Изменить';

  const updateBrand = async (event) => {
    event.preventDefault();
    await BrandService.updateBrandAsync(id, updatedBrand)
    fetchBrandList();
    setUpdatedBrand({ name: '' });
    setVisible(false);
  }

  return (
    <OneTextInputModal
      visible={visible}
      setVisible={setVisible}
      item={updatedBrand}
      setItem={setUpdatedBrand}
      callback={updateBrand}
      headerText={headerText}
      mainText={mainText}
      placeholder={placeholder}
      buttonText={buttonText}
    />
  );
}
