import React from 'react'

const FooterItem = ({children,title}) => {
   return (
   <div className='flex flex-col gap-4'>
    <h4 className='font-semibold font-popins'> {title}</h4>

    {children}
   </div>
  )
}

export default FooterItem
