import React, { Component } from 'react';

class TaskSearchControl extends Component {
    render() {
        return (
            <div>
                                
                <div className="input-group">
                    <input type="text" className="form-control" placeholder="Search"/>
                    <span className="input-group-btn">
                        <button type="button" className="btn btn-primary"><i className="fas fa-search"></i>&nbsp; Search</button>
                    </span>
                </div>
                
            </div>
        );
    }
}

export default TaskSearchControl;