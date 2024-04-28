import React from 'react'

export default function Component1({Data1})
 {

  return (
    <div className='Parent'>
      <div className="card" >
  <div className="card-body">
    <h5 className="card-title">{Data1.id}</h5>
    <p className="card-text">{Data1.title}</p>
    <img src={Data1.thumbnailUrl} alt="" />
  </div>
</div>

    </div>
  )
}
