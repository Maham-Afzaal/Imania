'use client'
import React, { useEffect, useState } from "react";
import styles from './page.module.css';
const Page = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://dummyjson.com/products");
      const data = await res.json();
      setData(data);
    };

    fetchData();
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <head>
        <title>Imania Dashboard</title>
        <meta name="description" content="Dashboard Page" />
        <link rel="icon" href="/dashboard.png" />
      </head>
      <div>
        <div>
          {data.products.map((item) => (
            <div key={item.id} className={styles.item}>
              <div className={styles.divs}>
              <p>ID: {item?.id}</p>
              <p>Brand: {item?.brand}</p>
              <p>Title: {item.title}</p>
              <p>Description: {item.description}</p>
              <p>Price: {item.price}</p>
              <p>Discount: {item.discountPercentage}</p>
              <p>Category: {item.category}</p>
              <p>Rating: {item.rating}</p>
              </div>
              <div className={styles.divs}>
              <img src={item.thumbnail} className={styles.responsiveImg}/>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
