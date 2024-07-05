import firebase from "firebase/compat/app";
import {  addDoc, collection, doc, getDoc, getDocs, orderBy, query, serverTimestamp, where } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { auth, firestore } from "../firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import {
  InsertEmoticon,
  MoreVert,
  VolunteerActivism,
} from "@mui/icons-material";
import Loader from "./Loader";
import { TextField } from "@mui/material";

export default function ChatScreen() {
  const { uid } = useParams();

  const navigate = useNavigate();

// for receiver

  const [name, setname] = useState("");

  const [image, setimage] = useState("");

  const [option, setoption] = useState("");

  const [input,setinput]=useState('');

 const [emjion,setemojioff]=useState('');

//  for uid
 const [sender,setsender]=useState('');
 const [senderName,setsenderName]=useState('');

 const [messagesAll,setMessagesAll] = useState([]);


  useEffect(() => {

    const subscribe=onAuthStateChanged(auth,(user)=>
      {
        if (user)
           {
            setsender(user.uid)
        }
        else
        {
          setsender(null)
        }
      })
      return subscribe
  },[]);

  useEffect(()=>
    {

      if (sender&&uid)
         {          
          fetchUserNames(); 
           fetchMessages();
        }

    },[sender,uid])

  const fetchUserNames = async () => {


    // console.log(user);

    const receiver = await getDoc(doc(firestore, "UserData", uid));
    const record = receiver.data();
    setname(record.name);
    setimage(record.profileUrl);

    const currentUserInfo=await getDoc(doc(firestore,'UserData',auth.currentUser.uid));
    // console.log(currentUserInfo.data());
    if (currentUserInfo.exists())
       {
         setsenderName(currentUserInfo.data().name)
         setsender(auth.currentUser.uid)
    }

  };

  const copyEmoji = (e) => {
    const a = e.target.textContent;
    navigator.clipboard.writeText(a);
    setinput(input+a)
  };


  const sendData=async()=>
    {
            if (!input.trim()) return;

            const newmessageObj=
            {
                text:input,
                sender:auth.currentUser.uid,
                receiver:uid,
                time:serverTimestamp()
            }

            console.log(newmessageObj);

                await addDoc(collection(firestore,'Chats'),newmessageObj);
            setinput('')
            fetchMessages();
     
    }

    const fetchMessages = async()=>{
      // fetch message between current user and selected user 
      
      if (!sender || !uid) return; // Ensure currentuid and uid are defined
      
      const q = query(
              collection(firestore, 'Chats'),
              where('sender', 'in', [sender, uid]),
              where('receiver', 'in', [sender, uid]),
              orderBy('time', 'asc')
      );

      const querySnapshot = await getDocs(q) ;
      const fetchMessages = [];

      querySnapshot.forEach((doc)=>
        {
            fetchMessages.push(doc.data())
        })

      setMessagesAll(fetchMessages);
  }



  return (
    <>

      {image ? (
        <Box sx={{ width: "80%", margin: "0 auto" }}>
          <AppBar
            position="static"
            sx={{
              background: "white",
              borderTopLeftRadius: "10px",
              borderTopRightRadius: "10px",
              borderBottom: "1px solid rgb(219 219 219)",
            }}
          >
            <Container maxWidth="xl">
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Box sx={{ flexGrow: 0 }}>
                  <Tooltip title="Icon">
                    <IconButton sx={{ p: 2 }}>
                      <Avatar
                        alt={name}
                        src={
                          image ||
                          "https://cdn1.iconfinder.com/data/icons/user-pictures/101/malecostume-512.png"
                        }
                        sx={{
                          width: "60px",
                          height: "60px",
                          border: "2px solid red",
                          filter: "blur(6px)",
                          ":hover": { filter: "blur(0px)" },
                        }}
                      />
                    </IconButton>
                  </Tooltip>
                </Box>

                <Typography
                  variant="body2"
                  sx={{
                    color: "black",
                    textTransform: "capitalize",
                    fontSize: "20px",
                    fontWeight: "600",
                    fontFamily: "cursive",
                    filter: "blur(6px)",
                    ":hover": { filter: "blur(0px)", cursor: "pointer" },
                  }}
                >
                  {name}
                </Typography>

                <Box sx={{ position: "relative" }}>
                  <IconButton onClick={() => setoption(!option)}>
                    <MoreVert sx={{ color: "black" }} />
                  </IconButton>

                  {option ? (
                    <Button
                      variant="contained"
                      sx={{ position: "absolute", top: "40px", right: "-10px" }}
                      onClick={() => navigate(-1)}
                    >
                      Back
                    </Button>
                  ) : (
                    ""
                  )}
                </Box>
              </Box>
            </Container>
          </AppBar>

          <Box
            sx={{
              background: "white",
              height: "550px",
              borderBottomLeftRadius: "10px",
              borderBottomRightRadius: "10px",
              padding:'20px',
              overflow:'scroll',
              scrollbarWidth:'none'
            }}
          >

                {messagesAll.map((message,index)=>(
                    <div key={index}
                        style={{fontFamily:'sans-serif',paddingTop:1,textAlign: message.sender === auth.currentUser.uid ? "right" : "left",margin:"15px 0"}}>
                        <span style={{padding:"5px 10px",borderRadius:"10px",backgroundColor:message.sender === auth.currentUser.uid ? "blue" : "purple",color:"white"}}>
                            {message.text}
                        </span>
                    </div>
                ))}
            </Box>

            <Box sx={{ position: "absolute", bottom: "50px", margin: 2 }}>

            <Box sx={{display:'flex',alignItems:'center',gap:1}} >

            <IconButton
                sx={{fontSize: "30px",
                  color: "black",
                }}
                onClick={()=>setemojioff(!emjion)}
              >
                <InsertEmoticon />
              </IconButton>
              <TextField variant="outlined" sx={{ width: "130ch" }} placeholder="Message..." value={input}  onChange={(e)=>setinput(e.target.value)} />

                <Button variant="text" onClick={sendData} >Send</Button>

            </Box>

                {
                    emjion
                    ?
                    <Box
                sx={{
                  width: "190px",
                  height: "100px",
                  border: "1px solid black",
                  borderRadius: "5px",
                  display: "flex",
                  fontSize: "25px",
                  overflow: "scroll",
                  cursor: "pointer",
                  flexWrap: "wrap",
                  alignItems: "center",
                  gap: 2,
                  scrollbarWidth: "none",
                  alignContent: "baseline",
                  margin: 2,
                }}
              >
                <span onClick={(e) => copyEmoji(e)}>😀</span>
                <span onClick={(e) => copyEmoji(e)}>😄</span>
                <span onClick={(e) => copyEmoji(e)}>😁</span>
                <span onClick={(e) => copyEmoji(e)}>😆</span>
                <span onClick={(e) => copyEmoji(e)}>😇</span>
                <span onClick={(e) => copyEmoji(e)}>🥹</span>
                <span onClick={(e) => copyEmoji(e)}>🥰</span>
                <span onClick={(e) => copyEmoji(e)}>😍</span>
                <span onClick={(e) => copyEmoji(e)}>😚</span>
                <span onClick={(e) => copyEmoji(e)}>👶</span>
                <span onClick={(e) => copyEmoji(e)}>🧑</span>
                <br />
                Press CTRL + V
                 </Box>

                    :
                    ""
                }

              
            </Box>
          </Box>
        // </Box>
      ) : (
        <Loader />
      )}
    </>
  );
}
