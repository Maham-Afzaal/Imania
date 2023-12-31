import React from "react";
import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";

async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/photos", {
    cache: "no-store",
  });
  return res.json();
}

const Blog = async () => {
  const data = await getData();
  return (
    <div>
    <div className={styles.mainContainer}>
      {data.map((item) => (
        <Link href={`/blog/${item.id}`} className={styles.container} key={item.id}>
          <div className={styles.imageContainer}>
            <Image
              src={item.url}
              alt=""
              width={400}
              height={250}
              className={styles.image}
            />
          </div>
          <div className={styles.content}>
            <h1 className={styles.title}>{item.id}</h1>
            <p className={styles.desc}>{item.title}</p>
          </div>
        </Link>
      ))}
    </div>
    </div>
  );
};

export default Blog;