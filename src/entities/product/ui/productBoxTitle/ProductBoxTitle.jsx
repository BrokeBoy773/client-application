import React, { useState } from 'react';
import Classes from './ProductBoxTitle.module.css';
import { BoxTitle } from '../../../common/boxTitle';
import { ProductCreateModal } from '../productModals/productCreateModal';

export const ProductBoxTitle = ({ categoryList, brandList, sizeList, statusList, counter, fetchProductList }) => {
    const productBoxTitle = 'Продукты'

    const [visibleProductCreateModal, setVisibleProductCreateModal] = useState(false);

    return (
        <div className={Classes.container}>
            <BoxTitle title={productBoxTitle} counter={counter} callback={() => setVisibleProductCreateModal(true)} />

            <ProductCreateModal
                categoryList={categoryList}
                brandList={brandList}
                sizeList={sizeList}
                statusList={statusList}
                visible={visibleProductCreateModal}
                setVisible={setVisibleProductCreateModal}
                fetchProductList={fetchProductList}
            />
        </div>
    );
}