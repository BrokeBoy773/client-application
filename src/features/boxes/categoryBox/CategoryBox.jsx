import React from 'react';
import Classes from './CategoryBox.module.css';
import { CategoryList } from '../../../entities/category/ui/categoryList';
import { CategoryBoxTitle } from '../../../entities/category/ui/categoryBoxTitle';

export const CategoryBox = ({ categoryList, fetchCategoryList }) => {
    return (
        <div className={Classes.container}>
            <CategoryBoxTitle counter={categoryList.length} fetchCategoryList={fetchCategoryList} />
            <CategoryList categoryList={categoryList} fetchCategoryList={fetchCategoryList}/>
        </div>
    );
}
