import React from "react";
import { Link } from 'react-router-dom';

function CombatA() {
    return (
        <div className='achieve-home'>
            <Link to='/achievement-guides'>
                <p>Back</p>
            </Link>
            <section className='combat'>
                <h1>Combat Milestones</h1>
            </section>
        </div>
    );
}

export default CombatA;
