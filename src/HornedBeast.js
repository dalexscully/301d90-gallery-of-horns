import React from 'react';
import { Card } from 'react-bootstrap';
import './HornedBeast.css';
import Col from 'react-bootstrap/Col';



class HornedBeast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      animals: 0,
    };
  };

  handleAnimals = () => {
    this.setState({
      animals: this.state.animals + 1,
    });
  }

  render() {
    return (
      <>
      <Col className='m-4'>

        <Card className='p-3'>
          <h2>{this.props.title}</h2>
          <p>{this.state.animals} Favorites</p>
          <p onClick={this.handleAnimals}>My favorite beast ❤️</p>
          <img src={this.props.image_url} alt={this.props.hornedAnimals} />
          <p>{this.props.description}</p>
        </Card>
      </Col>
      </>
    )
  }
}


export default HornedBeast;