import React, { Component } from 'react';

class Form extends Component{

    constructor(){
        super();
        this.state = {
            txtName : 'Lnh',
            txtPass : '1709',
            txtDesc : 'Try my best',
            sltGender : 1,
            rdLang : 'vi',
            cbRem : false,
        }
    }

    onHandleChange = (event) => {
        var target = event.target;
        var name = target.name;
        var value = target.type === 'checkbox' ? target.checked : target.value
        this.setState({
            [name] : value
        })
    }

    onHandleSubmit = (event) =>{
        event.preventDefault();
        console.log(this.state)
    }

    render(){
        return(
            <div className="container " >
                <div className="row">
                    <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                        <div className="panel panel-primary">
                              <div className="panel-heading">
                                    <h3 className="panel-title">Panel heading form</h3>
                              </div>
                              <div className="panel-body">
                                    <form onSubmit = {this.onHandleSubmit}>
                                        <div className="form-group">

                                            <label>Name</label>
                                            <input 
                                                type="text" 
                                                className="form-control" 
                                                name="txtName"
                                                onChange = { this.onHandleChange}
                                                value = {this.state.txtName}/>

                                            <label>Pass</label>
                                            <input 
                                                type="password" 
                                                className="form-control" 
                                                name="txtPass"
                                                onChange = { this.onHandleChange}
                                                value = {this.state.txtPass}/>
                                            
                                            <label>Descreption</label>
                                            <textarea 
                                                className="form-control" 
                                                rows="3" 
                                                name="txtDesc"
                                                onChange = { this.onHandleChange}
                                                value = {this.state.txtDesc}>
                                            </textarea>
                                            
                                            <label>Gender</label>
                                            <select 
                                                className="form-control"
                                                name="sltGender"
                                                onChange = { this.onHandleChange}
                                                value = {this.state.sltGender}>
                                                <option value="1">Man</option>
                                                <option value="0">Woman</option>
                                            </select>

                                            <label>Language</label>
                                            <div className="radio">
                                                <label>
                                                    <input 
                                                        type="radio" 
                                                        name="rdLang" 
                                                        value="en"
                                                        checked={this.state.rdLang === 'en'}
                                                        onChange = { this.onHandleChange}/>
                                                    English
                                                </label>
                                            </div>
                                            
                                            <div>
                                                <label>
                                                    <input 
                                                        type="radio" 
                                                        name="rdLang" 
                                                        value="vi"
                                                        checked={this.state.rdLang === 'vi'}
                                                        onChange = { this.onHandleChange}/>
                                                    Vietnamese
                                                </label>
                                            </div>
                                            
                                            <div className="checkbox">
                                                <label>
                                                    <input 
                                                        type="checkbox" 
                                                        name="cbRem"
                                                        value={true}
                                                        checked={this.state.cbRem === true}
                                                        onChange = { this.onHandleChange}
                                                        />
                                                    Remember me
                                                </label>
                                            </div>
                                            

                                        </div>
                                        <button type="submit" className="btn btn-primary">Submit</button> &nbsp;
                                        <button type="reset" className="btn btn-primary">Delete</button>
                                    </form>
                              </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Form;
