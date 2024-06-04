import React from "react";
import Table from "../reusable/Table";
import Disclaimer from "../reusable/Disclaimer";
import AchieveNav from "../AchievementNavBars/achieve-nav";

import Settlement_001 from '../../assets/images/achievement-icons/settlements_001.jpg';
import Settlement_002 from '../../assets/images/achievement-icons/settlements_002.jpg';
import Settlement_003 from '../../assets/images/achievement-icons/settlements_003.jpg';

function SettlementMilestones() {
    const settlements = [
        [Settlement_001, 'Sanctuary', 'Complete the quest \"Sanctuary\"', '20G', 'Bronze'],
        [Settlement_002, 'Community Organizer', 'Become allied with 3 different settlements', '20G', 'Bronze'],
        [Settlement_003, 'Benevolent Leader', 'Reach maximum happiness in a large settlement', '20G', 'Bronze']
    ];

    return (
        <div className='achieve-home'>
            <AchieveNav />
            <section className='main'>
                <h1>Settlements</h1>
                <Table dat={settlements} />
                <Disclaimer />
            </section>
            <section className='extra-info'>
                <h1>Helpful Information</h1>
                <ul>
                    <li><b>Sanctuary</b></li>
                    <ul>
                        <li>This serves as the game's tutorial for the settlement system.</li>
                    </ul>
                    <li><b>Community Organizer</b></li>
                    <ul>
                        <li>Settlement's become allies with the player either through the Minutemen settlement quests or by going ahead and helping out settlers unprompted.</li>
                    </ul>
                    <li><b>Benevolent Leader</b></li>
                    <ul>
                        <li>This is regarded as one of the harder (if not the hardest) achievements in the base game, but it can be made easy</li>
                        <ul>
                            <li><b>Requirements:</b></li>
                            <ul>
                                <li>Local Leader Rank 2 (Requires: Local Leader Rank 1, Charisma 6, Player Level 14)</li>
                                <li>Red Rocket Truck Stop</li>
                                <li>2 settlers</li>
                                <ul>
                                    <li><u>DO NOT</u> use the Settlement Recruitment Beacon. Just move the settlers from any of your settlments while in workshop mode.</li>
                                    <li>Resources for your 2 settlers</li>
                                    <ul>
                                        <li>2 Beds</li>
                                        <li>3-4 Water</li>
                                        <li>3-4 Food</li>
                                        <li>As much defense as you feel like (make sure it's enough to defend against attacks without you being there)</li>
                                        <li>Power is optional, but you may build some lights and other general decorations.</li>
                                        <ul>
                                            <li><b><u>DO NOT</u> build a Settlement Recruitment Beacon. Any additional settlers will mess up the process.</b></li>
                                        </ul>
                                    </ul>
                                </ul>
                                <li>1 Restuarant (Requirements for Builing: Local Leader Rank 2, Cap Collector Rank 2, 1500 Caps, 3 Steel, 5 Wood)</li>
                                <li>Enough extra wood to make a lot of wooden crates (You may just set up a supply line from your main settlement)</li>
                            </ul>
                            <li><b>Explanation:</b> What constitutes a "Large Settlement" is not the given size of it like one may expect. It is dictated by how full the meter at the top right is when in settlement mode. A "large" settlement would have the meter in the yellow. The bar increases with every item you build and place onto your settlement.</li>
                            <li><b>Steps:</b></li>
                            <ol>
                                <li>Clear the settlement and claim the workshop if you didn't do so already.</li>
                                <li>Set up a supply line from your main settlement to Red Rocket as needed.</li>
                                <li>Clear up space around the settlement to make space as needed.</li>
                                <li>Move your settlers in and build your resources.</li>
                                <li>Build the restaurant (Don't go overboard with the aesthetics, just build and place the stand)</li>
                                <li>Assign 1 settler to the food. Every settler in general is responsible for up to 6 Food.</li>
                                <ul>
                                    <li>6 Food is the equivalent of any of the following:</li>
                                    <ul>
                                        <li>6 Mutfruit</li>
                                        <li>12 Tato</li>
                                        <li>12 Corn</li>
                                        <li>12 Carrot</li>
                                        <li>12 Melon</li>
                                        <li>12 Gourd</li>
                                    </ul>
                                </ul>
                                <li>Assign the other settler to the Restaurant.</li>
                                <li>Pick a spot that is out of the way of your 2 settlers and their walking paths and build as many wooden crates as you can in that spot until the meter in th etop right goes to yellow OR until you get notified that you can't build anymore.</li>
                                <ul>
                                    <li>Wooden Crates can be found in the "Furniture" Tab and then "Containers".</li>
                                </ul>
                                <li>Continue playing the game. Once the settlement reaches 100 Happiness, the achievement should pop no matter where you are in the game.</li>
                            </ol>
                        </ul>
                    </ul>
                </ul>
            </section>
        </div>
    );
}

export default SettlementMilestones;
