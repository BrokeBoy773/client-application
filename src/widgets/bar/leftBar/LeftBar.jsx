import React from 'react';
import Classes from './LeftBar.module.css';
import { ProductBox } from '../../../features/boxes/productBox/ProductBox';

export const LeftBar = ({ productList, categoryList, brandList, sizeList, statusList, fetchProductList }) => {
  return (
    <div className={Classes.leftBar}>
      <ProductBox
        productList={productList}
        categoryList={categoryList}
        brandList={brandList}
        sizeList={sizeList}
        statusList={statusList}

        fetchProductList={fetchProductList}
      />
    </div>
  );
}