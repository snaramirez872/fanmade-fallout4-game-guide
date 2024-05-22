import React from "react";
import { Link } from 'react-router-dom';

function AchieveHome() {
    return (
        <div className='achieve-home'>
            <Link to='/'>
                <p>Home</p>
            </Link>
            <section className='achieve-types'>
                <h1>List of Achievements</h1>
                <Link to='/achievement-guides/collectibles'>
                    <p>Collectibles</p>
                </Link>
                <Link to='/achievement-guides/combat'>
                    <p>Combat</p>
                </Link>
                <Link to='/achievement-guides/companions'>
                    <p>Companions</p>
                </Link>
                <Link to='/achievement-guides/crafting'>
                    <p>Crafting</p>
                </Link>
                <Link to='/achievement-guides/misc'>
                    <p>Miscellaneous</p>
                </Link>
                <Link to='/achievement-guides/player-milestones'>
                    <p>Player Level Milestones</p>
                </Link>
                <Link to='/achievement-guides/quests'>
                    <p>Quests</p>
                </Link>
                <Link to='/achievement-guides/settlements'>
                    <p>Settlements</p>
                </Link>
            </section>
        </div>
    );
}

export default AchieveHome;