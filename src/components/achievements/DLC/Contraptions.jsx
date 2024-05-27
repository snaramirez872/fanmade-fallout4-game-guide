import React from "react";
import { Link } from "react-router-dom";
import Table from "../../reusable/Table";
import Disclaimer from "../../reusable/Disclaimer";

function Contraptions() {
    const contraptions = [];

    return (
        <div className='contraptions'>
            <Link to='/achievement-guides'>
                <p>Back</p>
            </Link>
            <section className='sec-intro'>
                <p>[Replace with Text]</p>
            </section>
            <section className='main'>
                <Table dat={contraptions} />
                <Disclaimer />
            </section>
        </div>
    );
}

export default Contraptions;