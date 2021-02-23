import { Avatar } from '@material-ui/core'
import React from 'react'
import '../styles/Sidebar.css';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice'


function Sidebar() {

    const user = useSelector(selectUser);

    const recentItems = (topic) => (
        <div className="sidebar__recentItems">
            <span className="sidebar__hash">#</span>
            <p>{topic}</p>
        </div>
    );

    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <img src="https://images.unsplash.com/photo-1579546929662-711aa81148cf?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1950&q=80"
                 alt="cover pic"/>
                <Avatar src={user.photoUrl} alt={user.displayName} className="sidebar__avatar"/>
                <h2>{user.displayName}</h2>
                <h4>{user.email}</h4>
            </div>
            <div className="sidebar__stats">
                <div className="sidebar__stat">
                    <p>Who viewed you</p>
                    <p className="sidebar__statNumber">1,543</p>
                </div>
                <div className="sidebar__stat">
                    <p>Views on post</p>
                    <p className="sidebar__statNumber">2,213</p>
                </div>
            </div>
            <div className="sidebar__bottom">
                <p>Recent</p>
                {recentItems('reactJs')}
                {recentItems('reduxJs')}
                {recentItems('programming')}
                {recentItems('softwareengineering')}
                {recentItems('developer')}
            </div>
        </div>
    )
}

export default Sidebar
