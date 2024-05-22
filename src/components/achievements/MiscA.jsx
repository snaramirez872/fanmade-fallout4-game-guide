import React from "react";
import { Link } from 'react-router-dom';

function MiscA() {
    return (
        <div className='achieve-home'>
            <Link to='/achievement-guides'>
                <p>Back</p>
            </Link>
            <section className='miscellaneous'>
                <h1>Miscellaneous Milestones</h1>
            </section>
        </div>
    );
}

export default MiscA;
