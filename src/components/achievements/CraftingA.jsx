import React from "react";
import { Link } from 'react-router-dom';

function CraftingA() {
    return (
        <div className='achieve-home'>
            <Link to='/achievement-guides'>
                <p>Back</p>
            </Link>
            <section className='crafting'>
                <h1>Crafting Milestones</h1>
            </section>
        </div>
    );
}

export default CraftingA;
