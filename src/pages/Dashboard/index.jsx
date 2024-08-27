import React from 'react'
import { NavigationBar } from '../../layout'

const Dashboard = () => {
  return (
    <React.Fragment>
      <div className='fixed'>
        <NavigationBar />
      </div>
      <div className='py-20'>
        Dashboard
      </div>
    </React.Fragment>
  )
}

export default Dashboard
