import React from 'react'
import styles from './page.module.css'
import Head from 'next/head'
const layout = ({children}) => {
  return (
    <div>
      <head>
            <title>Portfolio</title>
            <meta name="description" content='Portfolio page' />
            <link rel="icon" href="/portfolio.png" />
          </head>
          <div>
        <h1 className={styles.titleWork}>Our Works</h1>
        {children}
        </div>
    </div>
  )
}

export default layout