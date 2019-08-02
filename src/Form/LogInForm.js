import React from "react";
// import { Form } from "semantic-ui-react";
import { Form, Button, Row, Col } from "react-bootstrap";
import { Link, withRouter } from "react-router-dom";

class LogInForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  handleChange = (e, { name, value }) => this.setState({ [name]: value });

  handleSubmit = () => this.setState({ email: "", password: "" });

  render() {
    const { password, email } = this.state;

    return (
      <Form onSubmit={this.handleSubmit}>
        <Col>
          <Row>
            <Form.Group controlId="formGroupEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                name="email"
                placeholder="Enter email"
                value={email}
                onChange={this.handleChange}
              />
              <Form.Text className="text-muted">
                We will never share your email with anyone else.
              </Form.Text>
            </Form.Group>
          </Row>
          <Row>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                name="password"
                placeholder="Enter your password"
                value={password}
                onChange={this.handleChange}
              />
            </Form.Group>
          </Row>
          <Row>
            <Form.Group controlId="formBasicChecbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
          </Row>
        </Col>
        <Link to="userpage">
          <Button variant="primary" type="submit">
            Sign In
          </Button>
        </Link>
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
    fetch("http://localhost:3000/api/v1/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password
      })
    })
      .then(res => res.json())
      .then(data => {
        localStorage.setItem("token", data.jwt);
        // console.log(data);
      });
    // this.props.history.push("/");
  };
}

export default withRouter(LogInForm);
