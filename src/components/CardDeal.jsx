import React from 'react'
import { card } from '../assets'
import Button from './Button'
import styles, { layout } from '../style'

const CardDeal = () => {
  return (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>Secure Transactions, Insightful Analytics,  <br className='sm:block hidden'/>and Diverse Payment Options</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Experience secure payment transfers for transaction safety on our website. Gain insights with our analytics dashboard tailored for your business needs. Enjoy enhanced convenience with integrated multiple payment bank options.
          
        </p>
        <Button styles='mt-10'/>
      </div>
      <div className={layout.sectionImg}>
        <img
          src={card}
          alt='card'
          className='w-[100%] h-[100%]'
        />
      </div>
    </section>
  )
}

export default CardDeal
