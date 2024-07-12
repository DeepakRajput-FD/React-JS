import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react'
import { auth, db } from '../firebaseConfig';
import { doc, setDoc } from 'firebase/firestore';
import { Link, useNavigate } from 'react-router-dom';

export default function RegistrationPage() {
 
    const [name,setname]=useState();
    const [email,setemail]=useState();
    const [password,setpassword]=useState();
    const [subject,setsubject]=useState();

    const navigate=useNavigate();

    const handleSubmit=async(e)=>
        {
            e.preventDefault();
            console.log('-------------------> button submitted ------------------------->');
            const userCredentails= await createUserWithEmailAndPassword(auth,email,password);
            
            // for current user information get
            const user=userCredentails.user;

            let obj=
            {
                name,subject,email
            }

            if (user)
             {
                // setdoc is used to add the data on document and doc is add the obj data
                await setDoc(doc(db,"Student",user.uid),
                {
                   name,email
                })
                
                console.log('successfully record added');

            }

        }

    return (
    <>
    <form onClick={(e)=>handleSubmit(e)} >
        <input type="text" placeholder='Enter Name : ' onChange={(e)=>setname(e.target.value)} />
        <br />
        <input type="email" placeholder='Enter Email : ' onChange={(e)=>setemail(e.target.value)} />
        <br />
        <input type="password" placeholder='Enter password : ' onChange={(e)=>setpassword(e.target.value)} />
        <br />
        <input type="text" placeholder='Enter subject : ' onChange={(e)=>setsubject(e.target.value)} />
        <br />
        <button>Submit</button>
    </form>

        <h4 onClick={()=>navigate('/login',{replace:true})}>Click for login page</h4>

        <Link to={'/Guest'}>All Guest</Link>

    </>
  )
}
