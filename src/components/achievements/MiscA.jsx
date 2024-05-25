import React from "react";
import { Link } from 'react-router-dom';
import Table from "../reusable/Table";
import Disclaimer from "../reusable/Disclaimer";

import Misc_001 from '../../assets/images/achievement-icons/misc_001.jpg';
import Misc_002 from '../../assets/images/achievement-icons/misc_002.jpg';
import Misc_003 from '../../assets/images/achievement-icons/misc_003.jpg';
import Misc_004 from '../../assets/images/achievement-icons/misc_004.jpg';
import Misc_005 from '../../assets/images/achievement-icons/misc_005.jpg';
import Misc_006 from '../../assets/images/achievement-icons/misc_006.jpg';
import Misc_007 from '../../assets/images/achievement-icons/misc_007.jpg';
import Misc_008 from '../../assets/images/achievement-icons/misc_008.jpg';
import Misc_009 from '../../assets/images/achievement-icons/misc_009.jpg';

function MiscA() {
    const misc = [
        [Misc_001, 'Future Retro', 'Play a holotape game', '10G', 'Bronze'],
        [Misc_002, 'Touchdown!', 'Get a Touchdown', '10G', 'Bronze'],
        [Misc_003, 'Homerun!', 'Get a Homerun', '10G', 'Bronze'],
        [Misc_004, 'What\'s Yours is Mine', 'Pick 50 locks', '30G', 'Silver'],
        [Misc_005, 'Robco\'s Worst Nightmare', 'Hack 50 terminals', '30G', 'Silver'],
        [Misc_006, 'Ranger Corps', 'Discover 100 locations', '40G', 'Silver'],
        [Misc_007, 'Gun-for-Hire', 'Complete 10 sidequests', '20G', 'Silver'],
        [Misc_008, 'Mercenary', 'Complete 50 miscellaneous objectives', '30G', 'Silver'],
        [Misc_009, 'Prankster\'s Return', 'Place a grenade or mine while pickpocketing', '10G', 'Bronze'],
    ];

    return (
        <div className='achieve-home'>
            <Link to='/achievement-guides'>
                <p>Back</p>
            </Link>
            <section className='main'>
                <h1>Miscellaneous Milestones</h1>
                <Table dat={misc} />
                <Disclaimer />
            </section>
            <section className='extra-info'>
                <h1>Helpful Information</h1>
                <ul>
                    <li><b>Future Reto</b></li>
                    <ul><li>Can be done right away in Vault 111 by playing "Red Menace" on the Recreational Terminal. If this opportunity was missed, any Robco Fun Holotape can be loaded using your Pip-Boy after finding them.</li></ul>
                    <li><b>Touchdown!</b></li>
                    <ul><li>Refers to being killed by a Mini Nuke either by having it launced to you by an enemy with a Fat Man or by being blown up by a Super Mutant Suicider.</li></ul>
                    <li><b>Homerun!</b></li>
                    <ul>
                        <li>This one can be a little buggy, but this refers to running the bases in Diamond City. Start at Home then go to First, Second, Third, then back to Home.</li>
                        <li>Location of Bases:</li>
                        <ul>
                            <li>Home: By the Doctor, Haircut, Butcher, and Church as soon as you go down the stairs from the entrance of the city.</li>
                            <li>First: Take the path on the right going towards the Butcher and the Dugout Inn and keep going until you reach the top of the metal stairs.</li>
                            <li>Second: Keep following that path going left until you reach a small set of stairs going down and a street light.</li>
                            <li>Third: From second, look around and you should see a trash can. Take the path thats to the left of it going towards Security.</li>
                            <li>Back Home: From third keep following the wooden path toward Security until you reach Home once again.</li>
                        </ul>
                        <li>A guard with a baseball bat near the Home Plate will have a random line of dialogue suggesting that the player run the bases. Hearing this line before running the bases has been said to help a couple players get the achievement to pop.</li>
                        <li>On PC, the achievement may be given, but the notification may never pop or will be delayed.</li>
                        <li>A continuous, single run is needed like a real-life Homerun.</li>
                        <li>For a visual guide of how to do this, please see <a href='https://youtu.be/nJpxMPQ-BvQ' target='_blank' rel='noreferrer'>this</a> video.</li>
                    </ul>
                    <li><b>Prankster's Return</b></li>
                    <ul>
                        <li>Requirements</li>
                        <ul>
                            <li>Rank 2 Pickpocketing (which in itself requires Rank 1 Pickpocketing, Perception 1, and Player Level 6).</li>
                            <ul>
                                <li>In the Perk Menu, Pickpocketing is the second one under Perception.</li>
                            </ul>
                            <li>1 Grenade/Mine in player's inventory to place in the NPC's inventory.</li>
                        </ul>
                        <li>For a better rate of success I suggest higher ranks in:</li>
                        <ul>
                            <li>Perception, Pickpocket, Agility, Sneak</li>
                        </ul>
                        <li>Upon success, this will kill the NPC after a few seconds and will turn any nearby NPCs hostile if they weren't already. I suggesting quicksaving beforehand if you are attempting this in places with otherwise non-hostile NPCs.</li>
                    </ul>
                </ul>
            </section>
        </div>
    );
}

export default MiscA;
