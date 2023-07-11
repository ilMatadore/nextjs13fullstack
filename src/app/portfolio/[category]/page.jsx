import React from 'react'
import styles from './page.module.css'
import Button from '@/components/button/Button'
import { notFound } from "next/navigation";

import { items } from './data'
import Image from 'next/image'

const getData = (category) => {
    const data = items[category]
    return data ? data :  notFound()
}

const Category = ({params}) => {
    const catData = getData(params.category)
  return (
    <div className={styles.container}>
        <h1 className={styles.catTitle}>{params.category}</h1>
        {catData.map((item) => (
        <div className={styles.item} key={item.id}>
          <div className={styles.content}>
            <h1 className={styles.title}>{item.title}</h1>
            <p className={styles.desc}>{item.desc}</p>
            <Button text="See More" url="#" />
          </div>
          <div className={styles.imgContainer}>
            <Image
              className={styles.img}
              fill={true}
              src={item.image}
              alt=""
            />
          </div>
        </div>
      ))}
    </div>
  )
}

export default Category