import React from 'react'

const Button = ({text, color}) => {
  return (
    <div>
      <button className={`${color} px-8 py-3 rounded-2xl text-xl border-2 font-semibold hover:bg-[#e66a45] transition duration-300`}>{text}</button>
    </div>
  )
}

export default Button
