import styled from 'styled-components';
import { SortedGood } from '../utils/goodsSorter';
import Card from './Card';

interface CategoryProps {
  category: SortedGood[];
}

const StyledCategory = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
`;

const CategoryHeader = styled.div`
  font-family: 'ABeeZee', sans-serif;
  font-size: var(--h3);
  line-height: var(--h3_lineHeight);
  letter-spacing: 0.01em;
`;

const CardsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
  margin-bottom: -4px;
`;

const SeparationLine = styled.div`
  width: 1219px;
  height: 2px;
  background-color: var(--lightgrey);
  margin-bottom: 46px;

  @media (max-width: 1360px) {
    width: 968px;
  }

  @media (max-width: 1065px) {
    width: 600px;
  }

  @media (max-width: 780px) {
    width: 280px;
  }
`;

function Category({ category }: CategoryProps) {
  const categoryName = category[0].category;
  return (
    <StyledCategory>
      <CategoryHeader>{categoryName}</CategoryHeader>
      <CardsWrapper>
        {category.map((item) => (
          <Card key={item.id} info={item} />
        ))}
      </CardsWrapper>
      <SeparationLine />
    </StyledCategory>
  );
}
export default Category;
