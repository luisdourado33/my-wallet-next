import React from 'react'

type Props = {
  children?: React.ReactNode;
}

export default function Container({
  children
}: Props) {
  return (
    <div className='w-full h-full'>
      {children}
    </div>
  )
}