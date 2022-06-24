import React from 'react'
import SearchBar from './SearchBar'

export default function Navbar() {
  return (
    <section className='px-4 py-4 sm:py-12 sm:px-9 flex justify-between items-center'>
      <span className="text-lg font-semibold bg-secondary text-white px-2 py-2 rounded-lg">Frontend Zone</span>
      <SearchBar/>
      <div className='settings bg-white rounded-xl flex justify-center items-center px-4 py-4 cursor-pointer ml-3'>
          <i className="ri-settings-3-line ri-lg"></i>
      </div>
    </section>
  )
}
