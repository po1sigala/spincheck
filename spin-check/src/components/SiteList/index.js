import React, { Component } from "react";
import Form from "react-bootstrap/Form";
class SiteList extends Component {
    state = {
        checkedBoxes: []
    };
    handleChange = event => {
        const isChecked = event.target.checked;
        let arry;
        switch (isChecked) {
            case true:
                arry = this.state.checkedBoxes;
                arry.push(event.target.id);
                this.props.handleCheckbox(arry);
                break;
            case false:
                arry = this.state.checkedBoxes;
                const iToRemove = arry.indexOf(event.target.id);
                arry.splice(iToRemove, 1);
                this.props.handleCheckbox(arry);
                break;
            default:
                console.log("something went rerribly wrongS");
        }
    };
    render() {
        return (
            <Form>
                {["checkbox"].map(type => (
                    <div key={`inline-${type}`} className="mb-3">
                        <Form.Check
                            inline
                            label={this.props.sites[0][0]}
                            type={type}
                            id={this.props.sites[0][1]}
                            onChange={this.handleChange}
                        />
                        <Form.Check
                            inline
                            label={this.props.sites[1][0]}
                            type={type}
                            id={this.props.sites[1][1]}
                            onChange={this.handleChange}
                        />
                    </div>
                ))}
            </Form>
        );
    }
}

export default SiteList;
