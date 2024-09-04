import React, { useState } from 'react';
import Classes from './ProductListItem.module.css';
import { DateTime } from 'luxon';
import { UpdateSquareButton } from '../../../../../shared/ui/buttons/squareButton/updateSquareButton';
import { ProductUpdateModal } from '../../productModals/productUpdateModal';
import { DeleteSquareButton } from '../../../../../shared/ui/buttons/squareButton/deleteSquareButton';
import { ProductDeleteModal } from '../../productModals/productDeleteModal';
import { OpenSquareButton } from '../../../../../shared/ui/buttons/squareButton/openSquareButton';

export const ProductListItem = ({ categoryList, brandList, sizeList, statusList, product, fetchProductList }) => {
    const [visibleProductUpdateModal, setVisibleProductUpdateModal] = useState(false);
    const [visibleProductDeleteModal, setVisibleProductDeleteModal] = useState(false);

    const createdDate = DateTime.fromISO(product.created).toFormat('dd.MM.yyyy (HH:mm)');
    const updatedLastDate = DateTime.fromISO(product.updatedLast).toFormat('dd.MM.yyyy (HH:mm)');

    return (
        <div className={Classes.listItem} key={product.id}>
            <div>
                <div className={Classes.name}>{product.name}</div>

                <div className={Classes.info}>
                    <div>{product.category.name}</div>
                    <div>{product.brand.name}</div>
                    <div>{product.size.name}</div>
                    <div>{product.status.name}</div>
                </div>

                <div className={Classes.dateTime}>
                    <div>{createdDate}</div>
                    <div>Последнее изменение: {updatedLastDate}</div>
                </div>
            </div>

            <div className={Classes.buttonPanel}>
                <OpenSquareButton />

                <UpdateSquareButton onClick={() => setVisibleProductUpdateModal(true)} />

                <ProductUpdateModal
                    categoryList={categoryList}
                    brandList={brandList}
                    sizeList={sizeList}
                    statusList={statusList}
                    visible={visibleProductUpdateModal}
                    setVisible={setVisibleProductUpdateModal}
                    id={product.id}
                    fetchProductList={fetchProductList}
                />

                <DeleteSquareButton onClick={() => setVisibleProductDeleteModal(true)} />

                <ProductDeleteModal
                    visible={visibleProductDeleteModal}
                    setVisible={setVisibleProductDeleteModal}
                    id={product.id}
                    fetchProductList={fetchProductList}
                />
            </div>
        </div>
    );
}
