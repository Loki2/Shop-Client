import React from 'react';
import Nav from './Nav';
import Head from 'next/head';

function Layouts({ children }) {
    return (
        <div>
            <Head>
                <title>My E-Shoppin</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Nav />

            {children}
        </div>
    )
}

export default Layouts
