import React from 'react';
import "./Button.css"


export default class Button extends React.Component{
    constructor (props){
        super(props);
        this.state = {
            value: props.value, 
            color: props.color !== undefined ? props.color : "black",
            width: props.width !== undefined ? props.width : "50px"
        };
            this.styleColor = this.state.color;
            this.styles = {
                width: this.state.width,
                backgroundColor: this.styleColor,
                boxShadow: "0px 0px 10px " + this.styleColor
            }
        }
    
    render(){
    return(
    <button className="btn" style={this.styles} 
    onClick={this.props.updateValue.bind(this, this.state.value)} >
        {this.state.value}
    </button>
    )    
}
}