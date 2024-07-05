import React, { useEffect, useState } from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MoreIcon from "@mui/icons-material/MoreVert";
import {
  Avatar,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Table,
  TableBody,
  TableHead,
  TextField,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth, firestore, storage } from "../firebaseConfig";
import {
  arrayUnion,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import {
  Add,
  AddComment,
  Delete,
  Edit,
  Favorite,
  FavoriteBorder,
  FavoriteBorderOutlined,
  MoreVert,
  MoreVertOutlined,
} from "@mui/icons-material";
import Loader from "./Loader";
import ViewPost from "./ViewPost";
import Modal from "@mui/material/Modal";
import { FavoriteOutlined, Share } from "@mui/icons-material";

export default function NavBar() {
  const navigate = useNavigate();
  const [clicked, setclicked] = useState(false);

  const [post, setpost] = useState([]);
  const [users, setusers] = useState([]);
  const [usersImg, setusersImg] = useState([]);

  const [likes, setlikes] = useState("");

  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  }));

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("md")]: {
        width: "20ch",
      },
    },
  }));

  const [data, setdata] = useState("");
  const [path1, setpath1] = useState(false);

  const [changeverticon, setchangeverticon] = useState(false);

  const [commentchange, setcommentchange] = useState(false);

  const [comment, setcomment] = useState("");

  const [idNumber, setidNumber] = useState("");

  const [tableUser,setableUser]=useState([]);

  useEffect(() => {
    // it is the firebase event when change on firebase event
    // user is the current value which is inserted by user || it is give the current user value
    const sub = onAuthStateChanged(auth, (user) => {
      if (user) {
        handleData(user);
      }
    });
    FetchPost();
    UsersData();
    fetchAllusers();
  }, []);

  const handleData = async (user) => {
    if (user) {
      const userdata = await getDoc(doc(firestore, "UserData", user.uid));
      // console.log(userdata.data());
      setdata(userdata.data());
    }
  };

  const handleLogOut = async () => {
    await signOut(auth);
    // await signOut(auth);
    navigate("/", { replace: true });
  };

  const UsersData = async () => {
    const QuerySnapShot = await getDocs(collection(firestore, "UserData"));

    const users = {};
    const userImg = {};

    QuerySnapShot.forEach((doc) => {
      const record = doc.data();

      users[doc.id] = record.name;
      userImg[doc.id] = record.profileUrl;
      // users[doc.id]=record.profileUrl
    });
    setusersImg(userImg);

    setusers(users);
    console.log(users);
  };

  const timeAgo = (timestamp) => {
    const now = Date.now();
    const seconds = Math.floor((now - timestamp) / 1000);

    let interval = Math.floor(seconds / 31536000);
    if (interval > 1) {
      return `${interval} years ago`;
    }
    interval = Math.floor(seconds / 2592000);
    if (interval > 1) {
      return `${interval} months ago`;
    }
    interval = Math.floor(seconds / 86400);
    if (interval > 1) {
      return `${interval} days ago`;
    }
    interval = Math.floor(seconds / 3600);
    if (interval > 1) {
      return `${interval} hours ago`;
    }
    interval = Math.floor(seconds / 60);
    if (interval > 1) {
      return `${interval} minutes ago`;
    }
    return `${Math.floor(seconds)} seconds ago`;
  };

  const FetchPost = async () => {
    const QuerySnapShot = await getDocs(collection(firestore, "Post"));
    // console.log(QuerySnapShot);

    const fetchData = [];

    QuerySnapShot.forEach((doc) => {
      const record = doc.data();
      // console.log('record',record);
      // console.log(record.time);
      fetchData.push({
        id: doc.id,
        userId: record.userId,
        description: record.description,
        post: record.post,
        likes: record.likes || [],
        title: record.title,
        comments: record.comments || [],
        time: timeAgo(record.time),
      });
      // console.log(record.time);
    });

    setpost(fetchData.reverse());
  };

  const mypost = async () => {
    const userInfo = await getDocs(collection(firestore, "Post"));

    const users = [];

    const currentUser = auth.currentUser;

    const fetchData = [];

    userInfo.forEach((doc) => {
      console.log(doc.id);

      // console.log(doc.data());

      const record = doc.data();

      console.log(currentUser.uid == record.userId);

      if (currentUser.uid == record.userId) {
        fetchData.push({
          id: doc.id,
          userId: record.userId,
          description: record.description,
          post: record.post,
          title: record.title,
          Edit: "Edit",
          Delete: "Delete",
          likes: record.likes || [],
          time: timeAgo(record.time),
          comments: record.comments || [],
        });
      }

      setpost(fetchData.reverse());
    });
  };

  const mypostDelete = async (userId) => {
    console.log("Deleted Data", userId);
    await deleteDoc(doc(firestore, "Post", userId));

    // const deletData=post.filter(user=>user.uid!==userId);
    setpost(post.filter((item) => item.uid !== userId));
  };

  const handleLike = async (postId) => {
    console.log(postId);

    const specificUser = await getDoc(doc(firestore, "Post", postId));
    // console.log(specificUser);
    const postDataLikeList = (await specificUser.data().likes) || [];
    console.log(postDataLikeList);

    setidNumber(postId);

    const user = auth.currentUser;

    if (postDataLikeList.includes(user.uid)) {
      handleUnlike(postId);
      console.log("data is removed");
    }
    // console.log("adding like");
    else {
      await updateDoc(doc(firestore, "Post", postId), {
        likes: [...postDataLikeList, user.uid],
      });

      const updatePost = post.map((post) =>
        post.id == postId ? { ...post, likes: [...post.likes, user.uid] } : post
      );

      setpost(updatePost);
      console.log("data is adding : ");
    }

    // setclicked(!clicked);
  };

  const handleUnlike = async (postid) => {
    const specificPost = await getDoc(doc(firestore, "Post", postid));
    console.log(specificPost.id);
    const specificLike = await specificPost.data().likes;
    const user = auth.currentUser;

    const filterValue = await specificLike.filter((item) => item !== user.uid);

    console.log(filterValue);

    await updateDoc(doc(firestore, "Post", postid), {
      likes: filterValue,
    });

    const updatePost = post.map((post) =>
      post.id == postid ? { ...post, likes: [post.likes] } : post
    );

    setpost(updatePost);
    setclicked(!clicked);
  };

  const handleComment = async (postid) => {
    console.log(postid, "comment");

    const user = auth.currentUser;

    const commentobj = {
      text: comment,
      userId: user.uid,
      time: Date.now(),
    };

    await updateDoc(doc(firestore, "Post", postid), {
      comments: arrayUnion(commentobj),
    });

    const updateCommentPost = await post.map((post) =>
      post.id === postid
        ? { ...post, comments: [...post.comments, commentobj] }
        : post
    );
    setpost(updateCommentPost);

    console.log("New post : ", post);

    console.log(updateCommentPost);

    console.log("submitted");
    setcommentchange(!commentchange);
  };

  const fetchAllusers = async () => {
    const QuerySnapShot = await getDocs(collection(firestore, "UserData"));

    const userData=[];

    const user=auth.currentUser;

    QuerySnapShot.forEach((doc,index)=>
      {
        const record=doc.data();

        if (user.uid!==doc.id)
        {
            console.log(record);
            userData.push({
              id:doc.id,
              name:record.name,
              image:record.profileUrl,
              email:record.email
            })
        }
        
        setableUser(userData);

        console.log(record);
      })


    console.log(users);
  };

  const comment2 = (postid) => {
    setidNumber(postid);
    setcommentchange(!commentchange);
  };

  

  return (
    <>
      {data ? (
        <Box>
          <AppBar
            sx={{
              background: "#4DD0E1",
              boxShadow: "0 0 10px 0 rgba(0,0,0,0.45) inset",
              color: "black",
              borderRadius: "10px",
            }}
          >
            <Toolbar>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="open drawer"
                sx={{ mr: 2 }}
              >
                <MenuIcon />
              </IconButton>
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ display: { xs: "none", sm: "block" } }}
              >
                {data.name}
              </Typography>
              <Search>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search…"
                  inputProps={{ "aria-label": "search" }}
                  sx={{ borderRadius: "5px" }}
                />
              </Search>
              <Box sx={{ flexGrow: 1 }} />
              <Box sx={{ display: { xs: "none", md: "flex" } }}>
                <IconButton
                  size="large"
                  aria-label="show 4 new mails"
                  color="black"
                >
                  <Badge badgeContent={4} color="error">
                    <MailIcon />
                  </Badge>
                </IconButton>
                <IconButton
                  size="large"
                  aria-label="show 17 new notifications"
                  color="black"
                >
                  <Badge badgeContent={17} color="error">
                    <NotificationsIcon />
                  </Badge>
                </IconButton>
                <IconButton
                  size="large"
                  edge="end"
                  aria-label="account of current user"
                  aria-haspopup="true"
                  color="inherit"
                >
                  {data ? (
                    <img
                      src={data.profileUrl}
                      alt="image"
                      width="35px"
                      style={{ borderRadius: 20 }}
                      onClick={() => setpath1(!path1)}
                    />
                  ) : (
                    <IconButton onClick={() => setpath1(!path1)}>
                      <AccountCircle  />
                    </IconButton>
                  )}
                </IconButton>
              </Box>
              <Box sx={{ display: { xs: "flex", md: "none" } }}>
                <IconButton
                  size="large"
                  aria-label="show more"
                  aria-haspopup="true"
                  color="inherit"
                >
                  <MoreIcon />
                </IconButton>
              </Box>
            </Toolbar>
          </AppBar>

          <Box>
            {path1 ? (
              <Box
                sx={{
                  position: "absolute",
                  right: 5,
                  top: 65,
                  display: "flex",
                  flexDirection: "column",
                  zIndex: 2,
                }}
              >
                <Button
                  variant="outlined"
                  sx={{
                    textAlign: "center",
                    padding: "5px 30px",
                    background: "white",
                  }}
                  onClick={() => navigate("/Dashboard")}
                >
                  Profile
                </Button>

                <Button
                  variant="outlined"
                  sx={{
                    textAlign: "center",
                    padding: "5px 30px",
                    background: "white",
                  }}
                  onClick={FetchPost}
                >
                  View All Post
                </Button>

                <Button
                  variant="outlined"
                  sx={{
                    textAlign: "center",
                    padding: "5px 30px",
                    background: "white",
                  }}
                  onClick={(e) => mypost()}
                >
                  My Post
                </Button>

                <Button
                  variant="outlined"
                  sx={{
                    textAlign: "center",
                    padding: "5px 30px",
                    background: "white",
                  }}
                  startIcon={<Add />}
                  onClick={() => navigate("/addpost")}
                >
                  ADD Post
                </Button>

                <Button
                  variant="outlined"
                  sx={{
                    textAlign: "center",
                    padding: "5px 30px",
                    background: "white",
                  }}
                  onClick={handleLogOut}
                >
                  Log Out
                </Button>
              </Box>
            ) : (
              ""
            )}
          </Box>

          <Box
            sx={{
              width: "80%",
              margin: "80px auto",
              display: "flex",
              gap: 2,
            }}
          >
            <Box >
              <table
                style={{
                  fontWeight: 600,
                  fontFamily: "cursive",
                  padding:'20px'
                }}
              >
                <thead >
                  <tr style={{padding:'20px'}} >
                    <th>Sr no</th>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>

                {
                  tableUser.map((e,i)=>
                    {
                      return <tr >
                        <td>{i+1}</td>
                        <td><img src={e.image} width={'50px'} alt="" /></td>
                        <td>{e.name}</td>
                        <td>{e.email}</td>
                        <td><Button variant="contained" onClick={()=>navigate(`/chatscreen/${e.id}`)} >Message</Button></td>
                      </tr>
                    })
                }

                </tbody>
              </table>
            </Box>

            <Box>
              {post ? (
                <Box
                  sx={{
                    display: "flex",
                    gap: "20px",
                    flexDirection: "column",
                    position: "relative",
                  }}
                >
                  {post.map((SinglePost, index) => {
                    return (
                      <Card
                        sx={{ width: "100%", position: "relative",borderRadius:'20px',fontFamily:'sans-serif' }}
                        key={index}
                      >
                        <CardHeader
                          avatar={
                            <Avatar
                              sx={{ background: "red" }}
                              aria-label="recipe"
                            >
                              <img
                                src={usersImg[SinglePost.userId]}
                                style={{ width: "45px", objectFit: "contain" }}
                                alt=""
                              />
                            </Avatar>
                          }
                          action={
                            <IconButton aria-label="settings">
                              <MoreVertOutlined
                                onClick={() =>
                                  setchangeverticon(!changeverticon)
                                }
                              />
                            </IconButton>
                          }
                          title={users[SinglePost.userId]}
                          subheader={SinglePost.time}
                        />

                        <CardMedia
                          component="img"
                          //  height="194"
                          image={SinglePost.post}
                          alt="Paella dish"
                          sx={{ height: "300px", objectFit: "cover" }}
                        />
                        <CardContent>
                          <Typography
                            variant="body1"
                            sx={{ color: "black" }}
                            color="text.secondary"
                          >
                            {SinglePost.title}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {SinglePost.description}
                          </Typography>
                        </CardContent>
                        <CardActions disableSpacing>
                          <Button
                            // variant="outlined"
                            sx={{ margin: "0px" }}
                            onClick={() => handleLike(SinglePost.id)}
                          >

                          {
                            SinglePost.likes.includes(auth.currentUser.uid)
                            ?
                            <Favorite/> 
                            // SinglePost.id == idNumber ? "Liked" : "Like"
                            :
                            <FavoriteBorderOutlined />
                          }

                          </Button>
                          
                          <Typography
                            variant="body2"
                            sx={{
                              fontWeight: "600",
                              fontSize: "20px",
                              color: "red",
                              padding: "20px",
                            }}
                          >
                            {SinglePost.likes.length || 0  }
                          </Typography>


                          <Button
                            onClick={() => comment2(SinglePost.id)}
                            variant="contained"
                          >
                            <AddComment />
                          </Button>

                       
                          <Typography variant="body2" color="Text.secodary" sx={{fontSize:'12px',margin:2}} >
                            {SinglePost.time}
                          </Typography>

                          {commentchange ? (
                            SinglePost.id == idNumber ? (
                              <Box
                                sx={{
                                  position: "absolute",
                                  top: "250px",
                                  background: "rgb(179 229 252)",
                                  width: "80%",
                                  // margin: "20px auto",
                                  // padding: "10px",
                                  borderRadius: "10px",
                                  display: "flex",
                                  flexDirection: "column",
                                  left: "50px",
                                }}
                              >
                                <Typography
                                  id="modal-modal-title"
                                  variant="h6"
                                  component="h2"
                                  sx={{ textAlign: "center", padding: "10px" }}
                                >
                                  Add to Comment
                                </Typography>
                                <TextField
                                  placeholder="Enter Comment"
                                  sx={{ margin: "0 auto" }}
                                  onChange={(e) => setcomment(e.target.value)}
                                />
                                <Button
                                  variant="contained"
                                  sx={{ width: "100px", margin: "10px auto" }}
                                  onClick={() => handleComment(SinglePost.id)}
                                >
                                  Submit
                                </Button>

                                <Button onClick={()=>setcommentchange(!commentchange)}>Close</Button>

                                {SinglePost.comments?.length > 0 ? (
                                  SinglePost.comments.map((comment, index) => {
                                    return (
                                      <Box key={index} sx={{color:'green'}} >
                                        
                                        <Typography sx={{padding:'10px',textTransform:'capitalize',fontSize:'13px'}}>
                                          posted by : {users[comment.userId]}  :  
                                          {comment.text} at :
                                          {timeAgo(comment.time)}
                                        
                                        </Typography>

                                      </Box>
                                    );
                                  })
                                ) : (
                                  <p>Commments Not Found</p>
                                )}
                              </Box>
                            ) : (
                              ""
                            )
                          ) : (
                            ""
                          )}

                          {changeverticon ? (
                            <Box
                              sx={{
                                display: "flex",
                                gap: 2,
                                px: 2,
                                position: "absolute",
                                top: "60px",
                                right: "0px",
                                flexDirection: "column",
                                background: "white",
                                padding: "10px",
                              }}
                            >
                              {SinglePost.Edit ? (
                                <Button variant="contained">
                                  {SinglePost.Edit}
                                </Button>
                              ) : (
                                ""
                              )}

                              {SinglePost.Delete ? (
                                <Button
                                  variant="contained"
                                  onClick={() => mypostDelete(SinglePost.id)}
                                >
                                  {SinglePost.Delete}
                                </Button>
                              ) : (
                                ""
                              )}
                            </Box>
                          ) : (
                            ""
                          )}
                        </CardActions>
                      </Card>
                    );
                  })}
                </Box>
              ) : (
                <Loader />
              )}
            </Box>
          </Box>
        </Box>
      ) : (
        <Loader />
      )}
    </>
  );
}
