import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'
import main from '/public/main.png';
export default function Home() {
  return (
    <main>
  <head>
            <title>Home</title>
            <meta name="description" content="Your page description here" />
            <link rel="icon" href="/home.png" />
          </head>
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>
          Better design for your digital products.
        </h1>
        <p className={styles.desc}>
          Turning your Idea into Reality. We bring together the teams from the
          global tech industry.
        </p>
        <Link href='#'><button style={{padding:'8px',color:'white',backgroundColor:'#2a9d8f',fontWeight:'bold',fontSize:'1rem'}}>See our works</button></Link>
      </div>
      <div className={styles.item}>
        <Image src={main} alt="" className={styles.img}/>
      </div>
    </div>
    </main>
  )
}
