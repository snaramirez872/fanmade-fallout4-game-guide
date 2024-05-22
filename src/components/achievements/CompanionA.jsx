import React from "react";
import { Link } from 'react-router-dom';

function CompanionA() {
    return (
        <div className='achieve-home'>
            <Link to='/achievement-guides'>
                <p>Back</p>
            </Link>
            <section className='companions'>
                <h1>Companion Milestones</h1>
            </section>
        </div>
    );
}

export default CompanionA;
