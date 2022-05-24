import mockData from '../../mocks/mockData.json';

import {
  fetchProductStart,
  fetchProductSuccess,
  fetchProductsStart,
  fetchProductsSuccess,
} from 'redux/products/products.action';
import productsReducer from 'redux/products/products.reducer';

import { FETCH_PRODUCTS_LIMIT, PRODUCT_INITIAL_STATE } from 'constants/index';

describe('product reducer 테스트', () => {
  test('상품 목록 받아오기', () => {
    const page = 1;

    expect(
      productsReducer(PRODUCT_INITIAL_STATE, fetchProductsStart(page))
    ).toEqual({
      isLoading: true,
      products: [],
      product: null,
      error: null,
    });

    const products = mockData.products.slice(
      (page - 1) * FETCH_PRODUCTS_LIMIT,
      page * FETCH_PRODUCTS_LIMIT
    );

    expect(
      productsReducer(PRODUCT_INITIAL_STATE, fetchProductsSuccess(products))
    ).toEqual({
      isLoading: false,
      products: products,
      product: null,
      error: null,
    });
  });

  test('상품 받아오기', () => {
    const id = 1;

    expect(
      productsReducer(PRODUCT_INITIAL_STATE, fetchProductStart(id))
    ).toEqual({
      isLoading: true,
      products: [],
      product: null,
      error: null,
    });

    const product = mockData.products.find((product) => product.id === id);

    expect(
      productsReducer(PRODUCT_INITIAL_STATE, fetchProductSuccess(product))
    ).toEqual({
      isLoading: false,
      products: [],
      product: product,
      error: null,
    });
  });
});
