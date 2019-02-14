import React, { Component } from "react";
import { Form, Divider } from "semantic-ui-react";
import { connect } from "react-redux";
import { createUser } from "../Action/userAction";

class CreateUserForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: "",
      last_name: "",
      picture_url: "",
      age: "",
      weight: "",
      height: "",
      email: "",
      password: ""
    };
  }

  handleChange = (e, { name, value }) => this.setState({ [name]: value });

  handleReset = () =>
    this.setState({
      email: "",
      first_name: "",
      last_name: "",
      picture_url: "",
      age: "",
      weight: "",
      height: "",
      password: ""
    });

  render() {
    const {
      password,
      email,
      first_name,
      last_name,
      picture_url,
      age,
      weight,
      height
    } = this.state;

    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Group unstackable widths={2}>
          <Form.Input
            placeholder="First name"
            name="first_name"
            value={first_name}
            onChange={this.handleChange}
          />
          <Divider hidden />
          <Form.Input
            placeholder="Last name"
            name="last_name"
            value={last_name}
            onChange={this.handleChange}
          />
        </Form.Group>
        <Form.Group>
          <Divider hidden />
          <Form.Input
            placeholder="Email"
            name="email"
            value={email}
            onChange={this.handleChange}
          />
          <Divider hidden />
          <Form.Input
            placeholder="Picture url"
            name="picture_url"
            value={picture_url}
            onChange={this.handleChange}
          />
          <Divider hidden />
          <Form.Input
            placeholder="Age"
            name="age"
            value={age}
            onChange={this.handleChange}
          />
          <Divider hidden />
          <Form.Input
            placeholder="Weight"
            name="weight"
            value={weight}
            onChange={this.handleChange}
          />
          <Divider hidden />
          <Form.Input
            placeholder="Height"
            name="height"
            value={height}
            onChange={this.handleChange}
          />
          <Divider hidden />
          <Form.Input
            placeholder="Password"
            name="password"
            value={password}
            onChange={this.handleChange}
          />
          <Divider hidden />
        </Form.Group>
        <Form.Button content="Sign up" />
      </Form>
    );
  }
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  handleSubmit = e => {
    console.log("user state", this.state);
    e.preventDefault();
    this.props.createUser(this.state);
    this.handleReset();
    this.props.history.push("/");
  };
}

export default connect(
  null,
  { createUser }
)(CreateUserForm);
