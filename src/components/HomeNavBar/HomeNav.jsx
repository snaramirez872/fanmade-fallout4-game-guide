import React from "react";
import { Link } from "react-router-dom";
import "./HomeNav.css";

export default function HomeNav() {
    return (
        <nav className='home-nav'>
            <h1>Sean's Fanmade Fallout 4 Guide</h1>
            <div className='home-links'>
                <Link to='/base-game-achievements'><p>Base Game Achievements</p></Link>
                <Link to='/dlc-achievements'><p>DLC Achievements</p></Link>
                <Link to=''><p>Story</p></Link>
            </div>
        </nav>
    );
}
