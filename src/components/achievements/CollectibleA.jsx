import React from "react";
import { Link } from 'react-router-dom';
import Table from "../reusable/Table";
import Disclaimer from "../reusable/Disclaimer";

import Collectible_001 from '../../assets/images/achievement-icons/collectible_001.jpg';
import Collectible_002 from '../../assets/images/achievement-icons/collectible_002.jpg';
import Collectible_003 from '../../assets/images/achievement-icons/collectible_003.jpg';

function CollectibleA() {
    const collectibles = [
        [Collectible_001, 'They\'re Not Dolls...', 'Collect 10 Vault-Tec Bobbleheads', '10G', 'Bronze'],
        [Collectible_002, '...They\'re Action Figures', 'Collect all 20 Vault-Tec Bobbleheads', '20G', 'Silver'],
        [Collectible_003, 'Print\'s Not Dead', 'Read 20 Magazines', '20G', 'Bronze']
    ];
    return (
        <div className='achieve-home'>
            <Link to='/achievement-guides'>
                <p>Back</p>
            </Link>
            <section className='collectintro'>
                <p>Fallout 4 has two sets of items that the player can collect for various <u>permanent</u> buffs.</p>
                <p>Making a comeback from Fallout 3, there are 20 Vault-Tec Bobbleheads scattered throughout the Commonwealth that reward the player individual stat buffs when picked up. They can also be displayed at any of your settlements by crafting the Bobblehead stand (found in the Misc. Decorations Tab when in Workshop Mode).</p>
                <p>Also scattered throughout the Commonwealth are various Comic Books and Magazines that reward the player with permanent effects and stat buffs when picked up.</p>
            </section>
            <section className='collectibles'>
                <h1>Collectible Milestones</h1>
                <Table dat={collectibles} />
                <Disclaimer />
            </section>
            <section className='extra-collect-tips'>
                <h1>Helpful Information</h1>
                <p>The locations of all the Bobbleheads and Magazines are static (they never change). Nukapedia provides great articles for where you can find both sets of items and can be accessed through the following:</p>
                <ul>
                    <li><a href='https://fallout.fandom.com/wiki/Vault-Tec_bobblehead_(Fallout_4)'>Vault-Tec Bobbleheads (Fallout 4)</a></li>
                    <li><a href='https://fallout.fandom.com/wiki/Fallout_4_magazines'>Magazines (Fallout 4)</a></li>
                </ul>
                <p>The player home in Vault 81 comes pre-furnished with a Bobblehead stand. Access to the player home is given upon assisting Dr. Penske at the end of the side quest "Hole in the Wall". More information can be found <a href='#'>here</a>.</p>
                <p>Magazine racks and shelves can be built and placed in your settlements via the Settlement Workshops as a way to store your magazines. (<b>Note:</b> Each Magazine Rack and Magazine Shelf can only hold a limited amount).</p>
            </section>
        </div>
    );
}

export default CollectibleA;
