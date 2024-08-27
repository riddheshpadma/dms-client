import React from 'react'

const index = (props) => {
  return (
    <div className='bg-dark-color'>
        <div>
            <span>{props.name}</span>
        </div>
        <div>
            <ul>
              <li className='p-3 hover:bg-secondary-color hover:text-dark-color hover:cursor-pointer transition-all ease-in-out duration-300'>Your Profile</li>
              <li className='p-3 hover:bg-secondary-color hover:text-dark-color hover:cursor-pointer transition-all ease-in-out duration-300'>LogOut</li>
            </ul>
        </div>
    </div>
  )
}

export default index