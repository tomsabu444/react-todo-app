import React from 'react';
import CheckBox from './CheckBox';

export default function TodoItem(props) {
    const {data, changeStatus} = props;
    const handleChange = (checked) => changeStatus(data.id, checked);
    const className = 'todo-item ui-state-default ' + (data.completed === true ? 'completed' : 'pending');

    return (
        <li className={className}>
            <div className="checkbox">
                <label>
                    <CheckBox checked={data.completed} onChange={handleChange}/> {data.text}
                    <div>
                    <span className="badge badge-primary">({data.priority})</span>
                    {data.dueDate && <span className="due-date"> Due: {data.dueDate}</span>}
                    </div>
                </label>
            </div>
        </li>
    );
}
