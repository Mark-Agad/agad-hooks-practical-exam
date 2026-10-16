import { useState, useMemo, useCallback } from 'react';
import ProductList from './ProductList';

const CATEGORIES = ['Electronics', 'Books', 'Clothing', 'Toys'];

const PRODUCTS = Array.from({ length: 600 }, (_, i) => ({
  id: i + 1,
  name: `Product ${i + 1}`,
  category: CATEGORIES[i % CATEGORIES.length],
  price: ((i * 37) % 500) + 10,
}));

function Exam5() {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('All');
  const [sortOrder, setSortOrder] = useState('asc');
  const [selectedId, setSelectedId] = useState(null);
  const [counter, setCounter] = useState(0);

  const visibleProducts = useMemo(() => {
    console.log('Filtering and sorting products');
    return PRODUCTS
      .filter((p) => p.name.toLowerCase().includes(query.toLowerCase()))
      .filter((p) => category === 'All' || p.category === category)
      .sort((a, b) => (sortOrder === 'asc' ? a.price - b.price : b.price - a.price));
  }, [query, category, sortOrder]);

  const handleSelect = useCallback((id) => {
    setSelectedId(id);
  }, []);

  return (
    <div>
      <h1>Product Explorer</h1>

      <div>
        <button onClick={() => setCounter(counter + 1)}>
          Unrelated counter: {counter}
        </button>
      </div>

      <input
        type="text"
        placeholder="Search products"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="All">All</option>
        {CATEGORIES.map((c) => (
          <option key={c} value={c}>
            {c}
          </option>
        ))}
      </select>

      <select value={sortOrder} onChange={(e) => setSortOrder(e.target.value)}>
        <option value="asc">Price: low to high</option>
        <option value="desc">Price: high to low</option>
      </select>

      <p>Selected product: {selectedId ?? 'none'}</p>
      <p>Showing {visibleProducts.length} products</p>

      <ProductList products={visibleProducts} onSelect={handleSelect} />
    </div>
  );
}

export default Exam5;