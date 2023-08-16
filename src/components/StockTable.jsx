import React from 'react';
import { DragDropContext, Draggable } from "react-beautiful-dnd";
import { ITEMS_PER_PAGE } from '../constants';
import DropComponent from './DropComponent';
import styles from '../styles/StockTable.module.css'

function StockTable({ stocks, currentPage, onDragEnd }) {

    const hasData = !!stocks.length;

    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <table>
                <thead>
                    <tr>
                        <th>Номер</th>
                        <th>Код акции</th>
                        <th>Имя компании</th>
                        <th>Последняя цена</th>
                    </tr>
                </thead>
                <DropComponent>
                    {hasData
                        ?
                        stocks.map((stock, index) => {
                        const formattedCompanyName = stock.companyName.endsWith('.')
                            ? stock.companyName
                            : stock.companyName + '.';
                            
                        const rowNumber = (currentPage - 1) * ITEMS_PER_PAGE + index + 1;

                        return (
                            <Draggable key={stock.symbol} draggableId={stock.symbol} index={index}>
                                {(provided) => (
                                    <tr
                                        className={styles.stockRow}
                                                key={stock.symbol}
                                                ref={provided.innerRef}
                                                {...provided.draggableProps}
                                                {...provided.dragHandleProps}
                                            >
                                        <td className={styles.stockNumber}>{rowNumber}</td>
                                        <td className={styles.stockCode}>{stock.symbol}</td>
                                        <td className={styles.companyName}>{formattedCompanyName}</td>
                                        <td className={styles.latestPrice}>{stock.latestPrice}</td>
                                    </tr>
                                )}
                            </Draggable>
                        )})
                        : <tr className={styles.noDataRow}><td colSpan="4">Нет результатов</td></tr>}
                </DropComponent>
            </table>
        </DragDropContext>
    );
}

export default StockTable;