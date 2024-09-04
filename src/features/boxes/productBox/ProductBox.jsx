import React from 'react';
import Classes from './ProductBox.module.css';
import { ProductList } from '../../../entities/product/ui/productList/ProductList';
import { ProductBoxTitle } from '../../../entities/product/ui/productBoxTitle';
import { ProductSearch } from '../../../entities/product/ui/productSearch/ProductSearch';

export const ProductBox = ({ categoryList, brandList, sizeList, statusList, productList, fetchProductList }) => {
    return (
        <div className={Classes.container}>
            <ProductBoxTitle
                categoryList={categoryList}
                brandList={brandList}
                sizeList={sizeList}
                statusList={statusList}
                counter={productList.length}
                fetchProductList={fetchProductList}
            />

            <ProductSearch fetchProductList={fetchProductList} />

            <ProductList
                categoryList={categoryList}
                brandList={brandList}
                sizeList={sizeList}
                statusList={statusList}
                productList={productList}
                fetchProductList={fetchProductList}
            />
        </div>
    );
}
