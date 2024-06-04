import React from "react";
import Table from "../../reusable/Table";
import Disclaimer from "../../reusable/Disclaimer";
import AchieveNav from "../../AchievementNavBars/achieve-nav";

function VaultTecWorksop() {
    const vaultTec = [];

    return (
        <div className='vaultTec'>
            <AchieveNav />
            <section className='main'>
                <Table dat={vaultTec} />
                <Disclaimer />
            </section>
        </div>
    );
}

export default VaultTecWorksop;