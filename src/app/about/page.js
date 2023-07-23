import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Head from "next/head";

const page = () => {
  return (
    <div>
       <head>
            <title>About Us</title>
            <meta name="description" content='ggggggggggg' />
            <link rel="icon" href="/about.png" />
          </head>
      <div className={styles.container}>
        <div className={styles.imgDiv}>
          <Image
            src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            fill={true}
            alt=""
            className={styles.img}
          />
          <div className={styles.imgText}>
            <h1 className={styles.imgTitle}>Digital Storytellers</h1>
            <h2 className={styles.imgDesc}>
              Handcrafting award winning digital experiences
            </h2>
          </div>
        </div>
        <div className={styles.whoContainer}>
          <div className={`${styles.divs} ${styles.div1}`}>
            <h1>Who are You?</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              mollitia, molestiae quas vel sint commodi repudiandae consequuntur
              voluptatum laborum numquam blanditiis harum quisquam eius sed odit
              fugiat iusto fuga praesentium optio, eaque rerum! Provident
              similique accusantium nemo autem. Veritatis obcaecati tenetur iure
              eius earum ut molestias architecto voluptate aliquam nihil,
              eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
              tenetur error, harum nesciunt ipsum debitis quas aliquid.
              Reprehenderit, quia.
            </p>
          </div>
          <div className={`${styles.divs} ${styles.div2}`}>
            <h1>What you want?</h1>
            <p>
             
              Quo neque error repudiandae fuga? Ipsa laudantium molestias eos
              sapiente officiis modi at sunt excepturi expedita sint? Sed
              quibusdam recusandae alias error harum maxime adipisci amet
              laborum. Perspiciatis minima nesciunt dolorem! Officiis iure rerum
              voluptates a cumque velit quibusdam sed amet tempora. Sit laborum
              ab, eius fugit doloribus tenetur fugiat, temporibus enim commodi
              iusto libero magni deleniti quod quam consequuntur! Commodi minima
              excepturi repudiandae velit hic maxime doloremque.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
