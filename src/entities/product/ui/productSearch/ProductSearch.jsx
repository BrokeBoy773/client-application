import React, { useState } from 'react';
import Classes from './ProductSearch.module.css';
import { sortItems } from './sortItems';
import { sortOrders } from './sortOrders';
import { Modal } from '../../../../shared/ui/modal/Modal';
import { RectangularAccentButton } from '../../../../shared/ui/buttons/rectangularAccentButton';
import { FilterSquareButton } from '../../../../shared/ui/buttons/squareButton/filterSquareButton';
import { SearchSquareButton } from '../../../../shared/ui/buttons/squareButton/searchSquareButton';
import { CloseSquareButton } from '../../../../shared/ui/buttons/squareButton/closeSquareButton';
import { Input } from '../../../../shared/ui/input';
import { Select } from '../../../../shared/ui/select';

export const ProductSearch = ({ fetchProductList }) => {
    const [searchString, setSearchString] = useState('');
    const [sortItem, setSortItem] = useState('name');
    const [sortOrder, setSortOrder] = useState('asc');

    const [visibleProductSearchModal, setVisibleProductSearchModal] = useState(false);

    return (
        <div className={Classes.container}>
            <form>
                <Input
                    value={searchString}
                    onChange={x => setSearchString(x.target.value)}
                    type='text'
                    placeholder='Поиск...'
                />
            </form>

            <div className={Classes.buttonPanel}>
                <FilterSquareButton onClick={(event) => {
                    event.preventDefault();
                    setVisibleProductSearchModal(true);
                }}
                />

                <SearchSquareButton onClick={(event) => {
                    event.preventDefault();
                    fetchProductList(searchString, sortItem, sortOrder);
                }}
                />
            </div>

            <Modal visible={visibleProductSearchModal} setVisible={setVisibleProductSearchModal}>
                <div className={Classes.modalContainer}>
                    <div className={Classes.modalHeader}>
                        <div>Фильтры</div>

                        <CloseSquareButton onClick={() => setVisibleProductSearchModal(false)} />
                    </div>

                    <div className={Classes.modalMain}>
                        <div className={Classes.modalMainItem}>
                            <div>Предмет сортировки:</div>

                            <Select
                                value={sortItem}
                                onChange={x => {
                                    const newSortItem = x.target.value;
                                    setSortItem(newSortItem);
                                    fetchProductList(searchString, newSortItem, sortOrder);
                                }}
                            >
                                <option value={''} disabled>Выберите способ сортировки</option>
                                {sortItems.map(item =>
                                    <option key={item.id} value={item.value}>{item.name}</option>
                                )}
                            </Select>
                        </div>

                        <div className={Classes.modalMainItem}>
                            <div>Порядок сортировки:</div>

                            <Select
                                value={sortOrder}
                                onChange={x => {
                                    const newSortOrder = x.target.value;
                                    setSortOrder(newSortOrder);
                                    fetchProductList(searchString, sortItem, newSortOrder);
                                }}
                            >
                                <option value={''} disabled>Выберите порядок сортировки</option>
                                {sortOrders.map(order =>
                                    <option key={order.id} value={order.value}>{order.name}</option>
                                )}
                            </Select>
                        </div>
                    </div>

                    <div className={Classes.modalFooter}>
                        <RectangularAccentButton onClick={(event) => {
                            event.preventDefault();
                            setVisibleProductSearchModal(false);
                        }}
                        >
                            Сохранить изменения
                        </RectangularAccentButton>
                    </div>
                </div>
            </Modal>
        </div>
    );
}
