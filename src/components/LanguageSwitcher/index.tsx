import Image from 'next/image'
import Eng from '../../assets/images/eng.png'

import React from 'react'

function LanguageSwitcher() {
  return (
    <div className='w-12'>
    <Image className='rounded-[300px] p-1 m-2'
      src={Eng}
      width={0}
      height={0}
      alt="flag"
    />
    </div>
  )
}

export default LanguageSwitcher
