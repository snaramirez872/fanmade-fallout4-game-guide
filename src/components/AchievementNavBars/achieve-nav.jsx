import React from "react";
import { Link } from "react-router-dom";
import './achieve-nav.css';

export default function AchieveNav() {
    return (
        <nav className='achieve-nav'>
            <h1>Achievements</h1>
            <div className='achieve-links'>
                <Link to='/'><p>Home</p></Link>
                <Link to='/base-game-achievements'><p>Base Game</p></Link>
                <Link to='/dlc-achievements'><p>DLC</p></Link>
            </div>
        </nav>
    );
}
