import styled from 'styled-components';
import { useAppSelector } from '../store/store';
import { countItems } from '../utils/countItems';
import { countSum } from '../utils/countSum';

const StyledShoppingCart = styled.div`
  position: relative;
  width: 150px;
  height: 34px;
  display: flex;
  align-items: center;
  margin: 35px 60px;
  border-radius: 30px;
  background-color: var(--darkgrey);
  font-size: var(--p1);
  font-weight: 700;
  line-height: var(--p1_lineHeight);

  @media (max-width: 780px) {
    margin: 35px 10px;
  }
`;

const Sum = styled.div`
  color: var(--white);
  position: absolute;
  left: 25px;
`;

const VerticalLine = styled.div`
  position: absolute;
  height: 16.84px;
  width: 1px;
  background-color: var(--white);
  opacity: 0.25;
  right: 70px;
`;

const CartImage = styled.div`
  position: absolute;
  display: flex;
  color: var(--white);
  gap: 5px;
  margin-left: 4px;
  right: 21px;
`;

function ShoppingCart() {
  const cart = useAppSelector((state) => state.shoppingCart);
  const sum = countSum(cart);
  const quantity = countItems(cart);

  return (
    <StyledShoppingCart>
      <Sum>{sum}$</Sum>
      <VerticalLine />
      <CartImage>
        <img src="./assets/shoppingCart.svg" alt="shoppingCart" />
        <div>{quantity}</div>
      </CartImage>
    </StyledShoppingCart>
  );
}
export default ShoppingCart;
