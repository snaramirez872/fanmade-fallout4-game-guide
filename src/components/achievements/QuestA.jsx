import React from "react";
import { Link } from 'react-router-dom';

function QuestA() {
    return (
        <div className='achieve-home'>
            <Link to='/achievement-guides'>
                <p>Back</p>
            </Link>
            <section className='quests'>
                <h1>Story Achievements</h1>
            </section>
        </div>
    );
}

export default QuestA;
