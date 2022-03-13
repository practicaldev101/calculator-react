import React from 'react';
import { Component } from 'react';
import Display from './Display';
import Button from './Button';
import './Panel.css'
export default class Panel extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            firstValues: String(""), 
            secondValues: String(""),
            displayValue: String(""),
            Symbol: String(""),
            argsFlag: 0,
            total: 0
        }
    }

    resolveOperation = ()=>{
        const Symbol = this.state.Symbol
        const firstNumbers = parseFloat(this.state.firstValues)
        const secondNumbers = parseFloat(this.state.secondValues)
        var operation = 0;
        if (!isNaN(firstNumbers) && !isNaN(secondNumbers)) {
            if (Symbol === "+"){
                operation = firstNumbers + secondNumbers
            }
            else if (Symbol === "-"){
                operation = firstNumbers - secondNumbers
            }
            else if (Symbol === "*"){
                operation = firstNumbers * secondNumbers
            }
            else if (Symbol === "/"){
                operation = firstNumbers * secondNumbers
            }
            console.log(secondNumbers)
            this.setState({displayValue: operation})
        }
        else{
            this.setState({displayValue: "Syntaxt error"})
        }
        
        
    }

    showValues = ()=>{
        this.setState((state, props) =>(
            {displayValue: state.firstValues + state.Symbol + state.secondValues}
        ))
    }

    clickedOperator = (value) =>{
        this.setState({argsFlag: 1, Symbol: value})
        this.showValues()
    } 

    restoreData = (value) =>{
        this.setState({
            firstValues: "", 
            secondValues: "",
            displayValue: "",
            Symbol: "",
            argsFlag: 0,
            total: 0
        })
    }

    onclick = (value) => {
        
        if (!this.state.argsFlag){
            this.setState((state, props) =>(
                {firstValues: state.firstValues + value}
            ))
            console.log(this.state.firstValues)
        } 
        else if(this.state.argsFlag){
            this.setState((state, props) =>(
                {secondValues: state.secondValues + value}
            ))
            console.log(this.state.secondValues)
        }
        this.showValues()
        return;
    }
    render(){
        return(
            <div className='container'>
                <h2 className='container__title'>CASIO</h2>
                <Display value={this.state.displayValue}/>
                <div className='row'>
                    <Button value="1" updateValue={this.onclick}/>
                    <Button value="2" updateValue={this.onclick}/>
                    <Button value="3" updateValue={this.onclick}/>
                    <Button value="4" updateValue={this.onclick}/>
                    <Button value="+" updateValue={this.clickedOperator}/>
                </div>
                <div className='row'>
                <Button value="5" updateValue={this.onclick}/>
                <Button value="6" updateValue={this.onclick}/>
                <Button value="7" updateValue={this.onclick}/>    
                <Button value="8" updateValue={this.onclick}/>
                <Button value="-" updateValue={this.clickedOperator}/>
                </div>
                <div className='row'>
                <Button value="9" updateValue={this.onclick}/>
                <Button value="0" updateValue={this.onclick}/>
                <Button value="*" updateValue={this.clickedOperator}/>
                <Button value="/" updateValue={this.clickedOperator}/>    
                <Button value="CE" color="orange" updateValue={this.restoreData}/>
                </div>
                <div className='row'>   
                <Button value="=" width="70%" updateValue={this.resolveOperation}/>
                <Button value="." updateValue={this.onclick}/>
                </div>
            </div>
        )
    }
}