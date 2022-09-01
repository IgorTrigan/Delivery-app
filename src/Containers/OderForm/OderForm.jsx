import React from 'react'
import { useForm } from 'react-hook-form'
import { useSelector } from 'react-redux'
import Button from '../../UI/button/Button'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { parsePhoneNumberFromString } from 'libphonenumber-js'
import './OderForm.css'
import Input from '../../UI/input/Input'

const OderForm = () => {
  const store = useSelector((store) => store.cart)
  const schema = yup.object().shape({
    fullName: yup
      .string()
      .matches(/^([^0-9]*)$/, 'Full name should not contain number')
      .required('⚠ Full name is required field !'),
    email: yup
      .string()
      .email('Email should have correct format')
      .required('⚠ Email is required field !'),
    phone: yup
      .string()
      .matches(
        /^\+?([0-9]{3})\)?[-. ]?([0-9]{2})[-. ]?[-. ]?([0-9]{3})[-. ]?[-. ]?([0-9]{2})[-. ]?([0-9]{2})$/,
        'Please enter a valid phone number'
      )
      .required('⚠ Phone is required field !'),
    address: yup.string().required('⚠ Address is required field !'),
  })
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
  } = useForm({
    mode: 'onBlur',
    resolver: yupResolver(schema),
  })

  const onSubmit = (data) => {
    console.log(data)
    reset()
  }
  const normalizePhoneNumber = (value) => {
    const phoneNumber = parsePhoneNumberFromString(value)
    if (!phoneNumber) {
      return value
    }
    return phoneNumber.formatInternational()
  }

  return (
    <div className='oder-form'>
      <form noValidate onSubmit={handleSubmit(onSubmit)}>
        <h2>Fill in the form of the order</h2>
        <Input
          label='Full name:'
          register={register}
          errors={errors}
          name='fullName'
          type='text'
          placeholder='Enter your full name'
        />
        <Input
          label='Email:'
          register={register}
          errors={errors}
          name='email'
          type='email'
          placeholder='Enter your email'
        />
        <Input
          label='Email:'
          register={register}
          errors={errors}
          name='phone'
          type='tel'
          placeholder='+XXX-XX-XXX-XXXX'
        />
        <Input
          label='Email:'
          register={register}
          errors={errors}
          name='address'
          type='address'
          placeholder='Enter your address'
        />

        <label className='oder-form_price'>
          <p>
            Total price: <span>{store.totalPrice}&nbsp;&#8372;</span>
          </p>
        </label>
        <div className='oder-button'>
          <Button
            className='custom__button'
            type='submit'
            btn_Cls='btn_oder'
            disabled={!isValid}
          >
            Order
          </Button>
        </div>
      </form>
    </div>
  )
}

export default OderForm
