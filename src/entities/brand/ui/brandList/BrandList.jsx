import React from 'react';
import Classes from './BrandList.module.css'
import { BrandListItem } from './brandListItem';

export const BrandList = ({ brandList, fetchBrandList }) => {
    return (
        <div className={Classes.list}>
            {brandList.map(brand =>
                <BrandListItem key={brand.id} brand={brand} fetchBrandList={fetchBrandList} />
            )}
        </div>
    );
}
