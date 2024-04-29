// import React from "react";
// import styles from "./page.module.css";
// import Link from "next/link";
// import Image from "next/image";

// async function getData() {
//   // const res = await fetch("https://jsonplaceholder.typicode.com/photos", {
//   const res = await fetch("https://dummyjson.com/carts", {
//     cache: "no-store",
//   });
//   return res.json();
// }

// const Blog = async () => {
//   const response = await getData();
//   const data = response.carts; // Accessing the array under the key "carts"
//   return (
//     <div>
//     <div className={styles.mainContainer}>
//       {data.map((item) => (
//         <Link href={`/blog/${item.id}`} className={styles.container} key={item.id}>
//           <div className={styles.imageContainer}>
//             <Image
//               src={item.products.thumbnail}
//               alt=""
//               width={400}
//               height={250}
//               className={styles.image}
//             />
//           </div>
//           <div className={styles.content}>
//             <h1 className={styles.title}>{item.id}</h1>
//             <p className={styles.desc}>{item.title}</p>
//           </div>
//         </Link>
//       ))}
//     </div>
//     </div>
//   );
// };

// export default Blog;
"use client"
import React, { useEffect, useState } from "react";
import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";

async function getData() {
  const res = await fetch("https://dummyjson.com/carts", {
    cache: "no-store",
  });
  return res.json();
}

const Blog = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getData();
      setData(response.carts);
    };

    fetchData();
  }, []);

  return (
    <div className={styles.mainContainer}>
      {data.map((cart) => (
        <div className={styles.container} key={cart.id}>
          {cart.products.map((product) => (
            <Link href={`/blog/${cart.id}`} key={product.id} style={{display:'flex',gap:'10px',marginTop:'1rem'}}>
              <div className={styles.imageContainer}>
                <Image
                  src={product.thumbnail}
                  alt=""
                  width={300}
                  height={300}
                  layout="intrinsic"
                  className={styles.image}
                />
              </div>
              <div className={styles.content}>
                <h1 className={styles.title}>ID: {product.id}</h1>
                <p className={styles.desc}>{product.title}</p>
                <p className={styles.desc}>Price: {product.price}</p>
                <p className={styles.desc}>Quantity: {product.quantity}</p>
                <p className={styles.desc}>DiscountPercentage: {product.discountPercentage}</p>
                <p className={styles.desc}>DiscountedPrice: {product.discountedPrice}</p>
              </div>
            </Link>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Blog;
