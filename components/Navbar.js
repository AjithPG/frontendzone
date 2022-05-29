import React from 'react'
import SearchBar from './SearchBar'

export default function Navbar() {
  return (
    <section className='py-12 px-9 flex justify-between'>
      <SearchBar/>
      <div className='settings bg-white rounded-xl flex justify-center items-center px-4 py-4 cursor-pointer'>
          <i className="ri-settings-3-line ri-lg"></i>
      </div>
    </section>
  )
}
