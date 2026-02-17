import React from 'react'

function ErrorPage() {
  return (
    <> 
        <div className='bg-white w-screen h-screen flex justify-center items-center'>
            <div className='bg-gray-50/30 backdrop-blur-sm border border-black/20 shadow-sm w-[600px] h-[200px] rounded flex justify-center items-center flex-col text-2xl font-medium'>
                <h1>This is the Error page </h1>
                <h1>Your site have some issue fix it </h1>
            </div>
        </div>
    </>
  )
}

export default ErrorPage
