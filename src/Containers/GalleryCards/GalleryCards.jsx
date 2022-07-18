import React, { useEffect } from 'react'
import CardItem from '../../components/CardItem/CardItem'

import './GalleryCards.css'

import { useSelector } from 'react-redux'

const GalleryCards = () => {
  const state = useSelector((state) => state.cart)

  useEffect(() => {}, [state.shopName])

  return (
    <div className='gallery-cards'>
      {state.menu[state.shopName].map((goods, i) => (
        <CardItem namePrice={goods} key={i + goods.name} />
      ))}
    </div>
  )
}

export default GalleryCards
