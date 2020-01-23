import React, { Component } from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
class Jumbo extends Component {
    render() {
        return (
            <Jumbotron fluid>
                <Container>
                    <h1>Spin Check </h1>
                    <p>See what people are saying across the board</p>
                </Container>
            </Jumbotron>
        );
    }
}
export default Jumbo;
