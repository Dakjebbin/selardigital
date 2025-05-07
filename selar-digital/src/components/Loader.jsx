import React from 'react'
import { assets } from '../assets/assest'

const Loader = () => {
  return (
    <div>
        <div>
            <img className='w-30 animate-spin' src={assets.logo} alt="" />
        </div>
    </div>
  )
}

export default Loader