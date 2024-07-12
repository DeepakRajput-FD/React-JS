import { collection, deleteDoc, doc, getDocs } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { auth, db } from '../firebaseConfig';
import { all } from 'axios';
import { Button } from '@mui/material';
import { deleteUser } from 'firebase/auth';
import firebase from 'firebase/compat/app';
import { useNavigate } from 'react-router-dom';

export default function Guest() {
  
    const [allUsers,setUsers]=useState([]);

    const navigate=useNavigate();

    useEffect(()=>
        {
            fetchAllUsers();
        },[])

        const fetchAllUsers=async()=>
            {
                const QuerySnapShot=await getDocs(collection(db,'Student'));
                console.log(QuerySnapShot);

                const users=[];

                QuerySnapShot.forEach((doc)=>
                    {
                        users.push({uid:doc.id,...doc.data()});
                        // console.log(doc.id);
                    })

                    setUsers(users);

                    console.log('.......users',users);

            }

        const DeleteDoc=async(userId)=>
            {
                console.log('Delete Doc : ',userId);
                await deleteDoc(doc(db,'Student',userId)); //remove from firebase

                // remove from array
                const newArray= allUsers.filter(user=>user.uid !==userId);
                setUsers(newArray);
                console.log(newArray);
                
                const user=auth.currentUser;

                console.log(user);

                user.delete();


            }

    return (
    <>
    <h1>All Guest</h1>

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
                                <td><Button variant='contained' onClick={()=>navigate(`/EditPage/${e.uid}`)} >Edit</Button></td>
                                <td>
                                    <Button variant='contained' onClick={()=>DeleteDoc(e.uid)}>Delete</Button>
                                    </td>
                            </tr>
                        })

                    :
                    'No Data Found'

                }

            </thead>
        </table>

    </>
  )
}
