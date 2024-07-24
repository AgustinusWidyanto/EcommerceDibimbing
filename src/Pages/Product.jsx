import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { useParams } from 'react-router-dom';
import Breadcrumbs from '../Component/Breadcrumbs/Breadcrumbs';
import ProductDisplay from '../Component/ProductDisplay/ProductDisplay';
import DescriptionBox from '../Component/DescriptionBox/DescriptionBox';
import RelatedProducts from '../Component/RelatedProducts/RelatedProducts';

const Product = () => {
   const {all_product} = useContext(ShopContext);
   const {productId} = useParams();
   const product = all_product.find((e)=> e.id === Number(productId))
  //  console.log(product)
  return (
    <div >
      <Breadcrumbs product={product} />
      <ProductDisplay product={product} />
      <DescriptionBox />
      <RelatedProducts />
    </div>
  )
}

export default Product