import React from "react";
import { Link } from 'react-router-dom';

function SettlementMilestones() {
    return (
        <div className='achieve-home'>
            <Link to='/achievement-guides'>
                <p>Back</p>
            </Link>
            <section className='settle-miles'>
                <h1>Settlement Milestones</h1>
            </section>
        </div>
    );
}

export default SettlementMilestones;
