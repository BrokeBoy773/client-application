import React, { useState } from 'react';
import { ProductModal } from '../productModal';
import { ProductService } from '../../../api';

export const ProductUpdateModal = ({ categoryList, brandList, sizeList, statusList, visible, setVisible, id, fetchProductList }) => {
    const [product, setProduct] = useState({ name: '', categoryId: '', brandId: '', sizeId: '', statusId: '' });

    const headerText = 'Изменить продукт:';
    const buttonText = 'Изменить';

    const updateProduct = async (event) => {
        event.preventDefault();
        await ProductService.updateProductAsync(id, product);
        fetchProductList();
        setProduct({ name: '', categoryId: '', brandId: '', sizeId: '', statusId: '' })
        setVisible(false);
    }

    return (
        <ProductModal
            categoryList={categoryList}
            brandList={brandList}
            sizeList={sizeList}
            statusList={statusList}
            visible={visible}
            setVisible={setVisible}
            fetchProductList={fetchProductList}
            product={product}
            setProduct={setProduct}
            actionProduct={updateProduct}
            headerText={headerText}
            buttonText={buttonText}
        />
    );
}
