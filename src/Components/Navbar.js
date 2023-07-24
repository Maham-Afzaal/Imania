'use client'
import React, { useState } from 'react'
import styles from './nav.module.css';
import Link from 'next/link';
import icon from '/public/icon.png';
import Image from 'next/image';

import { Dancing_Script } from 'next/font/google';
import DarkModeToggle from './DarkModeToggle/DarkModeToggle';
const dancingScript = Dancing_Script({ weight: ['400', '500', '700'],
subsets: ['latin'] });


const Navbar = () => {
  const [initial,setTrue]=useState(false);
  const handleChange=()=>{
    setTrue(!initial);
  }
 
  return (
    <div className={styles.container}>
        <div className={styles.main}>
            <div className={styles.text}>Maham</div>
           
            <div className={initial?styles.boxRow:styles.boxNo}>
                <Link href='/'><div className={styles.li}>Home</div></Link>
                <Link href='/portfolio'><div className={styles.li}>Portfolio</div></Link>
                <Link href='/blog'><div className={styles.li}>Blog</div></Link>
                <Link href='/about'><div className={styles.li}>About</div></Link>
                <Link href='/contact'><div className={styles.li}>Contact</div></Link>
                <Link href='/dashboard'><div className={styles.li}>Dashboard</div></Link>
                <button className={`${styles.btn} ${styles.li}`}>Log Out</button>
              </div>
              <div>
              <DarkModeToggle/>
            </div>
           
            
              <div style={{border:'4px solid #888888',borderRadius:'4px',cursor:'pointer'}} onClick={handleChange} className={styles.menuBtn}>
              <Image src={icon} alt='' className={styles.image}  width={40} height={40}/>
            </div>
        </div>
    </div>
  )
}

export default Navbar