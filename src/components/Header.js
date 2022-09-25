import React from "react";
import { Navbar, Nav } from "react-bootstrap"
import { Link, useMatch, useResolvedPath } from 'react-router-dom'
import logo from '../space-B-logo.svg'

function Header() {

    return <nav className="nav" variant="dark" expand="lg">
    <Link to="/"><img className="logo" src={logo} alt={"logo"} /></Link>
    <ul>
        <CustomLink to="/neo">Asteroids</CustomLink>
        <CustomLink to="/earth">Earth</CustomLink>
        <CustomLink to="/weather">Weather</CustomLink>
    </ul>
</nav>
    //     <Navbar.Brand as={Link} to={"/"}><img className="logo" src={logo} alt={"logo"} /> </Navbar.Brand>

    //     <Nav >
    //         <CustomLink as={Link} to={"/home"}>Home</CustomLink>
    //     </Nav>
    //     <Nav>
    //         <CustomLink as={Link} to={"/neo"}>Asteroids</CustomLink>
    //     </Nav>
    //     <Nav>
    //         <CustomLink as={Link} to={"/earth"}>Earth</CustomLink>
    //     </Nav>
    //     <Nav>
    //         <CustomLink as={Link} to={"/weather"}>Weather</CustomLink>
    //     </Nav>
    // </Navbar>
}
function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to);
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })

    return (
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}>{children}</Link>
        </li>
    );

}
export default Header;