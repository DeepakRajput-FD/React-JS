import { onAuthStateChanged } from 'firebase/auth';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { auth, db } from '../firebaseConfig';
import { QuerySnapshot, addDoc, collection, doc, getDoc, getDocs, orderBy, query, serverTimestamp, where } from 'firebase/firestore';
import { Button } from '@mui/material';

export default function ChatScreen() {
  
    const {uid}=useParams();
    const [selectedUserName, setSelectedUserName] = useState('');
    const [currentUserName, setCurrentUserName] = useState('');
    const [cid, setCid] = useState();
    const [chatperson, setChatperson] = useState('');
    const [chatpersonid, setChatpersonid] = useState();
    const [newMsgInput, setNewMsgInput] = useState('');
    const [message,setallmessage]=useState([]);
    const [currentuid,setCurrentUid] = useState();


    
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth,(user) => {
            if (user) {
                setCurrentUid(user.uid);
            }
            else
            {
                setCurrentUid(null); // Handle if user is logged out
            }
        });

        return unsubscribe;
    }, []);


    useEffect(()=>{
        fetchUserNames();
        fetchMessages();
    },[currentuid,uid])

    const sendMessage=async()=>{
        if(!messageInput.trim()) return; // Prevent sending empty messages

        const newMessage = {
            senderId: auth.currentUser.uid,
            receiverId: uid,
            content: messageInput.trim(),
            timestamp: serverTimestamp(),
            
        };
         
        await addDoc(collection(db, 'Chats'), newMessage);
        setMessage("");
        fetchMessages();
    }


    const fetchUserNames = async () => {
        // Fetch selected user's name
        const selectedUserDoc = await getDoc(doc(db, 'Student', uid));
        if (selectedUserDoc.exists()) {
            setSelectedUserName(selectedUserDoc.data().name);
        }

        // Fetch current user's name (logged-in user)
        const currentUserDoc = await getDoc(doc(db, 'Student', auth.currentUser.uid));
        if (currentUserDoc.exists()) {
            setCurrentUserName(currentUserDoc.data().name);
            setCurrentUid(auth.currentUser.uid);
        }
    };

    const fetchMessages = async()=>{
        // fetch message between current user and selected user 
        
        if (!currentuid || !uid) return; // Ensure currentuid and uid are defined

        console.log("---> auth --",currentuid);
        
        const q = query(
                collection(db, 'Chats'),
                where('senderId', 'in', [currentuid, uid]),
                where('receiverId', 'in', [currentuid, uid]),
                orderBy('timestamp', 'asc')
        );
        const querySnapshot = await getDocs(q);
        const fetchMessages = [];

        querySnapshot.forEach((doc)=>{
            fetchMessages.push(doc.data());
        })

        setMessagesAll(fetchMessages);
    }

    return (
    <>
    <h3>Welcome {currentUserName}</h3>

        <h1>lets start chat with : {chatperson}</h1>

        <input type="text" value={newMsgInput} onChange={(e)=>setNewMsgInput(e.target.value)} />

        <Button onClick={sendMessage} >Send</Button>

        <div style={{maxWidth:"300px",border:'2px solid black'}}>
            {
                message.map((message,index)=>
                    {
                        return <div key={index} style={{textAlign:message.senderId === cid ? "right" : "left" }} >
                            <p>
                                <span style={{padding:'20px',color:message.senderId===cid ? "blue" : 'purple' }} >
                                {message.content}
                                </span>
                            </p>
                        </div>
                    })
            }
        </div>

    </>
  )
}
