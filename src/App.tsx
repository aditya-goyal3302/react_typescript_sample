import React from 'react';
import './App.css';
import { Greet } from './components/Greet';
// import Person from './components/Person';
import Status from './components/Status';
import Heading from './components/Heading';
import Oscar from './components/Oscar';
import ButtonComponent from './components/Button';

function App() {
  // const person_name = [{
  //   first:"aditya",
  //   last:"goyal"
  // },{
  //   first:"rajeev",
  //   last:"goyal"
  // },{
  //   first:"fsdfv",
  //   last:"dbfvfb"
  // },]
  return (
    <div className="App">
      <Oscar>
        <Heading>dshfasdzhfvjsd</Heading>
        svjifsdvzudf
      </Oscar>
      <Status status='error'/>
      <Greet 
        name={"hcusdg"} 
        // messageCount={10}
        isLoggedin={false}
      />
      <ButtonComponent handleClick={(event)=>{console.log("ughydfjgsd",event); }} />
      {/* <Person names={person_name}/> */}
    </div>
  );
}

export default App;