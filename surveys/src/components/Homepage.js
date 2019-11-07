import React from 'react';
import { Link } from 'react-router-dom'
import { Button } from "reactstrap";

function Home() {
    return (
        <>
            <h1>Welcome to You Got Surveyed!</h1>
            <h2>Click here to get started:</h2>
            <Link to='/start-survey'>
                <Button>Start Survey!</Button>
            </Link>
        </>
    )
}

export default Home