import React from 'react'

const Button = ({onClick, text}) => {
  onClick = { onClick }
   
  return (
    <button className="bg-gradient-to-tl from-cyan to-dark_violet hover:text-red font-serif font-semibold text-white rounded-2xl py-3 max-w-[200px] w-full hover:scale-105">
      {text}
    </button>
  );
}

export default Button
