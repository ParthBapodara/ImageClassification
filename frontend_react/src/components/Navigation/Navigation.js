import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';



const Navigation = () => {
    return (
        <Navbar bg="dark" variant="dark" className='mb-3' style={{ padding: "15px" }}>
            <Navbar.Brand href="/">Home</Navbar.Brand>
            <Nav className="" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%" }}>
                <div style={{ display: "flex", alignItems: "center" }}>
                    <Nav.Link href="/classification">Image Classifier</Nav.Link>
                    <Nav.Link href="/history">History</Nav.Link>
                    <Nav.Link href="/faq">FAQ</Nav.Link>
                </div>
                {/* <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <Nav.Link href="/login" style={{ padding: "9px 30px", backgroundColor: "#000", color: "#fff", fontWeight: "700", borderRadius: "20px" }}>Login</Nav.Link>
                    <Nav.Link href="/sign-up" style={{ padding: "8px 20px", backgroundColor: "deepskyblue", color: "#fff", fontWeight: "700", borderRadius: "20px" }}>Sign Up</Nav.Link>
                </div> */}
            </Nav>
        </Navbar>
    );
}

export default Navigation;