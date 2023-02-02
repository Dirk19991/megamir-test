import styled from 'styled-components';
import { addToCart, removeFromCart } from '../store/shoppingCartSlice';
import { useAppDispatch, useAppSelector } from '../store/store';
import { SortedGood } from '../utils/goodsSorter';

interface BuyButtonProps {
  info: SortedGood;
}

const StyledBuyButton = styled.button`
  position: absolute;
  width: 280px;
  height: 35px;
  background-color: var(--mediumgrey);
  font-family: 'Inter', sans-serif;
  font-weight: 700;
  font-size: var(--p3);
  line-height: var(--p3);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--white);
  bottom: 0;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

const Minus = styled.span`
  display: inline-block;
  margin-right: 10px;
  font-size: 25px;
`;

const Plus = styled.span`
  display: inline-block;
  font-size: 20px;
  margin-left: 10px;
`;

const Quantity = styled.span`
  display: inline-block;
  font-size: 18px;
`;

function BuyButton({ info }: BuyButtonProps) {
  const dispatch = useAppDispatch();

  const quantity = useAppSelector(
    (state) => state.shoppingCart.items[info.title]?.quantity
  );

  function addToCartHandler() {
    if (quantity) {
      return;
    }
    dispatch(addToCart(info));
  }

  function minusHandler() {
    dispatch(removeFromCart(info));
  }

  function plusHandler() {
    dispatch(addToCart(info));
  }

  return (
    <StyledBuyButton onClick={() => addToCartHandler()}>
      {quantity ? (
        <>
          <Minus onClick={() => minusHandler()}>-</Minus>{' '}
          <Quantity>{quantity}</Quantity>
          <Plus onClick={() => plusHandler()}>+</Plus>
        </>
      ) : (
        'Купить'
      )}
    </StyledBuyButton>
  );
}
export default BuyButton;
