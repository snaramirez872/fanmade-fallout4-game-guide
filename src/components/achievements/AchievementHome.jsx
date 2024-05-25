import React from "react";
import { Link } from 'react-router-dom';

function AchieveHome() {
    return (
        <div className='achieve-home'>
            <Link to='/'>
                <p>Home</p>
            </Link>
            <h1>List of Achievements</h1>
            <section className='base-list'>
                <h2>Base Game (50)</h2>
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
            <section className='dlc-list'>
                <h2>DLC</h2>
                <a href='#'>Automatron</a>
                <a href='#'>Wasteland Workshop</a>
                <a href='#'>Far Harbor</a>
                <a href='#'>Contraptions</a>
                <a href='#'>Vault-Tec Workshop</a>
                <a href='#'>Nuka-World</a>
            </section>
        </div>
    );
}

export default AchieveHome;