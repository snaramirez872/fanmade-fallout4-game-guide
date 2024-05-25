import React from "react";
import { Link } from 'react-router-dom';
import Table from "../reusable/Table";
import Disclaimer from "../reusable/Disclaimer";

import Combat_001 from '../../assets/images/achievement-icons/combat_001.jpg';
import Combat_002 from '../../assets/images/achievement-icons/combat_002.jpg';
import Combat_003 from '../../assets/images/achievement-icons/combat_003.jpg';

function CombatA() {
    const combat = [
        [Combat_001,'Masshole','Kill 300 people','20G','Bronze'],
        [Combat_002,'Animal Control','Kill 300 creatures','20G','Bronze'],
        [Combat_003,'...The Harder They Fall','Kill 5 giant creatures','20G','Bronze']
    ];

    return (
        <div className='achieve-home'>
            <Link to='/achievement-guides'>
                <p>Back</p>
            </Link>
            <section className='sec-intro'>
                <p>The Wasteland featured in the Fallout universe plays host to many NPCs and Irradiated Creatures. Some of which start fights with the player. You can also start the fights with them, but do so carefully.</p>
            </section>
            <section className='main'>
                <h1>Combat</h1>
                <Table dat={combat} />
                <Disclaimer />
            </section>
            <section className='extra-info'>
                <h1>Helpful Information</h1>
                <ul>
                    <li>Combat statistics and other helpful gameplay information can be found in your Pip-Boy by going to <b>DATA</b> then to <b>STATS</b>.</li>
                    <li><b>"Giant Creatures"</b> refers to the likes of Mirelurk Queens and Super Mutant Behemoths.</li>
                    <ul>
                        <li>Spawn Locations</li>
                        <ul>
                            <li>Mirelurk Queens</li>
                            <ul>
                                <li><span className='location'>The Castle</span> as part of the quest <span className='quest'>"Taking Independence"</span> (The Castle can be visited and cleared by the player prior to this quest)</li>
                                <li><span className='location'>Murkwater Construction Site</span> (Must be defeated to claim the settlement)</li>
                                <li><span className='location'>Spectacle Island</span> (Spawns once the circuit breaker in the southern boat is turned on)</li>
                                <li><span className='location'>Nahant Chapel</span> (near the coast)</li>
                                <li><span className='location'>Massachussetts State House</span> (basement)</li>
                                <li>South of <span className='location'>Warwick Homestead</span>, East of <span className='location'>Poseidon Energy Plant</span> (close to a capsized boat)</li>
                                <li>West of <span className='location'>Salem</span>, Northwest of <span className='location'>Museum of Witchcraft</span></li>
                                <li>Southeast of <span className='location'>Revere Beach Station</span> (near the beach)</li>
                                <li>Southeast of <span className='location'>Recon Bunker Theta</span></li>
                                <li><b>[Far Harbor]</b> <span className='location'>Emmet's Causeway</span> during the quest <span className='quest'>"Rite of Passage"</span></li>
                                <li><b>[Far Harbor]</b> <span classNAme='location'>Northwood Ridge Quarry</span></li>
                                <li><b>[Vault-Tec Workshop]</b> <span className='location'>Vault 88</span> in the water by the water pump (Spawns after taking out a group of mirelurks)</li>
                                <li><b>[Nuka World]</b> in the lake by <span className='locaion'>Northpoint Reservoir</span></li>
                            </ul>
                            <li>Super Mutant Behemoths</li>
                            <ul>
                                <li>Outside of <span className='location'>Fort Strong</span></li>
                                <li>West of <span className='location'>Natick Banks</span></li>
                                <li>In the woods South of <span className='location'>Greentop Nursery</span> and East of <span className='location'>Malden Middle School</span></li>
                                <ul>
                                    <li>Will only spawn once a Jangles the Moon Monkey toy is looted out of a car that crashed into a nearby tree. Will <u>NOT</u> spawn if you order a companion to grab it</li>
                                </ul>
                                <li>West of <span className='location'>Suffolk County Charter School</span></li>
                                <li>South of <span className='location'>Walden Pond</span> (Spawns the Stonehenge made of cars)</li>
                                <li>A uniquely named Behemoth named "Swan" can be found at <span className='location'>Swan's Pond</span> at <span className='location'>Boston Common</span></li>
                                <li>South of <span className='location'>Recon Bunker Theta</span></li>
                                <li>Random spawn in front of the <span className='location'>Super Duper Mart</span> in <span className='location'>Lexington</span></li>
                                <li><b>[Far Harbor]</b> A uniquel named Behemoth named "Grun" can be found behind a red bay door that can be unlcoked via nearby terminal inside the <span classNam='location'>Vim! Pop Factory</span></li>
                                <li><b>[Nuka World]</b> In a small gulley Northwest of <span className='location'> Dry Rock Gulch</span></li>
                            </ul>
                        </ul>
                    </ul>
                    <li>The player <b>MUST</b> be the one to kill the NPC, Animal, and Giant Creature for it to count.</li>
                    <li>A Super Mutant Behemoth spawns on the way to the <span className='location'>C.I.T. Ruins</span> during the quest <span className='quest'>"Ad Victoriam"</span>, but it is shortly killed by Liberty Prime.</li>
                </ul>
            </section>
        </div>
    );
}

export default CombatA;
