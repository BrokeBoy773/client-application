import React from 'react';
import { ConfirmModal } from '../../../../../shared/ui/modal/confirmModal';
import { ProductService } from '../../../api';

export const ProductDeleteModal = ({ visible, setVisible, id, fetchProductList }) => {
    const headerText = 'Удалить продукт';
    const mainText = 'Вы уверены, что хотите удалить этот продукт?';
    const buttonText = 'Удалить';

    const deleteProduct = async () => {
        await ProductService.deleteProductAsync(id);
        fetchProductList();
        setVisible(false);
    }

    return (
        <ConfirmModal
            visible={visible}
            setVisible={setVisible}
            callback={deleteProduct}
            headerText={headerText}
            mainText={mainText}
            buttonText={buttonText}
        />
    );
}
