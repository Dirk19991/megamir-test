import { useEffect } from 'react';
import styled from 'styled-components';
import Goods from './components/Goods';
import Header from './components/Header';
import { fetchGoods } from './store/allGoodsSlice';
import { useAppDispatch } from './store/store';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchGoods());
  }, []);

  return (
    <Wrapper>
      <Header />
      <Goods />
    </Wrapper>
  );
}

export default App;
