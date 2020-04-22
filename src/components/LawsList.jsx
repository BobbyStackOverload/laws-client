import React, { Component } from 'react';
import {
    Link,
  } from 'react-router-dom';

class LawsList extends Component {
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
        const url = "http://localhost:3000/laws/types";
        fetch (url)
        .then(response => response.json())
        .then(jsondata => this.setState({
            data: jsondata
        })) 
        return this.state.data;
      };

    render() {
        console.table(this.state.data)
        if (this.state.data !== 0) {
        const lawsData = this.state.data;

        return (
            <div>
                <h1>Laws</h1>
                <ul>
                    {lawsData.map(element => (
                        
                        <div key={element.id}> <br></br>
                        <Link to={`/laws/${element.laws}`}>{element.laws} Laws</Link>
                        </div>
                    ))}
                </ul>
            </div>
        )
        } else {
            return <div>Loading data....</div>
        }
    }
}

export default LawsList;