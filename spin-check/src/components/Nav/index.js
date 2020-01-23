import React, { Component } from "react";
import "./style.css";
import Nav from "react-bootstrap/Nav";
class NavBar extends Component {
    render() {
        return (
            <Nav
                activeKey="/home"
                onSelect={selectedKey => alert(`selected ${selectedKey}`)}
            >
                <Nav.Item>
                    <Nav.Link href="/home">Home</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-1">Trending</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-2">Search The Globe</Nav.Link>
                </Nav.Item>
            </Nav>
        );
    }
}

export default NavBar;
