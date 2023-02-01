import styled from 'styled-components';
import { useAppSelector } from '../store/store';
import { ShoppingItem, SortedGood } from '../utils/goodsSorter';
import { SortedGoods } from '../utils/goodsSorter';
import Category from './Category';

const StyledGoods = styled.div`
  max-width: 100%;
  width: 1340px;
  background-color: var(--white);
  border-radius: 10px 10px 0px 0px;
  padding: 40px 60px;
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
