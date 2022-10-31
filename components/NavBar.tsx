import React from "react";
import { Container, Navbar } from "react-bootstrap";
import Image from "next/image";
import { RiMenu3Line } from "react-icons/ri";

const NavBar = () => {
    return (
        <>
            <Navbar bg="success" variant="dark" expand="lg" sticky="top">
                <Container>
                    <Navbar.Brand className="d-flex align-items-center justify-content-center">
                        <Image
                            src="https://static.vecteezy.com/system/resources/thumbnails/002/497/131/small/book-with-fiery-torch-concept-university-education-or-library-emblem-icon-web-logo-illustration-design-vector.jpg"
                            alt=""
                            height={30}
                            width={30}
                            className="rounded-circle"
                        />
                        <span className="ms-2">Books Finder</span>
                    </Navbar.Brand>
                    <Navbar.Text>
                        <RiMenu3Line />
                    </Navbar.Text>
                </Container>
            </Navbar>
        </>
    );
};

export default NavBar;
