import React from "react";
import { Link } from 'react-router-dom';

function CollectibleA() {
    return (
        <div className='achieve-home'>
            <Link to='/achievement-guides'>
                <p>Back</p>
            </Link>
            <section className='collectibles'>
                <h1>Collectible Milestones</h1>
            </section>
        </div>
    );
}

export default CollectibleA;
