import { doc, getDoc, updateDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { db } from '../firebaseConfig';

export default function EditPage() {
  
    const {uid}=useParams();

    const [name,setname]=useState();
    const [email,setemail]=useState();

    const navigate=useNavigate();

    useEffect(()=>
        {
            fetchData();
        },[uid])

        const fetchData=async()=>
            {
                const Userdata=   await getDoc(doc(db,'Student',uid));
                console.log(Userdata);
                setname(Userdata.data().name);
                setemail(Userdata.data().email);
            }

        const update=async(e)=>
            {
                e.preventDefault();

                await updateDoc(doc(db,'Student',uid),
                {
                    'name':name
                })
                navigate('/Guest',{replace:true})

            }

    return (
    <>
    
    <h2>Edit Page</h2>

        <form onSubmit={(e)=>update(e)} >

        <input type="text" placeholder=' Enter Name : ' value={name} onChange={(e)=>setname(e.target.value)} />
        <input type="text" value={email} disabled />

        <button type='submit' >Update</button>

        </form>

    </>
  )
}
