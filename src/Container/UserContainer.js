import React from "react";
import { updateUser } from "../Action/userAction";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import EditUserForm from "../Form/EditUserForm";

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
    if (this.state.isEditing) {
      return (
        <div>
          <h1>edit user</h1>
          <button onClick={this.toggleEdit}>go back</button>
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
          <h1>User Page</h1>
          <p>{user.first_name}</p>
          <p>{user.last_name}</p>
          <p>{user.email}</p>
          <p>{user.age}</p>
          <p>{user.weight}</p>
          <p>{user.height}</p>
          <img src={user.picture_url} alt={user.picture_url} />
          <br />
          <button onClick={this.toggleEdit}>edit</button>
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
