import React from "react";
import { Link } from "react-router-dom";
import Table from "../../reusable/Table";
import Disclaimer from "../../reusable/Disclaimer";

import ww_001 from '../../assets/images/achievement-icons/ww_001.jpg';
import ww_002 from '../../assets/images/achievement-icons/ww_002.jpg';
import ww_003 from '../../assets/images/achievement-icons/ww_003.jpg';

function WastelandWorkshop() {
    const wasteland = [
        [ww_002, 'Trapper', 'Build one of every cage type (excluding Synth Gorilla)', '20G', 'Bronze'],
        [ww_001, 'Docile', 'Have 5 tamed creatures in a settlement', '15G', 'Bronze'],
        [ww_003, 'Instigator', 'Start a spectated arena fight in a settlement', '15G', 'Bronze']
    ];

    return (
        <div className='wasteland'>
            <Link to='/achievement-guides'>
                <p>Back</p>
            </Link>
            <section className='main'>
                <h1>Wasteland Workshop</h1>
                <Table dat={wasteland} />
                <Disclaimer />
            </section>
            <section classaName='etra-info'>
                <h1>Helpful Information</h1>
                <ul>
                    <li><b>Trapper</b></li>
                    <ul>
                        <li>Resources:</li>
                        <ul>
                            <li>170 Steel</li>
                            <li>38 Copper</li>
                        </ul>
                    </ul>
                    <li><b>Docile</b></li>
                    <li><b>Instigator</b></li>
                </ul>
            </section>
        </div>
    );
}

export default WastelandWorkshop;