import styled from 'styled-components';
import { SortedGood } from '../utils/goodsSorter';
import { hideOverflow, showOverflow } from '../utils/overflowHandlers';
import { addToCart, removeFromCart } from '../store/shoppingCartSlice';
import { useAppDispatch, useAppSelector } from '../store/store';

interface CardProps {
  info: SortedGood;
}

const CardWrapper = styled.div`
  position: relative;
  width: 280px;
  height: 439px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 19px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 0 28px;
`;

const ImageWrapper = styled.div`
  width: 280px;
  height: 210px;
  display: flex;
  justify-content: center;

  > img {
    height: 100%;
    width: auto;
    max-width: 190px;
    object-fit: contain;
  }
`;

const Title = styled.h3`
  font-size: var(--p1);
  line-height: var(--p1_lineHeight);
  margin-right: 20px;
  max-height: 40px;
  overflow: hidden;
  cursor: pointer;
`;

const Description = styled.p`
  font-size: var(--p3);
  line-height: var(--p3_lineHeight);
  font-weight: 300;
  max-height: 60px;
  overflow: hidden;

  &:hover {
    cursor: pointer;
  }
`;

const Price = styled.div`
  position: absolute;
  bottom: 48px;
  left: 29px;
  font-weight: 700;
  font-size: var(--p1);
  line-height: var(--p1_lineHeight);
`;

const Rating = styled.div`
  position: absolute;
  bottom: 47px;
  right: 17px;
  height: 26px;
  width: 26px;
  background-color: var(--mediumgrey);
  border-radius: 50px;
  font-weight: 700;
  font-size: var(--rate);
  line-height: var(--rate_lineHeight);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--white);
`;

const BuyButton = styled.button`
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

function Card({ info }: CardProps) {
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
    <CardWrapper>
      <ImageWrapper>
        <img src={info.image} alt={info.title} />
      </ImageWrapper>
      <Title>{info.title}</Title>
      <Description>{info.description}</Description>
      <Price>{info.price} $</Price>
      <Rating>{info.rating.rate}</Rating>
      <BuyButton onClick={() => addToCartHandler()}>
        {quantity ? (
          <>
            <Minus onClick={() => minusHandler()}>-</Minus>{' '}
            <Quantity>{quantity}</Quantity>
            <Plus onClick={() => plusHandler()}>+</Plus>
          </>
        ) : (
          'Купить'
        )}
      </BuyButton>
    </CardWrapper>
  );
}
export default Card;
