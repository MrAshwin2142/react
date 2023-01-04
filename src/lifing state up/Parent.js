import React from 'react'
import Navbar2 from '../task2/Navbar2';
import Child from './Child'

function Parent() {

  function alertp(name){
    alert("hello "+name)
  }
  return (
    <div className='container'>
        <Navbar2/>
        <h2 className='text-center'>Lifting State UP</h2>
        <Child data={alertp}/>
    </div>
  )
}

export default Parent