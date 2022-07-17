import React from 'react'

import { GalleryCards, SideBarShops } from '../../Containers'

import './Shop.css'

const Shop = () => {
  return (
    <div className='shop'>
      <SideBarShops />

      <GalleryCards />
    </div>
  )
}

export default Shop
