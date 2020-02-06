import React, { Component } from "react";
import "./style.css";
import Nav from "react-bootstrap/Nav";

class NavBar extends Component {
    render() {
        return (
            <div>
                <Nav activeKey="/home">
                    <Nav.Item>
                        <Nav.Link href="/home">Home</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/trending">Trending</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/search">Search The Globe</Nav.Link>
                    </Nav.Item>
                </Nav>
            </div>
        );
    }
}

export default NavBar;
