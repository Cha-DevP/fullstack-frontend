import React from 'react'
import "./myApp.css";

type Props = {}

const MyApp = (Props: Props) => {
  return (
    <div>
        <button className='!py-2 !px-5 !m-5 bg-amber-600 text-5xl hover:bg-amber-400 cursor-pointer rounded-full'>My Button</button>
    </div>

  )
}

export default MyApp