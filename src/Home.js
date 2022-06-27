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
            id="9082933245"
            title="Lash Princess False Lash Effect Mascara | Gluten & Cruelty Free"
            price={249}
            rating={4}
            image="https://m.media-amazon.com/images/I/61K6cQhw4EL._AC_SX466_.jpg"
          />
          <Product
            id="9082933212"
            title="Sassy Stacks of Circles Stacking Ring STEM Learning Toy, Age 6+ Months, Multi, 9 Piece Set"
            price={499}
            rating={4}
            image="https://m.media-amazon.com/images/I/71NMrhZel6L._AC_UL320_.jpg"
          />
          <Product
            id="9082933297"
            title="iGENJUN Women's Long Sleeve Button Down Tunic Dresses with Pockets"
            price={1094}
            rating={4}
            image="https://m.media-amazon.com/images/I/615LbO3-33L._AC_UY741_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="12321341533"
            title="Chalk Markers - 8 Vibrant Colors, Erasable, Non-Toxic, Water-Based, Reversible Tips, Bright Colors For Kids "
            price={309}
            rating={5}
            image="https://m.media-amazon.com/images/I/91yg7CcMuqL._AC_UL320_.jpg"
          />
          <Product
            id="49538094434"
            title="50Ft LED Strip Lights Music Sync Color Changing RGB LED Strip 44-Key Remote, Sensitive Built-in Mic, App Controlled LED Lights"
            price={999}
            rating={4}
            image="https://m.media-amazon.com/images/I/81DwO7ZZs2L._AC_UL320_.jpg"
          />
          <Product
            id="49536095454"
            title="MGRBG Luminous Temporary Tattoos for Kids 200 Styles Mixed Cute Cartoon"
            price={239}
            rating={4}
            image="https://m.media-amazon.com/images/I/81yjreXo9NL._AC_UL320_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="12323431341"
            title="Summer Dresses for Women Beach Floral Tshirt Sundress Sleeveless Pockets Casual Loose Tank Dress"
            price={2839}
            rating={5}
            image="https://m.media-amazon.com/images/I/61KpRdnVYrL._AC_UL320_.jpg"
          />
          <Product
            id="4953094"
            title="TOZO Bluetooth 5.3 Wireless Earbuds - available with a pack of earbuds"
            price={3999}
            rating={4}
            image="https://m.media-amazon.com/images/I/711iRifG4PL._AC_UL320_.jpg"
          />
          <Product
            id="4953536094"
            title="Foldable Phone Stand for Desk - Adjustable Height Cell Phone Holder Portable Cellphone Cradle Desktop"
            price={2839}
            rating={4}
            image="https://m.media-amazon.com/images/I/61uYaoUy-oL._AC_UL320_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="12321434341"
            title="Fin Fun Adult Reinforced Mermaid Tail for Swimming"
            price={2839}
            rating={5}
            image="https://m.media-amazon.com/images/I/51a586mXLoS._AC_UL320_.jpg"
          />
          <Product
            id="49423538094"
            title="Sponsored EYENJOY Lip Liner, Long-Lasting, Waterproof"
            price={3999}
            rating={4}
            image="https://m.media-amazon.com/images/I/51Hi6BzP0fL._AC_UL320_.jpg"
          />
          <Product
            id="4954443236094"
            title="Bigib Toddler Kids Swim Water Shoes Quick Dry Non-Slip Water Skin Barefoot Sports Shoes Aqua Socks for Boys Girls Toddle"
            price={2399}
            rating={4}
            image="https://m.media-amazon.com/images/I/81iCHstsjsL._AC_UL320_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="12376921341"
            title="BOSOBO Paint Brushes Set, 2 Pack 20 Pcs Round Pointed Tip Paintbrushes"
            price={499}
            rating={5}
            image="https://m.media-amazon.com/images/I/81ON4-sLO0L._AC_UL320_.jpg"
          />
          <Product
            id="49530878094"
            title="Unicorn Pajamas for Girls 100% Quality Cotton Kids Sleepover Matching PJS Set Summer Tee"
            price={2899}
            rating={4}
            image="https://m.media-amazon.com/images/I/61mFyP1a6lL._AC_UL320_.jpg"
          />
          <Product
            id="49536448894"
            title="100 Glow Sticks Bulk Party Supplies - Glow in The Dark Fun Party Pack with 8"
            price={339}
            rating={4}
            image="https://m.media-amazon.com/images/I/81spSdLPgLL._AC_UL320_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
