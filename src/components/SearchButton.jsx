import React from 'react';
import styles from '../styles/SearchButton.module.css';

const SearchButton = ({ searchQuery, onSearchChange }) => {
    return (
        <div>
            <input
                className={styles.searchInput}
                type="text"
                placeholder="Поиск по имени компании..."
                value={searchQuery}
                onChange={e => onSearchChange(e.target.value)}
            />
        </div>
    );
}

export default SearchButton;