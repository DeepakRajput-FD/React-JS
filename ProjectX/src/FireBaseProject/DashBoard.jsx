import React, { useEffect, useState } from 'react'
import { auth,db,storage } from '../firebaseConfig';
import { collection, doc, getDoc, getDocs, updateDoc } from 'firebase/firestore';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { Button } from '@mui/material';

export default function DashBoard() {
  
    const  [userDetails,setUserDetails]=useState(null);
    const navigate=useNavigate();

    const [profileUrl,setProfileUrl]=useState('');

    const [status,setstatus]=useState(false);

    const [path,setpath]=useState('');

    const [allUsers,setUsers]=useState([]);

    useEffect(()=>
        {
            const subscribe=onAuthStateChanged(auth,(user)=>
                {

                    if (user) 
                    {
                        fetchCurrentUserDetails(user);
                    }

                })

                fetchAllusers();

        },[])

        const fetchCurrentUserDetails=async(user)=>
            {

            if (user)
             {
                 const userData=await getDoc(doc(db,'Student',user.uid))
                    console.log(`Welcome dashboard ${userData.data().name} `);

                    setUserDetails(userData.data())
            }
                
            }

        // const handleLogOut=async()=>
        //     {
        //         await signOut(auth);
        //         navigate('/login',{replace:true})
        //     }

            const handleForm=async(e)=>
            {
               e.preventDefault();
                console.log('----->profileUrl',profileUrl);
                
                const user=auth.currentUser;

                if (user)
                 {

                    // create a storage or path where we can store our image

                    // for upload
                    const StorageRef= ref(storage,`profilePictures/${user.uid}`);
                    
                    await uploadBytes(StorageRef,profileUrl);

                    // for download

                    const downloadUrl= await getDownloadURL(StorageRef);

                    console.log('---------> download url ',downloadUrl);

                    await updateDoc(doc(db,"Student",user.uid),
                    {
                        "profileUrl":downloadUrl
                    })

                    setpath(downloadUrl)

                    setstatus(true)
                    
                }

                setstatus(false)
                
            }

            const fetchAllusers=async()=>
                {
                    const QuerySnapShot= await getDocs(collection(db,'Student'));

                    const users=[];
                    const cuser=auth.currentUser;

                     QuerySnapShot.forEach((doc,i)=>
                        {
                            const records=doc.data();
                            console.log(records);

                            if (doc.id!==cuser.uid)
                            {
                                users.push({uid:doc.id,...doc.data()});   
                            }

                        })



                        setUsers(users)

                }


    return (
    <div>

        {
            userDetails ? 
            <h1>Welcome {userDetails.name} {userDetails.email} </h1>
            :
            <p>Loading...</p>
        }

            <form onSubmit={(e)=>handleForm(e)} >

        <input type="file" onChange={(e)=>setProfileUrl(e.target.files[0])} />

        <button type='submit'>Upload</button>

            </form>

            {
                (status)
                ?
                <p>Loading</p>
                :
                <img src={path} alt="" />
            }
                <br />
            <Button variant='contained' onClick={()=>navigate('/newpost')}>post</Button>

            <Button onClick={()=>navigate('/viewpost')}>View Post</Button>

            <Button onClick={fetchAllusers}>All Users</Button>

        {/* <button onClick={handleLogOut} >LogOut</button> */}


        <table border={2}>
            <thead>
                <tr>
                    <th>SR.</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Images</th>
                    <th colSpan={2}>Action</th>
                </tr>

                {

                    allUsers
                    ?

                    allUsers.map((e,id)=>
                        {
                            return <tr key={id}>
                                <td>{id+1}</td>
                                <td>{e.name}</td>
                                <td>{e.email}</td>
                                <td>
                                    {
                                     e.profileUrl
                                     ?   
                                    <img src={e.profileUrl} width={'50px'} height={'50px'} alt="" />
                                     :
                                     <img src="https://cdn3d.iconscout.com/3d/premium/thumb/user-4906147-4124795.png" width={'50px'} height={'50px'} alt="" />
                                    }
                                     </td>
                                     
                                    <td>
                                        <button onClick={()=>navigate(`/chatscreen/${e.uid}`)} >Message</button>
                                    </td>
                            </tr>
                        })

                    :
                    'No Data Found'

                }

            </thead>
        </table>

    </div>
  )
}
