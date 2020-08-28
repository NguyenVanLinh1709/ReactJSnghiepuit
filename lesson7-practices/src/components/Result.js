import React from 'react';

class Result extends React.Component {

    setStyle(){
        return{
            color : this.props.color,
            borderColor : this.props.color,
            fontSize : this.props.fontSize
        }
    }

    render() {
        return (
            <div>
                <p>Color : {this.props.color} - Size : {this.props.fontSize}px</p>
                <div id="content" style={this.setStyle()}><b>Nội dung setting</b></div>
            </div>
        );
    }
}

export default Result;
