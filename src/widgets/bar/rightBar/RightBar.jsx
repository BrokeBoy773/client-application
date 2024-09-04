import React, { useState } from 'react';
import Classes from './RightBar.module.css';
import { CategoryBox } from '../../../features/boxes/categoryBox';
import { BrandBox } from '../../../features/boxes/brandBox/BrandBox';
import { SizeBox } from '../../../features/boxes/sizeBox';
import { StatusBox } from '../../../features/boxes/statusBox';
import { SelectButton } from '../../../shared/ui/buttons/selectButton';

export const RightBar = ({ categoryList, brandList, sizeList, statusList, fetchCategoryList, fetchBrandList, fetchSizeList, fetchStatusList }) => {

  const [selectedListButton, setSelectedListButton] = useState('categoryList');

  return (
    <div className={Classes.rightBar}>
      <form className={Classes.selectContainer}>
        <SelectButton
          title='Категории'
          type='radio'
          name='selectListButtonGroup'
          value='categoryList'
          selected={selectedListButton}
          checked={selectedListButton === 'categoryList'}
          onChange={x => setSelectedListButton(x.target.value)}
        />

        <SelectButton
          title='Бренды'
          type='radio'
          name='selectListButtonGroup'
          value='brandList'
          selected={selectedListButton}
          checked={selectedListButton === 'brandList'}
          onChange={x => setSelectedListButton(x.target.value)}
        />

        <SelectButton
          title='Размеры'
          type='radio'
          name='selectListButtonGroup'
          value='sizeList'
          selected={selectedListButton}
          checked={selectedListButton === 'sizeList'}
          onChange={x => setSelectedListButton(x.target.value)}
        />

        <SelectButton
          title='Статусы'
          type='radio'
          name='selectListButtonGroup'
          value='statusList'
          selected={selectedListButton}
          checked={selectedListButton === 'statusList'}
          onChange={x => setSelectedListButton(x.target.value)}
        />
      </form>


      {selectedListButton === 'categoryList' &&
        <CategoryBox categoryList={categoryList} fetchCategoryList={fetchCategoryList} />}

      {selectedListButton === 'brandList' &&
        <BrandBox brandList={brandList} fetchBrandList={fetchBrandList} />}

      {selectedListButton === 'sizeList' &&
        <SizeBox sizeList={sizeList} fetchSizeList={fetchSizeList} />}

      {selectedListButton === 'statusList' &&
        <StatusBox statusList={statusList} fetchStatusList={fetchStatusList} />}
    </div>
  );
}
