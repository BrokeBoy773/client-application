import React from 'react';
import Classes from './ProductModal.module.css';
import { Modal } from '../../../../../shared/ui/modal/Modal';
import { CloseSquareButton } from '../../../../../shared/ui/buttons/squareButton/closeSquareButton';
import { Input } from '../../../../../shared/ui/input';
import { Select } from '../../../../../shared/ui/select';
import { RectangularAccentButton } from '../../../../../shared/ui/buttons/rectangularAccentButton';

export const ProductModal = ({ categoryList, brandList, sizeList, statusList, visible, setVisible, product, setProduct, actionProduct, headerText, buttonText }) => {
    return (
        <Modal visible={visible} setVisible={setVisible}>
            <div className={Classes.container}>
                <div className={Classes.header}>
                    <div>{headerText}</div>

                    <CloseSquareButton onClick={() => setVisible(false)} />
                </div>

                <form className={Classes.main}>
                    <div className={Classes.mainItem}>
                        <div>Название:</div>

                        <Input
                            value={product.name}
                            onChange={x => setProduct({ ...product, name: x.target.value })}
                            type='text'
                            placeholder='Введите название продукта'
                        />
                    </div>

                    <div className={Classes.mainItem}>
                        <div>Категория:</div>

                        <Select
                            value={product.categoryId || ''}
                            onChange={x => setProduct({ ...product, categoryId: x.target.value })}
                        >
                            <option value={''} disabled>Выберите категорию</option>
                            {categoryList.map(category =>
                                <option key={category.id} value={category.id}>{category.name}</option>
                            )}
                        </Select>
                    </div>

                    <div className={Classes.mainItem}>
                        <div>Бренд:</div>

                        <Select
                            value={product.brandId || ''}
                            onChange={x => setProduct({ ...product, brandId: x.target.value })}
                        >
                            <option value={''} disabled>Выберите бренд</option>
                            {brandList.map(brand =>
                                <option key={brand.id} value={brand.id}>{brand.name}</option>
                            )}
                        </Select>
                    </div>

                    <div className={Classes.mainItem}>
                        <div>Размер:</div>

                        <Select
                            value={product.sizeId || ''}
                            onChange={x => setProduct({ ...product, sizeId: x.target.value })}
                        >
                            <option value={''} disabled>Выберите размер</option>
                            {sizeList.map(size =>
                                <option key={size.id} value={size.id}>{size.name}</option>
                            )}
                        </Select>
                    </div>

                    <div className={Classes.mainItem}>
                        <div>Статус:</div>

                        <Select
                            value={product.statusId || ''}
                            onChange={x => setProduct({ ...product, statusId: x.target.value })}
                        >
                            <option value={''} disabled>Выберите статус</option>
                            {statusList.map(status =>
                                <option key={status.id} value={status.id}>{status.name}</option>
                            )}
                        </Select>
                    </div>
                </form>

                <div className={Classes.footer}>
                    <RectangularAccentButton onClick={actionProduct}>
                        {buttonText}
                    </RectangularAccentButton>
                </div>
            </div>
        </Modal>
    );
}
