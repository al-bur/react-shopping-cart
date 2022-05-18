import ShoppingCartItem from 'components/ShoppingCartItem/ShoppingCartItem';

import { ColumnFlexWrapper } from 'styles/Wrapper';

function ShoppingCartItemsContainer({ carts }) {
  return (
    <ColumnFlexWrapper>
      {/* TODO: rest 사용해주기 */}
      {carts.map(({ id, name, image, price, checked }) => (
        <ShoppingCartItem
          key={id}
          id={id}
          name={name}
          thumbnail={image}
          price={price}
          checked={checked}
        />
      ))}
    </ColumnFlexWrapper>
  );
}

export default ShoppingCartItemsContainer;
