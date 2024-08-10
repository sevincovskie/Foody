import React from 'react'
import Image from 'next/image'

function Card({title, img, desc, pos}) {

  return (

    // {pos === "left"  }
    <div className='w-[327px] h-[386px] bg-white flex items-center flex-col border' >
         <Image className='raunded-[150px] mx-3 '
      src={img}
      width={239}
      height={223}
      alt="Picture of the author"
    />  
     {/* // {pos === "right"  } */}
    <h3 className='font-bold  text-center text-cardText'>{title}</h3>
    <p className='text-center text-lg font-normal leading-3 text-gray  '>{desc} </p>
    </div>
  )
}

export default Card
