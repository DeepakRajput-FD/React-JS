import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { auth, db } from '../firebaseConfig';
import { doc, getDoc } from 'firebase/firestore';

export default function LoginPage() {
  
    const [email,setemail]=useState();
    const [password,setpassword]=useState();

    const navigate=useNavigate();

    const handleSubmit=async(e)=>
        {
            e.preventDefault();
            // signInWithEmailAndPassword is the method used to authenticate the email and pwd 
            const userCredentails= await signInWithEmailAndPassword(auth,email,password);
            
            // for current user information get
            const user=userCredentails.user;

            console.log(user.uid);

            // get the data from the firebase
            const userDoc=await getDoc(doc(db,"Student",user.uid))
            
            if (userDoc.exists)
             {
                    console.log(userDoc.data());
                    console.log(userDoc.data().name);
                    alert(`welcome ${userDoc.data().name}`)
            }

        }

    return (
    <div>

<form onClick={(e)=>handleSubmit(e)} >
        <input type="email" placeholder='Enter Email : ' onChange={(e)=>setemail(e.target.value)} />
        <input type="text" placeholder='Enter password : ' onChange={(e)=>setpassword(e.target.value)} />
        <button onClick={()=>navigate('/Dashboard',{replace:true})}>Submit</button>
    </form>
    
    {/* <h4 >Click here for login page</h4> */}


    </div>
  )
}
