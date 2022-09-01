import React from 'react'

import { useDispatch } from 'react-redux'
import { addGood, removeGood } from '../../store/cartSlice'
import Button from '../../UI/button/Button'

import './CardItem.css'
const CardItem = ({
  namePrice: { name, price, url, id, count },
  OnlyOrdered,
}) => {
  const dispatch = useDispatch()

  return (
    <div className='card-item'>
      <div className='card-item_img-count'>
        {count >= 1 && (
          <div className='card-item__count'>
            <p>{count}</p>
          </div>
        )}

        <img src={url} alt='card name' />
      </div>
      <div className='name-btn'>
        <h2>{name}</h2>
      </div>
      <div className='btn_container'>
        <Button
          btn_Cls='btn_card'
          onClick={() => dispatch(addGood({ name, price, count, id }))}
        >
          {OnlyOrdered ? (
            <p style={{ fontSize: '2rem' }}>&#43;</p>
          ) : (
            'add to cart'
          )}
        </Button>
        {OnlyOrdered && (
          <Button
            btn_Cls='btn_card'
            onClick={() => dispatch(removeGood({ name, price, count, id }))}
          >
            <p style={{ fontSize: '2rem' }}>&#8722;</p>
          </Button>
        )}
      </div>

      <div className='price__container_item'>
        <p>{price} </p>
        <p style={{ fontSize: '1.5rem' }}> &#8372; </p>
      </div>
    </div>
  )
}

export default CardItem
