import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import FlexWrapper from 'components/@shared/FlexWrapper/FlexWrapper';
import Pagination from 'components/@shared/Pagination/Pagination';
import WithSpinner from 'components/@shared/WithSpinner/WithSpinner';

import ProductCard from 'components/ProductCard/ProductCard';

import { fetchCartsStart } from 'redux/carts/carts.action';
import { selectCurrentCarts } from 'redux/carts/carts.selector';
import { fetchProductsStart } from 'redux/products/products.action';
import { selectCurrentProducts } from 'redux/products/products.selector';
import { selectIsProductsLoading } from 'redux/products/products.selector';

import { isInCart } from 'utils/check';

function ProductCardGroup() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsProductsLoading);
  const products = useSelector(selectCurrentProducts);
  const carts = useSelector(selectCurrentCarts);

  const [page, setPage] = useState(localStorage.getItem('page') ?? 1);

  const handlePage = (page) => {
    setPage(page);

    localStorage.setItem('page', page);
  };

  useEffect(() => {
    dispatch(fetchProductsStart(page));
    dispatch(fetchCartsStart());
  }, [page]);

  return (
    <WithSpinner isLoading={isLoading}>
      <FlexWrapper flexDirection="column" gap="60px">
        <Styled.Root>
          {products.map((product) => {
            return (
              <ProductCard
                key={product.id}
                // THINK: isincart를 여기서 하는 게 맞을까? 여기서 하면 안될듯
                $isincart={isInCart(product.id, carts)}
                {...product}
              />
            );
          })}
        </Styled.Root>
        <Pagination page={page} handlePage={handlePage} />
      </FlexWrapper>
    </WithSpinner>
  );
}

const Styled = {
  Root: styled.div`
    display: grid;
    width: 70%;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 22px;
    justify-content: center;
  `,
};

export default ProductCardGroup;
