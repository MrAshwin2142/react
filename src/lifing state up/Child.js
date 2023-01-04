import React, { useState } from 'react'

function Child(props) {
    function msg(val){
        const name=val.target.fname.value
        props.data(name)
    }
    
  return (
    <div className='container text-center'> 
        <form onSubmit={msg}>
            <label>Enter Your Name : </label>
            <input type='text' name='fname' />
            <button type='submit'> click me</button>
        </form>

    </div>
  )
}

export default Child