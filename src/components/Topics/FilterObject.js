import React, { Component } from 'react';

class FilterObject extends Component {
    constructor(){
        super();

        this.state = {
            employees: [
              {
                name: 'Jimmy Joe',
                title: 'Hack0r',
                age: 12,
              },
              {
                name: 'Jeremy Schrader',
                age: 24,
                hairColor: 'brown'
              },
              {
                name: 'Carly Armstrong',
                title: 'CEO',
              }
            ],
      
            userInput: '',
            filteredEmployees: []
          }
    }
    render () {
        return(
            <div className="puzzleBox filterObjectPB">
            <h4> Filter Object </h4>
            <span className="puzzleText"></span>
            <input className="inputLine"></input>
            <button className="confirmationButton"> Filter </button>
            <span className="resultsBox filterObjectRB">Filtered: </span>
          </div>
    
        )
    }
}

export default FilterObject;