import React, { useState } from 'react';
import { ProductService } from '../../../api';
import { ProductModal } from '../productModal';

export const ProductCreateModal = ({ categoryList, brandList, sizeList, statusList, visible, setVisible, fetchProductList }) => {
    const [product, setProduct] = useState({ name: '', categoryId: '', brandId: '', sizeId: '', statusId: '' });

    const headerText = 'Создать продукт:';
    const buttonText = 'Добавить';

    const createProduct = async (event) => {
        event.preventDefault();
        await ProductService.createProductAsync(product);
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
            actionProduct={createProduct}
            headerText={headerText}
            buttonText={buttonText}
        />
    );
}