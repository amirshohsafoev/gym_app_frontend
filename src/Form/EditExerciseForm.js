import React from "react";
import { Form, Col, Button } from "react-bootstrap";

// , { PropTypes }
class EditExerciseForm extends React.Component {
  render() {
    return (
      <Form>
        <Col>
          <Form.Group controlId="formGroupEmail">
            <Form.Label>Reps</Form.Label>
            <Form.Control
              size="lg"
              type="Reps"
              name="reps"
              value={this.props.exercise.reps}
              onChange={this.props.onChange}
            />
          </Form.Group>
          <Form.Group controlId="formGroupEmail">
            <Form.Label>Sets</Form.Label>
            <Form.Control
              size="lg"
              type="Sets"
              name="sets"
              value={this.props.exercise.sets}
              onChange={this.props.onChange}
            />
          </Form.Group>
          <Form.Group controlId="formGroupEmail">
            <Form.Label>Weight</Form.Label>
            <Form.Control
              size="lg"
              type="weight"
              name="weight"
              value={this.props.exercise.weight}
              onChange={this.props.onChange}
            />
          </Form.Group>
        </Col>
        <Button
          size="lg"
          variant="info"
          type="submit"
          disabled={this.props.saving}
          onClick={this.props.onSave}
        >
          Submit
        </Button>
      </Form>
    );
  }
}

export default EditExerciseForm;
