import React from "react";
import Table from "../reusable/Table";
import Disclaimer from "../reusable/Disclaimer";
import AchieveNav from "../AchievementNavBars/achieve-nav";

import Companion_001 from '../../assets/images/achievement-icons/companion_001.jpg';
import Companion_002 from '../../assets/images/achievement-icons/companion_002.jpg';

function CompanionA() {
    const companion = [
        [Companion_001,'Never Go It Alone', 'Recruit 5 separate companions', '20G', 'Bronze'],
        [Companion_002,'Lovable', 'Reach maximum relationship level with a companion', '20G', 'Bronze']
    ];

    return (
        <div className='achieve-home'>
            <AchieveNav />
            <section className='main'>
                <h1>Companions</h1>
                <Table dat={companion} />
                <Disclaimer />
            </section>
            <section className='extra-info'>
                <h1>Helpful Information</h1>
                <p>More information about the different companions can be found <a href='#' target='_blank' rel='noreferrer'>here</a>.</p>
            </section>
        </div>
    );
}

export default CompanionA;
