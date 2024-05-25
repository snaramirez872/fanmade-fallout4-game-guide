import React from "react";
import { Link } from 'react-router-dom';
import Table from "../reusable/Table";
import Disclaimer from "../reusable/Disclaimer";

import Companion_001 from '../../assets/images/achievement-icons/companion_001.jpg';
import Companion_002 from '../../assets/images/achievement-icons/companion_002.jpg';

function CompanionA() {
    const companion = [
        [Companion_001,'Never Go It Alone', 'Recruit 5 separate companions', '20G', 'Bronze'],
        [Companion_002,'Lovable', 'Reach maximum relationship level with a companion', '20G', 'Bronze']
    ];

    return (
        <div className='achieve-home'>
            <Link to='/achievement-guides'>
                <p>Back</p>
            </Link>
            <section className='sec-intro'>
                <p>Like the other Fallout games, Fallout 4 offers a companion system. Each companion has a unique personality and they gain or lose affinity based on the player's actions and responses in dialogue. This takes the place of the Karma system that was present in previous games.</p>
            </section>
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
