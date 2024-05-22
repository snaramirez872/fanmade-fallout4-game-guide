import React from "react";
import { Link } from 'react-router-dom';

function GameGuidesHome() {
    return (
        <div className='game-guides-home'>
            <Link to='/'>
                <p>Home</p>
            </Link>
        </div>
    );
}

export default GameGuidesHome;