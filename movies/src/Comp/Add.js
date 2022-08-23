import React from 'react'
import {useRef} from 'react'

function Add(props) {

  const t = useRef('');
  const o = useRef('');
  const r = useRef('');

  const a =(event)=>
  {
    event.preventDefault();

    const movies ={
        title : t.current.value,
        openingText : o.current.value,
        releaseDate : r.current.value
    }

    props.ad(movies);

    
  }


  return (
    <div>
        <form onSubmit={a} >

            <input className='i' type="text" ref={t} placeholder='enter title' /><br />
            <input className='i' type="text" ref={o} placeholder='enter opening text' /><br />
            <input className='i' type="text" ref={r} placeholder='enter release date' /><br />
            <input className='btn k' value="add" type="submit" />
        </form>
    </div>
  )
}

export default Add