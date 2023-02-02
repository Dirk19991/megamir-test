import styled from 'styled-components';
import { useAppSelector } from '../store/store';
import { countItems } from '../utils/countItems';
import { countSum } from '../utils/countSum';
import ShoppingCart from './ShoppingCart';

const StyledHeader = styled.header`
  width: 1340px;
  height: 102px;
  display: flex;
  justify-content: space-between;
  border-radius: 0px 0px 8px 8px;
  background-color: var(--white);

  @media (max-width: 1360px) {
    width: 1068px;
  }

  @media (max-width: 1065px) {
    width: 768px;
  }

  @media (max-width: 780px) {
    width: 320px;
  }
`;

const Logo = styled.div`
  padding: 29px 60px;

  @media (max-width: 780px) {
    padding: 29px 10px;
  }
`;

function Header() {
  return (
    <StyledHeader>
      <Logo>
        <img src="./assets/logo.svg" alt="logo" />
      </Logo>
      <ShoppingCart />
    </StyledHeader>
  );
}
export default Header;
