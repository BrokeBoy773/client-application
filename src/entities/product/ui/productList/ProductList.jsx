import React from 'react';
import Classes from './ProductList.module.css';
import { ProductListItem } from './productListItem';

export const ProductList = ({ categoryList, brandList, sizeList, statusList, productList, fetchProductList }) => {
    return (
        <div className={Classes.list}>
            {productList.map(product =>
                <ProductListItem
                    categoryList={categoryList}
                    brandList={brandList}
                    sizeList={sizeList}
                    statusList={statusList}
                    key={product.id}
                    product={product}
                    fetchProductList={fetchProductList}
                />
            )}
        </div>
    );
}
