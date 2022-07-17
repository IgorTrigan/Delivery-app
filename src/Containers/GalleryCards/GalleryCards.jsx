import React from 'react'
import CardItem from '../../components/CardItem/CardItem'

import './GalleryCards.css'
import { storeGoods } from '../../Constants/data'
import { useSelector } from 'react-redux'

const GalleryCards = () => {
  const store = useSelector((state) => state.cart)
  return (
    <div className='gallery-cards'>
      {store.menu[store.shopName].map((good, i) => (
        <CardItem namePrice={good} key={good + i} />
      ))}
    </div>
  )
}

export default GalleryCards
