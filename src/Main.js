import React from "react";
import HornedBeast from "./HornedBeast";
import data from './data.json';
import './Main.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

class Main extends React.Component {
  render() {
    let HornedAnimals = [];

    data.forEach((animal, index) => {
      HornedAnimals.push(
        <HornedBeast
          image_url={animal.image_url}
          title={animal.title}
          description={animal.description}
          key={index}
        />
      )
    });
    console.log('hornedAnimals', HornedAnimals)
    return (
      <>
        <main>
          <Container>
            <Row xs={1} sm={3} md={4} lg={5}>
              {HornedAnimals}

            </Row>
          </Container>
        </main>
      </>
    )
  }
}

export default Main;