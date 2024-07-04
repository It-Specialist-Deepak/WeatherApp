import React from 'react';

const  Button = (props) => {
  return (
   <button className='bg-green-400 text-white p-2  mt-8 w-20 items-center rounded-full hover:bg-white hover:text-green-400'
   onClick={props.onClick}>
    {props.value}
   </button>
  )
}

export default Button;