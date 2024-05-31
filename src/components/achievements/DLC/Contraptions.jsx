import React from "react";
import { Link } from "react-router-dom";
import Table from "../../reusable/Table";
import Disclaimer from "../../reusable/Disclaimer";

import contraptions_001 from '../../../assets/images/achievement-icons/contraptions_001.jpg';
import contraptions_002 from '../../../assets/images/achievement-icons/contraptions_002.jpg';
import contraptions_003 from '../../../assets/images/achievement-icons/contraptions_003.jpg';

function Contraptions() {
    const contraptions = [
        [contraptions_001, 'Time Out', 'Assign a settler to a pillory', '10G', 'Bronze'],
        [contraptions_002, 'Show Off', 'Display a weapon on a weapon rack, armor on an armor rack, and power armor in a power armor display', '20G', 'Bronze'],
        [contraptions_003, 'Mass Production', 'Produce 100 Objects from your builders', '20G', 'Bronze'],
    ];

    return (
        <div className='contraptions'>
            <Link to='/achievement-guides'>
                <p>Back</p>
            </Link>
            <section className='main'>
                <Table dat={contraptions} />
                <Disclaimer />
            </section>
            <section className='extra-info'>
                <h1>Helpful Information</h1>
                <ul>
                    <li><b>Time Out</b></li>
                    <ul>
                        <li>Resource Requirements:</li>
                        <ul>
                            <li>1 Concrete</li>
                            <li>4 Wood</li>
                        </ul>
                        <li>Assigning a settler to a pillory for the first time will grant you the achievement.</li>
                    </ul>
                    <li><b>Show Off</b></li>
                    <ul>
                        <li>Resource Requirements</li>
                        <ul>
                            <li>Armor Display (Mannequin)</li>
                            <ul>
                                <li>1 Cloth</li>
                                <li>4 Wood</li>
                            </ul>
                            <li>Weapon Rack</li>
                                <li>I reccomend building the long one as it can hold any weapon except for heavy weapons and the Cryolator.</li>
                                <ul>
                                    <li>6 Steel</li>
                                    <li>2 Wood</li>
                                </ul>
                            <li>Power Armor Display</li>
                            <ul>
                                <li>12 Aluminum</li>
                                <li>3 Circuitry</li>
                                <li>6 Fiberglass</li>
                                <li>6 Gears</li>
                                <li>4 Oil</li>
                                <li>4 Plastic</li>
                                <li>4 Screw</li>
                            </ul>
                        </ul>
                        <li>For the armor rack and weapon rack, transferring items to it as you would a normal container is how you display the items.</li>
                        <li>For the power armor display, it works like a power armor workstation. The Power armor must be unmanned and in close proximity to the display stand. Activating the display stand when you are out of the armor will center it in the display.</li>
                    </ul>
                    <li><b>Mass Production</b></li>
                    <ul>
                        <li>The only component needed is the Builder (Workshop Location: Power -- Manufacturing -- Machinery -- Builder)</li>
                        <ul>
                            <li>Other components such as the sorters and conveyor belts may be also built for making it all more organize, but aren't neessary for the achievement.</li>
                        </ul>
                        <li>Resource Requirements</li>
                        <ul>
                            <li>2 Circuitry</li>
                            <li>3 Gears</li>
                            <li>4 Rubber</li>
                            <li>10 Steel</li>
                            <li>8 Power</li>
                        </ul>
                        <li>Transfer as many items as possible to the builder's inventory to start building items.</li>
                        <li>Keep transferring and building items until you get the achievement.</li>
                    </ul>
                    <ul></ul>
                </ul>
            </section>
        </div>
    );
}

export default Contraptions;