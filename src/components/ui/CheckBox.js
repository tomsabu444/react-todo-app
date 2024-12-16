import React, { Component } from "react";

class CheckBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            checked: this.props.checked,
        };
    }

    handleChange(e) {
        const { checked } = e.target;
        
        //! Feature 1: Confirm before changing the status of a task.
        const confirmed = this.props.onChange(checked);
        if (confirmed) {
            this.setState({ checked });
        } else {
            e.target.checked = this.state.checked;
        }
    }

    render() {
        return (
            <input
                type="checkbox"
                checked={this.state.checked}
                onChange={this.handleChange.bind(this)}
            />
        );
    }
}

export default CheckBox;
