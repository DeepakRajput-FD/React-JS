import React from 'react'

export default function Content() {
  return (
    <div>
        
        <div className='bgImage'>
            <h1>
                Don't Miss amazing grocery deals
            </h1>

            <h3>Sign up for the daily newsletter</h3>

            <div className='d-flex inputes3'>
                
                <input type="text" placeholder='Your email address ' id='input2'  />
                <button className='px-3 py-1 button1'>Subscribe</button>
            </div>

            <div className='d-flex justify-content-center gap-2 py-3'>
            <i className="bi bi-circle-fill text-success"></i>
            <i class="bi bi-circle"></i>
            </div>

        </div>

    </div>
  )
}
