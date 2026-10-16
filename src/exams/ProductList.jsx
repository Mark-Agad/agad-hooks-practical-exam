import { memo } from 'react';

function ProductList({ products, onSelect }) {
  console.log('ProductList rendered');

  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>
          {product.name} - {product.category} - ${product.price}{' '}
          <button onClick={() => onSelect(product.id)}>Select</button>
        </li>
      ))}
    </ul>
  );
}

export default memo(ProductList);