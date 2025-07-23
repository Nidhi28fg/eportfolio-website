import React, { useState } from 'react';

function Product({ product, onToggleLike }) {
  return (
    <div>
      <h3>{product.name}</h3>
      <button onClick={() => onToggleLike(product.id)}>
        {product.isLiked ? 'Unlike' : 'Like'}
      </button>
    </div>
  );
}

function ProductList({ products: initialProducts }) {
  const [products, setProducts] = useState(initialProducts);

  const handleToggleLike = (productId) => {
    setProducts((prevProducts) =>
      prevProducts.map((p) =>
        p.id === productId ? { ...p, isLiked: !p.isLiked } : p
      )
    );
  };

  return (
    <div>
      {products.map((product) => (
        <Product key={product.id} product={product} onToggleLike={handleToggleLike} />
      ))}
    </div>
  );
}

// Example usage:
const initialProductData = [
  { id: 1, name: 'Product A', isLiked: false },
  { id: 2, name: 'Product B', isLiked: true },
];

function counter() {
  return <ProductList products={initialProductData} />;
}

export default counter;