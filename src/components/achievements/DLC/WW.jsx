import React from "react";
import { Link } from "react-router-dom";
import Table from "../../reusable/Table";
import Disclaimer from "../../reusable/Disclaimer";

import ww_001 from '../../../assets/images/achievement-icons/ww_001.jpg';
import ww_002 from '../../../assets/images/achievement-icons/ww_002.jpg';
import ww_003 from '../../../assets/images/achievement-icons/ww_003.jpg';

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
            <section classaName='extra-info'>
                <h1>Helpful Information</h1>
                <ul>
                    <li><b>Trapper</b></li>
                    <ul>
                        <li>The cages for this achievement refers to the ones you can build in the "CAGES" submenu in workshop mode.</li>
                        <ul>
                            <li>Directly after opening workshop mode, this tab can be found by scrolling to the right.</li>
                        </ul>
                        <li>Resources:</li>
                        <ul>
                            <li>170 Steel</li>
                            <li>38 Copper</li>
                            <li>24 Gears</li>
                            <li>500 Bottle Caps</li>
                            <li>3 Canned Dog Food</li>
                            <li>4 Carrot</li>
                            <li>4 Razor Grain</li>
                            <li>6 Jet</li>
                            <li>7 Brahmin Meat</li>
                            <li>4 Mirelurk Eggs</li>
                            <li>4 Mirelurk Meat</li>
                            <li>2 Softshell Mirelurk Meat</li>
                            <li>4 Mole Rat Meat</li>
                            <li>4 Mongrel Dog Meat</li>
                            <li>4 Radroach Meat</li>
                            <li>4 Radstag Meat</li>
                            <li>4 Stingwing Meat</li>
                            <li>4 Yao Guai Meat</li>
                        </ul>
                        <li>It's a good idea to pick a spacious settlement to put all 15 cages in to keep track of them as you go.</li>
                        <ul>
                            <li>Some of the cages are pretty big so the more open space the better.</li>
                        </ul>
                        <li>Each of the cages have to be hooked up to power. I reccomend hooking up the cages to their own grid with their own source.</li>
                        <li>After being powered, the cages will automatically capture the desired targets after a few in-game days.</li>
                        <ul>
                            <li>This is noted by the cage doors being closed.</li>
                        </ul>
                        <li>Make sure your cages are all in a confined yet accessible area. Also make sure that each captured being can walk around a bit.</li>
                    </ul>
                    <li><b>Docile</b></li>
                    <ul>
                        <li>Required:</li>
                        <ul>
                            <li>Buld and place 1 Beta Wave Emitter in the same settlement that has your cages.</li>
                            <ul>
                                <li>Raiders, Gunners, Super Mutants, Cats, Dogs, and Brahmin <u>DO NOT</u> count towards this achievement because these either cannot be tamed or are already tamed.</li>
                                <li>You should have more than enough of the other creatures to make the 5.</li>
                            </ul>
                            <ul>
                                <li>Perks required for building:</li>
                                <ul>
                                    <li>Rank 1 of Animal Friend (Requires Charisma Rank 5)</li>
                                    <li>Rank 1 of Wasteland Whisperer (Requires Charisma Rank 9)</li>
                                </ul>
                                <li>Resources Needed:</li>
                                <ul>
                                    <li>8 Aluminum</li>
                                    <li>3 Circuitry</li>
                                    <li>5 Copper</li>
                                    <li>4 Crystal</li>
                                    <li>5 Nuclear Material</li>
                                    <li>2 Rubber</li>
                                    <li>Once placed, it requires 1 Power. I reccomend hooking this up to its own spearate source.</li>
                                </ul>
                            </ul>
                            <li>Once you power the Emitter, <b>SAVE YOUR GAME TO RELOAD LATER</b>.</li>
                            <li>Remove power from the cages to open the doors. Assuming you have 5+ creatures that are tamed, the achievement will pop a few moments after releasing the creatures.</li>
                            <li><b>Note:</b> The Gunnerss, Raiders, and Super Mutants will almost immediately try to kill each other and your tamed creatures so keep that in mind.</li>
                            <li>Once you get the achievement to pop, reload to your save before you cut the power.</li>
                        </ul>
                    </ul>
                    <li><b>Instigator</b></li>
                    <ul>
                        <li>Easiest of the 3. This achievement requires that you do this in a settlement with at least 3 settlers in it (counting companions).</li>
                        <li>In workshop mode, build 1 red arena pad and 1 blue arena pad relatively near each other.</li>
                        <li>Still in workshop mode, build a "quitting bell" near the two pads and <b>SAVE YOUR GAME TO RELOAD LATER</b>.</li>
                        <li>Assign one settler/companion to the red pad, another settler/companion to the blue pad, then ring the quitting bell.</li>
                        <li>Reload after getting the achievement.</li>
                        <li><b>Notes:</b></li>
                        <ul>
                            <li>The two assigned settlers/companions will attack each other as soon as they see each other even if they aren't near the two pads.</li>
                            <li>Unamed Settlers aren't marked as a essential so they have the possibility of dying as a result of this battle.</li>
                        </ul>
                    </ul>
                </ul>
            </section>
        </div>
    );
}

export default WastelandWorkshop;
