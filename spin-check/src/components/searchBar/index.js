import React, { Component } from "react";
import Form from "react-bootstrap/Form";

class SearchBar extends Component {
    handleSubmit = event => {
        event.preventDefault();
    };
    handleChange = event => {
        this.props.handleInput(event.target.value);
    };
    render() {
        return (
            <Form onSubmit={this.handleSubmit}>
                <Form.Group>
                    <Form.Label>
                        search a topic across any of the sites listed below
                    </Form.Label>

                    <Form.Control
                        onChange={this.handleChange}
                        placeholder="Compare a topic"
                        type="text"
                    />
                    <Form.Text className="text-muted">
                        choose which sites you would like to compare. Default is
                        USA Headlines
                    </Form.Text>
                </Form.Group>
            </Form>
        );
    }
}

export default SearchBar;
