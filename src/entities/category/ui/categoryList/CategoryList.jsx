import React from 'react';
import Classes from './CategoryList.module.css';
import { CategoryListItem } from './categoryListItem';

export const CategoryList = ({ categoryList, fetchCategoryList }) => {
    return (
        <div className={Classes.list}>
            {categoryList.map(category =>
                <CategoryListItem key={category.id} category={category} fetchCategoryList={fetchCategoryList} />
            )}
        </div>
    );
}