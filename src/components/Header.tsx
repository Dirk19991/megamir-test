import styled from 'styled-components';
import { useAppSelector } from '../store/store';
import { countItems } from '../utils/countItems';
import { countSum } from '../utils/countSum';

const StyledHeader = styled.header`
  max-width: 100%;
  height: 102px;
  display: flex;
  justify-content: space-between;
  border-radius: 0px 0px 8px 8px;
  background-color: var(--white);
`;

const ShoppingCart = styled.div`
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
`;

const Logo = styled.div`
  padding: 29px 60px;
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

function Header() {
  const cart = useAppSelector((state) => state.shoppingCart);
  const sum = countSum(cart);
  const quantity = countItems(cart);

  return (
    <StyledHeader>
      <Logo>
        <img src='./assets/logo.svg' alt='logo' />
      </Logo>
      <ShoppingCart>
        <Sum>{sum}$</Sum>
        <VerticalLine />
        <CartImage>
          <img src='./assets/shoppingCart.svg' alt='shoppingCart' />
          <div>{quantity}</div>
        </CartImage>
      </ShoppingCart>
    </StyledHeader>
  );
}
export default Header;
