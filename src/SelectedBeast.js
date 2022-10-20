import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

class SelectedBeast extends React.Component{
  render(){
    console.log('this.props', this.props);
    return(
      <>
      <Modal
      show={this.props.show}
      onHide={this.props.onHide}

      >
        <Modal.Header closeButton>
        
          <Modal.Title></Modal.Title>

        </Modal.Header>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={this.props.image_url} 
          alt={this.props.hornedAnimals} />
      <Card.Body>
        <Card.Title>{this.props.title}</Card.Title>
        <Card.Text>{this.props.description}</Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
      </Modal>

      </>
    )
  }
}

export default SelectedBeast;