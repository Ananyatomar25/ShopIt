import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />

        <div className="home__row">
          <Product
            id="12321341"
            title="Summer Dresses for Women Beach Floral Tshirt Sundress Sleeveless Pockets Casual Loose Tank Dress"
            price={2839}
            rating={5}
            image="https://m.media-amazon.com/images/I/81SoFQNZ90L._AC_UY741_.jpg"
          />
          <Product
            id="49538094"
            title="TOZO T6 True Wireless Earbuds Bluetooth Headphones Touch Control with Wireless Charging Case"
            price={3999}
            rating={4}
            image="https://m.media-amazon.com/images/I/71Z09LgdOPL._AC_SX466_.jpg"
          />
          <Product
            id="49536094"
            title="The Recovery Agent: A Novel (Gabriela Rose Book 1)"
            price={239}
            rating={4}
            image="https://m.media-amazon.com/images/I/51BqAvlC4nL.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="4903850"
            title="Cliganic 10 Pack Mosquito Repellent Bracelets, DEET-Free Waterproof Bands"
            price={199}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/81C2TGpctLL.__AC_SY300_SX300_QL70_FMwebp_.jpg"
          />
          <Product
            id="23445930"
            title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
            price={5099}
            rating={5}
            image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
          />
          <Product
            id="3254354345"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={11999}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="90829332"
            title="Lash Princess False Lash Effect Mascara | Gluten & Cruelty Free"
            price={249}
            rating={4}
            image="https://m.media-amazon.com/images/I/61K6cQhw4EL._AC_SX466_.jpg"
          />
          <Product
            id="90829332"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
            price={50999}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
          />
          <Product
            id="90829332"
            title="iGENJUN Women's Long Sleeve Button Down Tunic Dresses with Pockets"
            price={1094}
            rating={4}
            image="https://m.media-amazon.com/images/I/615LbO3-33L._AC_UY741_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
