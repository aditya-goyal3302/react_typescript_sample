// import React from 'react'
type GreetProps={
    name:string
    messageCount?: number
    isLoggedin:Boolean
}
export const Greet = (props: GreetProps) => {
  return (
    <div>
        {

        props.isLoggedin?<h2>Welcome {props.name}!!  messageCount = {props.messageCount}</h2>
        :<h2>Welcome guest!!  messageCount = {props.messageCount}</h2>
        }
    </div>
  )
}

 
