import React from 'react'
import Dashboard from './Dashboard'
import RightSection from './RightSection'

export default function Main() {
  return (
    <main className='font-primary'>
      <div className='w-full px-4 sm:px-9'>
        <div className='flex flex-col xl:flex-row gap-3'>
        <div className='left-section flex-auto xl:flex-1'>
          <Dashboard/>
        </div>
        <div className='right-section basis-full xl:basis-1/4'>
          <RightSection/>
        </div>
        </div>
         
      </div>
    </main>
  )
}
