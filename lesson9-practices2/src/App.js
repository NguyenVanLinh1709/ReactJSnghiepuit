import React, { Component } from 'react';
import './App.css';
import TaskForm from './components/TaskForm';
import TaskControl from './components/TaskControl';
import TaskList from './components/TaskList';

class App extends Component {
    render() {
        return (
            <div className="container mg-50" >

                <div className="row">
                    <div className="panel panel-primary">
                        <div className="panel-heading">
                            <h3 className="panel-title">Manager Task</h3>
                        </div>
                        <div className="panel-body">
                            <div className="row">
                                <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                                    <TaskForm/>
                                </div>
                                <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                                    
                                    <button type="button" className="btn btn-primary"><i className="fas fa-plus"></i>&nbsp; Add task</button>
                                    <br/>
                                    <br/>
                                    <TaskControl/>
                                    <br/>
                                    <TaskList/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
