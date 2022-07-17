import React from 'react'

import { useDispatch } from 'react-redux'
import { addGood } from '../../store/cartSlice'

import './CardItem.css'
const CardItem = ({ namePrice: { name, price, url, id, count } }) => {
  const dispatch = useDispatch()

  return (
    <div className='card-item'>
      {count >= 1 && (
        <div className='card-item__count'>
          <p>{count}</p>
        </div>
      )}

      <img src={url} alt='card name' />
      <div className='name-btn'>
        <h2>{name}</h2>
      </div>

      <button
        className='custom__button card__bnt'
        onClick={() => dispatch(addGood({ name, price, count, id }))}
      >
        add to cart:
      </button>
      <div className='price__container_item'>
        <p>{price} </p>
        <p style={{ fontSize: '1.5rem' }}> &#8372; </p>
      </div>
    </div>
  )
}

export default CardItem
