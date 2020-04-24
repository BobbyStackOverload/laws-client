import React, { Component } from 'react';


class StateLaw extends Component {
    state = {
        data: {}
    };

    async componentDidMount() {
        const data = await this.generateLaws();
        this.setState({
          data
        });
      }
    
      generateLaws = async () => {
        const statesId = this.props.match.params.states_id
        const url = `http://localhost:3000/${statesId}`;
        const response = await fetch(url);
        const data = response.json();
        return data;
      };

    render() {
        console.log(this.props);
        const { data } = this.state;
        return (
            <div>
            <h2>{data.title}</h2>
            <p>{data.content}</p>
            </div>
            );

    }
};
 
export default StateLaw;