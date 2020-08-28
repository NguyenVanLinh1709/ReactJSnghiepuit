import React, { Component } from 'react';

class TaskSortControl extends Component {
    render() {
        return (
            <div>
                <div className="btn-group">
                    <button type="button" className="btn btn-primary">Sort</button>
                    <button type="button" className="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <span className="caret"></span>
                    </button>
                    <ul className="dropdown-menu">
                        <li>Sort A-Z</li>
                        <li>Sort Z-A</li>
                        <li role="separator" className="divider"></li>
                        <li>Active</li>
                        <li>Disactive</li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default TaskSortControl;