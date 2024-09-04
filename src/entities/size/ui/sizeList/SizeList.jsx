import React from 'react';
import Classes from './SizeList.module.css';
import { SizeListItem } from './sizeListItem/SizeListItem';

export const SizeList = ({ sizeList, fetchSizeList }) => {
    return (
        <div className={Classes.list}>
            {sizeList.map(size =>
                <SizeListItem key={size.id} size={size} fetchSizeList={fetchSizeList} />
            )}
        </div>
    );
}