import React, { useState } from "react";

export default function Tab(props)
 {

    props.data1;
    props.data2;

    let [pending,setpending]=useState([]);
    
    let [records,setrecord]=useState([]);
    
        
        let hanlePending=()=>
            {
                // completed task data
                console.log('second');
                setpending([...props.data2])
                // setrecord('');
            }
            
            let handleCompleted=()=>
                {
                    // completed task data
                    setrecord([...props.data1]) 
                }
                
                return (
                    <div>
            <div >
                <nav className="nav bg-primary MyTab">
                   
                    <a className="nav-link text-black" href="#" onClick={hanlePending}>
                        Pending Task
                    </a>
                    <a className="nav-link text-black" href="#" onClick={handleCompleted}>
                        Completed Task
                    </a>
                   
                </nav>
            </div>


            {
                pending.map((e,i)=>
                    {
                        return <div key={i} className="MyTab">
                            <h3>{e.name}</h3>
                            <h3>{e.Subject}</h3>
                            <h3>{e.prio}</h3>
                        </div>
                    })
                }
                
                    {
                        records.map((e,i)=>
                            {
                                return <div key={i} className="MyTab">
                            <h3>{e.name}</h3>
                            <h3>{e.Subject}</h3>
                            <h3>{e.prio}</h3>
                             </div>
                            })
                    }

        </div>
    );
}
