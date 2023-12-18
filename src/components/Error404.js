import React from 'react'
import { useRouteError } from 'react-router-dom'

const Error404 = () => {
    const err = useRouteError();
  return (
    <div className='flex justify-center items-center'>Sorry the url you are looking for is not found..! Error404</div>
  )
}

export default Error404