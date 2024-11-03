import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Four04 from '../../Four04/Four04';

function ProductPage() {
  const [product, setproducts] = useState([]);
  const { productId } = useParams();
  useEffect(() => {
    fetch("http://localhost:3000/iphones")
      .then((res) => res.json())
      .then((data) => {
        const productList = data.products;
        let singleProduct = productList.filter(
          (x) => x.prodct_url == productId
        );
        setproducts(singleProduct);
      });
  }, [productId]);
  console.log(product);
  
    if(product.length){
  return (
    <>
      <section className="internal-page-wrapper top-100">
        <div className="container">
          {product.map((product) => {
            let {
              description_id,
              price_id,
              price_range,
              prodct_url,
              product_brief_description,
              product_description,
              product_id,
              product_img,
              product_link,
              product_name,
              starting_price,
            } = product;

            let productDiv = (
              <div key={prodct_url} className="bottom-100">
                <div className="row justify-content-center text-center bottom-50">
                  <div className="col-12">
                    <div className="title-wraper bold">{product_name}</div>
                    <div className="brief-description">
                      {product_brief_description}
                    </div>
                  </div>
                </div>

                <div className="row justify-content-center text-center product-holder h-100">
                  <div className={`col-sm-12 col-md-6 my-auto`}>
                    <div className="starting-price">
                      {`Starting at ${starting_price}`}
                    </div>
                    <div className="monthly-price">{price_range}</div>
                    <div className="product-details">{product_description}</div>
                  </div>

                  <div className={`col-sm-12 col-md-6`}>
                    <div className="prodict-image">
                      <img src={product_img} />
                    </div>
                  </div>
                </div>
              </div>
            );
            return productDiv;
          })}
        </div>
      </section>
    </>
  );
} else {
    return <Four04/>
}
}

export default ProductPage
