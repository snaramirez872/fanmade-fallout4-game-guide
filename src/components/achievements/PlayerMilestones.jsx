import React from "react";
import { Link } from 'react-router-dom';
import Table from "../reusable/Table";
import Disclaimer from "../reusable/Disclaimer";

import PlayerLevel_001 from '../../assets/images/achievement-icons/playerlevel_001.jpg';
import PlayerLevel_002 from '../../assets/images/achievement-icons/playerlevel_002.jpg';
import PlayerLevel_003 from '../../assets/images/achievement-icons/playerlevel_003.jpg';
import PlayerLevel_004 from '../../assets/images/achievement-icons/playerlevel_004.jpg';

function PlayerMilestones() {
    const levels = [
        [PlayerLevel_001, 'Born Survivor', 'Reach Level 5', '5G', 'Bronze'],
        [PlayerLevel_002, 'Common Wealth Citizen', 'Reach Level 10', '10G', 'Bronze'],
        [PlayerLevel_003, 'Unstoppable Wanderer', 'Reach Level 25', '25G', 'Silver'],
        [PlayerLevel_004, 'Legend of the Wastes', 'Reach Level 50', '50G', 'Gold']
    ];

    return (
        <div className='achieve-home'>
            <Link to='/achievement-guides'>
                <p>Back</p>
            </Link>
            <section className='main'>
                <h1>Player Level Milestones</h1>
                <Table dat={levels} />
                <Disclaimer />
            </section>
        </div>
    );
}

export default PlayerMilestones;
