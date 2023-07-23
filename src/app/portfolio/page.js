import React from "react";
import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";
const Page = () => {
  return (
    <div>
      <div>
        <div>
          <h3 style={{fontStyle:'italic',fontFamily:'cursive'}}>Click on any of our our gallery</h3>
        </div>
        <div className={styles.items}>
          <div className={styles.divContainer}>
            <Link href="/portfolio/illustrations" className={styles.item}>
            <div className={styles.imageWrapper}>

              <Image src="/window.png" fill={true}/>
              <span className={styles.title}>Illustrations</span>
              </div>
            </Link>
          
          </div>
          <div className={styles.divContainer}>
            <Link href="/portfolio/websites" className={styles.item}>
            <div className={styles.imageWrapper}>

              <Image src="/laptops.jpg" fill={true}/>
              <span className={styles.title}>Websites</span>
              </div>
            </Link>
          </div>
          <div className={styles.divContainer}>
            <Link href="/portfolio/applications" className={styles.item}>
            <div className={styles.imageWrapper}>

              <Image src="/apps.jpg" fill={true}/>
              <span className={styles.title}>Application</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
