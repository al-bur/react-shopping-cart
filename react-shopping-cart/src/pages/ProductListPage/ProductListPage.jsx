import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import ProductCardGroup from 'components/ProductCardGroup/ProductCardGroup';

import { selectProductsError } from 'redux/products/products.selector';

function ProductListPage() {
  const error = useSelector(selectProductsError);

  useEffect(() => {
    if (error) {
      throw new Error(error);
    }
  }, [error]);

  return <ProductCardGroup />;
}

export default ProductListPage;
