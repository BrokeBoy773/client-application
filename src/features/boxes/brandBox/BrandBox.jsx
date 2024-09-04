import React from 'react';
import Classes from './BrandBox.module.css';
import { BrandList } from '../../../entities/brand/ui/brandList';
import { BrandBoxTitle } from '../../../entities/brand/ui/brandBoxTitle/BrandBoxTitle';

export const BrandBox = ({ brandList, fetchBrandList }) => {
    return (
        <div className={Classes.container}>
            <BrandBoxTitle counter={brandList.length} fetchBrandList={fetchBrandList} />
            <BrandList brandList={brandList} fetchBrandList={fetchBrandList} />
        </div>
    );
}
