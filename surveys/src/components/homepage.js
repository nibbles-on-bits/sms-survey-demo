import React from 'react';
import { Link } from 'react-router-dom'

function Home() {
    return (
        <>
            <h1>Welcome to You Got Surveyed!</h1>
            <h2>Click here to get started:</h2>
            <Link to='/start-survey'>
                <button>Start Survey!</button>
            </Link>
        </>
    )
}

export default Home