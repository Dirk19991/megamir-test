export interface SortedGood {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

export interface ShoppingItem {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

export interface SortedGoods {
  [category: string]: SortedGood[];
}

export function goodsSorter(goods: ShoppingItem[]) {
  const categoriesSet = new Set<string>();

  goods.forEach((good) => {
    categoriesSet.add(good.category);
  });

  const categories: string[] = Array.from(categoriesSet);
  const sortedGoods: SortedGoods = {};

  categories.forEach((category) => {
    sortedGoods[category] = [];
  });

  goods.forEach((good) => {
    sortedGoods[good.category].push(good);
  });

  return sortedGoods;
}
