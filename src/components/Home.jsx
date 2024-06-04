import React from "react";
import { Link } from 'react-router-dom';
import HomeNav from "./HomeNavBar/HomeNav";

export default function Home() {
    return (
        <div className='home'>
            <HomeNav />
            <section className='intro'>
                <h1>Introduction</h1>
                <p>[Intro goes here]</p>
            </section>
        </div>
    );
}
