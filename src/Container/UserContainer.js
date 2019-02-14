import React from "react";
import { updateUser } from "../Action/userAction";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import EditUserForm from "../Form/EditUserForm";
import { Figure } from "react-bootstrap";
import { Header, Icon, Image, Button } from "semantic-ui-react";

class UserContainer extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      isEditing: false,
      user: this.props.user
    };
    this.updateUserState = this.updateUserState.bind(this);
    this.saveUser = this.saveUser.bind(this);
    this.toggleEdit = this.toggleEdit.bind(this);
  }

  updateUserState(event) {
    const field = event.target.name;
    const user = this.state.user;
    user[field] = event.target.value;
    console.log(user);
    return this.setState({ user: user });
  }

  saveUser(event) {
    event.preventDefault();
    this.props.actions(this.state.user);
  }

  toggleEdit() {
    this.setState({ isEditing: !this.state.isEditing });
  }

  render() {
    let { user } = this.props;
    console.log(user);
    if (this.state.isEditing) {
      return (
        <div>
          <Button
            onClick={this.toggleEdit}
            labelPosition="left"
            icon="left chevron"
            content="Back"
          />

          <EditUserForm
            user={this.state.user}
            onSave={this.saveUser}
            onChange={this.updateUserState}
          />
        </div>
      );
    } else {
      return (
        <div>
          <Header as="h1" icon textAlign="center" color="teal">
            <Icon name="user" circular />
            <Header.Content>Welcome {user.first_name}</Header.Content>
          </Header>
          <Image centered size="large" src={user.picture_url} circular />
          <Header as="h3" color="grey" block>
            Last name: {user.last_name}
          </Header>
          <Header as="h3" color="grey" block>
            Email: {user.email}
          </Header>
          <Header as="h3" color="grey" block>
            Age: {user.age}
          </Header>
          <Header as="h3" color="grey" block>
            Height: {user.height}
          </Header>
          <Header as="h3" color="grey" block>
            Weight: {user.weight}
          </Header>
          <Header as="h2">
            <Icon name="settings" />
            <Header.Content>
              Account Settings
              <Header.Subheader>Manage your profile</Header.Subheader>
            </Header.Content>
          </Header>
          <Button color="blue" onClick={this.toggleEdit}>
            Edit profile
          </Button>
        </div>
      );
    }
  }
}
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(updateUser, dispatch)
  };
}

export default connect(
  null,
  mapDispatchToProps
)(UserContainer);
