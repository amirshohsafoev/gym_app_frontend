import React from "react";
import { Link } from "react-router-dom";
import { Dropdown, Menu } from "semantic-ui-react";

class NavBar extends React.Component {
  state = { activeItem: "home" };
  handleItemClick = (e, { name }) => this.setState({ activeItem: name });
  render() {
    const { activeItem } = this.state;
    return (
      <Menu size="tiny">
        <Link to="/">
          <Menu.Item
            name="home"
            active={activeItem === "home"}
            onClick={this.handleItemClick}
          />
        </Link>
        <Link to="/calendar">
          <Menu.Item
            name="Calendar"
            active={activeItem === "home"}
            onClick={this.handleItemClick}
          />
        </Link>
        <Link to="/createuser">
          <Menu.Item
            name="New User"
            active={activeItem === "messages"}
            onClick={this.handleItemClick}
          />
        </Link>

        <Menu.Menu position="right">
          <Dropdown item text="My page">
            <Dropdown.Menu>
              <Link to="/userpage">
                <Dropdown.Item>My page</Dropdown.Item>
              </Link>
              <Link to="/userexercises">
                <Dropdown.Item>My Exercises</Dropdown.Item>
              </Link>
              <Link to="/bodyparts">
                <Dropdown.Item>To workout</Dropdown.Item>
              </Link>
              <Link to="/signout">
                <Dropdown.Item>Sign Out</Dropdown.Item>
              </Link>
            </Dropdown.Menu>
          </Dropdown>
          <Link to="/signin">
            <Menu.Item
              name="Sign In"
              active={activeItem === "messages"}
              onClick={this.handleItemClick}
            />
          </Link>
        </Menu.Menu>
      </Menu>
    );
  }
}
export default NavBar;
