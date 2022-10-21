// imports
import React from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import data from './data.json';
import SelectedBeast from './SelectedBeast.js'
import BeastForm from './Forms.js';
// import HornedBeast from './HornedBeast.js';

// class components
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      SelectedBeast: {},
      sortedData: data,
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

  handleSelect = (event) => {
    let selected = event.target.value;

    if (selected === '1') {
      let newData = data.filter(beast => beast.horns === 1);
      this.setState({
        sortedData: newData
      })
    } else if (selected === '2') {
      let newData = data.filter(beast => beast.horns === 2);
      this.setState({
        sortedData: newData
      })
    } else if (selected === '3') {
      let newData = data.filter(beast => beast.horns === 3);
      this.setState({
        sortedData: newData
      })
    } else if (selected === '100') {
      let newData = data.filter(beast => beast.horns === 100);
      this.setState({
        sortedData: newData
      })
    }
  }

  render() {
    return (
      <>
        <Header />
        <BeastForm
          onChange={this.handleSelect} />
        <SelectedBeast
          image_url={this.state.SelectedBeast.image_url}
          description={this.state.SelectedBeast.description}
          title={this.state.SelectedBeast.title}
          show={this.state.showModal}
          onHide={this.handleClosedModal}
        />
        <Main
          data={this.state.sortedData}
          handleOpenModal={this.handleOpenModal}
        />
        <Footer />
      </>
    )
  }
}



// export
export default App;