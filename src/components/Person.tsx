type personProps ={
  names:{
    first:string
    last:string
  }[]
}
const Person = (props:personProps) => {
  return (
    <div>
      {
        props.names.map((item,index)=>{

          return <h2 key={index} >{`${item.first} ${item.last}`} </h2>
        })
      }
    </div>
  )
}

export default Person
