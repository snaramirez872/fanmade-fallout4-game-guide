import React from "react";
import Table from "../../reusable/Table";
import Disclaimer from "../../reusable/Disclaimer";
import AchieveNav from "../../AchievementNavBars/achieve-nav";

function NukaWorld() {
    const nukaWorld = [];

    return (
        <div className='nukaWorld'>
            <AchieveNav />
            <section className='sec-intro'>
                <p>[Replace with Text]</p>
            </section>
            <section className='main'>
                <Table dat={nukaWorld} />
                <Disclaimer />
            </section>
        </div>
    );
}

export default NukaWorld;