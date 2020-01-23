import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
class SearchBar extends Component {
    render() {
        return (
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>
                        search a topic across any of the sites listed below
                    </Form.Label>
                    <div className="row">
                        <div className="col-md-6 col-sm-6 col-lg-6">
                            <Form.Control
                                type="email"
                                placeholder="Compare a topic"
                            />
                        </div>
                        <div className="col-md-6 col-sm-6 col-lg-6">
                            <Button>Search</Button>
                        </div>
                    </div>

                    <Form.Text className="text-muted">
                        choose which sites you would like to compare. Default is
                        USA Headlines
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
            </Form>
        );
    }
}

export default SearchBar;
