import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setProducts } from '../redux/slices/productSlice';

const ProductList = () => {
  const products = useSelector(state => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setProducts([{ id: 1, name: 'Laptop' }, { id: 2, name: 'Phone' }]));
  }, [dispatch]);

  return (
    <ul>
      {products.map(p => (
        <li key={p.id}>{p.name}</li>
      ))}
    </ul>
  );
};

export default ProductList;
