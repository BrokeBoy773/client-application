import React from 'react';
import Classes from './SizeBox.module.css';
import { SizeList } from '../../../entities/size/ui/sizeList';
import { SizeBoxTitle } from '../../../entities/size/ui/sizeBoxTitle';

export const SizeBox = ({ sizeList, fetchSizeList }) => {
    return (
        <div className={Classes.container}>
            <SizeBoxTitle counter={sizeList.length} fetchSizeList={fetchSizeList} />
            <SizeList sizeList={sizeList} fetchSizeList={fetchSizeList}/>
        </div>
    );
}
