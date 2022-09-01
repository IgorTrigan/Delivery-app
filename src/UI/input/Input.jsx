import React, { forwardRef } from 'react'
import './Input.css'
const Input = ({ label, register, errors, name, ...props }) => {
  return (
    <div className='input-container'>
      <label>{label}</label>
      <input {...register(name)} {...props} />
      {errors?.[name] && (
        <p className='input__errors'>{errors?.[name]?.message || 'Error!'}</p>
      )}
    </div>
  )
}

export default Input
