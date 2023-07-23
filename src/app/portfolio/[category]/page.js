import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import { items } from "./data.js";
import { notFound } from "next/navigation";
import Link from "next/link";

const getData = (cat) => {
  const data = items[cat];

  if (data) {
    return data;
  }

  return notFound();
};

const Category = ({ params }) => {
  const data = getData(params.category);
  return (
    <div className={styles.container}>
      <h1 className={styles.catTitle}>{params.category}</h1>
<div className={styles.mapContainer}>
      {data.map((item) => (
        <div key={item.id} className={styles.item}>
          <div className={styles.content}>
            <h1 className={styles.title}>{item.title}</h1>
            <p className={styles.desc}>{item.desc}</p>

            <Link href={item.image} target="_blank">
              <button className={styles.btn}>Button</button>
            </Link>
          </div>
          <div className={styles.imgContainer}>
            <Image className={styles.img} fill={true} src={item.image} alt="" />
          </div>
        </div>

      ))}
      </div>
    </div>
  );
};

export default Category;
