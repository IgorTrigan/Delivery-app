import React from 'react'

import { storeNames } from '../../Constants/data'
import './SideBarShops.css'

const SideBarShops = () => {
  return (
    <div className='shop__items'>
      <h2>Choose your favorite store</h2>
      {storeNames.map((store, index) => (
        <button className='custom__button' key={index + store}>
          {store}
        </button>
      ))}
    </div>
  )
}

export default SideBarShops
