import React from "react";
import Form from 'react-bootstrap/Form';

class BeastForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedHorns: '',
    }
  }


  handleSubmit = (event) => {
    event.preventDefault();
    let selected = event.target.selected.value;
    this.setState({
      selectedHorns: selected
    })
  }

  render() {
    return (
      <div className="hornedAnimal">
        <Form onSubmit={this.handleSubmit}>
          <Form.Group >
            <Form.Label>Select number of horned animal</Form.Label>
            <Form.Select name="selected" id="" onChange={this.props.onChange}>
              <option>All Beast</option>
              <option value="1">1 horn animal</option>
              <option value="2">2 horn animals</option>
              <option value="3">3 horn animals</option>
              <option value="100">100 horn animals</option>
            </Form.Select>
          </Form.Group>
        </Form>
      </div>
    )

  }
}
export default BeastForm;