import React from 'react';
import Filter from './Filter';

export default function Footer(props) {
    const { activeItemCount, filter, changeFilter, changeSort } = props;

    return (
        <footer className="clearfix">
            <div className="pull-left">
                <span>{`${activeItemCount} items left`}</span>
            </div>

            {/* Filters (All, Active, Completed) */}
            <div className="pull-right">
                <Filter {...{ filter, changeFilter }} />
            </div>

            {/* Sorting Options */}
            <div className="pull-right sorting-options">
                <ul className="filters list-unstyled clearfix">
                    <li>
                        <a
                            onClick={() => changeSort('priority', 'asc')}
                            className="sort-priority"
                        >
                            {`Priority (High > Low)`}
                        </a>
                    </li>
                    <li>
                        <a
                            onClick={() => changeSort('dueDate', 'asc')}
                            className="sort-due-date-asc"
                        >
                            Due Date (Asc)
                        </a>
                    </li>
                    <li>
                        <a
                            onClick={() => changeSort('dueDate', 'desc')}
                            className="sort-due-date-desc"
                        >
                            Due Date (Desc)
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    );
}
