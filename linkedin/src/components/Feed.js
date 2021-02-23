import React, { useState, useEffect } from 'react';
import '../styles/Feed.css';
import CreateIcon from '@material-ui/icons/Create';
import ImageIcon from '@material-ui/icons/Image';
import YouTubeIcon from '@material-ui/icons/YouTube';
import EventNoteIcon from '@material-ui/icons/EventNote';
import CalenderViewDayIcon from '@material-ui/icons/CalendarViewDay';
import FlipMove from "react-flip-move";

import InputOption from './InputOption';
import Post from './Post';
import { db } from '../firebase';
import firebase from 'firebase';
import { selectUser } from '../features/userSlice';
import { useSelector } from 'react-redux';


function Feed() {
    const [posts, setPosts] = useState([]);
    const [input, setInput] = useState('');
    const user = useSelector(selectUser);


    useEffect(() => {
        db.collection('posts').orderBy('timestamp', 'desc').onSnapshot(snapshot=> (
            setPosts(snapshot.docs.map(doc => ({ 
                id: doc.id, 
                data: doc.data()
            })
            )
            )
        ))
    }, [])

    const sendPost = (event) => {
        event.preventDefault();
        
        db.collection('posts').add({
            name: user.displayName,
            description: user.email,
            message: input,
            photoUrl: user.photoUrl,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        })
        setInput('');
    }
   

    return (
        <div className="feed"> 
            <div className="feed__inputContainer">
                <div className="feed__input">
                <CreateIcon/>
                <form>
                    <input value={input}  placeholder="Start a post" onChange={(e)=> setInput(e.target.value)} type="text"/>
                    <button onClick={sendPost} type="submit">Send</button>
                </form>
                </div>
                <div className="feed__inputOptions">
                    <InputOption title="Photo" Icon={ImageIcon}
                     color="#70B5F9"/>
                     <InputOption title="Video" Icon={YouTubeIcon}
                     color="#E7A33E"/>
                     <InputOption title="Event" Icon={EventNoteIcon}
                     color="#C0CBCD"/>
                     <InputOption title="Write article" Icon={CalenderViewDayIcon}
                     color="#7FC15E"/>
                </div>
            </div>
            <FlipMove>
            {
                posts.map(({id, data: { name, description, message, photoUrl } }) => (
                    <Post
                    key={id}
                    name={name}
                    description={description}
                    message={message}
                    photoUrl={photoUrl}
                    />
                ))
            }
            </FlipMove>

        </div>
    )
}

export default Feed
