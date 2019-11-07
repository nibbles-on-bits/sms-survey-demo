import React from 'react'
import { Link } from 'react-router-dom'
import Styled from 'styled-components'
import { NavbarBrand, Navbar, NavItem, NavLink } from 'reactstrap'

function NavBar() {
    return (
        <Navbar>
            <NavbarBrand href='/home'>/SMS Surveys</NavbarBrand>
            <NavItem>
                <NavLink href='/start-survey'>Start Survey</NavLink>
            </NavItem>
        </Navbar>
    )
}

export default NavBar