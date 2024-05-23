import React from "react";
import { Link } from 'react-router-dom';
import Table from "../reusable/Table";
import Disclaimer from "../reusable/Disclaimer";

import Combat_001 from '../../assets/images/achievement-icons/combat_001.jpg';
import Combat_002 from '../../assets/images/achievement-icons/combat_002.jpg';
import Combat_003 from '../../assets/images/achievement-icons/combat_003.jpg';

function CombatA() {
    const combat = [
        [Combat_001,'Masshole','Kill 300 People','20G','Bronze'],
        [Combat_002,'Animal Control','Kill 300 Creatures','20G','Bronze'],
        [Combat_003,'...The Harder They Fall','Kill 5 Giant Creatures','20G','Bronze']
    ];
    return (
        <div className='achieve-home'>
            <Link to='/achievement-guides'>
                <p>Back</p>
            </Link>
            <section className='combat-intro'>
                <p>The Wasteland featured in the Fallout universe plays host to many NPCs and Irradiated Creatures. Some of which start fights with the player. You can also start the fights with them, but do so carefully.</p>
            </section>
            <section className='combat'>
                <h1>Combat Milestones</h1>
                <Table dat={combat} />
                <Disclaimer />
            </section>
            <section className='extra-combat-info'>
                <h1>Helpful Information</h1>
                <ul>
                    <li>Combat statistics and other helpful gameplay information can be found in your Pip-Boy by going to <b>DATA</b> then to <b>STATS</b>.</li>
                    <li><b>"Giant Creatures"</b> refers to the likes of Mirelurk Queens and Super Mutant Behemoths.</li>
                    <ul>
                        <li>A list of spawn locations can be found <a href='https://fallout.fandom.com/wiki/...The_Harder_They_Fall' target='_blank' rel='noreferrer'>here</a>.</li>
                    </ul>
                    <li>The player <b>MUST</b> be the one to kill the NPC, Animal, and Giant Creature for it to count.</li>
                </ul>
            </section>
        </div>
    );
}

export default CombatA;
