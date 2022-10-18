import React from 'react';



class HornedBeast extends React.Component {
  render() {
    return (
      <>
        <h2>{this.props.title}</h2>
        <img src={this.props.imageurl} alt={this.props.title} title={this.props.title} />
        <p>{this.props.description}</p>
      </>
    )
  }
}


export default HornedBeast;