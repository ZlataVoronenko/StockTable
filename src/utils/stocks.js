export const filterStocks = (stocks, query) => {
    const lowerCaseQuery = query.toLowerCase();
    return stocks
        .filter(stock => stock.companyName.toLowerCase().includes(lowerCaseQuery))
        .sort((a, b) => {
            const indexA = a.companyName.toLowerCase().indexOf(lowerCaseQuery);
            const indexB = b.companyName.toLowerCase().indexOf(lowerCaseQuery);
            if (indexA === 0 && indexB !== 0) return -1;
            if (indexB === 0 && indexA !== 0) return 1;
            return indexA - indexB;
        });
}

const sortingFunctions = {
    symbol: (a, b, direction) => {
        if (a.symbol < b.symbol) return direction === 'asc' ? -1 : 1;
        if (a.symbol > b.symbol) return direction === 'asc' ? 1 : -1;
        return 0;
    },
    companyName: (a, b, direction) => {
        if (a.companyName < b.companyName) return direction === 'asc' ? -1 : 1;
        if (a.companyName > b.companyName) return direction === 'asc' ? 1 : -1;
        return 0;
    },
    price: (a, b, direction) => {
        return direction === 'asc' ? a.latestPrice - b.latestPrice : b.latestPrice - a.latestPrice;
    }
};

export const sortStocks = (stocks, value) => {
    const [sortParam, sortDirection] = value.split('_');
    if (sortingFunctions[sortParam]) {
        return [...stocks].sort((a, b) => sortingFunctions[sortParam](a, b, sortDirection));
    }
    return stocks;
}