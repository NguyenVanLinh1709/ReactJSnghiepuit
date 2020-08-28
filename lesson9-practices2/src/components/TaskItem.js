import React, { Component } from 'react';

class TaskItem extends Component {
    render() {
        return (
            <tr>
                <td style={{ textAlign: "center"}}>01</td>
                <td >Linh</td>
                <td style={{ textAlign: "center"}}><span className="label label-info">Disactive</span></td>
                <td style={{ textAlign: "center"}}>
                    <button type="button" className="btn btn-success" ><i className="fas fa-pen"></i>&nbsp;Edit</button>
                    &nbsp;
                    <button type="button" className="btn btn-danger"><i className="fas fa-times"></i>&nbsp;Delete</button>
                </td>
            </tr>
        );
    }
}

export default TaskItem;