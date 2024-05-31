import React from "react";
import { Link } from "react-router-dom";
import Table from "../../reusable/Table";
import Disclaimer from "../../reusable/Disclaimer";

import farharbor_001 from '../../../assets/images/achievement-icons/farharbor_001.jpg';
import farharbor_002 from '../../../assets/images/achievement-icons/farharbor_002.jpg';
import farharbor_003 from '../../../assets/images/achievement-icons/farharbor_003.jpg';
import farharbor_004 from '../../../assets/images/achievement-icons/farharbor_004.jpg';
import farharbor_005 from '../../../assets/images/achievement-icons/farharbor_005.jpg';
import farharbor_006 from '../../../assets/images/achievement-icons/farharbor_006.jpg';
import farharbor_007 from '../../../assets/images/achievement-icons/farharbor_007.jpg';
import farharbor_008 from '../../../assets/images/achievement-icons/farharbor_008.jpg';
import farharbor_009 from '../../../assets/images/achievement-icons/farharbor_009.jpg';
import farharbor_010 from '../../../assets/images/achievement-icons/farharbor_010.jpg';

function FarHarbor() {
    const farHarbor = [
        [farharbor_001, 'New England Vacationer', 'Discover 20 Far Harbor locations', '10G', 'Bronze'],
        [farharbor_002, 'Hooked', 'Defeat 30 Far Harbor sea creatures', '10G', 'Bronze'],
        [farharbor_003, 'Push Back the Fog', 'Unlock 3 Far Harbor Workshop locations', '10G', 'Bronze'],
        [farharbor_004, 'Just Add Saltwater', 'Cook one of the new Far Harbor recipes', '10G', 'Bronze'],
        [farharbor_005, 'The Islander\'s Almanac', 'Collect all issues of the \"Islander\'s Almanac\" magazine', '10G', 'Bronze'],
        [farharbor_006, 'Cleansing the Land', 'Complete the quest \"Cleansing the Land\"', '20G', 'Bronze'],
        [farharbor_007, 'Far from Home', 'Complete the quest \"Far from Home\"', '20G', 'Bronze'],
        [farharbor_008, 'Where You Belong', 'Complete the quest \"Where You Belong\"', '20G', 'Bronze'],
        [farharbor_009, 'The Way Life Should Be', 'Complete the quest \"The Way Life Should Be\"', '20G', 'Bronze'],
        [farharbor_010, 'Close to Home', 'Complete the quest \"Close to Home\"', '50G', 'Silver']
    ];

    return (
        <div className='farHarbor'>
            <Link to='/achievement-guides'>
                <p>Back</p>
            </Link>
            <section className='main'>
                <Table dat={farHarbor} />
                <Disclaimer />
            </section>
            <section className='extra-info'>
                <h1>Helpful Information</h1>
                <ul>
                    <li><b>Push Back the Fog</b></li>
                    <ul>
                        <li>There are 4 workshops on the island</li>
                        <ul>
                            <li>Longfellow's Cabin</li>
                            <ul>
                                <li>Going to Arcadia with Longfellow</li>
                                <ul>
                                    <li>Talk to Old Longfellow in the Last Plank.</li>
                                    <li>After following him to Arcadia, you will get access to his cabin's workshop and he will be available as a companion.</li>
                                </ul>
                                <li>Going to Arcadia without Longfellow</li>
                                <ul>
                                    <li>Without going talking to Old Longfellow, go straight to Arcadia.</li>
                                    <li>Upon returning to Far Harbor, Old Longfellow will eutomatically go up to you and appear impressed.</li>
                                    <li>After the conversation, you will get access to his cabin's workshop and he will be available as a companion.</li>
                                </ul>
                            </ul>
                            <li>Dalton Farm</li>
                            <ul>
                                <li>Complete and turn in the second stage of the quest "Blood Tide".</li>
                                <li>To start the quest, talk to Cassie Dalton in Far Harbor</li>
                            </ul>
                            <li>National Park Visitor's Center</li>
                            <ul>
                                <li>Finish on the the optional tasks during the quest "Living on the Edge".</li>
                                <li>Complete the quest "Rite of Passage" which is given by Teddy Wright.</li>
                                <li>Talk to Mitch in the Last Plank during "The Changing Tide".</li>
                                <li>Complete Mitch's request by finding his Uncle Ken.</li>
                                <ul>
                                    <li>Talking to Unle Ken and successfully defending the Vistor's Center will grant you access to the workshop.</li>
                                </ul>
                            </ul>
                            <li>Echo Lake Lumber</li>
                            <ul>
                                <li>Finish on the the optional tasks during the quest "Living on the Edge".</li>
                                <li>Complete the quest "Rite of Passage" which is given by Teddy Wright.</li>
                                <li>Talk to Small Bertha in or around the Last Plank during "The Changing Tide".</li>
                                <li>She will give you the quest "Turn Back the Fog"</li>
                                <ul>
                                    <li>Clear out Echo Lake Lumber.</li>
                                    <ul>
                                        <li>Shortly after clearing it out, if you stay in the location for a few moments, a man named Malcolm will approach you.</li>
                                        <li>Malcolm will offer you caps if you let him ambush and kill the incoming settlers from Far Harbor.</li>
                                        <li>Refusing will turn him hostile and save the settlers.</li>
                                    </ul>
                                    <li>Return to Small Bertha to complete the quest and get access to the workshop.</li>
                                </ul>
                            </ul>
                            <ul></ul>
                        </ul>
                    </ul>
                    <li><b>Just Add Saltwater</b></li>
                    <ul>
                        <li>Fastest way to get this achievement is to make poached angler.</li>
                        <li>You would have killed some anglers already during the initial defense of Far Harbor and just by exploring out in the island.</li>
                    </ul>
                    <li><b>The Islander's Almanaz</b></li>
                    <ul>
                        <li>There are five total magazine issues. Here are the locations:</li>
                        <ul>
                            <li>The Last Plank, Far Harbor: Right next to where Old Longfellow was when first met.</li>
                            <li>Acadia: Dejen's counter next to some candy</li>
                            <li>National Park Visitor's Center: The gift shop to the right of the front entrance, on the counter underneath a burnt magazine.</li>
                            <li>Brooke's Head Lighthouse: Top of the lighthouse, small broken bookcase next to the stove.</li>
                            <li>Northwest Ridge Quarry: Inside the shack on the bedside table</li>
                        </ul>
                    </ul>
                </ul>
            </section>
        </div>
    );
}

export default FarHarbor;
