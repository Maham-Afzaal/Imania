import React from "react";
import styles from "./page.module.css";
import Image from "next/image";

const page = () => {
  return (
    <div>
      <head>
            <title>Contact</title>
            <meta name="description" content='Contact Page' />
            <link rel="icon" href="/contact.png" />
          </head>
      <div className={styles.contactContainer}>
        <div className={styles.title}>Let's Keep in Touch</div>
        <div className={styles.divContact}>
          <div className={styles.imgContainer}>
          {/* <div className={styles.imageWrapper}>
              <Image src="/contactImg.png" layout="fill" objectFit="cover" />
            </div>          */}
              <Image src="/contactImg.png"  fill={true} className={styles.img}/>
             </div>
          <div className={styles.formContainer}>
            <form action="#">
              <label for="fname">Full Name</label>
              <input
                type="text"
                id="fname"
                name="fullname"
                placeholder="Your name.."
                className={styles.inputSelectContainer1}
              />

              <label for="lname">Email</label>
              <input
                type="email"
                id="email"
                name="mail"
                placeholder="Your Email"
                className={styles.inputSelectContainer2}
              />

              <label for="lname">Comments</label>
              <textarea
                className={styles.textArea}
                placeholder="Some text..."
              ></textarea>

              <input
                type="submit"
                value="Submit"
                className={styles.inputSelectContainer3}
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
