import React from "react";
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div className='home'>
            <section className='intro'>
                <h1>Introduction</h1>
                <p>[Intro goes here]</p>
            </section>
            <section className='links'>
                <h1>Guides</h1>
                <Link to='/achievement-guides'>
                    <p>Achievements</p>
                </Link>
                <Link to='/game-guides'>
                    <p>Game Mechanics + Story</p>
                </Link>
            </section>
        </div>
    );
}

export default Home;
