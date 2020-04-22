import React, { Component } from 'react';


class StateLaw extends Component {
    constructor(props) {
        super(props);
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
        if (this.state.data !== 0) {
        const lawsData = this.state.data;
        console.log("On the route law data", lawsData)
            for (let i = 0; i < lawsData.length; i++) {
                if (this.props.match.params.state === lawsData[i].states) {
                    console.log("data on state" ,lawsData[i])
        return (
            <div className="lawPost">               
                <h1>{this.props.match.params.state}</h1>            
            </div>
        )
        } else {
            return <div>Loading data....</div>
        }
    }
}
 }
}
export default StateLaw;