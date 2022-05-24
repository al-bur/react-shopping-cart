import productActionType from 'redux/products/products.types';

import { PRODUCT_INITIAL_STATE } from 'constants';

const productsReducer = (state = PRODUCT_INITIAL_STATE, action) => {
  switch (action.type) {
    case productActionType.fetchProductStart:
    case productActionType.fetchProductsStart:
      return {
        ...state,
        isLoading: true,
      };

    case productActionType.fetchProductsSuccess:
      return {
        ...state,
        isLoading: false,
        products: action.payload,
        error: null,
      };

    case productActionType.fetchProductSuccess:
      return {
        ...state,
        product: action.payload,
        isLoading: false,
        error: null,
      };

    case productActionType.fetchProductError:
    case productActionType.fetchProductsError:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default productsReducer;
