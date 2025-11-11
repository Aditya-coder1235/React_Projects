import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightContent'

const PageoneContent = () => {
  return (
    <div className=' w-full h-[90vh] px-18 py-8 flex items-center gap-7 '>
      <LeftContent/>
      <RightContent/>
    </div>
  )
}

export default PageoneContent
