import React from 'react'

function Container({children, className}) {
  return (
    <>
        <div className={`bg-white max-w-5xl m-auto ${className}`}>
            {children}
        </div>
    </>
  )
}

export default Container
