import React from 'react';
import "./products.css";
import {product_data} from "../config/product_data.js";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const Card=()=>{
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
      const list=product_data.map((e)=><div>
<div class="product-card">
<div class="product-image">
<img src={e.img}></img>
<div class="product-overlay">
      <a href="#" class="product-overlay-link">View Details</a>
    </div>
</div>
		<div class="product-details">		<h4 class="product-title"><b>{e.product_name}</b>
					</h4>
                    <p class="product-description">{e.description}</p>
					<p class="product-price">{e.currency} {e.price}</p>
			</div>
            </div>	
    </div>)
    return(
        <div>
<Carousel swipeable={true}
  draggable={true}
  showDots={true}
responsive={responsive}
ssr={true} // means to render carousel on server-side.
  
>
{list}
</Carousel>
        </div>
);
}
export default Card;