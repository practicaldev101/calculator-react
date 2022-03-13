import React from "react";
import './Display.css'
export default class Display extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return (<div className="display">
            <h3 className="display__text">{ this.props.value}</h3>
        </div>)
    }
}