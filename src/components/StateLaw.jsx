import React, { Component } from 'react';
import '../App.css';

class StateLaw extends Component {
  constructor(props) {
    super(props);
    this.state = {
        
    };
}

    async componentDidMount() {
        this.generateLaws();        
      }
    
      generateLaws = async () => {
        const statesId = this.props.match.params.statesId
        const url = `http://localhost:3000/states/${statesId}`;
        fetch (url)
        .then(response => response.json())
        .then(jsondata => {
          this.setState ({
            data: jsondata
          })
        })
        return this.state.data;
      };

    render() {
        console.log("the data on render", this.state.data);
        console.log("the props =>", this.props)
        const law  = this.state;
        if (this.state.data !== undefined) {
        return (
            <div className="lawWrapper">
              {law.data.map(element =>
                <div><br></br>{element.lawsinfo}</div>)}
            </div>
            );
    } else {
      return <div>loading....</div>
    }
  } 
}
 
export default StateLaw;