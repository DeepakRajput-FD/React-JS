import React, { useState } from "react";

export default function Tab(props)
 {

    props.data1;
    props.data2;

    console.log(props.data1);

    let [pending,setpending]=useState([]);
    
    let [records,setrecord]=useState([]);

    let [change,setchange]=useState(false)
    let [change1,setchange1]=useState(false)
    
        
        let hanlePending=()=>
            {
                // pending task data
                console.log('second');
                setpending([...props.data1])
                // setrecord('');
                setchange(!change);
            }
            
            let handleCompleted=()=>
                {
                    // completed task data
                    setrecord([...props.data2])
                    setchange1(!change1) 
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
                (change)
                ?
                pending.map((e,i)=>
                    {
                        return <div key={i} className="MyTab">
                            <h3>{e.name}</h3>
                            <h3>{e.Subject}</h3>
                            <h3>{e.prio}</h3>
                        </div>
                    })
                    :
                    ''
                }
                
                    {
                        (change1)
                        ?
                        records.map((e,i)=>
                            {
                                return <div key={i} className="MyTab">
                            <h3>{e.name}</h3>
                            <h3>{e.Subject}</h3>
                            <h3>{e.prio}</h3>
                             </div>
                            })
                            :
                            ''
                    }

        </div>
    );
}
