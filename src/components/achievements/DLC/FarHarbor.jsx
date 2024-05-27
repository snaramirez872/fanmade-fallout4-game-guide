import React from "react";
import { Link } from "react-router-dom";
import Table from "../../reusable/Table";
import Disclaimer from "../../reusable/Disclaimer";

function FarHarbor() {
    const farHarbor = [];

    return (
        <div className='farHarbor'>
            <Link to='/achievement-guides'>
                <p>Back</p>
            </Link>
            <section className='sec-intro'>
                <p>[Replace with Text]</p>farharbor
            </section>
            <section className='main'>
                <Table dat={farHarbor} />
                <Disclaimer />
            </section>
        </div>
    );
}

export default FarHarbor;