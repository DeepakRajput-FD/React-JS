import React, { useEffect, useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
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
  CardMedia,
  CardHeader,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth, firestore, storage } from "../firebaseConfig";
import {
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { Add, Delete, Edit, MoreVert, MoreVertOutlined } from "@mui/icons-material";
import Loader from "./Loader";
import NavBar from "./NavBar";
import { FavoriteOutlined, Share } from "@mui/icons-material";
import FormGroup from "@mui/material/FormGroup";

export default function AdminDashBoard() {
  const [post, setpost] = useState();
  const [users, setusers] = useState([]);
  const [usersImg, setusersImg] = useState([]);

  const [postrue, setpostrue] = useState(false);
  const [cardtrue, setcardture] = useState(true);

  const [AllData, setAlldata] = useState(null);

  const [mydata, setmydata] = useState("");

  const navigate = useNavigate();

  const [changeverticon, setchangeverticon] = useState(false);

  const [menuchange, setmenuchange] = useState(false);

  // for imf
  const [path, setpath] = useState();

  // for profile url

  useEffect(() => {
    fetchData();
    const subscribe = onAuthStateChanged(auth, (user) => {
      // console.log(user.uid);
      fetchMyData(user.uid);
    });
  }, []);

  const fetchMyData = async (uid) => {
    const userData = await getDoc(doc(firestore, "AdminData", uid));
    // console.log(userData.data());
    const record = userData.data();
    setmydata(record);
    // console.log(record);
  };

  // for log out account

  const handleLogOut = async () => {
    await signOut(auth);
    // await signOut(auth);
    navigate("/", { replace: true });
  };

  const fetchData = async () => {
    setcardture(true);
    setpostrue(false);
    const QuerySnapShot = await getDocs(collection(firestore, "UserData"));

    const users = [];

    QuerySnapShot.forEach((user) => {
      users.push({ uid: user.id, ...user.data() });
    });

    console.log(users);

    setAlldata(users);
    // setpost(!post)
  };

  // for card remove

  const handleRemove = async (userId) => {
    console.log(userId);

    // remove from firebase

    await deleteDoc(doc(firestore, "UserData", userId));

    // remove from useState
    const newArr = AllData.filter((user) => user.uid !== userId);

    setAlldata(newArr);

    // const currentUser=auth.currentUser;

    // // it is remove currentUser which is logged by admin
    // currentUser.delete();
  };

  // for card Edit

  const handleEdit = async (userId) => {
    console.log(userId);

    navigate(`/EditPage/${userId}`);
  };

  // Date Function

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

  // all post fetch

  const FetchPost = async () => {
    setpostrue(true);
    setcardture(false);

    const QuerySnapShot = await getDocs(collection(firestore, "Post"));
    // console.log(QuerySnapShot);

    const fetchData = [];

    QuerySnapShot.forEach((doc) => {
      const record = doc.data();
      // console.log('record',record);

      fetchData.push({
        id: doc.id,
        userId: record.userId,
        description: record.description,
        post: record.post,
        title: record.title,
        time: timeAgo(record.time),
        likes: record.likes || [],
      });
    });

    setpost(fetchData.reverse());
    UsersData();
  };

  // fetch data name from according user

  const UsersData = async () => {
    const QuerySnapShot = await getDocs(collection(firestore, "UserData"));

    const users = {};
    const userImg = {};
    QuerySnapShot.forEach((doc) => {
      const record = doc.data();

      users[doc.id] = record.name;
      userImg[doc.id] = record.profileUrl;
    });

    setusersImg(userImg);
    console.log(userImg);
    setusers(users);
    console.log(users);
  };

  // for post delete

  const mypostDelete = async (userId) => {
    console.log("Deleted Data", userId);
    await deleteDoc(doc(firestore, "Post", userId));
    const deletData = post.filter((user) => user.id !== userId);
    console.log(deletData);
    setpost(deletData);
  };

  const hii = () => {
    console.log("hii");
    setmenuchange(!menuchange);
  };

  return (
    <Box>

    {
      mydata
      ?
      <Box sx={{ flexGrow: 1 }}>
      <FormGroup></FormGroup>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            welcome, {mydata.name}
          </Typography>
          
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                color="inherit"
                onClick={hii}
              >
                <AccountCircle />
              </IconButton>
            </div>
          
        </Toolbar>
      </AppBar>

      <Box>
          {menuchange ? (
            <Box
              sx={{
                position: "absolute",
                right: 30,
                top: 65,
                display: "flex",
                flexDirection: "column",
                gap:'5px'
              }}
            >
              <Button
                variant="outlined"
                sx={{
                  textAlign: "center",
                  padding: "5px 30px",
                  background: "white",
                }}
                onClick={() => navigate("/Profile")}
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
                onClick={handleLogOut}
              >
                Log Out
              </Button>
            </Box>
          ) : (
            ""
          )}
        </Box>

    </Box>
      :
      <Loader/>
    }
      
   

     
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          width: "95%",
          margin: "20px auto",
          height: "600px",
        }}
      >
        <Tabs
          orientation="vertical"
          variant="scrollable"
          aria-label="Vertical tabs example"
          sx={{
            background: "red",
            width: "15%",
            background: "rgb(77 208 225)",
            borderBottomLeftRadius: 4,
            borderBottomLeftRadius: 4,
          }}
        >
          <img
            src={mydata.profileUrl}
            alt=""
            style={{ width: "100px", margin: "10px auto", borderRadius: 20 }}
          />
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{ textAlign: "center" }}
          >
            {mydata.name}
          </Typography>

          <Tab label="All Users" onClick={fetchData} value={"value"} />
          <Tab label="All Post" onClick={FetchPost} />
          <Tab label="My Profile" onClick={() => navigate("/Profile")} />
          <Tab label="Log out" onClick={handleLogOut} />
        </Tabs>

        <Box
          sx={{
            width: "85%",
            background: "white",
            overflowY: "scroll",
            scrollbarWidth: "none",
            borderTopRightRadius: 4,
            borderBottomRightRadius: 4,
          }}
        >
          {cardtrue ? (
            <Box>
              {AllData ? (
                <Box>
                  {AllData ? (
                    <Box
                      sx={{
                        margin: "20px 10px",
                        display: "flex",
                        gap: 2,
                        flexWrap: "wrap",
                        padding: "10px",
                      }}
                    >
                      {AllData.map((e, i) => {
                        return (
                          <Card sx={{ maxwidth: 345, borderRadius: 3 }} key={i}>
                            <CardActionArea>
                              {e.profileUrl ? (
                                <CardMedia
                                  component="img"
                                  height="200"
                                  image={e.profileUrl}
                                  alt="Image"
                                  sx={{ objectFit: "contain", marginTop: 1 }}
                                />
                              ) : (
                                <CardMedia
                                  component="img"
                                  height="200"
                                  image="https://icons.veryicon.com/png/o/miscellaneous/user-avatar/user-avatar-male-5.png"
                                  alt="Image"
                                  sx={{ objectFit: "contain", marginTop: 1 }}
                                />
                              )}

                              <CardContent>
                                <Typography
                                  gutterBottom
                                  variant="h5"
                                  component="div"
                                >
                                  {e.name}
                                </Typography>
                                <Typography
                                  variant="body2"
                                  color="text.secondary"
                                >
                                  {e.lastname}
                                </Typography>

                                <Typography
                                  variant="body2"
                                  color="text.secondary"
                                >
                                  {e.email}
                                </Typography>
                              </CardContent>
                            </CardActionArea>
                            <CardActions>
                              <Button
                                variant="contained"
                                color="primary"
                                onClick={() => handleEdit(e.uid)}
                                startIcon={<Edit />}
                              >
                                Edit
                              </Button>

                              <Button
                                variant="contained"
                                color="warning"
                                onClick={() => handleRemove(e.uid)}
                                endIcon={<Delete />}
                              >
                                Remove
                              </Button>
                            </CardActions>
                          </Card>
                        );
                      })}
                    </Box>
                  ) : (
                    <Typography
                      variant="h1"
                      noWrap
                      component="div"
                      sx={{ display: { xs: "none", sm: "block" } }}
                    >
                      No Data Found
                    </Typography>
                  )}
                </Box>
              ) : (
                <Loader />
              )}
            </Box>
          ) : (
            ""
          )}

          {postrue ? (
            <Box>
              {post ? (
                <Box sx={{ width: "90%", margin: "0 auto" }}>
                  {post.map((SinglePost, index) => {
                    return (
                      <Card
                        key={index}
                        sx={{
                          maxwidth: 345,
                          borderRadius: 3,
                          margin: "30px",
                          position: "relative",
                        }}
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
                          sx={{
                            width: "100%",
                            height: "400px",
                            borderRadius: 5,
                          }}
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
                          <IconButton aria-label="add to favorites">
                            <FavoriteOutlined />
                          </IconButton>
                          <IconButton aria-label="share">
                            <Share />
                          </IconButton>

                          <Box sx={{ display: "flex", gap: 2, px: 2 }}>
                            {changeverticon ? (
                              <Box
                                sx={{
                                  position: "absolute",
                                  top: "60px",
                                  right: "0px",
                                  display: "flex",
                                  flexDirection: "column",
                                  padding: "10px",
                                  gap: "16px",
                                }}
                              >
                                <Button variant="contained">Edit</Button>

                                <Button
                                  variant="contained"
                                  onClick={() => mypostDelete(SinglePost.id)}
                                >
                                  Delete
                                </Button>
                              </Box>
                            ) : (
                              ""
                            )}

                            <Typography
                              variant="body2"
                              sx={{
                                fontWeight: "600",
                                fontSize: "20px",
                                color: "blue",
                                padding: "10px",
                              }}
                            >
                              {SinglePost.likes.length + " " + "Likes"}
                            </Typography>
                          </Box>
                        </CardActions>
                      </Card>
                    );
                  })}
                </Box>
              ) : (
                <Loader />
              )}
            </Box>
          ) : (
            ""
          )}
        </Box>
      </Box>
    </Box>
  );
}
