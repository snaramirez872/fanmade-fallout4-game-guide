import React from "react";
import Table from "../reusable/Table";
import Disclaimer from "../reusable/Disclaimer";
import AchieveNav from "../AchievementNavBars/achieve-nav";

import Crafting_001 from '../../assets/images/achievement-icons/crafting_001.jpg';
import Crafting_002 from '../../assets/images/achievement-icons/crafting_002.jpg';
import Crafting_003 from '../../assets/images/achievement-icons/crafting_003.jpg';
import Crafting_004 from '../../assets/images/achievement-icons/crafting_004.jpg';

function CraftingA() {
    const crafting = [
        [Crafting_001, 'Armed and Dangerous', 'Create 50 weapon mods', '30G', 'Silver'],
        [Crafting_002, 'Wasteland D.I.Y.', 'Craft 100 items', '30G', 'Silver'],
        [Crafting_003, 'Fix-Er-Upper', 'Build 100 workshop items', '20G', 'Bronze'],
        [Crafting_004, 'Scavver', 'Gather 1000 resources for crafting', '20G', 'Bronze']
        
    ];

    return (
        <div className='achieve-home'>
            <AchieveNav />
            <section className='main'>
                <h1>Crafting</h1>
                <Table dat={crafting} />
                <Disclaimer />
            </section>
            <section className='extra-info'>
                <h1>Helpful Information</h1>
                <ul>
                    <li>These counts are tracked in the <b>STATS</b> section in the <b>DATA</b> tab of your Pip-Boy</li>
                    <li>"Craft 100 items" refers to items made at Chemistry Stations and Cooking Stations <u>only</u></li>
                    <ul>
                        <li>Jet is very cheap to make. It only uses Fertilizer and Plastic and can be crafted at any Chemistry Station.</li>
                    </ul>
                    <li>"Craft 100 workshop items" refers to settlement items that you build and place when in workshop mode. Furniture, Power items, Resources, etc.</li>
                    <li>Various Junk Items account for multiple crafting resources. For example, 1 Telephone is equal to 2 Circuitry, 1 Copper, and 2 Fiberglass</li>
                </ul>
            </section>
        </div>
    );
}

export default CraftingA;
