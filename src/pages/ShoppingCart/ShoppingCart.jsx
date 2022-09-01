import React from 'react'
import OderForm from '../../Containers/OderForm/OderForm'
import GalleryCards from '../../Containers/GalleryCards/GalleryCards'

import './ShoppingCart.css'

const ShoppingCart = () => {
  return (
    <div className='shopping-cart'>
      <OderForm />
      <GalleryCards OnlyOrdered={true} />
    </div>
  )
}

export default ShoppingCart
