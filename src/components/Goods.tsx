import styled from 'styled-components';
import { useAppSelector } from '../store/store';
import { ShoppingItem, SortedGood } from '../utils/goodsSorter';
import { SortedGoods } from '../utils/goodsSorter';
import Category from './Category';

const StyledGoods = styled.div`
  width: 1340px;
  background-color: var(--white);
  border-radius: 10px 10px 0px 0px;
  padding: 40px 60px;

  @media (max-width: 1360px) {
    width: 1068px;
  }

  @media (max-width: 1065px) {
    width: 768px;
  }

  @media (max-width: 780px) {
    width: 320px;
  }

  @media (max-width: 780px) {
    width: 320px;
    padding: 40px 20px;
  }
`;

function Goods() {
  const allGoods = useAppSelector((state) => state.allGoods.goods);

  const allGoodsArray: SortedGood[][] = [];

  for (let category in allGoods as SortedGoods) {
    const arr: SortedGood[] = [];
    allGoods &&
      allGoods[category].forEach((good) => {
        arr.push(good);
      });
    allGoodsArray.push(arr);
  }

  return (
    <StyledGoods>
      {allGoodsArray.map((category, index) => (
        <Category key={category[index].id} category={category}></Category>
      ))}
    </StyledGoods>
  );
}
export default Goods;
