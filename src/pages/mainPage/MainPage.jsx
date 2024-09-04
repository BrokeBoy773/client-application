import React, { useEffect, useState } from 'react';
import Classes from './MainPage.module.css'
import { LeftBar } from '../../widgets/bar/leftBar';
import { MiddleBar } from '../../widgets/bar/middleBar';
import { RightBar } from '../../widgets/bar/rightBar';
import { ProductService } from '../../entities/product/api';
import { CategoryService } from '../../entities/category/api';
import { BrandService } from '../../entities/brand/api';
import { SizeService } from '../../entities/size/api';
import { StatusService } from '../../entities/status/api';

export const MainPage = () => {
    const [productList, setProductList] = useState();
    const [categoryList, setCategoryList] = useState();
    const [brandList, setBrandList] = useState();
    const [sizeList, setSizeList] = useState();
    const [statusList, setStatusList] = useState();

    const fetchProductList = async (searchString, sortItem, sortOrder) => {
        const response = await ProductService.getAllProductsAsync(searchString, sortItem, sortOrder);
        setProductList(response.data);
    }

    const fetchCategoryList = async () => {
        const response = await CategoryService.getAllCategoriesAsync();
        setCategoryList(response.data);
    }

    const fetchBrandList = async () => {
        const response = await BrandService.getAllBrandsAsync();
        setBrandList(response.data);
    }

    const fetchSizeList = async () => {
        const response = await SizeService.getAllSizesAsync();
        setSizeList(response.data);
    }

    const fetchStatusList = async () => {
        const response = await StatusService.getAllStatusesAsync();
        setStatusList(response.data);
    }

    useEffect(() => {
        fetchProductList();
        fetchCategoryList();
        fetchBrandList();
        fetchSizeList();
        fetchStatusList();
    }, [])

    if (productList && categoryList && brandList && sizeList && statusList) {
        return (
            <div className={Classes.mainPage}>
                <LeftBar
                    productList={productList}
                    categoryList={categoryList}
                    brandList={brandList}
                    sizeList={sizeList}
                    statusList={statusList}

                    fetchProductList={fetchProductList}
                />

                <MiddleBar />

                <RightBar
                    categoryList={categoryList}
                    brandList={brandList}
                    sizeList={sizeList}
                    statusList={statusList}

                    fetchCategoryList={fetchCategoryList}
                    fetchBrandList={fetchBrandList}
                    fetchSizeList={fetchSizeList}
                    fetchStatusList={fetchStatusList}
                />
            </div>
        );
    }
}