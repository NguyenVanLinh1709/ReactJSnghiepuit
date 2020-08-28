import React, { Component } from 'react';
import TaskItem from './TaskItem';

class TaskList extends Component {
    render() {
        return (
            <div>
                
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        
                        <table className="table table-hover table-bordered table-hover">
                            <thead>
                                <tr>
                                    <th style={{ textAlign: "center"}}>ID</th>
                                    <th style={{ textAlign: "center"}}>Name</th>
                                    <th style={{ textAlign: "center"}}>Status</th>
                                    <th style={{ textAlign: "center"}}>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td></td>
                                    <td>
                                        <input type="text" className="form-control" />
                                    </td>
                                    <td>
                                    <div className="form-group">
                                        <select className="form-control" >
                                            <option>All</option>
                                            <option>Active</option>
                                            <option>Disactive</option>
                                        </select>   
                                    </div>
                                    </td>
                                    <td></td>
                                </tr>
                                <TaskItem/> 
                                <TaskItem/> 
                                <TaskItem/> 
                            </tbody>
                        </table>                        
                    </div>
                </div>
                
            </div>
        );
    }
}

export default TaskList;
