'use client'
import React from "react";
import Image from "next/image";
import styles from './nav.module.css'
const Footer = () => {
  return (
    <div style={{marginTop:'auto'}}>
      <div className={styles.footer} style={{display: "flex",alignItems:'center',justifyContent: "space-between",gap:'6px 0px',padding:'10px'}}>
        <div>@2023 MahamAfzaal. All Rights Reserved</div>
        <div style={{ display: "flex", gap: "5px",cursor:'pointer' }}>
          <Image src="/1.png" alt='' width={30} height={30} />
          <Image src="/2.png" alt='' width={30} height={30} />
          <Image src="/3.png" alt='' width={30} height={30} />
          <Image src="/4.png" alt='' width={30} height={30} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
