import React from 'react'
type prpoTpyes={
    status:"loading" | 'success' |'error'
}
const Status = (props:prpoTpyes) => {
    let message 
    if(props.status === 'loading')
        message = "Loading..."
    else if(props.status === 'success')
        message = "Data fetched sucessfully"
    else  if(props.status === 'error')
        message = "Error featching data"
    return (
    <div>
      <h2>{message}</h2>
    </div>
  )
}

export default Status
