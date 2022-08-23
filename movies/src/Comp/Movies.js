import React from 'react'
import '../App.css';

function Movies(props) {
  return (
    <div>

        {props.mov.map((m,j)=>
        (

            <>
            <div className="block">
           
            <p className='pt'>{m.title}</p>
            <p>{m.openingdate}</p>
            <p className='dd'>{m.releasedate}</p>
            </div>

            </>
        ))
    }

    </div>
  )
}

export default Movies