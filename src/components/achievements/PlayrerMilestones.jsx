import React from "react";
import { Link } from 'react-router-dom';

function PlayerMilestones() {
    return (
        <div className='achieve-home'>
            <Link to='/achievement-guides'>
                <p>Back</p>
            </Link>
            <section className='player-miles'>
                <h1>Player Level Milestones</h1>
            </section>
        </div>
    );
}

export default PlayerMilestones;
