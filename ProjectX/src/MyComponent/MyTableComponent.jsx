import React from 'react'

export default function MyTableComponent() {
    let subList=["c","Python","React Js","Mern Stack"]
    
    return (
    <div>
        {/* Table */}

        <table>
            <tr>
                <th>Language</th>
            </tr>
            <tr>
                {
                    subList.map((e,i)=>
                    {
                        return <th key={i}>{e}</th>
                    })
                }
            </tr>
        </table>

    </div>
  )
}
