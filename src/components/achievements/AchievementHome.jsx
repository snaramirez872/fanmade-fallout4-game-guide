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
                <h2>Base Game (50 Achievements)</h2>
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
                <h2>DLC (34 Achievements)</h2>
                <Link to='/achievement-guides/automatron'>
                    <p>Automatron</p>
                </Link>
                <Link to='/achievement-guides/wasteland-workshop'>
                    <p>Wasteland Workshop</p>
                </Link>
                <Link to='/achievement-guides/far-harbor'>
                    <p>Far Harbor</p>
                </Link>
                <Link to='/achievement-guides/contraptions'>
                    <p>Contraptions</p>
                </Link>
                <Link to='/achievement-guides/vault-tec-workshop'>
                    <p>Vault-Tec Workshop</p>
                </Link>
                <Link to='/achievement-guides/nuka-world'>
                    <p>Nuka World</p>
                </Link>
            </section>
        </div>
    );
}

export default AchieveHome;