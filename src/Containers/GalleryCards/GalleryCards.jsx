import React, { useEffect } from 'react'
import CardItem from '../../components/CardItem/CardItem'

import './GalleryCards.css'

import { useSelector } from 'react-redux'

const GalleryCards = ({ OnlyOrdered = false }) => {
  const state = useSelector((state) => state.cart)
  const products = state.menu[state.shopName]
  let filteredProducts = []
  if (OnlyOrdered) {
    filteredProducts = state.menu[state.shopName].filter(
      (product) => product.count > 0
    )
  }

  return (
    <div className='gallery-cards'>
      {(OnlyOrdered ? filteredProducts : products).map((goods, i) => (
        <CardItem
          namePrice={goods}
          key={i + goods.name}
          OnlyOrdered={OnlyOrdered}
        />
      ))}
    </div>
  )
}

export default GalleryCards
