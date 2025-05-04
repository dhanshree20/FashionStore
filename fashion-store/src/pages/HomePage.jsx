import React from 'react';
import Button from '../components/ui/button';
import herosImage from "../assets/heros.jpg";
import specialImage from "../assets/special.jpg";


function HomePage() {


  const features = [
    {
      id: 1,
      icon: "🌍",
      title: "Worldwide Shipping",
      description:
        "Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
    },
    {
      id: 2,
      icon: "👗",
      title: "Best Quality",
      description:
        "Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
    },
    {
      id: 3,
      icon: "🏷️",
      title: "Best Offers",
      description:
        "Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
    },
    {
      id: 4,
      icon: "🔒",
      title: "Secure Payments",
      description:
        "Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
    },
  ];


  const logos = [
    { id: 1, src: "./logo5.png" },
    { id: 2, src: "./logo3.png" },
    { id: 3, src: "./logo4.png" },
    { id: 4, src: "./logo5.png" },
    { id: 5, src: "./logo1.png" },
  ];



  const products = [
    {
      id: 1,
      name: "DNK Yellow Shoes",
      category: "Men",
      oldPrice: "$150.00",
      newPrice: "$120.00",
      image: "./yellowshoes.jpg",
      sale: true,
      rating: 0,
    },
    {
      id: 2,
      name: "DNK Blue Shoes",
      category: "Men",
      newPrice: "$200.00 - $240.00",
      image: "./blueshoes.jpg",
      colors: ["#1E90FF", "#32CD32", "#FF4500"],
      sale: false,
      rating: 0,
    },
    {
      id: 3,
      name: "Dark Brown Jeans",
      category: "Men",
      newPrice: "$150.00",
      image: "./brownjeans.jpg",
      sale: false,
      rating: 0,
    },
    {
      id: 4,
      name: "Blue Denim Jeans",
      category: "Women",
      newPrice: "$150.00",
      image: "denim.jpg",
      sale: false,
      rating: 0,
    },
    {
      id: 5,
      name: "Basic Gray Jeans",
      category: "Women",
      newPrice: "$150.00",
      image: "./gray.jpg",
      sale: false,
      rating: 0,
    },
    {
      id: 6,
      name: "Blue Denim Shorts",
      category: "Women",
      oldPrice: "$150.00",
      newPrice: "$130.00",
      image: "./shorts.jpg",
      sale: true,
      rating: 0,
    },
    {
      id: 7,
      name: "Anchor Bracelet",
      category: "Accessories",
      newPrice: "$150.00 - $180.00",
      image: "./anchor.jpg",
      colors: ["black", "brown", "orange"],
      sale: false,
      rating: 0,
    },
    {
      id: 8,
      name: "Boho Bangle Bracelet",
      category: "Accessories",
      newPrice: "$150.00 - $170.00",
      image: "./boho.jpg",
      colors: ["#1E90FF", "#32CD32", "#FF4500"],
      sale: false,
      rating: 0,
    },
    {
      id: 9,
      name: "Light Brown Purse",
      category: "Accessories",
      newPrice: "$150.00",
      image: "./purse.jpg",
      sale: false,
      rating: 0,
    },
    {
      id: 10,
      name: "Bright Red Bag",
      category: "Accessories",
      newPrice: "$150.00 - $140.00",
      image: "./bag.jpg",
      colors: ["#1E90FF", "orange", "purple", "brown"],
      sale: false,
      rating: 0,
    },
  ];

  const promos = [
    {
      title: "20% Off On Tank Tops",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac dictum.",
      button: "SHOP NOW",
      image: "./image2.jpg",
    },
    {
      title: "Latest Eyewear For You",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac dictum.",
      button: "SHOP NOW",
      image: "./image1.jpg",
    },
    {
      title: "Let's Lorem Suit Up!",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac dictum.",
      button: "CHECK OUT",
      image: "./image3.jpg",
    },
  ];


  return (
    <div>
      {/* Part 1 */}
      <nav className="navbar">
        <div className="logo">DNK</div>
        <div className="nav-links">
          <a href="#">EVERYTHING</a>
          <a href="#">WOMEN</a>
          <a href="#">MEN</a>
          <a href="#">ACCESSORIES</a>
        </div>
        <div className="nav-actions">
          <a href="#">ABOUT</a>
          <a href="#">CONTACT US</a>
          <span>$0.00</span>
          <span className="lock-icon">🔒</span>
          <span className="profile-icon">👤</span>
        </div>
      </nav>

      <section
        className="hero-section"
        style={{ backgroundImage: `url(${herosImage})` }}
      >
        <div className="hero-content">
          <h1><span>Raining Offers For</span><br /><span>Hot Summer!</span></h1>

          <p>25% Off On All Products</p>
          <div className="hero-buttons">
            <button className="btn-primary">SHOP NOW</button>
            <button className="btn-secondary">FIND MORE</button>
          </div>
        </div>
      </section>
      {/* Part 1 end */}

      <div className="brand-logos-wrapper">
        <button className="arrow left">{'<'}</button>

        <div className="brand-logos">
          {logos.map((logo) => (
            <div key={logo.id} className="logo-item">
              <img src={logo.src} alt={`Logo ${logo.id}`} />
              <p>{logo.name}</p>
            </div>
          ))}
        </div>
        <button className="arrow right">{'>'}</button>
      </div>

      <div className="promo-container">
        {promos.map((promo, index) => (
          <div
            key={index}
            className="promo-card"
            style={{ backgroundImage: `url(${promo.image})` }}
          >
            <div className="promo-content">
              <h3>{promo.title}</h3>
              <p>{promo.description}</p>
              <button>{promo.button}</button>
            </div>
          </div>
        ))}
      </div>

      <div className="featured-products">
        <h2>Featured Products</h2>
        <div className="product-grid">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              {product.sale && <span className="badge">Sale</span>}
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p>{product.category}</p>
              <p className="price">
                <span className="old-price">{product.oldPrice}</span>{" "}
                <span className="new-price">{product.newPrice}</span>
              </p>
              <div className="colors">
                {(product.colors || []).map((color, index) => (
                  <span
                    key={index}
                    className="color-dot"
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>
              <div className="stars">★★★★★</div>
            </div>
          ))}
        </div>
      </div>
      
      <section
        className="special-offer"
        style={{ backgroundImage: `url(${specialImage})` }}
      >
        <div className="offer-content">
          <p className="limited">Limited Time Offer</p>
          <h2>Special Edition</h2>
          <p className="description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
          <p className="discount">
            Buy This T-shirt At 20% Discount, Use Code OFF20
          </p>
          <button className="shop-btn">SHOP NOW</button>
        </div>
      </section>

      <section className="features-section">
        {features.map((feature) => (
          <div className="feature-item" key={feature.id}>
            <div className="feature-icon">{feature.icon}</div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </section>

      <footer className="footer">
        <div className="footer-top">
          <p>SALE UP TO 70% OFF FOR ALL CLOTHES & FASHION ITEMS, ON ALL BRANDS.</p>
        </div>

        <div className="footer-main">
          <div className="footer-column">
            <h3>DNK</h3>
            <p>The best look anytime, anywhere.</p>
          </div>

          <div className="footer-column">
            <h4>For Her</h4>
            <ul>
              <li>Women Jeans</li>
              <li>Tops and Shirts</li>
              <li>Women Jackets</li>
              <li>Heels and Flats</li>
              <li>Women Accessories</li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>For Him</h4>
            <ul>
              <li>Men Jeans</li>
              <li>Men Shirts</li>
              <li>Men Shoes</li>
              <li>Men Accessories</li>
              <li>Men Jackets</li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Subscribe</h4>
            <input type="email" placeholder="Your email address..." />
            <button>SUBSCRIBE</button>
          </div>
        </div>

        <div className="footer-bottom">
          <p>Copyright © 2022 Brandstore. Powered by Brandstore.</p>
          <div className="social-icons">
            <span className="facebook-icon"><i className="fab fa-facebook-f"></i></span>
            <span className="youtube-icon"><i className="fab fa-youtube"></i></span>
            <span className="twitter-icon"><i className="fab fa-twitter"></i></span>
            <span className="instagram-icon"><i className="fab fa-instagram"></i></span>
            <span className="google-icon"><i className="fab fa-google"></i></span>

          </div>
        </div>
      </footer>
    </div>
  );
}

export default HomePage;
