import React, { Component } from "react";
import { Form, Divider } from "semantic-ui-react";

class CreateUserForm extends React.Component {
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

  handleSubmit = () =>
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
    e.preventDefault();
    fetch("http://localhost:3000/api/v1/users", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: this.state.email,
        first_name: this.state.first_name,
        last_name: this.state.last_name,
        picture_url: this.state.picture_url,
        age: this.state.age,
        weight: this.state.weight,
        height: this.state.height,
        email: this.state.email,
        password: this.state.password
      })
    })
      .then(res => res.json())
      .then(data => {
        console.log(data.jwt);
        localStorage.setItem("token", data.jwt);
      });
  };
}

export default CreateUserForm;
