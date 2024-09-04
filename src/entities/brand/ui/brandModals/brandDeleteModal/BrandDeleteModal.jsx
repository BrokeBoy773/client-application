import React from 'react';
import { BrandService } from '../../../api';
import { ConfirmModal } from '../../../../../shared/ui/modal/confirmModal';

export const BrandDeleteModal = ({ visible, setVisible, id, fetchBrandList }) => {
  const headerText = 'Удалить бренд';
  const mainText = 'Вы уверены, что хотите удалить этот бренд?';
  const buttonText = 'Удалить';

  const deleteBrand = async () => {
    await BrandService.deleteBrandAsync(id);
    fetchBrandList();
    setVisible(false);
  }

  return (
    <ConfirmModal
      visible={visible}
      setVisible={setVisible}
      callback={deleteBrand}
      headerText={headerText}
      mainText={mainText}
      buttonText={buttonText}
    />
  );
}
