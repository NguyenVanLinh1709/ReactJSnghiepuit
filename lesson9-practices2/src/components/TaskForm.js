import React, { Component } from 'react';

class TaskForm extends Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div className="panel panel-warning" style={{ marginLeft: 20 }}>
                        <div className="panel-heading">
                            <h3 className="panel-title ">Add Task</h3>
                        </div>
                        <div className="panel-body">
                            <label>Name:</label>
                            <input type="text" className="form-control" />
                            <label>Status:</label>
                            <div className="form-group">
                                <select className="form-control">
                                    <option>Active</option>
                                    <option>Disactive</option>
                                </select>   
                            </div>
                            <button type="button" className="btn btn-success" ><i className="fas fa-plus"></i>&nbsp;Save</button>
                            &nbsp;
                            <button type="button" className="btn btn-danger"><i className="fas fa-times"></i>&nbsp;Cancel</button>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default TaskForm;
