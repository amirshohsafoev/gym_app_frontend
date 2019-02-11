import React from "react";

class UserContainer extends React.Component {
  render() {
    let user = this.props.user;
    console.log(user.exercises);
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
      </div>
    );
  }
}

export default UserContainer;
