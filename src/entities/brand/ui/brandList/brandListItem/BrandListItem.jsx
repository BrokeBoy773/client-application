import React, { useState } from 'react';
import Classes from './BrandListItem.module.css';
import { BrandDeleteModal } from '../../brandModals/brandDeleteModal/BrandDeleteModal';
import { BrandUpdateModal } from '../../brandModals/brandUpdateModal/BrandUpdateModal';
import { DeleteSquareButton } from '../../../../../shared/ui/buttons/squareButton/deleteSquareButton';
import { UpdateSquareButton } from '../../../../../shared/ui/buttons/squareButton/updateSquareButton';

export const BrandListItem = ({ brand, fetchBrandList }) => {
    const [visibleBrandUpdateModal, setVisibleBrandUpdateModal] = useState(false);
    const [visibleBrandDeleteModal, setVisibleBrandDeleteModal] = useState(false);

    return (
        <div className={Classes.listItem} key={brand.id}>
            <div>{brand.name}</div>

            <div className={Classes.buttonPanel}>
                <UpdateSquareButton onClick={() => setVisibleBrandUpdateModal(true)} />

                <BrandUpdateModal
                    visible={visibleBrandUpdateModal}
                    setVisible={setVisibleBrandUpdateModal}
                    id={brand.id}
                    fetchBrandList={fetchBrandList}
                />

                <DeleteSquareButton onClick={() => setVisibleBrandDeleteModal(true)} />

                <BrandDeleteModal
                    visible={visibleBrandDeleteModal}
                    setVisible={setVisibleBrandDeleteModal}
                    id={brand.id}
                    fetchBrandList={fetchBrandList}
                />
            </div>
        </div>
    );
}
