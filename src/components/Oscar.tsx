import React from 'react'
type propType={
    children:React.ReactNode
}
const Oscar = ({children}:propType) => {
  return (
    <div>
      {children}
    </div>
  )
}

export default Oscar
