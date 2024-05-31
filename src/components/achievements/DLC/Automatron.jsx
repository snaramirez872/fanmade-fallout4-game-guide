import React from "react";
import { Link } from "react-router-dom";
import Table from "../../reusable/Table";
import Disclaimer from "../../reusable/Disclaimer";

import Automatron_001 from '../../../assets/images/achievement-icons/automatron_001.jpg';
import Automatron_002 from '../../../assets/images/achievement-icons/automatron_002.jpg';
import Automatron_003 from '../../../assets/images/achievement-icons/automatron_003.jpg';
import Automatron_004 from '../../../assets/images/achievement-icons/automatron_004.jpg';
import Automatron_005 from '../../../assets/images/achievement-icons/automatron_005.jpg';

function Automatron() {
    const automatron = [
        [Automatron_001, 'Mechanical Menace', 'Complete the quest \"Mechanical Menace\"', '20G', 'Bronze'],
        [Automatron_002, 'Headhunting', 'Complete the quest \"Headhunting\"', '20G', 'Bronze'],
        [Automatron_003, 'Restarting Order', 'Complete the quest \"Restoring Order\"', '20G', 'Bronze'],
        [Automatron_004, 'Robot Hunter', 'Unlock 10 Robot Mods', '20G', 'Bronze'],
        [Automatron_005, 'The Most Toys', 'Build 10 Robot Mods', '20G', 'Bronze']
    ];

    return (
        <div className='automatron'>
            <Link to='/achievement-guides'>
                <p>Back</p>
            </Link>
            <section className='main'>
                <h1>Automatron</h1>
                <Table dat={automatron} />
                <Disclaimer />
            </section>
            <section className='extra-info'>
                <h1>Helpful Information</h1>
                <ul>
                    <li>After completing "Mechanical Menace":</li>
                    <ul>
                        <li>A new group of Raiders called "Rust Devils" will start to spawn throughout the Commonwealth.</li>
                        <li>Modified robots will spawn throughout the Commonwealth.</li>
                        <li>Robot Mods will start being in the inventories of both regular and modified robots.</li>
                    </ul>
                </ul>
            </section>
        </div>
    );
}

export default Automatron;
