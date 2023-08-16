import { filterStocks } from '../../utils/stocks';

describe('filterStocks', () => {
    const sampleStocks = [
        { symbol: 'MSFT-MM', companyName: 'Microsoft Corp.', latestPrice: 4322 },
        { symbol: '018260-KP', companyName: 'Samsung Sds Co. Ltd.', latestPrice: 176000 },
        { symbol: 'GOOGL', companyName: 'Alphabet Inc.', latestPrice: 2000 }
    ];

    test('should filter stocks based on query and return stocks containing the query', () => {
        const result = filterStocks(sampleStocks, 'Sam');
        expect(result).toEqual([{ symbol: '018260-KP', companyName: 'Samsung Sds Co. Ltd.', latestPrice: 176000 }]);
    });

    test('should prioritize stocks where the query matches from the start of the company name', () => {
        const result = filterStocks(sampleStocks, 'mic');
        expect(result[0]).toEqual({ symbol: 'MSFT-MM', companyName: 'Microsoft Corp.', latestPrice: 4322 });
    });
});

describe('filterStocks', () => {
    const sampleStocks = [
        { symbol: 'MSFT-MM', companyName: 'Microsoft Corp.', latestPrice: 4322 },
        { symbol: '018260-KP', companyName: 'Samsung Sds Co. Ltd.', latestPrice: 176000 },
        { symbol: 'GOOGL', companyName: 'Alphabet Inc.', latestPrice: 2000 }
    ];

    test('should filter stocks based on query and return stocks containing the query', () => {
        const result = filterStocks(sampleStocks, 'Sam');
        expect(result).toEqual([{ symbol: '018260-KP', companyName: 'Samsung Sds Co. Ltd.', latestPrice: 176000 }]);
    });

    test('should prioritize stocks where the query matches from the start of the company name', () => {
        const result = filterStocks(sampleStocks, 'mic');
        expect(result[0]).toEqual({ symbol: 'MSFT-MM', companyName: 'Microsoft Corp.', latestPrice: 4322 });
    });
});
