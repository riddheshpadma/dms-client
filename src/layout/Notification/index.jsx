import React from 'react'

const notification = [
    {
        "title":"Demo1",
        "msg":"demo 2"
    },
    {
        "title":"demo2",
        "msg":"demo 2"
    }
]

const index = () => {
  return (
    <div className='bg-dark-color'>
        <ul>
            {notification.map((item, index) => (
                <li className='p-3 hover:bg-secondary-color hover:text-dark-color hover:cursor-pointer transition-all ease-in-out duration-300 '>
                    <div className='flex flex-col'>
                        <span className='text-sm'>{item.title}</span>
                        <span className='text-xs'>{item.msg}</span>
                    </div>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default index