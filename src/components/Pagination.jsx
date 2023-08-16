import React from 'react';
import styles from '../styles/Pagination.module.css';

function Pagination({ page, setPage, hasMore }) {

    return (
        <div className={styles.pagination}>
            <div className={styles.paginationContent}>
                <button onClick={() => setPage(page - 1)} disabled={page === 1}>
                    <div className={styles.text}>Назад</div>
                </button>
                <div className={styles.text}>Страница: {page}</div>
                <button onClick={() => setPage(page + 1)} disabled={!hasMore}>
                    <div className={styles.text}>Вперед</div>
                </button>
            </div>
        </div>
    );
}

export default Pagination;