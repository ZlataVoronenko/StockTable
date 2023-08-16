import React from 'react';
import styles from '../styles/SortDropdown.module.css'

function SortDropdown({ onSortChange }) {

    const handleSortChange = (event) => {
        const value = event.target.value;
        onSortChange(value);
    };

    return (
        <div className={styles.sort}>
            <label>
                <div className={styles.sortContainer}>
                    <div className={styles.sortContent}>
                        <div>
                        Сортировка:
                        </div>
                        <div>
                            <select onChange={handleSortChange} className={styles.select}>
                                <option value="">Выберите сортировку</option>
                                <option value="symbol_asc">Код акций (A-Z)</option>
                                <option value="symbol_desc">Код акций (Z-A)</option>
                                <option value="companyName_asc">Имя компании (A-Z)</option>
                                <option value="companyName_desc">Имя компании (Z-A)</option>
                                <option value="price_asc">Последняя цена (по возрастанию)</option>
                                <option value="price_desc">Последняя цена (по убыванию)</option>
                            </select>
                        </div>
                    </div>
                </div>
            </label>
        </div>
    );
}

export default SortDropdown;
