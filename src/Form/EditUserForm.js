import React from "react";
// , { PropTypes }
import { Form, Col, Button } from "react-bootstrap";

class EditUserForm extends React.Component {
  render() {
    return (
      <Form>
        <Col>
          <Form.Group controlId="formGroupEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              size="lg"
              type="email"
              name="email"
              value={this.props.user.email}
              onChange={this.props.onChange}
              placeholder="Enter email"
            />
          </Form.Group>
          <Form.Group controlId="formGroupPassword">
            <Form.Label>First name</Form.Label>
            <Form.Control
              size="lg"
              type="first_name"
              name="first_name"
              placeholder="First name"
              value={this.props.user.first_name}
              onChange={this.props.onChange}
            />
          </Form.Group>
          <Form.Group controlId="formGroupPassword">
            <Form.Label>Last name</Form.Label>
            <Form.Control
              size="lg"
              type="last_name"
              name="last_name"
              placeholder="Last name"
              value={this.props.user.last_name}
              onChange={this.props.onChange}
            />
          </Form.Group>
          <Form.Group controlId="formGroupPassword">
            <Form.Label>Age</Form.Label>
            <Form.Control
              size="lg"
              type="age"
              name="age"
              placeholder="Age"
              value={this.props.user.age}
              onChange={this.props.onChange}
            />
          </Form.Group>
          <Form.Group controlId="formGroupPassword">
            <Form.Label>Picture</Form.Label>
            <Form.Control
              size="lg"
              type="picture_url"
              name="picture_url"
              placeholder="Picture"
              value={this.props.user.picture_url}
              onChange={this.props.onChange}
            />
          </Form.Group>
          <Form.Group controlId="formGroupPassword">
            <Form.Label>Height</Form.Label>
            <Form.Control
              size="lg"
              type="height"
              name="height"
              placeholder="Height"
              value={this.props.user.height}
              onChange={this.props.onChange}
            />
          </Form.Group>

          <Form.Group controlId="formGroupPassword">
            <Form.Label>Weight</Form.Label>
            <Form.Control
              size="lg"
              type="weight"
              name="weight"
              placeholder="Weight"
              value={this.props.user.weight}
              onChange={this.props.onChange}
            />
          </Form.Group>
        </Col>
        <Button
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

export default EditUserForm;
