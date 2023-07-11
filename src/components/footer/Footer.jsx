import React from 'react'
import styles from './footer.module.css';
import Image from 'next/image';

const Footer = () => {
    const currentYear = new Date().getFullYear();
  return (
    <div className={styles.container}>
        <div>{`${currentYear} Lamania. All rights reserved`}</div>
        <div className={styles.social}>
            <Image src="/1.png" width={15} height={15} alt="alt1" className={styles.icon}/>
            <Image src="/2.png" width={15} height={15} alt="alt2" className={styles.icon}/>
            <Image src="/3.png" width={15} height={15} alt="alt3" className={styles.icon}/>
            <Image src="/4.png" width={15} height={15} alt="alt4" className={styles.icon}/>
        </div>
    </div>
  )
}

export default Footer