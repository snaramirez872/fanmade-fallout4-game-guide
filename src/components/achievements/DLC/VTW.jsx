import React from "react";
import { Link } from "react-router-dom";
import Table from "../../reusable/Table";
import Disclaimer from "../../reusable/Disclaimer";

function VaultTecWorksop() {
    const vaultTec = [];

    return (
        <div className='vaultTec'>
            <Link to='/achievement-guides'>
                <p>Back</p>
            </Link>
            <section className='sec-intro'>
                <p>[Replace with Text]</p>
            </section>
            <section className='main'>
                <Table dat={vaultTec} />
                <Disclaimer />
            </section>
        </div>
    );
}

export default VaultTecWorksop;