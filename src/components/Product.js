
function Product({product}) {
  return (
    <div className="product-card">
    <span>-20%</span>
        <img className="product-img" src={product.productUrl} alt=""/>
        <div className="product-price">
            <div className="amount">
                {product.price.amount}
            </div>
            <div className="currency">
                {product.price.currency}
            </div>
        </div>
        <button className="add-product">
           <i class="fa-solid fa-cart-plus"></i>
           Add To Cart
        </button>
        <h4 className="product-name">{product.name}</h4>
    </div>
  )
}

export default Product