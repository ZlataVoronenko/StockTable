const stockReducer = (state = [], action) => {
    switch (action.type) {
        case 'FETCH_STOCKS':
            return action.payload;
        case 'REORDER_STOCKS':
            return action.payload;
        default:
            return state;
    }
}

export default stockReducer;
