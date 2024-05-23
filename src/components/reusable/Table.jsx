import React from 'react';
import './styles/Table-styles.css';

const Table = ({ dat }) => {

    const headers = ['Icon', 'Name', 'Description', 'Gamerscore (Xbox)', 'Trophy Level (PlayStation)'];
    return (
        <table className='table'>
            <thead className='headers'>
                <tr>
                    {headers.map((head, idx) => (
                        <th key={idx}>{head}</th>
                    ))}
                </tr>
            </thead>
            <tbody className='t-body'>
                {dat.map((row, rowIDX) => (
                    <tr key={rowIDX}>
                        {row.map((cell, cellIDX) => (
                            <td key={cellIDX}>
                                {cellIDX === 0 ? (
                                    <img className='icons' src={cell} alt="" />
                                ) : (
                                    cell
                                )}
                            </td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default Table;
