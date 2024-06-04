import React from "react";
import { Link } from "react-router-dom";
import AchieveNav from "../../AchievementNavBars/achieve-nav";

export default function DLCAchievements() {
    return (
        <div className='dlc-achieves'>
            <AchieveNav />
            <section className='dlc-list'>
                <Link to='/dlc-achievements/automatron'>
                    <p>Automatron</p>
                </Link>
                <Link to='/dlc-achievements/wasteland-workshop'>
                    <p>Wasteland Workshop</p>
                </Link>
                <Link to='/dlc-achievements/far-harbor'>
                    <p>Far Harbor</p>
                </Link>
                <Link to='/dlc-achievements/contraptions'>
                    <p>Contraptions</p>
                </Link>
                <Link to='/dlc-achievements/vault-tec-workshop'>
                    <p>Vault-Tec Workshop</p>
                </Link>
                <Link to='/dlc-achievements/nuka-world'>
                    <p>Nuka World</p>
                </Link>
            </section>
        </div>
    );
}
