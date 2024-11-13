import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from './Title';
import ProductItems from './ProductItems';

const RelatedProducts = ({ category, subCategory }) => {
  const { products } = useContext(ShopContext);
  const [related, setRelated] = useState([]);  // Use useState([]) for initialization

  useEffect(() => {
    if (products.length > 0 && category && subCategory) {
      // Filter products based on both category and subCategory in a single step
      const relatedProducts = products.filter(
        (item) => item.category === category && item.subCategory === subCategory
      );

      // Take the first 5 related products
      setRelated(relatedProducts.slice(0, 5));
    }
  }, [products, category, subCategory]);  // Re-run effect when products, category, or subCategory change

  return (
    <div className='my-24'>
      <div className='text-center text-3xl py-2'>
        <Title text1={'RELATED'} text2={'PRODUCTS'} /> 
      </div>

      {/* Check if there are any related products */}
      {related.length === 0 ? (
        <div className="text-center py-4">No related products found.</div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
          {related.map((item) => (
            <ProductItems
              key={item._id}  // Use a unique identifier (item._id)
              id={item._id}
              name={item.name}
              image={item.image}
              price={item.price}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default RelatedProducts;
