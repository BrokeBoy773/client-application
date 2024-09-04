import React, { useState } from 'react';
import Classes from './SizeListItem.module.css';
import { UpdateSquareButton } from '../../../../../shared/ui/buttons/squareButton/updateSquareButton';
import { DeleteSquareButton } from '../../../../../shared/ui/buttons/squareButton/deleteSquareButton';
import { SizeDeleteModal } from '../../sizeModals/sizeDeleteModal';
import { SizeUpdateModal } from '../../sizeModals/sizeUpdateModal';

export const SizeListItem = ({ size, fetchSizeList }) => {
    const [visibleSizeUpdateModal, setVisibleSizeUpdateModal] = useState(false);
    const [visibleSizeDeleteModal, setVisibleSizeDeleteModal] = useState(false);

    return (
        <div className={Classes.listItem} key={size.id}>
            <div>{size.name}</div>

            <div className={Classes.buttonPanel}>
                <UpdateSquareButton onClick={() => setVisibleSizeUpdateModal(true)} />

                <SizeUpdateModal
                    visible={visibleSizeUpdateModal}
                    setVisible={setVisibleSizeUpdateModal}
                    id={size.id}
                    fetchSizeList={fetchSizeList}
                />

                <DeleteSquareButton onClick={() => setVisibleSizeDeleteModal(true)} />

                <SizeDeleteModal
                    visible={visibleSizeDeleteModal}
                    setVisible={setVisibleSizeDeleteModal}
                    id={size.id}
                    fetchSizeList={fetchSizeList}
                />
            </div>
        </div>
    );
}
