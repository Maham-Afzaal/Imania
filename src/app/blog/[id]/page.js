import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import { notFound } from "next/navigation";

async function getData(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/photos/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    return notFound()
  }

  return res.json();
}



const BlogPost = async ({ params }) => {

  const data = await getData(params.id);
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>{data.title}</h1>
          <div className={styles.author}>
            <Image
              src={data.url}
              alt=""
              width={40}
              height={40}
              className={styles.avatar}
            />
            <span className={styles.username}>{data.albumId}</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src={data.url}
            alt=""
            fill={true}
            className={styles.image}
          />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>
         <h2>Title of Blog:</h2> {data.title}
        </p>
        <p className={styles.text}>
         <h2>Url of Image:</h2> {data.url}
        </p>
        <p className={styles.text}>
         <h2>AlbumId:</h2> {data.albumId}
        </p>
      </div>
    </div>
  );
};

export default BlogPost;