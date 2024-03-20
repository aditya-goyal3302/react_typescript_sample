import React, { useState } from 'react'

type Buttonprops= {
    handleClick: (event:React.WheelEvent<HTMLButtonElement>|React.MouseEvent<HTMLButtonElement>)=> void
}
type user ={
    email: String
    password: String
}
const ButtonComponent = (props:Buttonprops) => {
  const [data,setData] = useState<user|null>(null)
  const [flag,setFlag] = useState(0)
  const handleUpadte = ()=>{
      console.log(data,flag)
    if(flag === 0 ){
        setFlag(1)
        setData({
            email:"a@a.in",
            password:"hcgfvuyfd"
        })
    }
    else {
        setData(null)
        setFlag(0)
        
    }
  }
    return (
        <>
            <button onClick={handleUpadte} onDoubleClick={props.handleClick}>go</button>
            {`${data? data?.email:''} ${data? data?.password:''}`}
        </>
  )
}

export default ButtonComponent
