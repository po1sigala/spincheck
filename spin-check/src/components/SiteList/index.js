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
        let i = 0;

        const selections = this.props.sites.map(source => {
            console.log(`adding source`);
            console.log(source[0]);
            i++;
            return (
                <div key={`checkbox-inline-${i}`} className="mb-3">
                    <Form.Check
                        inline
                        label={source[0]}
                        type="checkbox"
                        id={source[1]}
                        onChange={this.handleChange}
                    />
                </div>
            );
        });
        return <Form>{selections}</Form>;
    }
}

export default SiteList;
