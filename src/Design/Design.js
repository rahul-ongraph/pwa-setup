
import React from 'react';
import './Design.css';
import banner from '../images/banner_img.png'
import arrival from '../images/arrival_1.svg'
import blog from '../images/blog_1.svg'
import brand1 from '../images/brand_1.svg'
import brand2 from '../images/brand_2.svg'
import brand3 from '../images/brand_3.svg'
import brand4 from '../images/brand_4.svg'
import catagory1 from '../images/catagory_1.svg'
import catagory2 from '../images/catagory_2.svg'
import catagory3 from '../images/catagory_3.svg'
import catagory4 from '../images/catagory_4.svg'
import collection from '../images/catagory_collection.svg'
import product1 from '../images/trend_product_1.svg'
import product2 from '../images/trend_product_2.svg'
import product3 from '../images/trend_product_3.svg'
import product4 from '../images/trend_product_4.svg'
import collection1 from '../images/dbl_collection_1.svg'
import collection2 from '../images/dbl_collection_2.svg'
import collection3 from '../images/dbl_collection_3.svg'
import collection4 from '../images/dbl_collection_4.svg'
import collection_banner from '../images/collection_1.svg'
import Collection_banner_sample from '../images/collection_2.svg'
import Arrival from '../images/new_arrival.svg'
import arrival1 from '../images/arrival_1.svg'
import arrival2 from '../images/arrival_2.svg'
import arrival3 from '../images/arrival_3.svg'
import arrival4 from '../images/arrival_4.svg'
import fb from '../images/fb.svg'
import user_icn from '../images/user_icn.svg'
import msg from '../images/msg_icn.svg'

function Design() {
	return (
		<div>
			<div className="wrap_header">
				<div className="left_header">
					<h4 className="logo_wrap">Logo</h4>
				</div>
				<div className="input-icons">
					<i class="fa fa-search search" aria-hidden="true"></i>
					<input
						className="input-field"
					/>
					<i class="fa fa-user" style={{marginLeft:30}} aria-hidden="true"></i>
					<i class="fa fa-commenting-o" aria-hidden="true"></i>
				</div>
			</div>
			<div className="wrap_banner">
				<div className="wrap-text">
					<h2 className="wrap-text-1">50% off</h2>
					<h1 className="wrap-text-2">Summer</h1>
					<h2 className="wrap-text-3">Collections</h2>
					<button className="btn-btn">Shop Now</button>
				</div>
				<div>
					<img className="wrap_img" src={banner} />
				</div>
			</div>
			<div className="wrap_category">
				<div className="category_section">
					<div className="wrap_heading">
						<p>   CATEGORIES</p>
						<button className="btn_text">View All
						<i class="fas fa-angle-right" style={{marginLeft:10}}></i>
						</button>
					</div>
					<div className="card_wrap">
						<div className="card">
							<img className="img_wrap" src={catagory1} />
						</div>
						<div className="card">
							<img className="img_wrap" src={catagory2} />
						</div>
						<div className="card">
							<img className="img_wrap" src={catagory3} />
						</div>
						<div className="card">
							<img className="img_wrap" src={catagory4} />
						</div>
						<div>
						</div>
					</div>
				</div>
			</div>
			<div className="wrap_collection">
				<img src={collection} />
				<div className="wrap-collection_text">
					<h2 className="wrap-collection-1">New Collection</h2>
					{/* <h1 className="wrap-text-2">Summer</h1> */}
					<h2 className="wrap-collection-2">Lorem ipsum has been the industry</h2>
					<button className="btn-btn">Shop Now</button>
				</div>
			</div>
			<div className="treading">
				<div className="treading_section">
					<div className="wrap_heading">
						<p> TREADING PRODUCTS</p>
						<button className="btn_text">View All
						<i class="fas fa-angle-right" style={{marginLeft:10}}></i>
						</button>
					</div>
					<div className="card_wrap">
						<div className="card">
							<img className="img_wrap" src={product1} />
							<p className="brand_name">T SHIRTS</p>
							<p className="brand_text_name">Lorem ipsum dolor sit amet consectetur</p>
							<button className="btn_view_wrap">View All</button>
						</div>
						<div className="card">
							<img className="img_wrap" src={product2} />
							<p className="brand_name">T SHIRTS</p>
							<p className="brand_text_name">Lorem ipsum dolor sit amet consectetur</p>
							<button className="btn_view_wrap">View All</button>
						</div>
						<div className="card">
							<img className="img_wrap" src={product3} />
							<p className="brand_name">T SHIRTS</p>
							<p className="brand_text_name">Lorem ipsum dolor sit amet consectetur</p>
							<button className="btn_view_wrap">View All</button>
						</div>
						<div className="card">
							<img className="img_wrap" src={product4} />
							<p className="brand_name">T SHIRTS</p>
							<p className="brand_text_name">Lorem ipsum dolor sit amet consectetur</p>
							<button className="btn_view_wrap">View All</button>
						</div>
					</div>
				</div>
			</div>
			<div className="our_collection">
				<div>
				<p className="collection_heading">our collection </p>
				</div>
				<div className="wrap_container">
       <img src={collection_banner} />	
				<div className="col_2_grid">
					<img src={collection1} />
					<img src={collection2} />
				</div>
				<div className="col_2_grid">
					<img src={collection3} />
					<img src={collection4} />
				</div>
				<div>
				<img src={Collection_banner_sample} />	
				</div>
				</div>
			</div>
			<div className="wrap_arrival">
				<img src={Arrival} />
				<div className="wrap-collection_text">
				<h2 className="wrap-text-1">50% off</h2>
					<h1 className="wrap-arrival_text-2">NEW ARRIVALS</h1>
					<button className="btn-btn">Shop Now</button>
				</div>
			</div>
						<div className="arrival_section">
					<div className="wrap_heading">
						<p>	NEW ARRIVALS</p>
						<button className="btn_text">View All
						<i class="fas fa-angle-right" style={{marginLeft:10}}></i>
						</button>
					</div>
					<div className="card_wrap_arrival">
						<div className="card_arrival">
							<img className="img_wrap" src={arrival1} />
						</div>
						<div className="card_arrival">
							<img className="img_wrap" src={arrival2} />
						</div>
						<div className="card_arrival">
							<img className="img_wrap" src={arrival3} />
						</div>
						<div className="card_arrival">
							<img className="img_wrap" src={arrival4} />
						</div>
						<div>
						</div>
					</div>
				</div>
				<div className="wrap_news">
				<div>	
				<p className="sign_up_text">SIGN UP FOR OUR NEWSLETTER</p>
				<p className="Lorem_ipsum">Lorem Ipsum is simply dummy text</p>
				</div>
				<div className="wrap_input">
					<input
					className="wrap_input_field"
					placeholder="ENTER YOUR EMAIL"
					 />
					 <div className="wrap_button">
					<button  className="btn_wrap">Sign up
						</button> 
						</div>
				</div>
				</div>
				<div className="footer">
				<div className="footer_wrap">
					<h5>CATEGORIES</h5>
					<p>MEN</p>
					<p>WOMEN</p>
					<p>HANDBASS</p>
					<p>WATCHES</p>
					<p>HOME</p>
          <p>SHOES</p>
					<p>FRAGMENTS</p>
					<p>KIDS</p>
				</div>
				<div className="footer_wrap">
					<h5>CATEGORIES</h5>
					<p>WOMEN</p>
					<p>MEN</p>
					<p>HOME</p>
					<p>BEAUTY</p>
					<p>WATCHES</p>
				</div>
				<div className="footer_wrap">
					<h5>CATEGORIES</h5>
					<p>MEN</p>
					<p>WOMEN</p>
					<p>HANDBASS</p>
					<p>WATCHES</p>
				</div>
				<div className="footer_wrap">
				<h5>CATEGORIES</h5>
					<p>MEN</p>
					<p>WOMEN</p>
					<p>HANDBASS</p>
					<p>WATCHES</p>
					<p>HOME</p>
          <p>SHOES</p>
					<p>FRAGMENTS</p>
					<p>KIDS</p>
				</div>
				<div className="footer_wrap">
				<h5>CATEGORIES</h5>
					<p>MEN</p>
					<p>WOMEN</p>
					<p>HANDBASS</p>
					<p>WATCHES</p>
					<p>HOME</p>
          <p>SHOES</p>
					<p>FRAGMENTS</p>
					<p>KIDS</p>
				</div>
				<div className="footer_wrap">
				<h5>CATEGORIES</h5>
				<span  style={{color:'red'}}>1500 + BRANDS </span> 
				<div>
				<span>Well cultured 3 Lakhs +  Products</span>
				</div>
				<span  style={{color:'red'}}>FREE SHIPPING</span> 
				<div>
				<span>For order Above INR 1000</span>
				</div>
				<span  style={{color:'red'}}>GENINUE PRODUCTS	</span> 
				<div>
				<span>For order Above INR 1000</span>
				</div>
				<span  style={{color:'red'}}>FOLLOW US</span>
				<div className="icon_wrap">
					<div>
         <img src={fb} />
				 </div>
				 <div>
				 <img src={user_icn} />
				 </div>
				 <div>
				 <img src={msg} />
				 </div>
				 <div>
				 <img src={fb} />
				 </div>
				 <div>
				 <img src={user_icn} />
				 </div>
				 </div>
				</div>
				</div>
				</div>
	);
}
export default Design;
