import React from "react";
import { Link } from "react-router-dom";
import AchieveNav from "../AchievementNavBars/achieve-nav";

export default function BaseGameAchievements() {
    return (
        <div className="base-game-achieve">
            <AchieveNav />
            <div className="bga-content">
                <section className='base-list'>
                    <Link to='/base-game-achievements/collectibles'>
                        <p>Collectibles</p>
                    </Link>
                    <Link to='/base-game-achievements/combat'>
                        <p>Combat</p>
                    </Link>
                    <Link to='/base-game-achievements/companions'>
                        <p>Companions</p>
                    </Link>
                    <Link to='/base-game-achievements/crafting'>
                        <p>Crafting</p>
                    </Link>
                    <Link to='/base-game-achievements/misc'>
                        <p>Miscellaneous</p>
                    </Link>
                    <Link to='/base-game-achievements/player-milestones'>
                        <p>Player Level Milestones</p>
                    </Link>
                    <Link to='/base-game-achievements/quests'>
                        <p>Quests</p>
                    </Link>
                    <Link to='/base-game-achievements/settlements'>
                        <p>Settlements</p>
                    </Link>
                </section>
            </div>
        </div>
    );
}