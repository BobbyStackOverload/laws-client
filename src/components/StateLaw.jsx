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
          const statesId = this.props.match.params.statesId;
          console.log("states is => ", statesId);
          const url = `http://localhost:3000/states/${statesId}`;
          fetch (url)
          .then(response => response.json())
          .then(jsondata => {
              this.setState({
                  data: jsondata
              })
          })
          return this.state.data;
      };
    
    //   generateLaws = async () => {
    //       console.log("the props => ", this.props.match);
    //     const statesId = this.props.match.params.statesid
    //     const url = `http://localhost:3000/${statesId}`;
    //     const response = await fetch(url);
    //     const data = response.json();
    //     console.log("generateLaws function => ", data);
    //     this.setState({data: data})
    //     return data;
    //   };

    render() {
        // console.log(this.props);
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