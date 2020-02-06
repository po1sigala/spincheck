import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
class SearchBar extends Component {
    handleSubmit = event => {
        event.preventDefault();
    };
    handleChange = event => {
        this.props.handleInput(event.target.value);
    };
    handleSelect = event => {
        this.props.handleSelection(event.target.value);
    };
    render() {
        const toDisplay = [];
        let i = parseInt(this.props.numInputs);
        for (i; i > 0; i--) {
            toDisplay.push(i);
        }
        const dropdownitems = toDisplay.reverse().map(number => {
            return <option key={number}>{number}</option>;
        });
        return (
            <Form onSubmit={this.handleSubmit}>
                <Form.Row>
                    <Form.Group>
                        <Form.Label>{this.props.typeOfSearch}</Form.Label>

                        <Form.Control
                            onChange={this.handleChange}
                            placeholder="Compare a topic"
                            type="text"
                        />
                        <Form.Text className="text-muted">
                            {this.props.subtitle}
                        </Form.Text>
                    </Form.Group>
                    <Form.Group
                        as={Col}
                        controlId="formGridState"
                        onChange={this.handleSelect}
                    >
                        <Form.Label>Get back up to 10 articles</Form.Label>
                        <Form.Control as="select">{dropdownitems}</Form.Control>
                        <Form.Text className="text-muted">
                            there may be fewer responses available than your
                            selection
                        </Form.Text>
                    </Form.Group>
                </Form.Row>
            </Form>
        );
    }
}

export default SearchBar;
