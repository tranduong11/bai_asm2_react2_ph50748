const initialState = {
    items: [],
    loading: false,
    error: null,
  };
  
  export const distributorReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_DISTRIBUTORS_REQUEST':
        return { ...state, loading: true };
      case 'FETCH_DISTRIBUTORS_SUCCESS':
        return { ...state, loading: false, items: action.payload };
      case 'FETCH_DISTRIBUTORS_FAIL':
        return { ...state, loading: false, error: action.payload };
  
      case 'DELETE_DISTRIBUTOR_SUCCESS':
        return {
          ...state,
          items: state.items.filter((d) => d.id !== action.payload),
        };
  
      default:
        return state;
    }
  };
  