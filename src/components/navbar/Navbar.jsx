import { ArrowDropDown, Notifications, Search } from '@material-ui/icons'
import React from 'react'
import "./navbar.scss"

export default function Navbar() {

    return (
        <div className="navbar">
            <div className="container">
                <div className="left">
                    <img src="https://play-lh.googleusercontent.com/3_7Y-uenEqkS4BeEtWLymvvW2Fd4lkYV3JaT4G_BxNMNen2XQ7v_zv3s1-U8NO2P4A" alt="" />
                    <span>Homepage</span>
                    <span>Series</span>
                    <span>Movies</span>
                    <span>New and Popular</span>
                    <span>My list</span>
                </div>
                <div className="right">
                    <Search className="icon" />
                    <span>KID</span>
                    <Notifications className="icon" />
                    <img src="https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/49/4955d454f72c7f796de51b8038be95d9c610d6bd_full.jpg" alt="" />
                    <div className="profile">
                    <ArrowDropDown className="icon" />
                    <div className="options">
                        <span>Settings</span>
                        <span>Logout</span>
                    
                    </div>
                </div>
              </div>
            </div>
        </div>
        
    )
}

