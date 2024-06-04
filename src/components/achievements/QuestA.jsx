import React from "react";
import Table from "../reusable/Table";
import Disclaimer from "../reusable/Disclaimer";
import AchieveNav from "../AchievementNavBars/achieve-nav";

import Quest_001 from '../../assets/images/achievement-icons/quest_001.jpg';
import Quest_002 from '../../assets/images/achievement-icons/quest_002.jpg';
import Quest_003 from '../../assets/images/achievement-icons/quest_003.jpg';
import Quest_004 from '../../assets/images/achievement-icons/quest_004.jpg';
import Quest_005 from '../../assets/images/achievement-icons/quest_005.jpg';
import Quest_006 from '../../assets/images/achievement-icons/quest_006.jpg';
import Quest_007 from '../../assets/images/achievement-icons/quest_007.jpg';
import Quest_008 from '../../assets/images/achievement-icons/quest_008.jpg';
import Quest_009 from '../../assets/images/achievement-icons/quest_009.jpg';

import Quest_010 from '../../assets/images/achievement-icons/quest_010.jpg';
import Quest_011 from '../../assets/images/achievement-icons/quest_011.jpg';
import Quest_012 from '../../assets/images/achievement-icons/quest_012.jpg';

import Quest_013 from '../../assets/images/achievement-icons/quest_013.jpg';
import Quest_014 from '../../assets/images/achievement-icons/quest_014.jpg';
import Quest_015 from '../../assets/images/achievement-icons/quest_015.jpg';

import Quest_016 from '../../assets/images/achievement-icons/quest_016.jpg';
import Quest_017 from '../../assets/images/achievement-icons/quest_017.jpg';
import Quest_018 from '../../assets/images/achievement-icons/quest_018.jpg';

import Quest_019 from '../../assets/images/achievement-icons/quest_019.jpg';
import Quest_020 from '../../assets/images/achievement-icons/quest_020.jpg';
import Quest_021 from '../../assets/images/achievement-icons/quest_021.jpg';
import Quest_022 from '../../assets/images/achievement-icons/quest_022.jpg';

function QuestA() {
    const main = [
        [Quest_001, 'War Never Changes', 'Enter the Wasteland', '10G', 'Bronze'],
        [Quest_002, 'When Freedom Calls', 'Complete the quest \"When Freedom Calls\"', '10G', 'Bronze'],
        [Quest_003, 'Unlikely Valentine', 'Complete the quest \"Unlikely Valentine\"', '20G', 'Bronze'],
        [Quest_004, 'Reunions', 'Complete the quest \"Reunions\"', '20G', 'Bronze'],
        [Quest_005, 'Dangerous Minds', 'Complete the quest \"Dangerous Minds\"', '20G', 'Bronze'],
        [Quest_006, 'Hunter/Hunted', 'Complete the quest \"Hunter/Hunted\"', '20G', 'Bronze'],
        [Quest_007, 'The Molecular Level', 'Complete the quest \"The Molecular Level\"', '20G', 'Bronze'],
        [Quest_008, 'The Nuclear Option', 'Complete the quest \"The Nuclear Option\"', '30G', 'Silver'],
        [Quest_009, 'Prepared for the Future', 'Decide the fate of the Commonwealth', '50G', 'Gold']
    ];

    const minutemen = [
        [Quest_010, 'The First Step', 'Complete the quest \"The First Step\" and join the Minutemen', '10G', 'Bronze'],
        [Quest_011, 'Taking Independence', 'Complete the quest \"Taking Independence\"', '10G', 'Bronze'],
        [Quest_012, 'Old Guns', 'Complete the quest \"Old Guns\"', '30G', 'Silver']
    ];

    const railroad = [
        [Quest_013, 'Tradecraft', 'Complete the quest \"Tradecraft\" and join the Railroad', '10G', 'Bronze'],
        [Quest_014, 'Underground Undercover', 'Complete the quest \"Underground Undercover\"', '10G', 'Bronze'],
        [Quest_015, 'Rockets\' Red Glare', 'Complete the quest \"Rockets\' Red Glare\"', '30G', 'Silver']
    ];

    const bos = [
        [Quest_016, 'Semper Invicta', 'Complete the quest \"Semper Invicta\" by joining the Brotherhood of Steel', '10G', 'Bronze'],
        [Quest_017, 'Blind Betrayal', 'Complete the quest \"Blind Betrayal\"', '10G', 'Bronze'],
        [Quest_018, 'Ad Victoriam', 'Complete the quest \"Ad Victoriam\"', '30G', 'Silver']
    ];

    const institute = [
        [Quest_019, 'Institutionalized', 'Complete the quest \"Institutionalized\" by joining the Institute', '10G', 'Bronze'],
        [Quest_020, 'Mankind-Redefined', 'Complete the quest \"Mankind-Redefined\"', '10G', 'Bronze'],
        [Quest_021, 'Powering Up', 'Complete the quest \"Powering Up\"', '30G', 'Silver'],
        [Quest_022, 'Nuclear Family', 'Complete the quest \"Nuclear Family\" and finish the main story with the Institute', '30G', 'Silver']
    ];
    
    return (
        <div className='achieve-home'>
            <AchieveNav />
            <section className='main'>
                <h1>Story Achievements</h1>
                <section className='main-quests'>
                    <h3>Main Quests</h3>
                    <Table dat={main} />
                </section>
                <section className='minutemen-quests'>
                    <h3>Minutemen</h3>
                    <Table dat={minutemen} />
                </section>
                <section className='railroad-quests'>
                    <h3>Railroad</h3>
                    <Table dat={railroad} />
                </section>
                <section className='bos-quests'>
                    <h3>Brotherhood of Steel</h3>
                    <Table dat={bos} />
                </section>
                <section className='institute-quests'>
                    <h3>Institute</h3>
                    <Table dat={institute} />
                </section>
                <Disclaimer />
            </section>
            <section className='extra-info'>
                <h1>Helpful Information</h1>
                <ul>
                    <li>Of the four factions that you can join in the game, three of them have a "point of no return" which will effectively lose you access to certain achievements until you start another playthrough</li>
                    <ul>
                        <li><b>Railroad</b></li>
                        <ul>
                            <li>Completion of "Underground Undercover" and "Precipice of War" as well as starting "Rockets' Red Glare" will make the Brotherhood of Steel permanently hostile. This will also automatically fail any Bortherhood quests that you may still have in your Pip-Boy.</li>
                        </ul>
                        <li><b>Brotherhood of Steel</b></li>
                        <ul>
                            <li>Completion of "Blind Betrayal" and starting "Tactical Thinking" will cause the Railroad to be permanently hostile and fail any Railroad quests that you have in your Pip-Boy.</li>
                        </ul>
                        <li><b>Institute</b></li>
                        <ul>
                            <li>During "Mass Fusion":</li>
                            <ul>
                                <li>Informing the Brotherhood of Steel will cause the Institute to be permanently hostile and fail any Institute quests.</li>
                                <li>Completing the quest for the Institue will cause the Brotherhood of Steel to be permanently hostile and fail any Brotherhood quests.</li>
                            </ul>
                        </ul>
                    </ul>
                    <li>Optimal Run for Completionists</li>
                    <ul>
                        <li>There is still a way to feasibly acquire 19 out of the 22 story achievements in one playthrough. For brand new players this means that 47 out of the 50 Base Game achievements can be obtained in just one playthrough of the game.</li>
                        <ul>
                            <li><b>Minutemen</b></li>
                            <ul>
                                <li>Complete "The First Step", "Taking Independence", and "Old Guns".</li>
                                <li>The settlement quests are important as well, but for other reasons such as other achievements, experience, etc.</li>
                            </ul>
                            <li><b>Railroad</b></li>
                            <ul>
                                <li>Complete "Tradecraft", "Underground Undercover", and "Rockets' Red Glare"</li>
                                <li>During "The Molecular Level" you can either:</li>
                                <ul>
                                    <li>Build the teleporter with the Minutemen in Sanctuary. Upon Completion of "Institutionalized" by joining the Institute and meeting the department heads, return to the Commonwealth and talk to Desdemona about getting access to and from the Institute.</li>
                                    <li>Build the teleporter with the Railroad at Mercer Safehouse and continue their questline from there.</li>
                                </ul>
                            </ul>
                            <li><b>Institute</b></li>
                            <ul>
                                <li>The Railroad questline requires you to complete "Institutionalized", "Mankind-Redefined", and "Powering Up".</li>
                                <li>To remain in the Insititute's Good Graces:</li>
                                <li>Once you start "Precipice of War", do not do any more Institute quests.</li>
                                <ul>
                                    <li>During "Mass Fusion" do <u>NOT</u> inform the Brotherhood if you are a member of the Brotherhood</li>
                                    <li>During "The Battle for Bunker Hill" leave the Synths alone. When speaking with Father in the ruins of C.I.T. stay on his good side as much as possible.</li>
                                    
                                </ul>
                            </ul>
                            <li><b>Brotherhood of Steel</b></li>
                            <ul>
                                <li>Complete "Semper Invicta".</li>
                                <li>Do <u>not</u> start "Blind Betrayal"</li>
                                <li>Any Brotherhood sidequest can be freely completed.</li>
                                <ul>
                                    <li>"Feeding the Troops" will send you to a settlement to force the settlers to donate some of their food to the Brotherhood. This will cut ties with that settlement if it's allied with the Minutemen.</li>
                                </ul>
                            </ul>
                        </ul>
                    </ul>
                </ul>
                <p>More information about quests (<b>Warning:</b> Spoilers) can be found <a href='#' target='_blank' rel='noreferrer'>here</a>.</p>
            </section>
        </div>
    );
}

export default QuestA;
