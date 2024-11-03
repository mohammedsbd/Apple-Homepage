import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom'


function Iphone() {
  const [products,setproducts] = useState([])
  useEffect(() =>{
      fetch("http://localhost:3000/iphones")
        .then((res) => res.json())
        .then((products) => {
          setproducts(() => products.products);
        });
  },[])
  
  let flip = true
  return (
    <>
      <section className="internal-page-wrapper top-100">
        <div className="row justify-content-center text-center">
          <div className="col-12">
            <div className="title-wraper b
            old">Iphones</div>
            <div className="brief-description">The best for the brightest.</div>
          </div>
        </div>
        {products.map((singleproduct) => {
          // console.log(singleproduct);

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
          } = singleproduct;
          let order1 = 1;
          let order2 = 2;
          if(flip){
              order1 = 2;
              order2 = 1;
              flip =!flip
          } else{
            flip = !flip
          }

          let productDiv = (
            <div
              className="row justify-content-center text-center product-holder h-100 top-100 bottom-100"
              key={prodct_url}
            >
              <div className={`col-sm-12 col-md-6 my-auto order-${order1}`}>
                <div className="product-title">{product_name}</div>
                <div className="product-brief">{product_brief_description}</div>
                <div className="starting-price">
                  {`Starting at ${starting_price}`}
                </div>
                <div className="monthly-price">{price_range}</div>
                <div className="links-wrapper">
                  <ul>
                    <li>
                      <Link to={prodct_url}>Learn more</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className={`col-sm-12 col-md-6 order-${order2}`}>
                <div className="prodict-image">
                  <img src={product_img} alt="" />
                </div>
              </div>
            </div>
          );
         return productDiv;
        })}
        
      </section>
    </>
  );
}

export default Iphone
