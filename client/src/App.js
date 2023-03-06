
import './App.css';
import Login from './components/Login/Login';
import Signup from './components/Login/Signup';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import PostRegister from './components/Posts/PostRegister';
import AllPosts from './components/Posts/AllPosts';
import UserPosts from './components/Posts/UserPosts';
import About from './components/Home/About';
import Home from './components/Home/Home';
import Explore from './components/Home/ExplorePage';
import Header from './components/Header/Header';
import User from './components/User/User';
import { useDispatch, useSelector } from 'react-redux';
import Header2 from './components/Header/Header2';
import { useEffect } from 'react';
import { getUser } from './actions/userActions';
import SubmissionRegister from './components/Submission/SubmissionRegister';
import Post from './components/Posts/Post';
import SubmissionPage from './components/Submission/SubmissionPage';
import Submissions from './components/Submission/Submissions';
import PostSubmissions from './components/Submission/PostSubmissions';
import Accepted from './components/Submission/Accepted';


function App() {
const {isAuthenticated}=useSelector(state=>state.user)
console.log(isAuthenticated);
  if(!isAuthenticated)
  {
  return (
   
   <>

    <BrowserRouter>
      <Header/>  
      <Routes>
        <Route path="/createPost" element={<PostRegister/>}/>
        <Route path="/createSubmission/:id/:name" element={<SubmissionRegister/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/posts" element={<AllPosts/>}/>
        <Route path="/posts/user" element={<UserPosts/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/" element={<Home/>}/>
        <Route path="/explore" element={<Explore/>}/>
        <Route path="/user" element={<User/>}/>
        <Route path="/user/submissions" element={<Submissions/>}/>
        <Route path="/post/:id" element={<Post/>}/>
        <Route path="/getSubmission/:id" element={<SubmissionPage/>}/>
        <Route path="/postSubmission/:id" element={<PostSubmissions/>}/>
        <Route path="/accepted/submissions" element={<Accepted/>}/>

      </Routes>
    </BrowserRouter>
    
   </>
    )}
    else
    {
      return(
        <>

        <BrowserRouter>
          <Header2/>  
          <Routes>
            <Route path="/createpost" element={<PostRegister/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/signup" element={<Signup/>}/>
            <Route path="/posts" element={<AllPosts/>}/>
            <Route path="/posts/user" element={<UserPosts/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/" element={<Home/>}/>
            <Route path="/explore" element={<Explore/>}/>
            <Route path="/user" element={<User/>}/>
            <Route path="/post/:id" element={<Post/>}/>
            <Route path="/createSubmission/:id/:name" element={<SubmissionRegister/>}/>
            <Route path="/getSubmission/:id" element={<SubmissionPage/>}/>
            <Route path="/user/submissions" element={<Submissions/>}/>
            <Route path="/postSubmission/:id" element={<PostSubmissions/>}/>
            <Route path="/accepted/submissions" element={<Accepted/>}/>
          </Routes>
        </BrowserRouter>
        
       </>

      )
    }
}

export default App;
