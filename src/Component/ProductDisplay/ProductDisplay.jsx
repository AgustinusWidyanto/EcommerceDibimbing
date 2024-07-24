import React from 'react'
import './ProductDisplay.css'
import star_icon from '../Assets/star_icon.png'
import star_dull_icon from '../Assets/star_dull_icon.png'

const ProductDisplay = (props) => {
    const {product} = props;
  return (
    <div className='productdisplay'>
        <div className="productdisplay-left">
            <div className="pdleft-img-list">
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
            </div>
            <div className="pdleft-img">
                <img className='pdleft-mainimg' src={product.image} alt="" />
            </div>
        </div>
        <div className="productdisplay-right">
            <h1>{product.name}</h1>
            <div className="pdright-star">
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_dull_icon} alt="" />
                <p>(122)</p>
            </div>
            <div className="pdright-prices">
                <div className="pdright-old">${product.old_price}</div>
                <div className="pdright-new">${product.new_price}</div>
            </div>
            <div className="pdright-description">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab sint, illo, rem soluta distinctio officia quae vitae aut neque iste recusandae laudantium magnam libero. Laudantium quia velit vel soluta laborum?
            </div>
            <div className="pdright-size-top">
                <h1>Select Size</h1>
                <div className='pdright-size'>
                    <div>S</div>
                    <div>M</div>
                    <div>L</div>
                    <div>XL</div>
                    <div>XXL</div>
                </div>
            </div>
            <button>ADD TO CART</button>
            <p className="pdright-category"><span>Category: </span>Women, T-Shirt, Crop Top</p>
            <p className="pdright-category"><span>Tags: </span>Modern</p>
        </div>
    </div>
  )
}

export default ProductDisplay