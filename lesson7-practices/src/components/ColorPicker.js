import React from 'react';

class ColorPicker extends React.Component {

    constructor(){
        super();
        this.state = {
            colors : ['red', 'green', 'blue', 'orange']
        };
    }

    showColor(color){
        return{
            backgroundColor : color
        }
    }

    setActiveColor(color){
        this.props.onReceiveColor(color)
    }

    render(){

        var elmColorPicker = this.state.colors.map((color, index) => {
            return(
                <span 
                    key={index} 
                    style={this.showColor(color)}
                    className={this.props.color === color ? 'active' : ''}
                    onClick = { () => this.setActiveColor(color)}
                    >
                </span>
            )
        })

        return (
            <div className="panel panel-primary">
                <div className="panel-heading">
                    <h3 className="panel-title">Color Picker</h3>
                </div>
                <div className="panel-body">
                    {elmColorPicker}
                    <hr />
                </div>
            </div>
        );
    }
}

export default ColorPicker;
