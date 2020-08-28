import React from 'react';

class SizeSetting extends React.Component {

    changeSize(value){
        this.props.onChangeSize(value)
    }

    render(){
        return (
            <div className="panel panel-warning">
                <div className="panel-heading">
                    <h3 className="panel-title">Size : {this.props.fontSize}</h3>
                </div>
                <div className="panel-body">
                    <button type="button" className="btn btn-success" onClick={() => this.changeSize(-1)}>Giảm</button>
                    &nbsp;
                    <button type="button" className="btn btn-success" onClick={() => this.changeSize(1)}>Tăng</button>
                </div>
            </div>
        );
    }
}

export default SizeSetting;
