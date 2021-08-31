import React from 'react';
import styled from 'styled-components';
import { useFilterContext } from '../context/filter_context';
import { GridView, ListView } from '../components';
const ProductList = () => {
  const { filtered_products: products, grid_view } = useFilterContext();

  if (products.length < 1) {
    return (
      <h5 style={{ textTransform: 'none' }}>There are no matching products</h5>
    );
  }
  if (grid_view) {
    return <GridView products={products} />;
  }
  return <ListView products={products} />;
};

export default ProductList;
