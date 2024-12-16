import React, { Component } from 'react';
import enhance from '../hoc/wrapInputBox';

class InputBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            priority: 'Medium', // Default priority
            dueDate: '', // Default due date
        };
    }

    handlePriorityChange = (e) => {
        this.setState({ priority: e.target.value });
    };

    handleDueDateChange = (e) => {
        this.setState({ dueDate: e.target.value });
    };

    handleSubmit = () => {
        const { value, addNew, setValue } = this.props;
        const { priority, dueDate } = this.state;

        if (value.trim()) {
            addNew(value.trim(), priority, dueDate); // Pass priority and due date
            this.setState({ priority: 'Medium', dueDate: '' }); // Reset fields
            setValue(''); // Clear the text input
        } else {
            alert('Task text cannot be empty!');
        }
    };

    render() {
        const { value, handleChange } = this.props;
        const { priority, dueDate } = this.state;

        return (
            <div>
                <input
                    type="text"
                    className="form-control add-todo"
                    placeholder="Add New Task"
                    value={value}
                    onChange={handleChange}
                />
                <div className="additional-inputs">
                    <select
                        className="form-control priority-dropdown"
                        value={priority}
                        onChange={this.handlePriorityChange}
                    >
                        <option value="High">High</option>
                        <option value="Medium">Medium</option>
                        <option value="Low">Low</option>
                    </select>
                    <input
                        type="date"
                        className="form-control due-date-input"
                        value={dueDate}
                        onChange={this.handleDueDateChange}
                    />
                    <button
                        type="button"
                        className="btn btn-primary submit-task"
                        onClick={this.handleSubmit}
                    >
                        Submit
                    </button>
                </div>
            </div>
        );
    }
}

export default enhance(InputBox);
