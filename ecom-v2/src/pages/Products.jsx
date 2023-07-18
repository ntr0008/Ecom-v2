import React, { useState, useEffect } from "react";
import styles from "../styles/Products.module.css";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("http://localhost:3002/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setFilteredProducts(data);
      })
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  const handleSearch = (event) => {
    const searchTerm = event.target.value;
    setSearchTerm(searchTerm);
    filterProducts(searchTerm);
  };

  const filterProducts = (searchTerm) => {
    const filtered = products.filter((product) =>
      product.shipModel.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  return (
    <div className={styles["product-page"]}>
      <h1>Products</h1>
      <div className={styles.filter}>
        <input
          className={styles["filter-input"]}
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={handleSearch}
        />
        <button className={styles["filter-button"]} type="button">
          Filter
        </button>
      </div>
      <section className={styles.products}>
        {filteredProducts.map((product) => (
          <div className={styles.product} key={product.shipModel}>
            <p className={styles.title}>{product.shipModel}</p>
            <img src={product.shipPhotos} alt={product.shipDescription} />
            <p className={styles.description}>{product.shipDescription}</p>
            <p className={styles.price}>
              <span>$</span>
              <span>{product.shipPrice}</span>
            </p>
            <button type="button" className={styles["add-to-cart-btn"]}>
              <i className="fas fa-shopping-cart"></i>Add To Cart
            </button>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Products;
