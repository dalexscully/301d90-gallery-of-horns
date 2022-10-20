// imports
import React from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import data from './data.json';
import SelectedBeast from './SelectedBeast.js'
// import HornedBeast from './HornedBeast.js';

// class components
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      SelectedBeast: {},
    }
  }

  handleOpenModal = (beast) => {
    this.setState({
      showModal: true,
      SelectedBeast: beast,
    })
  }

  handleClosedModal = () => {
    this.setState({
      showModal: false
    });
  }


  render() {
    return (
      <>
        <Header />
        <SelectedBeast
          image_url={this.state.SelectedBeast.image_url}
          description={this.state.SelectedBeast.description}
          title={this.state.SelectedBeast.title}
          show={this.state.showModal}
          onHide={this.handleClosedModal}
        />
        <Main
          data={data}
          handleOpenModal={this.handleOpenModal}
        />

        <Footer />
      </>
    )
  }
}



// export
export default App;