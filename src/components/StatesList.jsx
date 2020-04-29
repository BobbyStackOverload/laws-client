import React, { Component } from 'react';
import {
    Link,
  } from 'react-router-dom';
  import '../App.css';

class StatesList extends Component {
    constructor() {
        super();
        this.state = {
            data: []
        };
    } 

    async componentDidMount() {
        const data = await this.generateLaws();
        this.setState({
          data
        });
      }
    
      generateLaws = async () => {
        const url = "http://localhost:3000";
        fetch (url)
        .then(response => response.json())
        .then(jsondata => this.setState({
            data: jsondata
        })) 
        return this.state.data;
      };

    render() {
        console.log(this.state.data)
        if (this.state.data !== 0) {
        const lawsData = this.state.data;

        return (
            <div>
     
                                <h1>Select A State</h1>
                <div className='statesWrapper'>
                    {lawsData.map(element => (    
                        <button key={element.id}> 
                        <Link to={`/states/${element.id}`}>{element.stateslist}</Link>
                        </button>
                    ))}
                </div>
            </div>
        )
        } else {
            return <div>Loading data....</div>
        }
    }
}

export default StatesList;