import React, { Component } from 'react';


class Sum extends Component{
    constructor(){
        super();
        this.state = {
            number1: 0,
            number2: 0,
            sum: null,

        }
    }
    handleChange(num1){
        this.setState({ number1: num1})
    }
    handleChange2(num2){
        this.setState({ number2: num2})
    }
    addNumbers(number1,number2){
        console.log(number1)
        console.log(number1 +number2)
       var added =  number1 + number2;
       this.setState({ sum: added})
    }


    render(){
        return (
        <div className="puzzleBox sumPB">
            <h4> Sum </h4>
            <input className="inputLine" type="number" onChange={ (e) => this.handleChange( e.target.value )   }></input>
            <input className="inputLine" type="number" onChange={ (e) => this.handleChange2( e.target.value )   }></input>
            <button className="confirmationButton" onClick={ () => this.addNumbers(this.state.number1, this.state.number2)}> Add </button>
            <span className="resultsBox"> Sum: { this.state.sum }</span>
      </div>
        )
    }
}

export default Sum;